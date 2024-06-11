import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
const Payment = () => {
  const [product, setproduct] = useState({
    price:100,

  });

  const makepayment = (token) => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-type": "application/json"
    }
    return axios.post("/payment", body, { headers })
      .then(response => {
        console.log(response.data);
        const {status} = response;
        console.log(status);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className='flex items-center justify-center h-[200px]'>
      <StripeCheckout
        stripeKey={import.meta.env.VITE_APP_KEY}
        token={makepayment}
        name="arnav"
        amount={product.price * 100}
        currency='INR'
        shippingAddress
        billingAddress
      >
        <button className="bg-[#3d1313] text-white">pay with card</button>
      </StripeCheckout>
    </div>
  )
}

export default Payment
