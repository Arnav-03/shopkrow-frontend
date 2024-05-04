import React, { useContext } from 'react';
import TotalAmount from './TotalAmount';
import { AddressContext } from '../../context/AddressContext';
import { CheckoutContext } from '../../context/CheckoutContext';
import Shopping from './Shopping';
import { CartContext } from '../../context/CartContext.jsx';
import Cart_product from './Cart_product';

const OrderFinal = () => {
    const { addresscontext } = useContext(AddressContext);
    const { orderstatus } = useContext(CheckoutContext)

    const addressFields = [
        { label: 'House Number', value: addresscontext.housenumber },
        { label: 'Street Address', value: addresscontext.streetaddress },
        { label: 'Pin Code', value: addresscontext.pincode },
        { label: 'City', value: addresscontext.city },
        { label: 'State', value: addresscontext.state },
        { label: 'Country', value: addresscontext.country }
    ];
    const { Cart } = useContext(CartContext);
    const handlepayment=()=>{
               orderstatus();
    }
    const handleback=()=>{
        window.location.reload();
}
    return (
        <div className='flex flex-col w-full h-full gap-4 p-2'>
            <div className="w-full">
            <div className="p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex">
                    items
                </div>
                <div className="">
                {Cart.length === 0 ? (
            <div className="text-center text-black mt-[100px] lilita text-4xl  ">Your Cart is Empty !
            <div className="h-[200px] w-full flex items-center justify-center ">
              <img className='h-[150px]  ' src={emptycart} alt="" /></div></div>
          ) : (
            Cart.map((item) => (
              <Cart_product
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                tagline={item.tagline}
                showquantity={false}
              />
            ))
          )}
                </div>
            </div>
            <div className="w-full">
                <TotalAmount />
            </div>
            <div className="w-full">
                <div className="p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex">
                    Shipping Address
                </div>
                <div className="flex flex-col">
                    {addressFields.map((field, index) => (
                        <input
                            key={index}
                            className='outline-none w-full p-2 px-8 bg-transparent text-[#615e5e] text-xl merriweather'
                            defaultValue={field.value}
                            readOnly={true}
                        />
                    ))}
                </div>
            </div>
            <div className="fixed right-[50px] bottom-[50px] flex  gap-2">
            <div onClick={handleback} className="  p-2 px-4 text-2xl cursor-pointer mt-2 poirett bg-yellow-600 text-black rounded-xl" >Go Back</div>
                <div onClick={handlepayment} className=" p-2 px-4 text-2xl cursor-pointer mt-2 poirett bg-cyan-800 text-white rounded-xl" >Payment</div>

            </div>
        </div>
    );
};

export default OrderFinal;
