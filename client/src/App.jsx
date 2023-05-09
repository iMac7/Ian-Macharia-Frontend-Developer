import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Bottomnav from './components/Bottomnav'
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
    const timeout = setTimeout(() => {
      fetch(`http://localhost/spacex/server.php?limit=12&page=${page}&type=${type}&status=${status}`)
      .then(res => res.json())
      .then(data => setCapsules(data))
      .catch(error => console.error(error))
    }, 1000);

    return(() => clearTimeout(timeout))
  }, [page, type, status])
  

  return (
    <div className={styles.app}>
      <Banner />
      <Search type={type} setType={setType} status={status} setStatus={setStatus} />
      <Grid data={capsules?.docs} toggleModal={toggleModal}/>
      <Bottomnav page={capsules.page} totalPages={capsules.totalPages} setPage={handlePage} />
      {modalOpen? <Modal data={modalData} toggleModal={toggleModal} />: null}
    </div>
  )
}

export default App
