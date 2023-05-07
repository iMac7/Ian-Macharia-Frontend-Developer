import React from 'react'
import '../styles/bottom.css'

function Bottom({setPage}) {
  const btns = [1,2,3,4]

  return (
    <div className='bottom'>
      <button className="prev" onClick={() => setPage('prev')}>prev</button>

      {btns.map(number => <button key={number}>{number}</button>)}

      <button className="next" onClick={() => setPage('next')}>next</button>
    </div>
  )
}

export default Bottom