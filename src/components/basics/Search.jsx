import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../Navigation.jsx';
import Footer from '../Footer.jsx';
import ResultNotFound from '../basics/ResultNotFound.jsx';
import filter from '../../assets/filter.png';
import Card from '../Card';

const Search = () => {
    const { search } = useParams();
    const [filtershow, setfiltershow] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [finalResult, setFinalResult] = useState(null);
    useEffect(() => {
        findResults();
    }, [search]);

    const findResults = async () => {
        const searchResult = await axios.post(`/searchresults/${search}`);
        setFinalResult(searchResult.data);
    };

    const filterResults = (type) => {
        let filteredResults = [...finalResult];
        let otherCheckboxId;
    
        if (type === 'lowToHigh') {
            otherCheckboxId = 'highToLow';
            filteredResults.sort((a, b) => a.price - b.price);
        } else if (type === 'highToLow') {
            otherCheckboxId = 'lowToHigh';
            filteredResults.sort((a, b) => b.price - a.price);
        }
    
        // Uncheck the other checkbox
        document.getElementById(otherCheckboxId).checked = false;
    
        setFinalResult(filteredResults);
    };
    
    const [Color, setColor] = useState(true)

    return (
        <>
            <Navigation />
            <div className='h-full w-full flex flex-col md:flex-row '>

                <div className={`hidden md:flex flex-col  border-r-2 border-black  w-1/5`}>

                    <div className={`flex w-full h-fit items-center justify-around p-1 border-b-2 border-black`}>
                        <div className="text-2xl pacifico">Filters</div>
                        <img className='h-12 w-auto cursor-pointer' src={filter} alt="" />
                    </div>
                    <div className="flex flex-col p-2 w-full merriweather capitalize">
                        <div className="text-2xl p-2 border-b-[1px] border-[#a7a0a0]">Price</div>
                        <div class="filter  p-2 text-xl gap-4 flex flex-col">


                            <div class="filter-option flex items-center gap-4 ">
                                <label for="lowToHigh">Low to High</label>
                                <div class="checkbox-wrapper-2 flex items-center">
                                    <input type="checkbox" id="lowToHigh" class="sc-gJwTLC ikxBAC "  onClick={() => filterResults('lowToHigh')} />

                                </div>
                            </div>

                            <div class="filter-option flex items-center gap-4 ">
                                <label for="highToLow">High to Low</label>

                                <div class="checkbox-wrapper-2 flex items-center">
                                    <input type="checkbox" id="highToLow" class="sc-gJwTLC ikxBAC " onClick={() => filterResults('highToLow')} />

                                </div>

                            </div>
                            <div class="filter-option">
                                <input type="number" id="minRange" placeholder="Min Range" />
                            </div>
                            <div class="filter-option">
                                <input type="number" id="maxRange" placeholder="Max Range" />
                            </div>
                        </div>



                    </div>

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
                                {finalResult && finalResult.length > 0 ? (
                                    finalResult.map((item) => (
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
            <Footer />
        </>

    )
}

export default Search
