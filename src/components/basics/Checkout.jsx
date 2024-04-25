import React from 'react'
import Navigation from '../Navigation'
import TotalAmount from './TotalAmount'
import ConfirmUserDetails from './ConfirmUserDetails'
import CheckLogin from './CheckLogin'
import CheckoutProgress from './CheckoutProgress'
const Checkout = () => {
  return (
    <>
      <div className="flex flex-col  h-screen w-full overflow-x-hidden  ">
        <Navigation />
        <div className=" h-fit border-b-2  border-black w-full ">
        <CheckoutProgress/>
        </div>
      </div>

    </>
  )
}

export default Checkout
