import { useEffect, useState } from 'react'
import './App.css'
import Bottom from './components/Bottom'
import Grid from './components/Grid'
import Modal from './components/Modal'
import Search from './components/Search'
import Banner from './components/Banner'

function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [capsules, setCapsules] = useState({})
  const [modalData, setModalData] = useState({})
  const [page, setPage] = useState(1)
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')

  function toggleModal(capsule) {
    console.log(capsule)
    setModalData(capsule)
    setModalOpen(!modalOpen)
  }

  function handlePage(direction) {
    if(typeof direction === 'number' && direction !== page) {
      setPage(direction)
    }
    else if(direction==='prev') {
      if(page===1) return
      else setPage(page-1)
    }
    else if(direction==='next') {
      if(page===capsules?.totalPages) return
      else setPage(page+1)
    }
  }

  useEffect(() => {
    fetch(`http://localhost/spacex/server.php?limit=12&page=${page}&type=${type}&status=${status}`)
    .then(res => res.json())
    .then(data => setCapsules(data))
    .catch(error => console.error(error))
  }, [page, type, status])
  

  return (
    <div className='app'>
      <Banner />
      <Search type={type} setType={setType} status={status} setStatus={setStatus} />
      <Grid data={capsules?.docs} toggleModal={toggleModal}/>
      <Bottom page={capsules.page} totalPages={capsules.totalPages} setPage={handlePage} />
      {modalOpen? <Modal data={modalData} toggleModal={toggleModal} />: null}
    </div>
  )
}

export default App
