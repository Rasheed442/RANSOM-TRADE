import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiFillCheckCircle} from 'react-icons/ai'
function Individual() {
  return (
    <div>
      <Navbar/>

<div className="flex flex-col pt-20 p-10 pl-20 gap-40 lg:flex-row">

      <div className='pt-20 flex flex-col gap-5'>

         <div className='flex gap-5'>
            <AiFillCheckCircle className='text-blue-700 text-2xl'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-3xl'>Jump right in</p>
                <p className='text-base font-semibold'>Retail-friendly futures contracts let you trade,<br/>speculate, and hedge 
                the price of digital<br/> assets and more.</p>
            </div>
         </div>
         
         <div className='flex gap-5'>
            <AiFillCheckCircle className='text-blue-700 text-2xl'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-3xl'>Go further</p>
                <p className='text-base font-semibold'>Take larger positions with less upfront capital,<br/>using products built or your level of risk.</p>
            </div>
         </div>

         <div className='flex gap-5'>
            <AiFillCheckCircle className='text-blue-700 text-2xl'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-3xl'>Take Control</p>
                <p className='text-base font-semibold'>Express long and short market views while protecting<br/>your underlying crypto
                positions.</p>
            </div>
         </div>

         <div className='flex gap-5'>
            <AiFillCheckCircle className='text-blue-700 text-4xl'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-3xl'>Trade Efficiently</p>
                <p className='text-base font-semibold'>You don&apos;t need to own crypto or hold a crypto wallet.
                Trades are opened,closed,and settled quickly in U.S dollars.
                </p>
            </div>
         </div>
         </div>
      <Image
      width={700}
      height={50}
      className='w-3/4 lg:w-2/5 pt-8 hidden lg:block' src='/hmm.png'/>
   </div>

        <div className='flex flex-col p-10'>
         <p className='text-5xl font-bold'>An accessible futures market.</p>
         <p className='text-2xl'>Trade derivates designed for the retail investor.</p>
        </div>

        
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:p-20 lg:pl-40 ">

         <div className='flex flex-col p-10 w-100 gap-10 shadow-2xl border rounded shadow'>
            <p className='text-3xl'>Ether [New]</p>
            <div className='flex flex-col gap-5'>
               <p>At 1/10 of an Ether, this contract allows participants<br/>
                to manage risk, trade on margin, or speculate on the<br/> price
                 of Ether.</p>
               <p className='font-bold text-base'>Asset class:</p>
               <p>Digital asset</p>
               <p className='font-bold text-base'>Contract size:</p>
               <p>Nano</p>
               <span className='text-blue-700 text-xl'>Learn more</span>
            </div>
         </div>

         <div className='flex flex-col p-10 w-100 gap-10 shadow-2xl border rounded shadow'>
            <p className='text-3xl'>Bitcoin</p>
            <div className='flex flex-col gap-5'>
               <p>At 100th of the size of a bitcoin, this contract is an<br/>
                accessible way to take a view on the future price of <br/> Bitcoin.</p>
               <p className='font-bold text-base'>Asset class:</p>
               <p>Digital asset</p>
               <p className='font-bold text-base'>Contract size:</p>
               <p>Nano</p>
               <span className='text-blue-700 text-xl'>Learn more</span>
            </div>
         </div>

         <div className='flex flex-col p-10 w-100 gap-10 shadow-2xl border rounded shadow'>
            <p className='text-3xl'>Bloomberg US Large Cap <br/>Index</p>
            <div className='flex flex-col gap-5'>
               <p>Trade an index that tracks 500 of the largest U.S <br/>companies.</p>
               <p className='font-bold text-base'>Asset class:</p>
               <p>Digital asset</p>
               <p className='font-bold text-base'>Contract size:</p>
               <p>Nano</p>
               <span className='text-blue-700 text-xl'>Learn more</span>
            </div>

         </div>
         
         <div className='flex flex-col p-10 w-100 gap-10 shadow-2xl border rounded shadow'>
            <p className='text-3xl'>Crude oil</p>
            <div className='flex flex-col gap-5'>
               <p>participate in the one of largest commodity markets<br/>
                by trading the price of west Texas intermediate(WTI)<br/>crude oil.</p>
               <p className='font-bold text-base'>Asset class:</p>
               <p>Digital asset</p>
               <p className='font-bold text-base'>Contract size:</p>
               <p>Nano</p>
               <span className='text-blue-700 text-xl'>Learn more</span>
            </div>
         </div>

         <div className='flex flex-col p-10 w-100 gap-10 shadow-2xl border rounded shadow'>
            <p className='text-3xl'>Super Tech</p>
            <div className='flex flex-col gap-5'>
               <p>Trade the FAANG stocks and more with an index<br/>made up of 15 U.S tech giants.</p>
               <p className='font-bold text-base'>Asset class:</p>
               <p>Digital asset</p>
               <p className='font-bold text-base'>Contract size:</p>
               <p>Nano</p>
               <span className='text-blue-700 text-xl'>Learn more</span>
            </div>
         </div>

        </div>
     
     <div className='flex flex-col items-center p-10 gap-7 bg-black text-white pt-40 pb-40'>
      <p className='text-4xl font-semibold'>Finally, crypto derivates for retail</p>
      <p className='text-xl font-semibold'>Coinbase Derivtes Exchange to add Nano Ether futures contract to its offering</p>
      <button className='bg-blue-700 p-3 text-2xl rounded '>Read Blog</button>
     </div>

<Footer/>
    </div>
  )
}

export default Individual
