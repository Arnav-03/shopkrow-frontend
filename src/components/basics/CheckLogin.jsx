import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import whitenext from '../../assets/whitenext.png'
import { CheckoutContext } from '../../context/CheckoutContext'

const CheckLogin = () => {
  const { user, checkLogin } = useContext(UserContext);
  const { loginstatus} = useContext(CheckoutContext); // Accessing loginstatus from CheckoutContext
  const [logincheck, setLoginCheck] = useState(0);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const status = await checkLogin();
      if(status===1){
        setLoginCheck(1);
        loginstatus();

      }
    };

    fetchLoginStatus();
  }, [user, checkLogin]);

  return (
    <div>
      {logincheck === 1 ? (
        <div className=" flex flex-col h-full w-full  justify-center items-center text-center">
          {/* Existing code */}logged in !
          <div onClick={loginstatus} className="fixed bottom-[20px] right-[20px] lg:bottom-[50px] lg:right-[50px] flex items-center justify-center p-1  border-black border-2 rounded-lg bg-black text-white cursor-pointer poiret text-2xl uppercase">
            next <img className='h-10' src={whitenext} alt="" />
          </div>
        </div>
      ) : (
        <div className="">
                <div className="mt-8 flex-col flex items-center justify-center w-full">
            <div className="acme text-xl capitalize">you need to login  to checkout !</div>
            <div className="bg-[#175e7a] text-white rounded w-fit p-2 capitalize poirett">login </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckLogin;
