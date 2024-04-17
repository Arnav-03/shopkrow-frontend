import React, { useContext, useState,useEffect } from 'react'
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Register() {
    //user context
    const { login,setUser } = useContext(UserContext);
    //register or login
    const [registerPage, setregisterPage] = useState(true);
    //register user details
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    //login user details
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    //register error checking
    const [errorusername, seterrorusername] = useState(false);
    const [erroremail, seterroremail] = useState(false);
    const [errorpassword, seterrorpassword] = useState(false);
    const [errorrepassword, seterrorrepassword] = useState(false);
    const [errorphoneno, seterrorphoneno] = useState(false);
    const [errormessage, seterrormessage] = useState(false)
    //login error checking
    const [errorLoginEmail, seterrorLoginEmail] = useState(false);
    const [errorLoginPassword, seterrorLoginPassword] = useState(false);
    const [errorLoginMessage, seterrorLoginMessage] = useState(false);
    //loading animation
    const [loading, setloading] = useState(false);

    //on submit button
    const handlesubmit = async () => {
        // Check all fields are filled
        seterrorusername(false);
        seterroremail(false);
        seterrorpassword(false);
        seterrorrepassword(false);
        seterrorphoneno(false);
        seterrormessage(false);

        setTimeout(async () => {
            if (!username) {
                seterrorusername(true);
            }
            /*    if (!email) {
                   seterroremail(true);
               }
               if (!password) {
                   seterrorpassword(true);
               }
               if (!repassword) {
                   seterrorrepassword(true);
               }
               if (!phoneno) {
                   seterrorphoneno(true);
               }
   
               if (!username || !email || !password || !repassword || !phoneno) {
                   seterrormessage("All fields are required!!!")
                   return;
               }
   
               //check both passwords match
               if (password !== repassword) {
                   seterrormessage("Passwords do not match !!!");
                   return;
               }
   
               //email valiadation
               if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                   seterrormessage("Invalid email address !!!");
                   return;
               }
   
   
               // Phone number validation
               const phoneNumberRegex = /^\d{10}$/;
               if (!phoneNumberRegex.test(phoneno)) {
                   seterrormessage("Invalid Phone Number !!!");
                   return;
               } */
            if (!username) {
                seterrormessage("All fields are required!!!")
                return;
            }

            setloading(true)
            const userData = {
                username: username,
                email: email,
                password: password,
                phoneno: phoneno
            };

            login(userData); // Update context with user data

            //send data
            console.log("sending data -> ", username, email, password, phoneno);
            try {
                seterrormessage(false)
                await axios.post(`/register`, { username, email, password, phoneno });
            } catch (error) {
                console.log("Could not register", error);
            }
        }, 10);
    }

    const [loo, setloo] = useState(false)
    useEffect(() => {
        axios.get('/profile').then(response => {
            console.log("clicked",response.data);
            setUser(response.data);
        });
      
      
      }, [loo]);
    const handleloginsubmit = () => {
        seterrorLoginEmail(false);
        seterrorLoginPassword(false);
        seterrorLoginMessage(false);
        setTimeout(async () => {
            //get email and password 
            if (!loginEmail && !loginPassword) {
                seterrorLoginEmail(true);
                seterrorLoginPassword(true);
                seterrorLoginMessage("All fields are required!!!");
                return;
            }
            if (!loginEmail) {
                seterrorLoginEmail(true);
                seterrorLoginMessage("Email cannot be empty !!!");
                return;
            }
            if (!loginPassword) {
                seterrorLoginPassword(true);
                seterrorLoginMessage("Password cannot be empty !!!")
                return;
            }
          
        //send to server using axios
        console.log("sending data -> ",loginEmail, loginPassword);
        try {
            seterrorLoginMessage(false);
            const response = await axios.post(`/login`, { loginEmail, loginPassword });
            setloo(true);
   
        } catch (error) {
            console.log("Could not login", error);
        }
        
        
         

        }, 10);
    }

    return (
        <div className='h-screen bg-[#2a6a72] w-full flex flex-row items-center justify-center'>
            <div className="hidden md:flex md:flex-col md:w-1/2 h-full items-center justify-center border-r-[2px] border-black">
                <div className='text-[#d1d0c4] text-7xl   oleo drop-shadow-2xl '>ShopKrow</div>

                {registerPage && (
                    <div className="text-center text-3xl m-6 oleo">Register now to get <span className='text-[#e2d632] uppercase lilita'>free delivery</span> <br /> on first order.</div>
                )}
                {!registerPage && (
                    <div className="text-center text-3xl m-6 oleo">Start Saving Today with Exclusive <br />   <span className='text-[#e2d632] uppercase lilita'>Login Deals!!!</span> <br /> </div>
                )}
            </div>
            <div className="w-full md:w-1/2 h-full bg-[#ffffff] flex flex-col justify-center items-center">
                <div className='text-[#2a6a72] text-7xl   oleo  '>ShopKrow</div>

                {registerPage && (
                    <div className='flex flex-col items-center justify-center border-[2px] border-[#000000] h-fit p-4 m-4 px-16 rounded-xl'>
                        <div className="m-4 text-3xl font-bold pacifico">Register</div>

                        {/* input */}
                        <input onChange={(e) => setusername(e.target.value)}
                            className={`input-rl ${errorusername ? "error-input-rl" : ""}`}
                            type="text" placeholder='Name' /><br />
                        <input onChange={(e) => setemail(e.target.value)} className={`${erroremail ? "error-input-rl" : "input-rl"}`} type="email" placeholder='Email' /><br />
                        <input onChange={(e) => setpassword(e.target.value)} className={`${errorpassword ? "error-input-rl" : "input-rl"}`} type="password" placeholder='Password' /><br />
                        <input onChange={(e) => setrepassword(e.target.value)} className={`${errorrepassword ? "error-input-rl" : "input-rl"}`} type="password" placeholder='Re-enter Password' /><br />
                        <input onChange={(e) => setphoneno(e.target.value)} className={`${errorphoneno ? "error-input-rl" : "input-rl"}`} type="text" placeholder='Phone Number' /><br />


                        <button onClick={() => handlesubmit()} className='bg-[#2a6a72] p-2 rounded-lg pacifico text-[#fdfdfb] tracking-[2px] text-xl h-[50px] w-[100px] flex items-center justify-center'>
                            {loading ? <div className="h-10 w-10  rounded-full border-t-[3px] border-white signin-rotate"></div> : "Submit"}
                        </button>




                        <div className={`mt-2 text-red-600 font-bold ${errormessage ? "" : "opacity-0"}`}>
                            {errormessage ? <div>{errormessage}</div> : ""}
                        </div>


                        {loading ? <div className="text-green-600 pacifico">
                            Signing in
                        </div>
                            : <div
                                className="m-2 text-lg">
                                Already a member? <span onClick={() => {
                                    setregisterPage(false);
                                }} className='text-[#4d0334] font-bold underline cursor-pointer'>Login</span>
                            </div>
                        }

                    </div>
                )}


                {!registerPage && (
                    <div className='flex flex-col items-center justify-center border-[2px] border-[#000000] h-fit p-4 m-4 px-16 rounded-xl'>
                        <div className="m-4 text-3xl font-bold pacifico">Login</div>

                        <input onChange={(e) => setloginEmail(e.target.value)} className={`${errorLoginEmail ? "error-input-rl" : "input-rl"}`} type="email" placeholder='Email' /><br />
                        <input onChange={(e) => setloginPassword(e.target.value)} className={`${errorLoginPassword ? "error-input-rl" : "input-rl"}`} type="password" placeholder='Password' /><br />

                        <button onClick={() => {
                            handleloginsubmit();
                        }} className='bg-[#2a6a72] p-2 m-2 rounded-lg pacifico text-[#fdfdfb] tracking-[2px] text-xl'>Submit</button>
                        <div className={`mt-2 text-red-600 font-bold ${errorLoginMessage ? "" : "opacity-0"}`}>
                            {errorLoginMessage ? <div>{errorLoginMessage}</div> : ""}
                        </div>
                        <div className=" text-lg">
                            Not a member? <span onClick={() => {
                                setregisterPage(true)
                            }}
                                className='text-[#4d0334] font-bold underline cursor-pointer'>Register</span>
                        </div>

                    </div>

                )}


            </div>


        </div>
    )
}

export default Register
