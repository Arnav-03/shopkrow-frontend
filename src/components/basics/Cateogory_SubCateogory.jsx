import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ResultNotFound from './ResultNotFound';
import Navigation from '../Navigation';
import filter from '../../assets/filter.png'
import Card from '../Card';
import Footer from '../Footer';
const Cateogory_SubCateogory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { categoryName, subcategoryName } = useParams();
    const [Color, setColor] = useState(true)
    const [results, setresults] = useState(!true)
    const [filtershow, setfiltershow] = useState(!true);
    return (
        <>
            <Navigation />
            <div className='h-full w-full flex flex-col md:flex-row '>

                <div className={`hidden md:flex   border-r-2 border-black  w-1/5`}>

                    <div className={`flex w-full h-fit items-center justify-around p-1 border-b-2 border-black`}>
                        <div className="text-2xl pacifico">Filters</div>
                        <img className='h-12 w-auto cursor-pointer' src={filter} alt="" />
                    </div>
                    <div className=""></div>

                </div>

                <div className={`flex-col  h-full w-full`}>
                    <div className='mt-4 p-4  pb-0  border-b-2 border-black'>
                        <div className="ctitle text-5xl sm:text-6xl md:text-7xl    text-wrap capitalize">{categoryName}'s Collection</div>
                        <div className="mt-2 text-5xl sm:text-6xl md:text-7xl  poiret capitalize text-[#2ba874]">{subcategoryName}</div>
                    </div>
                    <div className=" w-full md:hidden flex  justify-end">

                        <img onClick={() => { setfiltershow(prev => !prev) }} className='h-12 w-auto cursor-pointer mx-4 mt-2' src={filter} alt="" />
                    </div>

                    {filtershow && (
                        <div className="flex md:hidden items-center justify-center w-full">
                            <div onClick={() => { setColor(prev => !prev) }} className="">filters</div>
                            <div className={`${Color ? "text-black" : "text-red-600"}`}>fff</div>
                        </div>
                    )}



                    {results && (
                        <div className="">
                            <div className="flex justify-center items-center lg:m-4 ">
                                <div className="flex flex-wrap justify-center">
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />  <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />  <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />  <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />  <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />  <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                    <Card image={filter} price="700" tagline="Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt" />
                                </div>
                            </div>
                        </div>
                    )}
                    {!results && (
                        <div className="flex w-full justify-center my-[50px]">
                            <ResultNotFound />

                        </div>
                    )}
                </div>



            </div>
            <Footer />
        </>

    )
}

export default Cateogory_SubCateogory

