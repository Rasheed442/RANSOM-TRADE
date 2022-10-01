import React from 'react'
import {GrMemory} from 'react-icons/gr'
import {ImNewspaper} from 'react-icons/im'
import {MdOutlineSecurity} from 'react-icons/md'
function platform() {
  return (
    <div>
        <h1 className='font-semibold pt-40 text-4xl text-center'>The most trusted cryptocurrency platform</h1>
        <p className='text-center pt-2 font-semibold'>Here are a few reasons why you should choose Rashbase</p>

<div className='flex flex-col mt-20 gap-10 p-10 pl-40 pr-60 lg:flex-row :gap-60 '>
        <div>
            <ImNewspaper className='text-5xl text-blue-500'/>
            <h2>Protected By Insurance</h2>
            <p>Rashbase maintains crypto insurance and all <br/> USD cash balances are covered by FDIC
             insurance,  up to a maximum of $250,000.</p>
       </div>
       <div>
            <GrMemory className='text-5xl text-blue-500'/>
            <h2>Secure Storage</h2>
            <p>We store the vast majority of the digital <br/> assets in secure offline storage.</p>
       </div>
        <div>
            <MdOutlineSecurity className='text-5xl text-blue-500'/>
            <h2>Industry Best Practices</h2>
            <p>Rashbase supports a variety of the most <br/> popular digital currencies.</p>
       </div>
 </div>      

 <div className='bg-blue-700 leading-10 flex flex-col text-center mt-20 pl-10 p-5  gap-20 lg:flex-row lg:gap-80'>
  <div>
    <h1 className='text-5xl font-semibold text-white'>$309B</h1>
    <p className='text-xl font-semibold'>Quarterly Volume Traded</p>
  </div>
  <div>
    <h1 className='text-5xl font-semibold text-white'>100+</h1>
    <p className='text-xl font-semibold'>Countries Supported</p>
  </div>
  <div>
    <h1 className='text-5xl font-semibold text-white'>98M+</h1>
    <p className='text-xl font-semibold'>Verified User</p>
  </div>
 </div>
    </div>
  )
}

export default platform