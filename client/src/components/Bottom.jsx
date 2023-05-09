import '../styles/bottom.css'

function Bottom({page, totalPages, setPage}) {
  const btns = []
  for (let i = 0; i < totalPages; i++) {
    btns[i] = <button className={(i+1)===page? 'active': ''} onClick={() => setPage(i+1)} key={i}>{i+1}</button>
  }

  return (
    <div className='bottom'>
      <button className="prev" onClick={() => setPage('prev')} disabled={page==1}>prev</button>
      {btns.map(btn => btn)}
      <button className="next" onClick={() => setPage('next')} disabled={page==totalPages}>next</button>
    </div>
  )
}

export default Bottom