import React from 'react'
import Navigation from '../Navigation'
import TotalAmount from './TotalAmount'
import ConfirmUserDetails from './ConfirmUserDetails'
const Checkout = () => {
  return (
    <>
      <div className="flex flex-col  h-screen w-full overflow-x-hidden  ">
        <Navigation />
        <div className="flex flex-col lg:flex-row    h-full w-full lg:overflow-x-hidden ">
        <div className=" w-full h-full flex flex-col border-r-[1px] border-[#d6cdcd]">
            <TotalAmount />
          </div>
          <div className=" w-full h-full flex flex-col ">
            <ConfirmUserDetails />
          </div>
        </div>
      </div>

    </>
  )
}

export default Checkout
