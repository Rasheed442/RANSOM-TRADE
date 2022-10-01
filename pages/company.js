import React from 'react'
import Navbar from '../Components/Navbar'
import Link from 'next/link'
import Footer from '../Components/Footer'
function company() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center p-3 font-semibold gap-10'>
         <Link href='/'><a className='hover:text-blue-700'>About</a></Link>
         <Link href='/'><a className='hover:text-blue-700'>Careers</a></Link>
         <Link href='/'><a className='hover:text-blue-700'>Mission</a></Link>
         <Link href='/'><a className='hover:text-blue-700'>Press</a></Link>
      </div>
      <hr/>

      <div className='flex flex-col lg:flex-row shadow-2xl p-20 gap-20'>
         <img className=' w-full lg:w-9/12' src='crypto.jpg'/>
         <div className='flex flex-col gap-10 text-xl'>
            <h1 className='text-5xl font-semibold'>About<br/> RANSOM-TRADE</h1>
            <p>We are building the cryptoeconomy – a more fair, accessible,<br/>
                efficient, and transparent financial system enabled by crypto.</p>
                <p>We started in 2012 with the radical idea that anyone, anywhere,<br/>should be able to easily and securely send
             and receive Bitcoin.<br/> Today, we offer a trusted and easy-to-use platform for<br/>accessing
              the broader cryptoeconomy.</p>
         </div>
      </div>

      <div className='flex flex-col shadow-2xl lg:flex-row p-20 gap-20'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-semibold'>Coinbase powers the cryptoeconomy</h1>
            <p className='text-xl'>Customers around the world discover and begin their journeys with<br/> crypto through Coinbase.</p>
            <p className='text-xl'>Approximately 103 million verified users, 14,500 institutions, and<br/> 245,000 ecosystem
                 partners in over 100 countries trust Coinbase to<br/> easily and securely invest, spend, save, earn,
               and use crypto.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='shadow-2xl p-5 font-semibold text-3xl border rounded'>
                <p>103M+</p>
                <p>Verified users</p>
            </div>
            <div className='shadow-2xl p-5 font-semibold text-3xl border rounded'>
                <p>$217b</p>
                <p>Quarterly volume<br/> traded</p>
            </div>
            <div className='shadow-2xl p-5 font-semibold text-3xl border rounded'>
                <p>$96b</p>
                <p>Assets on platform</p>
            </div>
            <div className='shadow-2xl p-5 font-semibold text-3xl border rounded'>
                <p>100+</p>
                <p>Countries</p>
            </div>
            <div className='shadow-2xl p-5 font-semibold text-3xl border rounded'>
                <p>4900+</p>
                <p>Employees</p>
            </div>
          </div>
      </div>
     <h1 className='p-20 text-4xl font-semibold'>Our executive team</h1>

<div className='grid grid-cols-4 pl-20 shadow-2xl'>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team1.jpeg'/>
     <div>
        <p>Brian Armstrong</p>
        <p>Co-Founder & Chief</p>
        <p>Executive Officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team2.jpeg'/>
     <div>
        <p>Emilie Choil</p>
        <p>President & Chief</p>
        <p>Operating Officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team3.jpeg'/>
     <div>
        <p>Surojit Chatterjee</p>
        <p>Chief Product Officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team4.jpeg'/>
     <div>
        <p>Alesia Haas</p>
        <p>Chief financial Officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team5.png'/>
     <div>
        <p>L.J. Brock</p>
        <p>Chief People Officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team6.jpeg'/>
     <div>
        <p>Paul Grewal</p>
        <p>Chief legal officer</p>
     </div>
</div>

<div className=''>
    <img className='border rounded-full shadow-2xl' src='team7.jpeg'/>
     <div>
        <p>Manish Gupta</p>
        <p>EVP of Engineering</p>
        <p>Coinbase</p>
     </div>
</div>

</div>
      
      <div className='p-20 pt-40 flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-5'>
            <p className='text-4xl font-semibold'>Working at Coinbase</p>
            <p className='text-xl'>Our mission is to increase economic freedom in the<br/> world. 
                Join us and make an impact at a global scale.</p>
           <Link href=''><a className='text-blue-700 text-base'>View open positions</a></Link>
        </div>
        <img src='coin.jpg'/>
    
      </div>
<Footer/>
    </div>
  )
}

export default company
