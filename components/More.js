import React from 'react'
import Footer from './Footer'
import Image from 'next/image'
function More() {
  return (
    <div>
      
          


          <div className='flex flex-col gap-3 items-center pt-20'>
            <p className='text-5xl font-bold'>Tips and Tutorials</p>
            <p className='font-semibold text-gray-500'> Get practical, step-by-step answers to all things crypto</p>
          </div>

       <div className='grid grid-cols-1 gap-5 p-10 lg:grid-cols-2'>

          <div>
            <Image
            width={400}
            height={300}
            className='w-9/12' src='/tip.png'/>
            <span>GETTING STARTED</span>
            <p className='text-3xl font-bold cursor-pointer hover:text-blue-500'>How to donate crypto</p>
          </div>

          <div>
            <Image
            width={400}
            height={300}
            className='w-9/12' src='/tip1.png'/>
            <span>Video Tutorial</span>
            <p className='text-3xl font-bold cursor-pointer hover:text-blue-500'>How to set up a crypto wallet</p>
          </div>

          <div>
            <Image
            width={400}
            height={300}
            className='w-9/12' src='/tip2.png'/>
            <span>Video Tutorial</span>
            <p className='text-3xl font-bold cursor-pointer hover:text-blue-500'>When is the best time to invest in crypto?</p>
          </div>

          <div>
            <Image
            width={400}
            height={300}
            className='w-9/12' src='/tip3.png'/>
            <span>Your Crypto</span>
            <p className='text-3xl font-bold cursor-pointer hover:text-blue-500'>How to invest in crypto via your<br/> retirement account</p>
          </div>

    </div>

        <div className='flex p-10 justify-center'>
        <button className='bg-blue-500 p-5 text-xl text-white rounded'>See More Market Updates</button>
      </div>

        <div className='flex p-20 bg-blue-700'>
            <div className='flex flex-col gap-5'>
                <p className='font-bold text-white text-5xl'>Earn free crypto</p>
                <p className='text-white'>Discover how specific crytocurrencies work -- and get a bit of each cryptoto try out yourself.</p>
                <button className='bg-white text-xl font-semibold text-black w-60 p-2'>Start earning</button>
            </div>
            <Image
            width={400}
            height={300}
            className='hidden lg:block' src='/earn-full.png'/>
        </div>

          <Footer/>
    </div>
  )
}

export default More
