import '../styles/search.css'

function Top({type, setType, status, setStatus}) {
  return (
    <>
    <div className='search'>
        <input type="text" placeholder='filter by type' value={type} onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder='filter by status' value={status} onChange={(e) => setStatus(e.target.value)} />
    </div>
    </>
  )
}

export default Top