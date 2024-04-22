import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation.jsx'
import ResultNotFound from '../basics/ResultNotFound.jsx'
import axios from 'axios';
import imagee from '../../assets/6.jpg' 
const Product = () => {
  const { tagline, price, id } = useParams();
  const [resultfound, setresultfound] = useState(false)
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`/product/${id}`); // 
      if(response){
        setresultfound(true);
      }
      setproduct(response.data[0]);
    } catch (error) {
      console.error('Error fetching new arrivals:', error);
    }
  };

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
              <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">s</div>
              <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">m</div>
              <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">l</div>
              <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">xl</div>
            </div>



            <div className="flex justify-center gap-4 text-center m-4">

                <div className="capitalize bg-[#125b7c] text-2xl md:text-4xl anton  text-white  p-2 h-fit w-[200px]  rounded-lg ">
                  add to cart
    
              </div>
                <div className="capitalize bg-[#d3c60f] text-2xl md:text-4xl anton  text-white  p-2 h-fit w-[200px]  rounded-lg ">
                  go to cart
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
