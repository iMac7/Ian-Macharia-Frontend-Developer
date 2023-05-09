import '../styles/bottomnav.css'

function Bottomnav({page, totalPages, setPage}) {
  const btns = []
  for (let i = 0; i < totalPages; i++) {
    btns[i] = <button className={(i+1)===page? 'active': ''} onClick={() => setPage(i+1)} key={i}>{i+1}</button>
  }

  return (
    <div className='bottomnav'>
      <button className="prev" onClick={() => setPage('prev')} disabled={page==1}>prev</button>
      {btns.map(btn => btn)}
      <button className="next" onClick={() => setPage('next')} disabled={page==totalPages}>next</button>
    </div>
  )
}

export default Bottomnav