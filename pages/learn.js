import React from 'react'
import Basics from '../Components/Basics'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
function learn() {
  return (
    <div>
      <Navbar/>
      
      <div className='flex p-10 flex-col justify-center pt-20 gap-9 items-center'>
        <h1 className='font-bold text-2xl lg:text-5xl text-blue-500'>Crypto questions,answered</h1>
        <p className='font-semibold text-xl'>Beginner guildes, practical tips, and market updates for first-timers,experienced
         investors, and everyone in between
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-10 p-10 pt-20'>

        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-semibold'>Featured</h1>
            <Image
            width={400}
            height={400}
            className='w-auto' src='/eth1.png'/>
            <p className='font-bold'>TIPS</p>
            <p className='text-3xl cursor-pointer hover:text-blue-700'>From avoiding FOMO to having a plan, 5 key way to <br/>manage a cryptodown cycle.</p>
            <p className='text-xl'>How to minimize your losses(and even make savvy moves) during a fall market.</p>
        </div>
 
 <div className='flex flex-col gap-5'>

      <div> 
        <p className='text-2xl font-semibold'>Popular</p>
        <span className='text-gray-500'>YOUR CRYPTO</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>can crypto really replace your blank <br/>account?</p>
      </div>
      <div> 
        <span className='text-gray-500'>AROUND THE BLOCK</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>The crypto market downturn<br/>explained</p>
      </div>
      <div> 
        <span className='text-gray-500'>GET STARTED</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>How to earn crypto rewards</p>
      </div>
      <div> 
        <span className='text-gray-500'>GET STARTED</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>Beginner guides to dapps</p>
      </div>
      <div> 
        <span className='text-gray-500'>CRYPTO BASICS</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>What is Apecoin</p>
      </div>
      <div> 
        <span className='text-gray-500'>YOUR CRYPTO</span>
        <p className='text-2xl hover:text-blue-500 cursor-pointer'>How to invest in crypto via your <br/> retirement account</p>
      </div>

</div>

    </div>  
 <Basics/>
    </div>
  )
}

export default learn
