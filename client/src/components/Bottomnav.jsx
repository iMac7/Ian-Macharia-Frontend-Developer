import styles from '../styles/bottomnav.module.css'

function Bottomnav({page, totalPages, setPage}) {
  const btns = []
  for (let i = 0; i < totalPages; i++) {
    btns[i] = <button className={(i+1)===page? styles.active: ''} onClick={() => setPage(i+1)} key={i}>{i+1}</button>
  }

  return (
    <div className={styles.bottomnav}>
      <button className={styles.prev} onClick={() => setPage('prev')} disabled={page==1}>prev</button>
      {btns.map(btn => btn)}
      <button className={styles.next} onClick={() => setPage('next')} disabled={page==totalPages}>next</button>
    </div>
  )
}

export default Bottomnav