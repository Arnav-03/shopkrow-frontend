import React, { useState, useEffect } from 'react';
import './styling/slider.css';

const imageUrls = [
  "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png",
  "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png", "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png", "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png", "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png", "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png", "https://i.ibb.co/kxKJBwF/1.png",
  "https://i.ibb.co/JnPVT5K/e2.png",
  "https://i.ibb.co/9yc6X3S/e3.png",
  "https://i.ibb.co/pQ7yWvb/e4.png",
  "https://i.ibb.co/R92gFGN/e5.png",
  "https://i.ibb.co/JHPZtTS/lugg.png",
  "https://i.ibb.co/DzTfNLz/sho.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imageUrls.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = (index) => {
    return (index - 1 + imageUrls.length) % imageUrls.length;
  };

  const getNextIndex = (index) => {
    return index === imageUrls.length - 1 ? 0 : index + 1;
  };

  const getResetIndex = (index) => {
    return index === imageUrls.length - 1 ? 0 : index + 1;
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-fit w-full justify-around overflow-hidden lg:items-center">

        <div className="lilita text-4xl sm:text-5xl
        md:text-5xl lg:text-5xl xl:text-6xl   ml-5
        sm:ml-[70px] uppercase text-left md:text-center lg:text-left tracking-[3px] sm:tracking-[7px]
        lg:tracking-[2px]">
          Your <span className='text-[#1a8492]'>one-stop</span> <br />destination <br /> for all  things <span className='text-yellow-500'><br />fashionable.</span></div>

        <div className="image-slider  m-2  ">
          <div className="slider
           h-[300px] w-[380px]
           sm:h-[300px] sm:w-[500px]
          md:h-[300px] md:w-[500px]
          lg:h-[300px] lg:w-[500px]
          xl:h-[400px] xl:w-[700px] rounded-3xl m-4 ">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex
                  ? 'active'
                  : index === getNextIndex(currentIndex)
                    ? 'next'
                    : index === getPrevIndex(currentIndex)
                      ? 'prev'
                      : index === getResetIndex(currentIndex)
                        ? 'reset'
                        : ''
                  }`}
              >
                <img src={url} alt={`Slide ${index + 1}`} className=" slide-image" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </>

  );
};

export default ImageSlider;