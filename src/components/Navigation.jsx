import React, { useState } from 'react';
import cross from '../assets/cross.png';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import cart from '../assets/cart.png';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';
import {useNavigate} from 'react-router-dom'
function Navigation() {
    const { logout } = useContext(UserContext);
    const {Cart} = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const gotocart=()=>{
        navigate('/cart')
    }
    const logoutt = async () => {
        await axios.post('/logout');
        logout();
    }

    return (
        <div className="sticky top-0 z-50 bg-white w-full">
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 ${menuOpen ? 'block' : 'hidden'}`} onClick={() => setMenuOpen(false)}></div>
            <div className={`fixed top-0 right-0 h-fit flex items-center flex-col rounded-xl w-[200px] text-center bg-white z-50 overflow-y-auto transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Sidebar Content */}
                <div className="mt-6 w-full">
                    <img onClick={() => setMenuOpen(prev => !prev)} className='h-10 fixed top-2 right-2  w-10 cursor-pointer' src={cross} alt="" />

                    <div className='text-[#000000] text-4xl oleo  m-4 '>ShopKrow</div>
                    <div className="h-[2px] bg-black w-full"></div>
                </div>
                <ul className="p-4 text-2xl pacifico  w-full">

                    <li className="cursor-pointer border-b-[1px] w-full border-black p-2" onClick={() => setMenuOpen(false)}>Home</li>
                    <li className="cursor-pointer border-b-[1px] w-full  border-black p-2" onClick={() => setMenuOpen(false)}>Categories</li>
                    <li  className="cursor-pointer items-center justify-center flex border-b-[1px] w-full  border-black p-2  " onClick={() => {setMenuOpen(false) ; gotocart()}}>
                        <img className='h-6 w-6 xl:h-8 xl:w-8' src={cart} alt="" />
                        
                        <div onClick={gotocart} className="bg-[#e2d632] rounded-full text-center mt-[-25px] ml-[-10px] xl:h-6 xl:w-6 h-5 w-5 ">
                            <div className="mt-[-8px] text-[20px]">{Cart.length}</div>
                        </div>
                        <div  onClick={gotocart} className=""> Cart</div>

                    </li>
                    <li className="cursor-pointer border-b-[1px] w-full  border-black p-2" onClick={() => setMenuOpen(false)}>Profile</li>
                    <li className="cursor-pointer border-b-[1px] w-full text-red-600 border-black p-2" onClick={logoutt}>Logout</li>
                </ul>
            </div>
            {/* Main Navigation */}
            <div className="h-[65px] bg-white w-full flex items-center justify-between p-2 px-4  border-b-[2px] border-black overflow-hidden">
                <span className='text-[#000000] text-[27px] sm:3xl xl:text-4xl oleo '>ShopKrow</span>
                {/* Search */}
                <div className="flex sriracha tracking-[1px] items-center">
                    <input className='border-[2px] h-10 px-[20px] border-black rounded-3xl w-[180px] sm:w-[300px] md:w-[500px] lg:w-[450px] pr-[50px] outline-none ' type="text" placeholder='Search' />
                    <img className='border-l-[2px] border-black h-10 w-10 p-1.5 ml-[-50px] cursor-pointer' src={search} alt="" />
                </div>
                {/* Menu */}
                <div className="h-12 w-fit gap-4 sriracha flex items-center lg:hidden">
                    <img onClick={() => setMenuOpen(prev => !prev)} className='h-10 w-10 cursor-pointer' src={menu} alt="" />
                </div>
                {/* List */}
                <div className="text-xl xl:text-2xl pacifico capitalize hidden lg:flex ">
                    <ul className='flex gap-[20px]'>
                        <li className=' cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Categories</li>
                        <li onClick={gotocart} className='cursor-pointer flex items-center'>
                            <img  className='h-6 w-6 xl:h-8 xl:w-8' src={cart} alt="" />
                            <div   className="bg-[#e2d632] rounded-full text-center mt-[-30px] ml-[-10px] xl:h-6 xl:w-6 h-5 w-5 ">
                                <div className="mt-[-6px] text-[20px]">{Cart.length}</div>
                            </div>
                            <div   className="">Cart</div>
                        </li>
                        <li className='cursor-pointer'>Profile</li>
                        <li onClick={logoutt} className='cursor-pointer'>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
