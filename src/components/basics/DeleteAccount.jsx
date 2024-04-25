import React,{useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { user ,logout} = useContext(UserContext);

  const handleno=()=>{
    navigate('/home')
  }
  const handleDelete=async()=>{
    await axios.post(`/deleteaccount/${user.id}`);
    logout();
    navigate('/home')
  }

  return (
    <div className='bg-white drop-shadow-2xl w-full flex flex-col lg:m-2 lg:h-[500px]  '>
      <div className=" p-4 py-8 text-2xl lg:text-4xl poiret uppercase tracking-[6px] border-b-[1px] border-black justify-center lg:justify-start flex  ">
        delete account
      </div>
      <div className="h-full w-full   text-center  lg:p-[50px] rounded-xl merriweather flex flex-col items-center justify-center ">
        <div className=" text-2xl">Are You Sure You Want to Delete Your Account ?</div>
        <div className="flex items-center justify-center gap-10 text-white ">
          <div onClick={handleDelete} className="bg-red-600 flex items-center justify-center uppercase m-4 h-[50px] w-[80px] rounded-xl cursor-pointer ">yes</div>
          <div onClick={handleno} className="bg-green-600 flex items-center justify-center uppercase m-4 h-[50px] w-[80px] rounded-xl cursor-pointer ">no</div>
        </div>
      </div>
    </div>

  )
}

export default DeleteAccount
