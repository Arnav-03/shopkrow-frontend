import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import menLogo from '../../assets/menLogo.png'
import menc from '../../assets/menc.jpg'
import Footer from '../Footer'
import shoem from '../../assets/1.png'
import tshirtm from '../../assets/2.jpeg'
import jeansm from '../../assets/3.jpg'
import tradm from '../../assets/7.jpg'
import formalm from '../../assets/8.PNG'
import search from '../../assets/search.png'
import Card from '../Card'
import c1 from '../../assets/c1.jpg';
import SubCategoriesLIst from '../basics/SubCategoriesLIst'

import {  useNavigate } from 'react-router-dom'

const MenMainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  
  const categories = [
    { category_title: 'Bottoms', category_title_link: '/bottoms' },
    { category_title: 'Suits', category_title_link: '/suits' },
    { category_title: 'Undergarments', category_title_link: '/undergarments' },
    { category_title: 'Swimwear', category_title_link: '/swimwear' },
    { category_title: 'Accessories', category_title_link: '/accessories' },
    { category_title: 'Footwear', category_title_link: '/footwear' },
    { category_title: 'Traditional', category_title_link: '/traditional-wear' },
    { category_title: 'Loungewear', category_title_link: '/loungewear' },
    { category_title: 'Workwear', category_title_link: '/workwear' },
    { category_title: 'Formals', category_title_link: '/formal-wear' },
    { category_title: 'Casual Wear', category_title_link: '/casual-wear' },
    { category_title: 'Streetwear', category_title_link: '/streetwear' }
  ];
  categories.sort((a, b) => a.category_title.length - b.category_title.length);

  const [Mresult, setMresult] = useState("");

  const handleMsearch = () => {
    console.log("clicked")
    const url = `/men/${Mresult}`;
    navigate(url);
  }
  return (
    <div className='h-fit w-full'>
      <Navigation />
      <div className="h-full w-full flex-col overflow-hidden ">
        <div className="h-[350px] overflow-hidden w-full flex justify-center bg-[#aad0e9]" >
          <div className="hidden xl:flex items-center justify-center">
            <div className="ctitle text-8xl mt-[-10px]">Men's Collection</div>
            <img className='mt-[200px]  h-[550px] w-auto  ml-[-150px]' src={menLogo} alt="" />
          </div>
          <img className='h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] lg:mt-[-40px] xl:hidden w-auto  ' src={menc} alt="" />
        </div>



        <div className=" ">
          <div className="h-[600px] sm:h-[800px] md:h-[900px]   m-4 lg:mx-[80px]  xl:mx-[100px] flex   text-white ">
            <div className=" w-1/2 m-2 flex flex-col gap-2 ">

              <div className="relative h-1/3">
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className=" h-full flex justify-center items-center" style={{ backgroundImage: `url(${shoem})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="text-white alfa-slab tracking-wide absolute text-2xl xl:text-6xl drop-shadow-2xl">Shoes</div>
                </div>
              </div>

              <div className="relative h-1/3">
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className=" h-full flex justify-center items-center" style={{ backgroundImage: `url(${tshirtm})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                  <div className="text-white alfa-slab tracking-wide absolute text-xl xl:text-6xl drop-shadow-2xl">T-shirts</div>
                </div>
              </div>   <div className="relative h-1/3">
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className=" h-full flex justify-center items-center" style={{ backgroundImage: `url(${jeansm})`, backgroundSize: 'cover', backgroundPosition: '' }}>
                  <div className="text-white alfa-slab tracking-wide absolute text-2xl xl:text-6xl drop-shadow-2xl">Jeans</div>
                </div>
              </div>
            </div>
            <div className="  w-1/2 m-2 ml-0 flex flex-col gap-2">
              <div className="relative h-1/2">
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className=" h-full flex justify-center items-center" style={{ backgroundImage: `url(${tradm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="text-white alfa-slab tracking-wide absolute text-2xl xl:text-6xl drop-shadow-2xl">Traditionals</div>
                </div>
              </div>
              <div className="relative h-1/2">
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className=" h-full flex justify-center items-center" style={{ backgroundImage: `url(${formalm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="text-white alfa-slab tracking-wide absolute text-2xl xl:text-6xl drop-shadow-2xl">Formals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
//search */}
        <div className="flex items-center justify-center my-4 w-full h-fit">
          <div className="flex sriracha tracking-[1px] items-center">
            <input onChange={(e)=>setMresult(e.target.value)} className='border-[2px] h-10 px-[20px] border-black rounded-3xl w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] pr-[50px] outline-none ' type="text" placeholder="Search under men's section" />
            <img onClick={handleMsearch} className='z-50 border-l-[2px] border-black h-10 w-10 p-1.5 ml-[-50px] cursor-pointer' src={search} alt="" />
          </div>
        </div>

        <div className='flex flex-wrap justify-center m-2 '>
          {categories.map((category, index) => (
            <SubCategoriesLIst
              key={index}
              major_category="men"
              category_title={category.category_title}
              category_title_link={category.category_title_link}
            />
          ))}
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="h-[1px] bg-black flex-grow"></div>
          <div className="m-[2px] playball text-3xl">Trending</div>
          <div className="h-[1px] bg-black flex-grow"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap">
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
          </div>
        </div>
        <div className="flex flex-row items-center w-full">
          <div className="h-[1px] bg-black flex-grow"></div>
          <div className="m-[2px] playball text-3xl">New Arrivals</div>
          <div className="h-[1px] bg-black flex-grow"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap">
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
            <Card image={c1} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MenMainPage