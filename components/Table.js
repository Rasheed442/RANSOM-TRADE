import React from 'react'
import {SiDgraph} from "react-icons/si"
import Link from 'next/dist/client/link'
import {FaCreativeCommonsSampling} from "react-icons/fa"
import {GiGalaxy} from "react-icons/gi"
function Table() {
  return (
   <>
  <div className='flex flex-col gap-10  lg:flex-row lg:gap-80 p-8 pt-40 pl-10 '> 

    <div className='flex flex-col gap-10'>
        <h2 className='text-4xl font-bold'>Earn up to $10 worth of <br/> crypto.</h2>
        <p className='font-semibold text-xl'>Discover how specific cryptocurrencies work-- and <br/> get a bit of each crypto to try out  for yourself.</p>
        <button className='bg-blue-500 font-semibold p-5 border hover:bg-black text-white rounded-xl w-50'>Start Earning</button>
    </div>

    <div className='flex flex-col gap-12 font-bold text-2xl'>
         <div className='flex gap-2'>
               <SiDgraph className='text-blue-700'/>
               The Graph GRT
         </div>
         <div className='flex gap-2'>
               <FaCreativeCommonsSampling className='text-pink-500' />
               Amp  AMP
         </div>
         <div className='flex gap-2'>
               <GiGalaxy className='text-blue-500'/>
            Project Galaxy GAL
         </div>
         <h3 className='text-blue-500 cursor-pointer'>View More</h3>
    </div>

    <div className='flex flex-col gap-12 font-bold text-2xl'>
        <h3>Earn $4 GRT</h3>
        <h3>Earn $3 AMP</h3>
        <h3>Earn $3 GAL</h3>
    </div>

</div> 
    </>
  )
}

export default Table