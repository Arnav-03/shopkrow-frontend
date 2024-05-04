import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext'
import { AddressContext } from '../../context/AddressContext.jsx'
import { useNavigate } from 'react-router-dom';
const Address = () => {
  const { addressstatus } = useContext(CheckoutContext);
  const { putaddressintocontext } = useContext(AddressContext);
  const [houseno, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setstate] = useState('');
  const [country, setCountry] = useState('');
  const [error, seterror] = useState("");
  const navigate=useNavigate();

  const handleNext = () => {
    seterror("")
    // Basic validation
    if (!houseno || !street || !city || !pincode || !country) {
      seterror("All Fields are Required !")
      return;
    }

    const addressinfo = {
      housenumber: houseno,
      streetaddress: street,
      city: city,
      pincode: pincode,
      state: state,
      country: country
    }
    try {
      addressstatus();
      putaddressintocontext(addressinfo)
      console.log('Address validation passed. Proceeding to the next step...', addressinfo);
    } catch (error) {
      console.log("error in address")
    }

  };

  return (
    <div className="flex flex-col">
      <div className='flex flex-wrap gap-[30px] p-6 justify-between'>
        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-[200px] md:w-1/5 text-xl p-2 flex'
          type="text"
          placeholder='House Number'
          value={houseno}
          onChange={(e) => setHouseNo(e.target.value)}
        />
        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-full  md:w-3/5 text-xl p-2 flex'
          type="text"
          placeholder='Street Address'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-2/5 max-w-[150px] md:max-w-[300px]   text-xl p-2 flex'
          type="text"
          placeholder='Pin Code'
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-2/5 max-w-[150px] md:max-w-[300px]   text-xl p-2 flex'
          type="text"
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-2/5 max-w-[150px] md:max-w-[300px]   text-xl p-2 flex'
          type="text"
          placeholder='state'
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
        <input
          className='bg-white text-black outline-none rounded-lg border-2 border-[#aaa6a6] h-16 w-2/5 max-w-[150px] md:max-w-[300px]   text-xl p-2 flex'
          type="text"
          placeholder='Country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
      <div className="fixed right-[50px] bottom-[50px] flex  gap-2">
            <div  onClick={()=>{navigate('/cart')}} className="  p-2 px-4 text-2xl cursor-pointer mt-2 poirett bg-yellow-600 text-black rounded-xl" >Go Back</div>
            <div className="border-2 border-black p-2 px-4 text-2xl cursor-pointer mt-2 poirett bg-black text-white rounded-xl" onClick={handleNext}>Next</div>

            </div>
      
        <div className="text-red-600 text-xl font-bold">{error}</div>

      </div>
    </div>
  );
};

export default Address;
