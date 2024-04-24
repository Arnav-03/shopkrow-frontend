import React from 'react';
import Navigation from '../Navigation';
import TotalAmount from './TotalAmount';
import Shopping from './Shopping';
const Cart = () => {
  return (
    <div className="flex flex-col  h-screen w-full overflow-x-hidden  ">
      <Navigation />
      <div className="flex flex-col lg:flex-row  gap-2 m-2 h-full w-full lg:overflow-x-hidden ">
        <Shopping />
        <div className=" w-full h-full flex flex-col ">
          <TotalAmount />
        </div>
      </div>
    </div>
  );
};
export default Cart;
