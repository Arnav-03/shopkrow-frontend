import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
const TotalAmount = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const {user}=useContext(UserContext);
    const { Cart } = useContext(CartContext);
    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)
    const [coupon, setcoupon] = useState(0)
    const [packingcharge, setpackingcharge] = useState(0)
    const [deliverycharge, setdeliverycharge] = useState(0);
    const [totalamount, settotalamount] = useState(0);
    const [saveamount, setsaveamount] = useState(0);
    const [errorcart, seterrorcart] = useState("");


    const calcprice = () => {
        const totalPrice = Cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setprice(totalPrice);
    };
  

    useEffect(() => {
        calcprice();
        if (price === 0) {
            setcoupon(0);
            setdeliverycharge(0);
            setdiscount(0);
            setpackingcharge(0);
            settotalamount(0);
        } else {
           
                setcoupon(30);
                setdeliverycharge(100);
                setdiscount(70);
                setpackingcharge(20);
 
        }
    }, [Cart, price]);
    
    useEffect(() => {
        const calctotalamount = deliverycharge + packingcharge + price - coupon - discount;
        const calcsaveamount = coupon + discount;
        settotalamount(calctotalamount);
        setsaveamount(calcsaveamount);
    }, [deliverycharge, packingcharge, price, coupon, discount]);
    
    const checkout=()=>{
        seterrorcart("");
        if(price===0){
            seterrorcart("Cart is Empty!!!");
            return;
        }
        if(user==null){
            seterrorcart("Login to Checkout")
            return;
        }
        navigate('/checkout');
    }


    return (
        <div>
            <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex ">
                {location.pathname === "/cart" ? (
                    <div className="">total amount</div>
                ) : location.pathname === "/checkout" && (
                    <div className="">order summary</div>
                )}

            </div>
            <div className="flex flex-col overflow-x-hidden border-[1px] border-[#000000] p-4 m-4 rounded-xl capitalize poirett ">
                <div className="flex justify-between text-xl ">
                    <div className="">Price</div>
                    <div className="">&#8377; {price}</div>
                </div>
                <div className="flex justify-between text-xl  ">
                    <div className="">discount</div>
                    <div className="text-green-600">-&#8377; {discount}</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">coupon</div>
                    <div className="text-green-600">-&#8377; {coupon}</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">delivery charge</div>
                    <div className="">&#8377; {deliverycharge}</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">packing charges</div>
                    <div className="">&#8377; {packingcharge}</div>
                </div>
                <div className="flex justify-between text-2xl py-2 my-2  border-y-[1px] border-[#968f8f] sriracha ">
                    <div className="">total amount</div>
                    <div className="">&#8377; {totalamount}</div>
                </div>

                <div className={`text-green-700 platypi ${price===0?"opacity-0":""}`}>you will save <span className=' font-extrabold'>&#8377; {saveamount} </span>on this order </div>


            </div>
            {location.pathname === "/cart" ? (
                    <div className="w-full flex flex-col justify-center items-center">
                    <div onClick={checkout} className="bg-[#147a7a] text-[#ffffff] p-3 text-2xl poirett capitalize cursor-pointer tracking-wider  w-fit rounded-2xl  my-4">Checkout</div>
                    <div className="text-red-600 anton text-2xl">{errorcart}</div>
    
                </div>
                ) : location.pathname === "/checkout" && (
                    <div className=""></div>
                )}
           

        </div>
    )
}

export default TotalAmount
