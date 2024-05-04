import React from 'react';
import {  useNavigate } from 'react-router-dom'
function Card({ id,image, price, tagline }) {
  const navigate = useNavigate();

  const handleCardClick = ()=>{
    const url=`/product/${tagline}/${id}`
      navigate(url);
  }
  return (
    <div onClick={handleCardClick} className='	 relative h-[210px] hover:scale-[1.1] w-[170px] m-2 overflow-hidden rounded-xl p-2 '>
  
      <div className="mt-[-20px]  flex justify-center">
        <img className='cursor-pointer h-[150px] w-auto' src={image} alt="loading..." />
      </div>
      <div className="alfa-slab text-[#266177] w-full"> &#8377;{price}


</div>
      <div className="cursor-pointer text-[10px] xl:text-[13px] mt-[-2px] leading-4 text-ellipsis merriweather w-full text-[#1c1c1d] ">
        {tagline}
      </div>
    </div>
  );
}

export default Card;
