import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import { CheckoutContext } from '../../context/CheckoutContext';
import '../styling/cancel.css';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
    const [timer, settimer] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/cart')
        }, 2000);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center ">
        <div className=' w-full flex flex-col items-center justify-center h-[130px] md:h-[150px] lg:h-[150px]'>

            <div className={` poiret text-3xl md:text-4xl lg:text-5xl m-4`}>
                PAYMENT UNSUCCESSFUL
            </div>

            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm4.707 14.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12Z" fill="#e00d0d" class="fill-232323"></path></svg>

                </div>
        </div>
    );
};

export default Cancel;
