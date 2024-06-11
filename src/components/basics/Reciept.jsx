import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../Navigation';
import { useNavigate } from 'react-router-dom';
import shopping from '../../assets/shopping.png'
const Receipt = () => {
  const { paymentId } = useParams();
  const [order, setOrder] = useState(null);
  const navigate =useNavigate()
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`/orders/${paymentId}`);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };
  const getUserById = async (userId) => {
    try {
      const user = await User.findById(userId).exec();
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  };
  useEffect(() => {
    fetchOrder();
  }, [paymentId]);

  if (!order) {
    return <p>Loading...</p>;
  }

  const { address, items } = order;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navigation />
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <div className="mb-4">
          <p><span className="font-semibold">Payment ID:</span> {order.paymentId}</p>
          <p><span className="font-semibold">User ID:</span> {order.userId}</p>
          <p><span className="font-semibold">Amount:</span>&#8377;{(order.amount ).toFixed(2)}</p>
          <p><span className="font-semibold">Status:</span>
            {order.status}</p>
          <p><span className="font-semibold">Date:</span>  {order.date.substring(0, 10)}</p>
          <p><span className="font-semibold">Payment:</span> {order.payment ? 'Paid' : 'Not Paid'}</p>
        </div>
        {address && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <div className="t">
            <span className="">{address.housenumber}</span> <br />
            <span className="">{address.streetaddress}</span><br />
            <span className="">{address.city}</span><br />
            <span className="">{address.state}</span> <br />
            <span className="">{address.pincode} </span></div>
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold">Items</h3>
          {items.map((item) => (
            <div key={item.id} className="border p-4 my-2 rounded-lg">
           
              <p><span className="font-semibold">Name:</span> {item.name}</p>
              <p><span className="font-semibold">Quantity:</span> {item.quantity}</p>
              <p><span className="font-semibold">Price:</span> &#8377;{(item.priceInCents / 100).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div onClick={()=>{navigate('/home')}} className="cursor-pointer fixed bottom-[25px] right-[25px] lg:bottom-[50px] lg:right-[50px] text-center bg-[#0e423b] text-white p-2 flex items-center justify-center rounded-lg capitalize poirett text-xl">continue shopping <img className='h-8' src={shopping} alt="shopping"  /></div>
    </div>
  );
};

export default Receipt;