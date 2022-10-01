import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='pt-20 flex flex-col lg:flex flex-row gap-10 p-20'>
        <div className='flex flex-col gap-5'>
            <h2  className='text-3xl'><span className='border border-orange-500 font-bold text-orange-500'>RANSOM</span><span className='text-blue-500 font-bold'>Trade</span></h2>
            <select className='text-black w-40'>
                <option>English</option>
                <option>Deutch</option>
                <option>Espanol</option>
                <option>French</option>
                <option>Italiano</option>
                <option>Polski</option>
                <option>Portugues</option>
            </select>
            <p>&copy; 2022 Rashbase</p>
            <p>Blog.Twitter.Facebook</p>
        </div>

        <div className='grid grid-cols-3 gap-20'>
            <div className='flex flex-col'>
                <p>Company</p>
                <Link  href="/"><a>About</a></Link>
                <Link  href="/"><a>Careers</a></Link>
                <Link  href="/"><a>Affiliate</a></Link>
                <Link  href="/"><a>Blog</a></Link>
                <Link  href="/"><a>Press</a></Link>
                <Link  href="/"><a>Investor</a></Link>
                <Link  href="/"><a>Legal Privacy</a></Link>
                <Link  href="/"><a>Cookie Policy</a></Link>
                <Link  href="/"><a>Cookie Preferences</a></Link>
                <Link  href="/"><a>Digital Asset Disclosures</a></Link>
            </div>
        
            <div className='flex flex-col'>
                <p>Individuals</p>
                <Link  href="/"><a>Buy and Sell</a></Link>
                <Link  href="/"><a>Earn Free Crypto</a></Link>
                <Link  href="/"><a>Wallet</a></Link>
                <Link  href="/"><a>NFT</a></Link>
                <Link  href="/"><a>card</a></Link>
                <Link  href="/"><a>Derivatives</a></Link>
            </div>
            <div className='flex flex-col'>
                <p>Support</p>
                <Link  href="/"><a>Help center</a></Link>
                <Link  href="/"><a>Contact Us</a></Link>
                <Link  href="/"><a>Create account</a></Link>
                <Link  href="/"><a>ID verification</a></Link>
                <Link  href="/"><a>Account Informaton</a></Link>
                <Link  href="/"><a>Payments Methods</a></Link>
                <Link  href="/"><a>Account Access</a></Link>
                <Link  href="/"><a>Supported Crypto</a></Link>
                <Link  href="/"><a>Supported Countries</a></Link>
                <Link  href="/"><a>Status</a></Link>
            </div>
            <div className='flex flex-col'>
                <p>Learn</p>
                <Link  href="/"><a>Browse crypto prices</a></Link>
                <Link  href="/"><a>Coinbase bytes newsletter</a></Link>
                <Link  href="/"><a>Cryto basics</a></Link>
                <Link  href="/"><a>Tips & tutorails</a></Link>
                <Link  href="/"><a>Market Updates</a></Link>
                <Link  href="/"><a>What is bitcoin</a></Link>
                <Link  href="/"><a>what is crypto</a></Link>
                <Link  href="/"><a>what is blockchain</a></Link>
                <Link  href="/"><a>How to set up a crypto wallet</a></Link>
                <Link  href="/"><a>Taxes</a></Link>
            </div>
            <div className='flex flex-col'>
                <p>Developers</p>
                <Link href="/"><a>Cloud</a></Link>
                <Link href="/"><a>wallet sdk</a></Link>
                <Link  href="/"><a>coinbase pay sdk</a></Link>
                <Link  href="/"><a>Query & Transact</a></Link>
                <Link  href="/"><a>Commerce</a></Link>
                <Link  href="/"><a>Exchange & Pro</a></Link>
                <Link  href="/"><a>Sign in with Coinbase</a></Link>
                <Link href="/"><a>Rosetta</a></Link>
                <Link  href="/"><a>Participate</a></Link>
                <Link  href="/"><a>Prime Api</a></Link>
            </div>
            <div className='flex flex-col'>
                <p>Business</p>
                <Link href="/"><a>Institutional</a></Link>
                <Link href="/"><a>Prime</a></Link>
                <Link href="/"><a>Asset Hub</a></Link>
                <Link href="/"><a>Commerce</a></Link>
            </div>
    </div>
    </div>
  )
}

export default Footer