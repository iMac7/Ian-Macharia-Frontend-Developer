import React from 'react'
import '../styles/top.css'

function Top() {
  return (
    <>
    <div className='top'>
        <input type="text" placeholder='filter by status' />
        <input type="text" placeholder='filter by original launch' />
        <input type="text" placeholder='filter by type' />
        <button>SEARCH</button>
    </div>
    </>
  )
}

export default Top