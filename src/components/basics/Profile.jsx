import React, { useContext, useState, useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import userr from '../../assets/user.png'
import userb from '../../assets/userb.png'
import logoutr from '../../assets/logoutr.png'
import deletee from '../../assets/delete.png'
import orders from '../../assets/orders.png'
import password from '../../assets/password.png'
import YourOrders from './YourOrders'
import AccountSettings from './AccountSettings'
import DeleteAccount from './DeleteAccount'
import ChangePassword from './ChangePassword'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import Logoutpage from './Logoutpage'

const Profile = () => {

  const [page, setpage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  const { user } = useContext(UserContext);


  const returnPage = (choice) => {
    if (choice === 1) {
      return <AccountSettings />
    }
    if (choice === 2) {
      return <YourOrders />
    }
    if (choice === 3) {
      return <ChangePassword />
    }
    if (choice === 4) {
      return <DeleteAccount />
    }
    if (choice === 5) {
      return <Logoutpage/>
    }
  }
  return (
    <>
      <div className="flex flex-col   h-full w-full ">
        <Navigation />
        <div className="flex flex-col lg:flex-row h-full w-full items-center justify-center">

          <div className="h-full w-full lg:w-2/5 flex flex-col border-r-2 border-black">

            <div className="flex flex-row items-center justify-around border-b-[1px] border-[#9b9898] w-full h-fit p-4 py-3 overflow-hidden">
              <div className="text-3xl lg:text-4xl lilita ">Welcome <br />
                <span className='text-[#265d81] '> {user?.username}</span>
              </div>
              <div className="border-4 bg-whte border-black 
              h-[100px] w-[100px]
              l lg:h-[120px] lg:w-[120px] 
              xl:h-[150px] xl:w-[150px] rounded-full">
                <img className='h-[100px] w-[100px]
              lg:h-[120px] lg:w-[120px] 
              xl:h-[150px] xl:w-[150px]' src={userr} alt="" />
              </div>
            </div>

            <div className="">
              <ul className='capitalize  mx-4 flex flex-col  merriweather text-xl '>
                <li onClick={() => setpage(1)} className={`hover:bg-[#000000] hover:text-white drop-shadow-2xl bg-white rounded-lg flex items-center cursor-pointer px-2 my-1 py-1
                 ${page === 1 ? "bg-yellow-500" : ""}`}>
                  <img className='h-14 mr-1' src={userb} alt="" />
                  account settings
                </li>
                <div className={`lg:hidden ${page===1?"":"hidden"}`}>
                  <AccountSettings />
                </div>
                <li onClick={() => setpage(2)} className={`hover:bg-[#000000] drop-shadow-2xl bg-white hover:text-white rounded-lg flex items-center cursor-pointer px-2 my-1 py-0.5 
                 ${page === 2 ? "bg-yellow-500" : ""}`}>
                  <img className='h-16 mr-1 ml-[-5px]' src={orders} alt="" />
                  your orders 
                </li>
                <div className={`lg:hidden ${page===2?"":"hidden"}`}>
                  <YourOrders />
                </div>

                <li onClick={() => setpage(3)} className={`hover:bg-[#000000] hover:text-white drop-shadow-2xl bg-white rounded-lg flex items-center cursor-pointer px-2 my-1 py-1
                 ${page === 3 ? "bg-yellow-500" : ""}`}>
                  <img className='h-14 ' src={password} alt="" />
                  Change Password
                </li>
                <div className={`lg:hidden ${page===3?"":"hidden"}`}>
                  <ChangePassword />
                </div>
                <li onClick={() => setpage(4)} className={`hover:bg-[#000000] hover:text-white  drop-shadow-2xl bg-white rounded-lg flex items-center cursor-pointer px-2 my-1 py-1
                 ${page === 4 ? "bg-yellow-500" : ""}`}>
                  <img className='h-12 mx-1' src={deletee} alt="" />
                  delete account
                </li>
                <div className={`lg:hidden ${page===4?"":"hidden"}`}>
                  <DeleteAccount />
                </div>
                <li onClick={() => setpage(5)} className={`hover:bg-[#000000] hover:text-white drop-shadow-2xl bg-white rounded-lg flex items-center cursor-pointer px-2 my-1 py-2
                 ${page === 5 ? "bg-yellow-500" : ""}`}>
                  <img className='h-12 mx-1.5' src={logoutr} alt="" />
                  logout
                </li>
                <div className={`lg:hidden ${page===5?"":"hidden"}`}>
                  <Logoutpage/>
                </div>

              </ul>
            </div>
          </div>



          <div className="hidden lg:h-fit my-4  lg:flex items-center justify-center w-4/5 overflow-x-hidden overflow-y-scroll">
            {returnPage(page)}
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default Profile
