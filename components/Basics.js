import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import More from '../components/More'
function Basics() {
  return (
    <div>

<div className='flex flex-col gap-20 lg:flex-row lg:gap-80  justify-center pt-20 p-10'>

   <div className='flex gap-2 flex gap-2 font-semibold cursor-pointer hover:text-blue-800'>  
      <Image
      width={100}
      height={70}
      priority
      src='/basics.png'/>
      <Link href='#basic' >Crypto Basics</Link>
    </div>   
   <div className='flex gap-2 flex gap-2 font-semibold cursor-pointer hover:text-blue-800'>  
      <Image
       width={70}
       height={70}
       priority
      src='/basics2.png'/>
      <Link href='/' >Tips & Tutorial</Link>
    </div>   
   <div className='flex gap-2 font-semibold cursor-pointer hover:text-blue-800'>  
      <Image
       width={60}
       height={70}
       priority
      src='/basics3.png'/>
      <Link href='/' >Market updates</Link>
    </div>   

</div>
 <br/>
    <hr/>

    <div className='flex flex-col gap-2 items-center pt-10'>
        <p className='text-5xl font-semibold' id='basic'>Crypto Basics</p>
        <p>New to Crypto? Not for long-Start with this guides and explainers</p>
    </div>


<div className='flex flex-col p-20 gap-10 lg:flex-row'>

    <div>
        <Image
        width={450}
        height={300}
        priority
        className='w-3/4 transition hover:scale-110 cursor-pointer' src='/bitcoin1.png'/>
        <span >BEGINNERS GUIDE</span>
        <p className='font-bold text-2xl cursor-pointer hover:text-blue-500'>What is Bitcoin?</p>
        <p>Bitcoin is the world&apos;s first widely adopted<br/> cryptocurrency — 
            it allows for secure and <br/>seamless peer-to-peer transactions 
            on the internet.</p>
    </div>

    <div>
        <Image
         width={450}
         height={300}
         priority
        className='w-3/4 transition hover:scale-110 cursor-pointer' src='/defi.png'/>
        <span>BEGINNERS GUIDE</span>
        <p className='font-bold text-2xl cursor-pointer hover:text-blue-500'>Guide to DeFi tokens and altcoins</p>
        <p>From Aave to Zcash, decide what to trade with our beginners guide.</p>
    </div>
</div>

     
     <div className='flex flex-col gap-10 lg:flex-row  pl-20'>

       <div>
        <Image
         width={ 350}
        height={300}
        priority
        className='w-64 h-80 transition hover:scale-110 cursor-pointer' src='/ethereum.png'/>
        <span>BEGINNERS GUIDE</span>
        <p className='font-bold text-xl'>What is Ethereum</p>
       </div>

       <div>
        <Image 
         width={400}
         height={300}
         priority
        className='w-64 h-80 transition hover:scale-110 cursor-pointer' src='/defi1.png'/>
        <span>Key Term</span>
        <p className='font-bold text-xl'>What is DeFi</p>
       </div>

       <div>
        <Image
         width={350}
         height={300}
         priority
        className='w-64 h-80 transition hover:scale-110 cursor-pointer' src='/tax.png'/>
        <span>Tax Guilde</span>
        <p className='font-bold text-xl'>Understanding your 2021<br/> crypto taxes</p>
       </div>

       <div>
        <Image
         width={350}
         height={300}
         priority
        className='w-64 h-80 transition hover:scale-110 cursor-pointer' src='/fud.png'/>
        <span>Glossary</span>
        <p className='font-bold text-xl'>Don&apos;t let FUD give you <br/> FOMO or you&apos;ll end up REKT<br/> - crypto slang, explained</p>
       </div>

     </div>

     <div className='flex justify-center p-20 text-2xl'>
      <button className='bg-blue-500 transition text-white p-3 rounded hover:bg-blue-400'>See more crypto basics </button>
     </div>
 <More/>
    </div>
  )
}

export default Basics
