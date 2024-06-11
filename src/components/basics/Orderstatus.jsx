import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Success from '../../components/basics/Success';
import Cancel from '../../components/basics/Cancel';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function StatusRoute() {
    const navigate = useNavigate();
    const { paymentId } = useParams();
    const updatePaymentStatus = async (paymentId) => {
        try {
            await axios.put(`/payment/${paymentId}`, { payment: true });
            console.log('Payment status updated successfully');
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };
    const { cart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [processed, setProcessed] = useState(null);
    const [transactiondetails, settransactiondetails] = useState(null)
    const checktransaction = async (paymentId) => {
        const transactioncomplete = await axios.post(`/checktransaction/${paymentId}`)
        console.log(transactioncomplete);
        if (transactioncomplete) {
            settransactiondetails(transactioncomplete)
            setProcessed(true);

            navigate(`/success/${paymentId}`)
        }
        else {
            setProcessed(false)
            navigate('/cancel')
        }
    }
    useEffect(() => {
        if (paymentId) {
            checktransaction(paymentId);
        }
    }, [location.search]);

    return (
        <div className="h-screen items-center justify-center flex">processing.. {paymentId} </div>
    );
}

export default StatusRoute;
