import React from 'react'
import { useLocation } from 'react-router-dom';

const Order_Sumary = () => {
    const location = useLocation();

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
                    <div className="">&#8377; 700</div>
                </div>
                <div className="flex justify-between text-xl  ">
                    <div className="">discount</div>
                    <div className="text-green-600">-&#8377; 70</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">coupon</div>
                    <div className="text-green-600">-&#8377; 30</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">delivery charge</div>
                    <div className="">&#8377; 100</div>
                </div>
                <div className="flex justify-between text-xl ">
                    <div className="">packing charges</div>
                    <div className="">&#8377; 100</div>
                </div>
                <div className="flex justify-between text-2xl py-2 my-2  border-y-[1px] border-[#968f8f] sriracha ">
                    <div className="">total amount</div>
                    <div className="">&#8377; 1000</div>
                </div>

                <div className="text-green-700 platypi ">you will save <span className=' font-extrabold'>&#8377;100 </span>on this order </div>


            </div>
            <div className="w-full flex justify-center items-center">
            <div className="bg-[#147a7a] text-[#ffffff] p-3 text-2xl poirett capitalize tracking-wider  w-fit rounded-2xl  my-4">Checkout</div>

            </div>
         
        </div>
    )
}

export default Order_Sumary
