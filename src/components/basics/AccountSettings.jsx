import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'

const AccountSettings = () => {
  const { user, setuser } = useContext(UserContext);
  const [editable, setEditable] = useState(false); 
  const toggleEditable = () => {
    setEditable(!editable);
  };
  return (
    <div className='bg-white lg:m-2 drop-shadow-2xl h-full w-full'>
      <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex ">
        Account Settings
      </div>
      <div className="flex flex-col p-4 px-6 text-lg lg:text-xl ">
        <div className="poirett text-xl lg:text-2xl">Username</div>
        <div className="flex m-2 merriweather p-2 ">
          <input className='outline-none'
            type="email"
            placeholder={user?.username}
            readOnly={!editable}
          />
          <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={toggleEditable}>
            {editable ? 'Save' : 'Edit'}
          </button>

        </div>
        <div className="poirett text-xl lg:text-2xl">Email</div>

        <div className="flex m-2 merriweather p-2">

          <input className='outline-none'
            type="email"
            placeholder={user?.email}
            readOnly={!editable}
          />
          <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={toggleEditable}>
            {editable ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="poirett text-xl lg:text-2xl">Phone Number</div>

        <div className="flex m-2 merriweather p-2">
          <input className='outline-none'
            type="email"
            placeholder={user?.phonenumber}
            readOnly={!editable}
          />
         <button className='bg-[#187b94] text-white p-2 rounded-md' onClick={toggleEditable}>
            {editable ? 'Save' : 'Edit'}
          </button>
        </div>

      </div>

    </div>
  )
}

export default AccountSettings
