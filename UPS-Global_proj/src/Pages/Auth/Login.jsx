import React from 'react'
import { NavLink } from "react-router-dom";
import Footer from '../../components/Footer';

function Login() {
    return (
        <main>
            {/**header section...........................................................*/}
            <section className='w-full h-14'>
                <div className='w-[85%]  mx-auto flex justify-between items-center'>
                    <div className='flex'>
                        <img src="/assets/airplane-square.png" className=' object-center h-12 w-12' alt="" />
                        <ul className=' pl-2'>
                            <li className=''>UPs Global Fleet</li>
                            <li className=' text-xs'>Courier Service</li>
                        </ul>
                    </div>
                    <div className='w-[20%] flex justify-around'>
                        <NavLink
                        to={"/sign-up"}
                        >
                            <button className='border-2 border-yellow-400 rounded-md text-yellow-400 h-9 px-8'>Sign Up</button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/**form login and sign up section...........................................................*/}
            <section className='h-full w-full'>
                <div className='w-[80%] mx-auto flex justify-center pb-[8%] pt-[8%]'>
                    <div className='w-[390px]'>
                        <div className='pb-8'>
                            <p className=' text-sub-head pt-2'>Login</p>
                            <p className=' text-para'>Input email or username below to login</p>
                        </div>
                        <div className='w-full'>
                            <form action="">
                                <div className='pb-4'>
                                    <input type="text" placeholder='Email or Username' className='w-full pl-2 h-10 rounded-md outline-none border-2 border-[#848185]'/>
                                </div>
                                <div className='pb-1'>
                                     <input type="password" placeholder='Password'  className='w-full h-10 pl-2 rounded-md outline-none border-2 border-[#848185]'/>
                                </div>
                                <NavLink
                                    to={"/forget-password"}
                                >
                                    <p className='text-[#ED7D1A] font-medium'>Forgot password?</p>
                                </NavLink>
                                <div className='pt-5 text-white'>
                                    <button type="submit" className='w-full bg-[#ED7D1A] text-center rounded-md py-2'>Submit</button>
                                </div>
                                <p className='pb-1 pt-1 font-medium'>No account?
                                <NavLink
                                    to={"/sign-up"}
                                >
                                    <span className='text-[#ED7D1A] pl-1'>Sign Up</span>
                                </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Login
