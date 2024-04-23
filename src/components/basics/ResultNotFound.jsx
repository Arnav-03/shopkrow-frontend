import React, { useState, useEffect } from 'react';
import image from '../../assets/resultnotfound.png';

const ResultNotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-full mt-[120px]'>
        <div className='animate-spin rounded-full h-24 w-24 border-b-4 border-dashed  border-[#000000]'></div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center h-fit  w-fit'>
      <img className='h-[200px] sm:h-[250px] w-auto' src={image} alt='' />
      <div className='anton capitalize text-3xl sm:text-4xl text-[#c43838]'>
        no result found !!!
      </div>
    </div>
  );
};

export default ResultNotFound;
