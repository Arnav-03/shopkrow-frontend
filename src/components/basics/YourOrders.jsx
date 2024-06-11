import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const YourOrders = () => {
  const navigate= useNavigate();
  const { user } = useContext(UserContext);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = user?.id;
  console.log(userId);

  const fetchUserOrder = async () => {
    try {
      const response = await axios.post('/userorderhistory', { userId: userId });
      setOrderDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user orders:', error);
      setError('Failed to fetch orders');
      setLoading(false);
    }
  };


  useEffect(() => {

    setTimeout(() => {
      if (user.id) {
        const fetchData = async () => {
          console.log("heh")
          await fetchUserOrder();
        };
        fetchData();
      } else {
        console.log("not")
      }
    }, 1000);


  }, [user]);

  console.log('orderDetails:', orderDetails); // Log orderDetails state

  if (loading) {
    return <div className='text-xl'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-white h-fit lg:h-[500px] drop-shadow-2xl w-full flex flex-col overflow-scroll  '>

      <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex  ">
        Your Orders
      </div>
      <div className="overflow-scroll w-full">
        {orderDetails.length > 0 ? (
          <div className="w-full  flex-col   flex  text-xs md:text-sm  capitalize text-black overflow-scroll ">
            {orderDetails.map((order) => (
              <div  key={order.id} className="order-item border-2 m-4 border-black p-4 my-2  rounded-lg">
                <div className="font-bold">Order ID: <span className="font-normal">{order.paymentId}</span> </div>
                <div className="font-bold">Amount:  <span className="font-normal">&#8377;{order.amount}</span> </div>
                <div className="font-bold">Order ID: <span className="font-normal">{order.date.substring(0, 10)}</span> </div>
                <div className="font-bold">Payment: <span className="font-normal">{order.payment ? "paid" : "not paid"}</span> </div>
                <div className="font-bold">items:
                  {order.items.map((item) => (
                    <div key={item.id} className="border-[2px] p-4 my-2  rounded-lg border-[#ccc9c9]">

                      <p><span className="font-semibold">Name:</span> {item.name}</p>
                      <p><span className="font-semibold">Quantity:</span> {item.quantity}</p>
                      <p><span className="font-semibold">Price:</span> &#8377;{(item.priceInCents / 100).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div onClick={()=>{navigate(`/receipt/${order.paymentId}`)}} className="bg-[#129ab3]  text-white cursor-pointer w-fit p-2 rounded-md acme  ">Check details</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full items-center justify-center flex text-center text-xl lg:text-4xl acme capitalize text-red-600">
            no orders found !!!
          </div>
        )}
      </div>

    </div>
  );
};

export default YourOrders;