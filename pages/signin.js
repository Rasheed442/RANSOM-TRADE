import React, {useState} from 'react'
import Link from 'next/link'
function Signin() {
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState()
    const [reply, setReply] = useState()

     function home(){
        window.location="/"
     }
     function account(){
        window.location="start"
     }

     async function submithandler(e){
        e.preventDefault();
        setLoading(true)

        const user = email
        const response = await fetch ("https://beautybytas.onrender.com/login", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email})
        })
        const data = await response.json();
        setLoading(false)
        setReply(data.msg)
    
        
     }

  return (
    <>
     <p onClick={home} className='text-4xl cursor-pointer w-12 p-2 font-bold'><span className='text-orange-500'>R</span><span className='text-blue-500'>T</span></p>
    <div className='flex pt-5 justify-center align-center'>
        
        <div className=' p-10'>
           <div className='flex flex-col gap-10'>
              <p className='text-blue-500 text-5xl font-semibold'>Ransom Trade</p>
              <p className='font-semibold text-2xl pb-5'>Sign in to Ransom Trade</p>
           </div>

        <form onSubmit={submithandler}>
            <div className='flex flex-col'>
              <label className='font-semibold'>Email*</label>

              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your email address' 
              className='border border-blue-800 outline-none p-5 rounded-xl' 
              type='email'/>
               {reply && <div>{reply}</div>}
            </div>
            <div className='pt-5 flex flex-col gap-5'>
              <p className='text-gray-500'>Not your device? use incognito mode to sign in privately</p>
              <button className='bg-blue-500 p-4 text-2xl rounded-2xl' type='submit'>{loading ? "loading...." : "continue"}</button>
              <button className='bg-gray-500 p-4 text-2xl rounded-2xl' onClick={account}>Create account</button>
              </div>
           </form>

           <div  className='flex flex-col'>
            <Link href='/'><a className='text-blue-500 text-center'>sign in to a business account</a></Link>
            <Link href='/'><a className='text-blue-500 text-center'>Privacy Policy</a></Link>
            </div>

        </div>
    </div></>
  )
}

export default Signin;

