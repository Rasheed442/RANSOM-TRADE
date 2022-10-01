import React from 'react'

function Earns() {
  return (
    <div className='pt-20 p-5 flex flex-col bg-blue-100 lg:flex-row gap-20 '>
        <img className='p-5 rounded' style={{width:"550px"}} src='pics.png' />
        
        <div className='pt-5 flex flex-col gap-10'>
            <h1 className='text-5xl font-bold'>Earn up to $10 worth of crypto</h1>
            <p className='font-semibold text-xl'>Discover how specific cryptocurrencies work <br/> and get a bit of each crypto to try</p>
            <button className='bg-blue-500 w-40 p-5 text-xl rounded font-semibold'>Start earning</button>
        </div>
    </div>
  )
}

export default Earns