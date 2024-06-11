import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import { CheckoutContext } from '../../context/CheckoutContext';
import '../styling/success.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported

const Success = () => {
    const [timer, settimer] = useState(false);
    const { paymentId } = useParams();
    const navigate = useNavigate();

    const updatePaymentStatus = async (paymentId) => {
        try {
            await axios.put(`/paymentupdate/${paymentId}`, { payment: true });
            console.log('Payment status updated successfully');
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };

    useEffect(() => {
        const handlePaymentUpdate = async () => {
            await updatePaymentStatus(paymentId);
            setTimeout(() => {
                settimer(true);
            }, 1500);
            setTimeout(() => {
                navigate(`/receipt/${paymentId}`);
            }, 5500);
        };
        handlePaymentUpdate();
    }, [paymentId, navigate]);

    return (
        <div className='wrapper w-full flex flex-col items-center justify-center h-full'>
            <div className={`${timer ? '' : 'opacity-0'} poiret text-3xl md:text-4xl lg:text-5xl m-4`}>
                PAYMENT SUCCESSFUL
            </div>
            <div className="">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" strokeWidth="2" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" strokeWidth="4" />
                </svg>
            </div>
        </div>
    );
};

export default Success;
