import { GrBitcoin } from "react-icons/gr"
import Platform from "../Components/Platform"
import Navbar from '../Components/Navbar'
import { AiOutlineArrowRight, AiOutlineMobile } from "react-icons/ai"
import { FcPositiveDynamic } from 'react-icons/fc'
import Link from "next/link"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {GiCombinationLock} from 'react-icons/gi'
import Table from '../Components/Table'
import Footer from "../Components/Footer"
import Start from "../Components/Start"
export default function Home() {
  return (
    
    <div>
      <Navbar/>
<div className='flex justify-between '>

   <div className='pt-20 pl-10 text-xl flex gap-8 flex-col'>
    <Link href='start'><a>
      <div className='flex gap-2'>
        <GrBitcoin className='text-blue-500'/>
         <h1 className='text-blue-500'>Jump start your Portfolio</h1>
         <AiOutlineArrowRight className='text-blue-500'/>
      </div></a></Link>
      <div className='flex flex-col gap-5'>
        <h1 className='text-6xl md:text-7xl font-semibold'>Jump start <br/> Your Crypto <br/> Portfolio</h1>
        <p className='font-semibold'>Rashbase is the easiest place to buy and sell <br/> cryptocurrency. Sign up and get started today.</p>
      </div>
        
        <div className='flex flex-col lg:flex-row gap-2'>
          <input className='border border-blue-500 p-2 rounded cursor-pointer w-80 outline-0' placeholder='Email address' type="text"/>
          <button className='border cursor-pointer border-blue-500 p-4 cursor-pointer border hover:bg-blue-600 rounded bg-blue-700 w-80 '>
            <Link href='start'><a>Get Started</a></Link></button>
        </div>

</div>
        <div className='mt-20 hidden lg:block pr-20'>
        <img className='border rounded-2xl' style={{width:"400px", height:"450px"}} src='btc.jpeg'/> 
    </div>
</div>
        
      <Table/>

      <h2 className="text-center pt-40 font-bold  text-5xl">Create your cryptocurrency Portfolio today</h2>
      <p className="text-center font-semibold pt-5 text-base">Rashbase has variety of features that make is the best place to start trading.</p>

<div className="flex flex-col gap-10 lg:flex-row lg:gap-60">

<div className="mt-7 flex flex-col gap-5">
      <div className="flex gap-5 pl-10 pt-5">
        <FcPositiveDynamic className="text-3xl"/>
         <div className="flex flex-col gap-5">
           <h2 className="text-2xl font-semibold">Manage your Portfolio</h2>
           <p className="text-lg">Buy and sell popular digital currencies,keep<br/> of them in the one place.</p>
         </div>
      </div>
      <div className="flex gap-5 pl-10 pt-5">
        <BsFillCalendarCheckFill className="text-3xl text-blue-500"/>
         <div className="flex flex-col gap-5">
           <h2 className="text-2xl font-semibold">Recuring Buys</h2>
           <p className="text-lg">Invest in cryptocurrency slowly over time by <br/> scheduling buys daily,
           weekly, or monthly.
           .</p>
         </div>
      </div>
      <div className="flex gap-5 pl-10 pt-5">
        <GiCombinationLock className="text-3xl text-blue-500"/>
         <div className="flex flex-col gap-5">
           <h2 className="text-2xl font-semibold">Vault Protection</h2>
           <p className="text-lg">For added security, store your funds <br/> in a vault with time delayed withdrawals.</p>
         </div>
      </div>
      <div className="flex gap-5 pl-10 pt-5">
        <AiOutlineMobile className="text-3xl text-blue-500"/>
         <div className="flex flex-col gap-5">
           <h2 className="text-2xl font-semibold">Manage your Portfolio</h2>
           <p className="text-lg">Buy and sell popular digital currencies,keep<br/> of them in the one place.</p>
         </div>
      </div>
</div>

<div>
      <img className="w-100 p-5 h-80 rounded mt-20  " src="bitcoin.jpg"/>
  </div>

</div>
<Platform />
<Start/> 
<Footer/>
    </div>
  )
}
