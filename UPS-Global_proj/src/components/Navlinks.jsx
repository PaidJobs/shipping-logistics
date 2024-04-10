import React from 'react'

function Navlinks() {
    return (
        <section className='w-full h-14 flex justify-between items-center'>
            <div className='w-[90%] mx-auto flex justify-between items-center xl:max-w-6xl'>
                <div className='flex'>
                    <img src="/assets/logo.png" className=' object-center h-12 w-12' alt="" />
                    <ul className=' pl-2'>
                        <li className=''>Global Fleet</li>
                        <li className=' text-xs'>Courier Service</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navlinks
