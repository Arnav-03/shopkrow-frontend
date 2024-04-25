import React from 'react'
import tick from '../../assets/tick.png'
import tickw from '../../assets/tickw.png'

const CheckoutProgress = () => {
    
    return (
        <div className='flex flex-col h-[150px] items-center justify-center capitalize poirett  '>
            <div className="flex items-center justify-around w-full  lg:px-[200px] px-1">
                <div className="flex flex-col items-center justify-center mt-6 lg:px-6 w-[40px] lg:w-[100px] px-1 ">
                    <div className="bg-green-600 lg:h-10 lg:w-10 flex items-center justify-center rounded-full">
                        <img className='lg:h-10 lg:w-10 ' src={tickw} alt="" />
                    </div>
                    <div className="">login</div>
                </div>

                <div className="h-1 rounded-2xl w-full bg-green-600"></div>

                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 px-1">
                    <div className="border-2 flex w-[35px] h-[35px]  border-[#444040] lg:h-10 lg:w-10 rounded-full text-center">
                        <div className="lg:h-10 lg:w-10 w-[35px] h-[35px]  text-2xl text-[#444040]">2</div>
                    </div>
                    <div className="text-center lg:w-[120px] "> address</div>
                </div>


                <div className="h-1 rounded-2xl w-full bg-[#c5bcbc]"></div>

                
                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 px-2 ">
                    <div className="border-2 flex w-[35px] h-[35px]  border-[#c5bcbc] lg:h-10 lg:w-10 rounded-full text-center">
                        <div className="lg:h-10 lg:w-10 w-[35px] h-[35px]  text-2xl text-[#c5bcbc]">3</div>
                    </div>
                    <div className="text-center lg:w-[120px] ">order</div>
                </div>

                <div className="h-1 rounded-2xl w-full bg-[#c5bcbc]"></div>

                <div className="flex flex-col items-center justify-center mt-6 lg:mt-6 ">
                    <div className="border-2 flex w-[35px] h-[35px]  border-[#c5bcbc] lg:h-10 lg:w-10 rounded-full text-center">
                        <div className="lg:h-10 lg:w-10 w-[35px] h-[35px]  text-2xl text-[#c5bcbc]">4</div>
                    </div>
                    <div className="text-center lg:w-[120px] ">payment</div>
                </div>



            </div>
        </div>
    )
}

export default CheckoutProgress
