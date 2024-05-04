import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../Navigation'
import TotalAmount from './TotalAmount'
import ConfirmUserDetails from './ConfirmUserDetails'
import CheckLogin from './CheckLogin'
import CheckoutProgress from './CheckoutProgress'
import { CheckoutContext } from '../../context/CheckoutContext'
import Address from './Address'
import Payment from "./Payment"

import OrderFinal from './OrderFinal'
const Checkout = () => {
  
  const { status} = useContext(CheckoutContext);
  const [page, setpage] = useState(1);
  
  const returnpage=(number)=>{
    if(number===1){
      return <CheckLogin/>
    }
    if(number===2){
      return <Address/>
    }
    if(number===3){
      return <OrderFinal/>
    }
    if(number===4){
      return <Payment/>
    }
  }
  
  useEffect(() => {
    setpage(status) 
 }, [status])


 
  return (
    <>
      <div className="flex flex-col  h-screen w-full overflow-x-hidden  ">
        <Navigation />
        <div className=" h-fit  w-full ">
        <CheckoutProgress/>
        </div>
        <div className="">
          {returnpage(page)}
        </div>
      </div>

    </>
  )
}

export default Checkout
