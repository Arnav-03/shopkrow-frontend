import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

const AccountSettings = () => {
  const { user, setUser } = useContext(UserContext);
  const [usernameeditable, setusernameeditable] = useState(false);
  const [username, setUsername] = useState(user?.username || '');
  const [emaileditable, setemaileditable] = useState(false);
  const [email, setEmail] = useState(user?.email || '');
  const [phonenumbereditable, setphonenumbereditable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user?.phonenumber || '');
  const [error, seterror] = useState(null)
  useEffect(() => {
    setUsername(user?.username);
    setEmail(user?.email);
    setPhoneNumber(user?.phonenumber);
  }, [user]);

  const updatevalue = async (field, newvalue) => {
    seterror(null);
    try {
      console.log(field, newvalue)
      await axios.post(`/updateaccount/${field}/${newvalue}`);
      // Update the context after successful update
      setUser(prevUser => ({
        ...prevUser,
        [field]: newvalue
      }));
    } catch (error) {
      console.error('Error updating field:', error);
      seterror("Try updating with different value !!")
    }
  };


  const handleEdit = (choice) => {
    if (choice === 1) {
      setusernameeditable(!usernameeditable);
    }
    if (choice === 2) {
      setemaileditable(!emaileditable);
    }
    if (choice === 3) {
      setphonenumbereditable(!phonenumbereditable);
    }
  };

  const handleSave = (choice) => {
    if (choice === 1) {
      setusernameeditable(!usernameeditable);
      updatevalue("username", username); // Pass "username" as field and username state as newvalue
    }
    if (choice === 2) {
      setemaileditable(!emaileditable);
      updatevalue("email", email); // Pass "email" as field and email state as newvalue
    }
    if (choice === 3) {
      setphonenumbereditable(!phonenumbereditable);
      updatevalue("phonenumber", phoneNumber); // Pass "phonenumber" as field and phoneNumber state as newvalue
    }
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className='bg-white lg:m-2 drop-shadow-2xl h-fit lg:h-[500px] w-full'>
      <div className="p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex ">
        Account Settings
      </div>
      <div className="flex flex-col p-4 px-6 text-lg lg:text-xl ">
        <div className="poirett text-xl lg:text-2xl">Username</div>
        <div className="flex m-2 merriweather p-2 justify-between ">
          <input className='outline-none  w-full px-3 bg-[#f1efef] text-[#585555] rounded-lg text-lg'
            type="email"
            defaultValue={username}
            onChange={handleUsernameChange}
            readOnly={!usernameeditable}
          />
          <div className="flex">
            <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={() => handleEdit(1)}>
              Edit
            </button>
            <button className='bg-yellow-500 mx-2 text-white p-2 rounded-md' onClick={() => handleSave(1)}>
              Save
            </button>
          </div>

        </div>
        <div className="poirett text-xl lg:text-2xl">Email</div>
        <div className="flex m-2 merriweather p-2 justify-between">
          <input className='outline-none  w-full px-3 bg-[#f1efef] text-[#585555] rounded-lg text-lg'
            type="email"
            defaultValue={email}
            onChange={handleEmailChange}
            readOnly={!emaileditable}
          />
          <div className="flex">
            <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={() => handleEdit(2)}>
              Edit
            </button>
            <button className='bg-yellow-500 mx-2 text-white p-2 rounded-md' onClick={() => handleSave(2)}>
              Save
            </button>
          </div>
        </div>
        <div className="poirett text-xl lg:text-2xl">Phone Number</div>
        <div className="flex m-2 merriweather p-2 justify-between">
          <input className='outline-none  w-full px-3 bg-[#f1efef] text-[#585555] rounded-lg text-lg'
            type="email"
            defaultValue={phoneNumber}
            onChange={handlePhoneNumberChange}
            readOnly={!phonenumbereditable}
          />
          <div className="flex">
            <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={() => handleEdit(3)}>
              Edit
            </button>
            <button className='bg-yellow-500 mx-2 text-white p-2 rounded-md' onClick={() => handleSave(3)}>
              Save
            </button>
          </div>
        </div>

      </div>
      <div className={`${error ? "" : "opacity-0"} merriweather w-full flex items-center justify-center text-red-600 text-xl`}>
        {error}
      </div>
    </div>
  );
};

export default AccountSettings;
