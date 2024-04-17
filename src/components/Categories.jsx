import React from 'react';
import men from '../assets/men.png'
import women from '../assets/women.png'
import baby from '../assets/baby.png'
import gym from '../assets/gym.png'
import health from '../assets/health.png'
import game from '../assets/game.png'
import travel from '../assets/travel.png'
import cosmetic from '../assets/cosmetic.png'
import computer from '../assets/computer.png'
import home from '../assets/home.png'

function Categories() {

    const categories = [
        "Men",
        "Women",
        "Kids",
        "Electronics",
        "Home & Kitchen",
        "Beauty & Personal Care",
        "Sports & Fitness",
        "Toys & Games",
        "Health & Wellness",
        "Travel & Luggage",
    ];
    const categories_photos = [
        men,
        women,
        baby,
        computer,
        home,
        cosmetic,
        gym,
        game,
        health,
        travel,
    ];

    return (
        <div className='flex flex-col flex-wrap justify-center items-center mt-6 h-fit'>
            <div className="flex flex-row items-center w-full ">
                <div className="h-[1px]  bg-black w-full ml-4"></div>
                <div className="m-[2px] pacifico text-3xl">Categories</div>
                <div className="h-[1px] mr-4 bg-black  w-full"></div>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center h-fit text-center mt-2">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col justify-center h-[150px] w-[150px]  merriweather m-4 border-black border-[2px] overflow-hidden cursor-pointer text-black items-center rounded-lg text-md categories-hover ">
                        <img className='h-[90px] w-auto' src={categories_photos[index]} alt="" />
                        <div className="">
                            {category}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
