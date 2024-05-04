import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation.jsx';
import ResultNotFound from '../basics/ResultNotFound.jsx';
import axios from 'axios';
import Footer from '../Footer.jsx';
import filter from '../../assets/filter.png'
import Card from '../Card';
const Search = () => {
    const { search } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [finalresult, setfinalresult] = useState(null)
    const findresults = async () => {
        const searchresult = await axios.post(`/searchresults/${search}`)
        setfinalresult(searchresult.data)
        console.log(searchresult.data)

    }
    useEffect(() => {
        findresults();
    }, [search])


    const [Color, setColor] = useState(true)
 

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
                        <div className="ctitle text-5xl sm:text-6xl md:text-7xl    text-wrap capitalize">Search Results for        <span className="mt-2 text-5xl sm:text-6xl md:text-7xl  poiret capitalize text-[#2ba874]">{search}</span>
                        </div>
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



                 
                        <div className="">
                            <div className="flex justify-center items-center lg:m-6 ">
                                <div className="flex flex-wrap lg:gap-4 lg:m-6 ">
                                    {finalresult && finalresult.length > 0 ? (
                                        finalresult.map(item => (
                                            <Card
                                                key={item.id}
                                                id={item._id}
                                                image={item.image}
                                                price={item.price}
                                                tagline={item.tagline}
                                            />
                                          
                                        ))
                                    ) : (
                                        <ResultNotFound />
                                    )}
                                </div>
                            </div>
                        </div>
                  



                </div>


            </div>
            <Footer/>
        </>

    )
}

export default Search
