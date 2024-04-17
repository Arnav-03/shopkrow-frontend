import React from 'react';
import add from '../assets/add.png';

function Card({ image, price, tagline }) {
  return (
    <div className='relative h-[220px] w-[170px] m-2 overflow-hidden '>
      <div className="mt-[-20px]  flex justify-center">
        <img className='cursor-pointer h-[150px] w-auto' src={image} alt="loading..." />
      </div>
      <div className="alfa-slab text-[#347999] w-full">{price}</div>
      <div className="cursor-pointer text-[10px] xl:text-[13px] leading-3 text-ellipsis merriweather w-full text-[#1c1c1d]">
        {tagline}
      </div>
    </div>
  );
}

export default Card;
