import React from 'react'
function Explorecrypto({name,symbol,rank,price,marketcap,icon}) {
  return (
    <div>
       <div className='p-20'>
          <p>{name}</p>
          <img src={icon}/>
          <p>{symbol}</p>
          <p>{rank}</p>
          <p>{price}</p>
          <p>{marketcap}</p>
       </div>
    </div>
  )
}

export default Explorecrypto
