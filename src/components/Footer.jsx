import React from 'react'
import xt from '../assets/xt.png'
import insta from '../assets/insta.png'
import meta from '../assets/meta.png'
import linked from '../assets/linked.png'
import support from '../assets/support.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

function Footer() {
    const categories = [
        "Men",
        "Women",
        "Kids",
        "Electronics",
        "Home & Kitchen",
        "Beauty & Personal Care",
        "Sports & Fitness",
        "Toys & Games",
        "Health & Wellness",
        "Travel & Luggage",
    ];
    return (
        <div className='h-fit bg-[#2a6a72] flex flex-col w-full capitalize text-white p-4  overflow-hidden'>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4">
                <div className="text-sm ">
                    <div className="text-xl text-[#cebe30] lilita">categories
                    </div>
                    <div className="">
                        {categories.map((category, index) => (
                            <div key={index} className="cursor-pointer merriweather">
                                <div className=""> {category} </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-xl  text-[#cebe30] lilita">user
                    <div className="text-white merriweather text-sm">
                        <div className="cursor-pointer">profile</div>
                        <div className="cursor-pointer">orders</div>
                        <div className="cursor-pointer">cart</div>
                        <div className="cursor-pointer">liked products</div>
                        <div className="cursor-pointer">logout</div>
                    </div>
                </div>

                <div className="text-xl text-[#cebe30] lilita  ">
                    <div className="">contact us</div>
                    <div className="flex text-white text-sm items-center ">
                        <div className="h-12 w-12 cursor-pointer  rounded-full  p-1.5  ">
                            <img src={phone} alt="" />
                        </div>
                        <div className="merriweather cursor-pointer"><a href="tel:+919464288768">+91-9464288768</a>
                        </div>
                    </div>

                    <div className="flex text-white text-sm items-center mt-[-10px] ">
                        <div className="h-12 w-12 cursor-pointer   rounded-full  p-1.5  ">
                            <img src={email} alt="" />
                        </div>
                        <a className='lowercase merriweather cursor-pointer' href="mailto:arnavarora0003@gmail.com">arnavarora0003@gmail.com</a>
                    </div>
                </div>

                <div className="text-xl text-[#cebe30] lilita">
                    <div className="mb-2">
                        social media
                    </div>
                    <div className="text-white flex gap-2">
                        <div className="h-10 cursor-pointer w-10 rounded-full border-[2px] border-white p-2  ">
                            <img src={xt} alt="" />
                        </div>
                        <div className="h-10 w-10  cursor-pointer rounded-full border-[2px] border-white p-1.5  ">
                            <img src={insta} alt="" />
                        </div>
                        <div className="h-10 w-10  cursor-pointer rounded-full border-[2px] border-white p-1.5  ">
                            <img src={meta} alt="" />
                        </div>
                        <div className="h-10 w-10 cursor-pointer rounded-full border-[2px] border-white p-1.5  ">
                            <img src={linked} alt="" />
                        </div>
                    </div>

                </div>


                <div className="text-xl text-[#cebe30] lilita ">
                    <div className="">customer support</div>
                    <div className="flex text-white text-sm items-center ">
                        <div className="merriweather cursor-pointer">need some help?</div>
                        <div className="h-14 w-14 cursor-pointer  rounded-full  p-1.5  ">
                            <img src={support} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center w-full justify-center text-center ">
                <div className="h-[1px] bg-[#e9dfdf] w-full my-4"></div>
                <div className='text-[#000000] text-4xl oleo  '>ShopKrow</div>
                <div className="text-[#e9dfdf] merriweather text-xs">
                    &copy; 2024 ShowKrow. All rights reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer
