import React from 'react'

export default function CheckAddress() {
  return (
    <div className='frens-check-main'>
        <h2>FRENS LIST<br/>CHECK</h2>
        <p>Add your wallet address below and click "Check my address" to check your Fren List status.</p>
        <form action="">
            <input type="text" placeholder='0x000000...' /><br />
            <input type="submit" value="CHECK MY ADDRESS" />
        </form>
    </div>
  )
}
