import React from 'react'
import Earn from '../components/Earn'
import {RiAccountCircleLine} from 'react-icons/ri'
import {GiBank,GiBuyCard} from 'react-icons/gi'
function Start() {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-center pt-10  text-5xl font-bold'>Get started in few minutes </h1>
        <p className='text-center font-semibold'>Rashbase supports a variety of the most popular</p>

        <div className='flex flex-col ml-40 pt-10 gap-20 lg:flex-row lg:gap-80 '>

           <div className='flex flex-col gap-5 lg:gap-0'>
            <RiAccountCircleLine className='text-6xl text-blue-500'/>
            <p className='font-semibold text-lg'>Create an account</p>
            </div>
           <div className='flex flex-col gap-5 lg:gap-0'>
            <GiBank className='text-6xl text-blue-500'/>
            <p className='font-semibold text-lg'>Link Your Bank Account</p>
            </div> 
           <div className='flex flex-col gap-5 lg:gap-0'>
            <GiBuyCard className='text-6xl text-blue-500'/>
            <p className='font-semibold text-lg'>Start Buying & Selling</p>
            </div> 

        </div>
        <Earn />
    </div>
  )
}

export default Start