import React, { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Logoutpage = () => {
    const { logout } = useContext(UserContext);

    const navigate = useNavigate();
    const handleno = () => {
        navigate('/home')
    }
    const logoutt = async () => {
        await axios.post('/logout');
        logout();
        navigate('/home')
    }

    return (
        <div className='bg-white drop-shadow-2xl w-full flex flex-col lg:m-2 lg:h-[500px]  '>
            <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex  ">
                logout
            </div>
            <div className="h-full w-full   text-center  lg:p-[50px] rounded-xl merriweather flex flex-col items-center justify-center ">
                <div className=" text-2xl">Are You Sure You Want to Logout ?</div>
                <div className="flex items-center justify-center gap-10 text-white ">
                    <div onClick={logoutt} className="bg-red-600 flex items-center justify-center uppercase m-4 h-[50px] w-[80px] rounded-xl cursor-pointer ">yes</div>
                    <div onClick={handleno} className="bg-green-600 flex items-center justify-center uppercase m-4 h-[50px] w-[80px] rounded-xl cursor-pointer ">no</div>
                </div>
            </div>
        </div>

    )
}

export default Logoutpage
