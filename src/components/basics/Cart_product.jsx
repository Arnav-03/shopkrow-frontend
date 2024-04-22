import React, { useState } from 'react'
import image from '../../assets/6.jpg';

const Cart_product = () => {
    const [product_quantity, setproduct_quantity] = useState(1)
    const increment = () => {
        setproduct_quantity(prev => prev + 1);
    }
    const decrement = () => {
        if(product_quantity===0){
            return;
        }
        setproduct_quantity(prev => prev - 1);
    }
    return (

        <div className="flex flex-row lg:min-h-[200px] lg:max-h-[200px] justify-around  lg:mx-4 lg:p-4  uppercase border-b-[1px] border-[#b8b0b0] text-center items-center poiret  text-xl  overflow-hidden">
            <div className=" w-1/4 overflow-hidden ">
                <img className='min-h-[100px] max-h-[150px]  lg:max-h-[200px]  p-3 w-auto rounded-2xl' src="https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_SX679_.jpg" alt="" />
            </div>
            <div className=" overflow-hidden max-h-[110px] w-1/4 text-wrap normal-case text-sm p-2 poirett ">This CSS will prevent text selection within the div element with the class no-select. It will work across different browsers.
            </div>
            <div className=" overflow-hidden w-1/4 ">

                <div className="flex gap-1 text-white  p-2 text-2xl items-center justify-center  text-center">
                    <div className="rounded-full bg-[#ffffff] h-6 w-6  lg:h-7 lg:w-7 
                    cursor-pointer text-black border-black border-[1px]">
                        <div onClick={decrement}  className="mt-[-2px]">-</div>
                    </div>
                    <div className=" rounded-lg text-[black]
                     h-6  lg:h-7   w-fit px-2 md:px-3 text-lg min-w-7 merriweather">{product_quantity}
                    </div>
                    <div onClick={increment} className=" rounded-full bg-[#000000] h-6 w-6  lg:h-7 lg:w-7  cursor-pointer ">
                        <div className="mt-[-2px]">+</div>
                    </div>
                </div>
            </div>
            <div className="text-[#797272] overflow-hidden w-1/4 poirett">&#8377; 700</div>
        </div>

    )
}

export default Cart_product
