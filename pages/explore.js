import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'
import {BsArrowDownRight} from 'react-icons/bs'
import Footer from '../Components/Footer'
import {TbNorthStar} from 'react-icons/tb'
import {GiChart} from 'react-icons/gi'
import Explorecrypto from '../Components/Explorecrypto'
import Navbar from '../Components/Navbar'
const Explore =  ({crypto}) => {
    
     const [search, setSearch] = useState()

    console.log(crypto)
  return (
    <div>
      <Navbar/>

      <div className='flex gap-10 flex-col pt-10 items-center justify-center'>
        <h1 className='lg:text-5xl font-bold text-2xl'>Explore the cryptoeconomy</h1>
    <div className='flex gap-3 lg:p-5 p-2 bg-white w-1/2 rounded rounded-3xl border border-blue-500'>
        <AiOutlineSearch className='text-black text-2xl'/>
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='outline-none '
        type='text'
        placeholder='Search for an asset'
        />
    </div>
    </div>

    <div className='p-5 flex flex-col gap-10 lg:flex-row lg:gap-96 pt-10'>

        <div className='flex gap-3'>
            <p className='text-4xl font-semibold text-blue-500'>Crypto Prices</p>
            <p className='mt-3'>9.981 assets</p>
        </div>

        <div className='lg:flex gap-5 grid grid-cols-2'>
            


           <div className='flex gap-2 bg-gray-300 pr-2 rounded cursor-pointer p-1 '>
            <TbWorld className='text-white bg-blue-700 rounded p-1 pt-1  text-4xl'/>
            <p>All assets</p>
           </div>

           <div className='flex gap-2 bg-gray-300 pr-2 rounded cursor-pointer p-1'>
            <GiChart className='text-black bg-white rounded p-1  text-4xl'/>
            <p>Tradable</p>
           </div>
           <div className='flex gap-2 bg-gray-300 pr-2 rounded cursor-pointer p-1'>
            <TbNorthStar className='text-black bg-white rounded p-1  text-4xl'/>
            <p>Gainers</p>
           </div>

           <div className='flex gap-2 bg-gray-300 pr-2 rounded cursor-pointer p-1'>
            <BsArrowDownRight className='text-black bg-white rounded p-1  text-4xl'/>
            <p>Losers</p>
           </div>

        </div>
    </div>
      
      <div className='flex flex-col lg:grid grid-cols-5 ' >
           {crypto.data.coins.filter((val) => {
            if(search == ""){
                return val;
            }else{
                return val.name.toString().toLowerCase().includes(search)
            }
           }).map((cryptos) => {
        return (
            <div key={crypto.id}>
               <Explorecrypto
               name={cryptos.name}
               icon={cryptos.iconUrl}
               symbol={cryptos.symbol}
               rank={cryptos.rank}
               price={cryptos.price}
               marketcap={cryptos.marketcap}
               />
            </div>
        )
       })}
</div>
   <Footer/>
    </div>
  )
}

export default Explore
export async function getServerSideProps(){
    const response = await fetch ("https://api.coinranking.com/v2/coins")
    const crypto = await response.json();

    return {
        props : {
            crypto
        }
    }                                                                                                                                                                                                                                                                                                                                                                 
    
}

 