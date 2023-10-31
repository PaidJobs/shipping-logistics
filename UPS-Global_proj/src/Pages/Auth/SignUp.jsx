import React from 'react'
import { NavLink } from "react-router-dom";
import Footer from '../../components/Footer';

function SignUp() {
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
                        to={"/login"}
                    >
                        <button className='text-white rounded-md h-9 px-8 bg-yellow-400'>Login</button>
                    </NavLink>
                </div>
            </div>
        </section>

        {/**form login and sign up section...........................................................*/}
        <section className='h-full w-full'>
            <div className='w-[80%] mx-auto flex justify-center pb-[8%] pt-[8%]'>
                <div className='w-[390px]'>
                    <div className='pb-10'>
                        <p className=' text-sub-head pt-2'>Sign Up</p>
                        <p className=' text-para'>Fill in the details below to sign up</p>
                    </div>
                    <div className='w-full'>
                        <form action="">
                            <div className='pb-4'>
                                <input type="text" placeholder='Name' className='w-full pl-2 h-10 rounded-md outline-none border-2 border-[#848185]'/>
                            </div>
                            <div className='pb-4'>
                                <input type="text" placeholder='Email' className='w-full pl-2 h-10 rounded-md outline-none border-2 border-[#848185]'/>
                            </div>
                            <div className='pb-1'>
                                 <input type="password" placeholder='Password'  className='w-full h-10 pl-2 rounded-md outline-none border-2 border-[#848185]'/>
                            </div>
                            <p className='font-medium'>I agree to <span className=' text-[#ED7D1A]'>Terms and Conditions</span></p>
                            <div className='pt-5 text-white'>
                                <button type="submit" className='w-full bg-[#ED7D1A] text-center rounded-md py-2'>Submit</button>
                            </div>
                            <p className='pb-1 pt-1 font-medium'>Already have an account?
                            <NavLink
                                to={"/login"}
                            >
                                <span className='text-[#ED7D1A] pl-1'>Login</span>
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

export default SignUp
