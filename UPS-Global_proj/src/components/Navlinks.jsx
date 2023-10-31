import React from 'react'

function Navlinks() {
    return (
        <div className='w-full h-14 flex justify-between items-center'>
            <div className='w-[85%]  mx-auto flex justify-between items-center'>
                <div className='flex'>
                    <img src="/assets/airplane-square.png" className=' object-center h-12 w-12' alt="" />
                    <ul className=' pl-2'>
                        <li className=''>UPs Global Fleet</li>
                        <li className=' text-xs'>Courier Service</li>
                    </ul>
                </div>
                <div className='w-[20%] flex justify-around'>
                    <button className='border-2 border-yellow-400 rounded-md text-yellow-400 h-9 px-8'>Sign Up</button>
                    <button className='text-white rounded-md h-9 px-8 bg-yellow-400'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navlinks
