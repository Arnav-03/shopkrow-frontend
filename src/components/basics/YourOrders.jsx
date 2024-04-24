import React from 'react'

const YourOrders = () => {
  return (
    <div className='bg-white drop-shadow-2xl w-full flex flex-col lg:m-2 lg:h-[500px] '>
        <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex ">
        your orders
      </div>
      <div className="w-full h-full items-center justify-center flex  text-center text-xl lg:text-4xl acme capitalize text-red-600">
          no orders found !!!
      </div>
    </div>
  )
}

export default YourOrders
