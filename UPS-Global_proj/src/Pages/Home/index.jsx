import React from 'react'
import cards from '../../lib/cardsDetails'
import Navlinks from '../../components/Navlinks'
import Footer from '../../components/Footer'

function Home() {
    return (
        <main>
            <Navlinks/>
            {/** hero section.................................................................... */}
            <section className='h-screen w-full relative'>
                <img src="/assets/hero-bg.jpg" className='object-top object-cover h-full w-full absolute brightness-50' alt="" />
                <div className='max-w-3xl relative left-[8%] top-[9%] text-white'>
                    <h1 className="text-header">Reliable Freight Solutions For Your Shipments</h1>
                    <p  className='max-w-md text-[20px] pt-2 pb-4'>We are your strategic partner, helping you achieve your business goals and bringing your goods to your doorsteps.</p>
                    <button className='text-white rounded-md h-9 px-8 bg-yellow-400'>Login</button>
                    email
                </div>
            </section>

            {/**second section starts .................................................................... */}
            <section className='h-full w-full'>
                <div className='w-[80%] flex justify-evenly mx-auto pt-[3%] pb-[3%]'>
                    <div className='max-w-lg self-center'>
                        <h2 className='text-sub-head pb-4'>Delivering the best globallogistics solutions.</h2>
                        <p className='text-para pb-3'>We make logistics much easier and straightforward. Combining good service and technology makes everything easier</p>
                    </div>
                    <img src="/assets/stacked-containers.png" alt="" />
                </div>
            </section>
            {/**second section ends .................................................................... */}

            {/**third section starts .................................................................... */}
            <section className='h-full w-full bg-[#F5F4F44A]'>
                <div className='w-[85%] mx-auto pt-[3%] pb-[4%]'>
                    <h2 className='text-center text-para pt-4'>What makes us different</h2>
                        <div className='flex justify-between p-2 pt-[4%]'>
                            {cards.map((item) => (
                            <div key={item.id} className='max-w-sm text-center p-4 rounded-md bg-[#FFFFFF]'>
                                <img src={item.icon} alt="" className='pt-4 pb-4 mx-auto' />
                                <h3 className=' text-para pt-2 pb-2'>{item.heading}</h3>
                                <p className=' text-para pt-2 pb-2'>{item.paragraph}</p>
                            </div>
                            ))}
                        </div>
                </div>
            </section>
            {/**third section ends .................................................................... */}

            {/**fourth section track field starts .................................................................... */}
            <section className='h-full w-full'>
                <div className='w-[80%] mx-auto flex justify-center pt-[3%] pb-[5%]'>
                    <div className='w-[60%]'>
                        <h3 className='text-center text-[30px] pb-10 pt-8'>Need to track your shipment with us?</h3>
                        <div className='flex gap-x-6'>
                            <input type="text" className='w-full rounded-md outline-none border-2 border-[#848185] pl-2' placeholder='Track Shipment'/>
                            <button className='bg-[#FFB607] px-16 py-2 rounded-md text-white'>Track</button>
                        </div>
                    </div>
                </div>
            </section>
            {/**fourth section track field ends.................................................................... */}
            <Footer/>
        </main>
    )
}

export default Home
