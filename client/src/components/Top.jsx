import '../styles/top.css'

function Top({type, setType, status, setStatus}) {
  return (
    <>
    <div className='top'>
        <input type="text" placeholder='filter by type' value={type} onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder='filter by status' value={status} onChange={(e) => setStatus(e.target.value)} />
        <button>SEARCH</button>
    </div>
    </>
  )
}

export default Top