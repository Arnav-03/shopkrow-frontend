import React, { useContext, useState } from 'react'
import image from '../../assets/6.jpg';
import { CartContext } from '../../context/CartContext';

const Cart_product = ({ id, image, size, price, tagline, quantity, showquantity }) => {

    const { incrementquantity, decrementquantity } = useContext(CartContext);
    const increment = () => {
        incrementquantity(id)
    }
    const decrement = () => {
        decrementquantity(id);
    }
    return (

        <div className="flex flex-row lg:min-h-[200px] lg:max-h-[200px] justify-around  lg:mx-4 lg:p-4  uppercase border-b-[1px] border-[#b8b0b0] text-center items-center poiret  text-xl  overflow-hidden">
            <div className=" w-1/4 overflow-hidden ">
                <img className='min-h-[100px] max-h-[150px]  lg:max-h-[200px]  p-3 w-auto rounded-2xl' src={image} alt="" />
            </div>
            <div className=" overflow-hidden max-h-[150px] w-1/4 text-wrap normal-case text-sm p-1 poirett ">
                <div className="m-0 p-0 anton  uppercase  tracking-[1px]">size: <span className=' text-[#757272] tracking-[1px] '>{size}</span></div><br />
                <div className="mt-[-20px]"> {tagline} </div>

            </div>
            {showquantity && (
                <div className=" overflow-hidden w-1/4 ">

                    <div className="flex gap-1 text-white  p-2 text-2xl items-center justify-center  text-center">
                        <div className="rounded-full bg-[#ffffff] h-6 w-6  lg:h-7 lg:w-7 
     cursor-pointer text-black border-black border-[1px]">
                            <div onClick={decrement} className="mt-[-2px]">-</div>
                        </div>
                        <div className=" rounded-lg text-[black]
      h-6  lg:h-7   w-fit px-2 md:px-3 text-lg min-w-7 merriweather">{quantity}
                        </div>
                        <div onClick={increment} className=" rounded-full bg-[#000000] h-6 w-6  lg:h-7 lg:w-7  cursor-pointer ">
                            <div className="mt-[-2px]">+</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="text-[#797272] overflow-hidden w-1/4 poirett">&#8377; {price}</div>
            {!showquantity && (<div className="text-2xl">X{quantity}</div>)}

        </div>

    )
}

export default Cart_product
