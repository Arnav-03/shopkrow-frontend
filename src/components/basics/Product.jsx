import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation.jsx';
import ResultNotFound from '../basics/ResultNotFound.jsx';
import axios from 'axios';
import cart from '../../assets/cart.png';
import { CartContext } from '../../context/CartContext.jsx';

const Product = () => {
  const { Cart, addcart, removecart } = useContext(CartContext);
  const navigate = useNavigate();
  const { tagline, id } = useParams();
  const [resultfound, setresultfound] = useState(false);
  const [sizeinfo, setsizeinfo] = useState(null);
  const [sizeinfoerror, setsizeinfoerror] = useState(false);
  const [product, setproduct] = useState([]);
  const [addedtocart, setaddedtocart] = useState(false);


  useEffect(() => {
    const isProductInCart = Cart.some(item => item.id === product.id);
    if (isProductInCart) {
      const cartItem = Cart.find(item => item.id === product.id);
      setsizeinfo(cartItem.size);
    }
    setaddedtocart(isProductInCart);
  }, [Cart, product]);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`/product/${id}`); // 
      if (response) {
        setresultfound(true);
      }
      setproduct(response.data[0]);
    } catch (error) {
      console.error('Error fetching new arrivals:', error);
    }
  };


  const handleAddtoCart = () => {
    if (sizeinfo === null) {
      setsizeinfoerror(true);
      return;
    }
    const productdetail = {
      id: product.id,
      image: product.image,
      tagline: product.tagline,
      quantity: 1,
      size: sizeinfo,
      price: product.price
    }
    console.log(productdetail);
    setaddedtocart(true);

    try {
      addcart(product.id,productdetail);
    } catch (error) {
      console.log(error)
    }
    
  }
  const handleGotoCart = () => {
    navigate(`/cart`);
  }
  const handleRemovetoCart = () => {
    setaddedtocart(false);
    removecart(product.id)
  }


  useEffect(() => {
    console.log("Cart updated:", Cart);
  }, [Cart]);

  

  return (
    <div className='h-screen lg:overflow-hidden w-full overflow-x-hidden'>
      <Navigation />
      {resultfound && (
        <div className="flex flex-col md:flex-row  h-full w-full  ">
          <div className="w-full h-[280px] md:h-[400px] lg:h-full mt-4 lg:mt-0 flex  items-center justify-center">
            <div className=" w-full  lg:h-4/5 lg:w-4/5   flex justify-center items-center overflow-hidden">
              <img className='h-[280px] w-[full] lg:h-[450px]  rounded-2xl m-0 p-0' src={product.image} alt="" />

            </div>

          </div>


          <div className="w-full h-full flex flex-col  lg:justify-center p-6 overflow-hidden  lg:mt-0 ">
            <div className="bebas leading-6 text-2xl sm:text-3xl md:text-4xl   ">
              {tagline}</div>
            <div className="flex flex-col uppercase ">
              <div className="text-2xl">{product.category}</div>
              <div className="text-md">{product.subcategory}</div>
            </div>
            <div className="text-[#27606e] text-4xl md:text-5xl  font-bold">&#8377;{product.price}</div>


            <div className="uppercase flex gap-2  my-4  md:text-xl">
              <div onClick={() => { setsizeinfo("s"); setsizeinfoerror(false) }} className={`border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer ${sizeinfo === "s" ? "bg-black text-white" : ""}`}>s</div>
              <div onClick={() => { setsizeinfo("m"); setsizeinfoerror(false) }} className={`border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer ${sizeinfo === "m" ? "bg-black text-white" : ""}`}>m</div>
              <div onClick={() => { setsizeinfo("l"); setsizeinfoerror(false) }} className={`border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer ${sizeinfo === "l" ? "bg-black text-white" : ""}`}>l</div>
              <div onClick={() => { setsizeinfo("xl"); setsizeinfoerror(false) }} className={`border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer ${sizeinfo === "xl" ? "bg-black text-white" : ""}`}>xl</div>
              <br />
            </div>
            <div className={`${sizeinfoerror ? "" : "opacity-0"} text-red-600 font-bold text-md mt-[-15px] ml-1`}>Select a size !!!</div>



            <div className="flex justify-center gap-4 text-center m-4">

              <div onClick={handleAddtoCart} className={`capitalize bg-[#125b7c] text-xl tracking-[1px] md:text-4xl anton  text-[#ffffff]  p-2 px-4  h-fit w-fit  rounded-lg cursor-pointer ${addedtocart ? "hidden" : ""} flex items-center gap-2`}>
                add to cart <div className="border-2 border-white h-7 w-7 md:h-8 md:w-8  lg:h-9 lg:w-9 rounded-full text-4xl text-center flex  items-center justify-center"><div className="lilita ml-0.5  ">+</div></div>
              </div>
              <div onClick={handleRemovetoCart} className={`capitalize bg-[#971010] text-lg md:text-xl lg:text-3xl anton  text-white py-2.5  px-2  h-fit w-fit  rounded-lg cursor-pointer ${addedtocart ? "" : "hidden"} flex items-center gap-2`}>
                remove from cart 
                <div className="border-2 border-white h-7 w-7  md:h-7 md:w-7 lg:h-9 lg:w-9 rounded-full text-2xl lg:text-4xl text-center flex  items-center justify-center"><div className="lilita  mt-[-6px]">-</div></div>
              </div>

              <div onClick={handleGotoCart} className="capitalize bg-[#d3c60f] text-xl  md:text-2xl lg:text-4xl anton  text-black  p-2 px-6 h-fit w-fit  rounded-lg cursor-pointer flex gap-2 items-center ">
                go to cart <div className="">
                  <img className='h-7 md:h-9 lg:h-10' src={cart} alt="" />
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {!resultfound && (
        <div className=" items-center justify-center flex mt-[100px]">
          <ResultNotFound />
        </div>
      )}

    </div>
  )
}

export default Product
