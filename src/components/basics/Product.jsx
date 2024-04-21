import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation.jsx'
import photu from '../../assets/6.jpg'
import ResultNotFound from '../basics/ResultNotFound.jsx'
const Product = () => {
  const { tagline, price} = useParams();
  const [resultfound, setresultfound] = useState(true)

  return (
    <div>
      <Navigation />
      {resultfound && (
   <div className="flex flex-col md:flex-row  h-full w-full  ">
   <div className="md:w-1/2 h-full flex  items-center justify-center">
     <div className="h-4/5 w-4/5 m-8 p-4  flex justify-center items-center">
       <img className='h-full w-auto rounded-2xl ' src={photu} alt="" />
     </div>

   </div>


   <div className="md:w-1/2 h-full flex flex-col ">
     <div className="bebas leading-4 text-xl md:text-4xl px-4 mt-[-20px] md:m-6">
    {tagline}</div>
     <div className="text-[#27606e] text-4xl md:text-5xl px-6 font-bold">&#8377;{price}</div>


     <div className="uppercase flex gap-2 ml-6 m-2 my-1 md:mt-10 md:ml-6 md:mb-10 md:text-xl">
       <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">s</div>
       <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">m</div>
       <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">l</div>
       <div className="border-2 border-black p-2 h-10 items-center justify-center flex w-10 rounded-lg anton  cursor-pointer">xl</div>
     </div>


     <div className="flex gap-1 text-white m-2 my-0 p-3  text-2xl items-center  text-center">
       <div className="rounded-lg bg-[#222121] h-8 w-8 md:h-10 md:w-10 cursor-pointer">-</div>
       <div className="border-2 border-[#000000] rounded-lg text-black h-8 md:h-10 w-fit px-2 md:px-3 ">1</div>
       <div className="  rounded-lg bg-[#222121] h-8 w-8 md:h-10 md:w-10 cursor-pointer">+</div>
     </div>

     
     <div className="cursor-pointer flex w-full items-center justify-center">
       <div className="capitalize bg-[#125b7c] text-2xl md:text-4xl anton tracking-[2px] text-white w-fit p-2 px-8 rounded-lg mx-4">
         add to cart
       </div>
     </div>

   </div>

 </div>
      )}

      {!resultfound && (
        <div className=" items-center justify-center flex mt-[100px]">
          <ResultNotFound/>
        </div>
      )}
   
    </div>
  )
}

export default Product
