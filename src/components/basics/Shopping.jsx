import React from 'react'
import Cart_product from './Cart_product'
const Shopping = () => {
  return (
    <div className='h-full w-full'>
         <div className="w-full h-full flex flex-col border-r-[1px] border-[#d6cdcd] overflow-x-hidden ">
          <div className="mx-6 my-4 p-4 text-2xl lg:text-4xl poiret uppercase tracking-[6px] text-center lg:text-start">shopping cart</div>
          <div className="flex flex-row h-fit justify-around mx-1 py-2  lg:mx-4 lg:p-4  pacifico capitalize border-y-[1px] border-black text-center">
            <div className=" w-1/4 ">photo</div>
            <div className=" w-1/4 ">product</div>
            <div className=" w-1/4 ">quantity</div>
            <div className=" w-1/4 ">price</div>
          </div>
          <div className="lg:overflow-x-hidden h-full flex flex-col ">
            <Cart_product />
            <Cart_product />
            <Cart_product />
            <Cart_product />
          </div>
        </div>
    </div>
  )
}

export default Shopping
