import React, { useEffect, useState, useContext } from 'react'
import tick from '../../assets/tick.png'
import tickw from '../../assets/tickw.png'
import { CheckoutContext } from '../../context/CheckoutContext'
const CheckoutProgress = () => {
    const [page, setpage] = useState(1);
    const {  status} = useContext(CheckoutContext);

    useEffect(() => {
       setpage(status) 
    }, [status])

    return (
        <div className='border-b-2  border-black flex flex-col h-[150px] items-center justify-center capitalize poirett  '>
            <div className="flex items-center justify-around w-full  lg:px-[200px] px-4">
                <div className="flex flex-col items-center justify-center mt-6 lg:px-6 w-[40px] lg:w-[100px] px-1 ">
                    {page > 1 ? (
                        <div className={`bg-green-600  h-10 w-10 flex items-center justify-center rounded-full`}>
                            <img className='lg:h-10 lg:w-10 ' src={tickw} alt="" />
                        </div>

                    ) : (
                        <div className={`border-2 flex w-[35px] h-[35px]   ${page === 1 ? "border-[#444040] " : "border-[#c5bcbc]"} lg:h-10 lg:w-10 rounded-full text-center`}>
                            <div className={`lg:h-10 lg:w-10 w-[35px] h-[35px] ${page === 1 ? "text-[#444040] " : "text-[#c5bcbc]"} text-2xl `}>1</div>
                        </div>
                    )}

                    <div className="">login</div>
                </div>
                <div className={`h-1 rounded-2xl w-full ${page > 1 ? ' bg-green-600' : 'bg-[#c5bcbc]'}`}></div>


                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 px-1">
                {page > 2 ? (
                        <div className={`bg-green-600 h-10 w-10  flex items-center justify-center rounded-full`}>
                            <img className='lg:h-10 lg:w-10 ' src={tickw} alt="" />
                        </div>

                    ) : (
                        <div className={`border-2 flex w-[35px] h-[35px]   ${page === 2 ? "border-[#444040] " : "border-[#c5bcbc]"} lg:h-10 lg:w-10 rounded-full text-center`}>
                            <div className={`lg:h-10 lg:w-10 w-[35px] h-[35px] ${page === 2 ? "text-[#444040] " : "text-[#c5bcbc]"} text-2xl `}>2</div>
                        </div>
                    )}
                    <div className="text-center lg:w-[120px] "> address</div>
                </div>

                <div className={`h-1 rounded-2xl w-full ${page > 2 ? ' bg-green-600' : 'bg-[#c5bcbc]'}`}></div>

              


                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 px-2 ">
                {page > 3 ? (
                        <div className={`bg-green-600 h-10 w-10  flex items-center justify-center rounded-full`}>
                            <img className='lg:h-10 lg:w-10 ' src={tickw} alt="" />
                        </div>

                    ) : (
                        <div className={`border-2 flex w-[35px] h-[35px]   ${page === 3 ? "border-[#444040] " : "border-[#c5bcbc]"} lg:h-10 lg:w-10 rounded-full text-center`}>
                            <div className={`lg:h-10 lg:w-10 w-[35px] h-[35px] ${page === 3 ? "text-[#444040] " : "text-[#c5bcbc]"} text-2xl `}>3</div>
                        </div>
                    )}
                    <div className="text-center lg:w-[120px] ">order</div>
                </div>

                <div className={`h-1 rounded-2xl w-full ${page > 3 ? ' bg-green-600' : 'bg-[#c5bcbc]'}`}></div>

                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 ">
                {page > 4 ? (
                        <div className={`bg-green-600  flex items-center justify-center rounded-full h-10 w-10`}>
                            <img className='lg:h-10 lg:w-10 ' src={tickw} alt="" />
                        </div>

                    ) : (
                        <div className={`border-2 flex w-[35px] h-[35px]   ${page === 4 ? "border-[#444040] " : "border-[#c5bcbc]"} lg:h-10 lg:w-10 rounded-full text-center`}>
                            <div className={`lg:h-10 lg:w-10 w-[35px] h-[35px] ${page === 4 ? "text-[#444040] " : "text-[#c5bcbc]"} text-2xl `}>4</div>
                        </div>
                    )}
                    <div className="text-center lg:w-[120px] ">payment</div>
                </div>



            </div>
        </div>
    )
}

export default CheckoutProgress
