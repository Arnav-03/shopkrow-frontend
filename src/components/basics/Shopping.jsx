import React, { useContext } from 'react';
import Cart_product from './Cart_product';
import { CartContext } from '../../context/CartContext.jsx';
import emptycart from '../../assets/emptycart.PNG'
const Shopping = (showquantiy) => {
  const { Cart } = useContext(CartContext);
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
        {Cart.length === 0 ? (
            <div className="text-center text-black mt-[100px] lilita text-4xl  ">Your Cart is Empty !
            <div className="h-[200px] w-full flex items-center justify-center ">
              <img className='h-[150px]  ' src={emptycart} alt="" /></div></div>
          ) : (
            Cart.map((item) => (
              <Cart_product
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                tagline={item.tagline}
                showquantity={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
