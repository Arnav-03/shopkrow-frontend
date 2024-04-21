import React from 'react'
import image from '../../assets/resultnotfound.png'

const ResultNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-fit  w-fit'>
            <img className='h-[200px] sm:h-[250px] w-auto' src={image} alt="" />
            <div className="anton capitalize text-3xl sm:text-4xl text-[#c43838]">
                no result found !!!
            </div>
    </div>
  )
}
export default ResultNotFound
