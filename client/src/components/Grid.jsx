import styles from '../styles/grid.module.css'

function Grid({data, toggleModal}) {

  return (
    <div className={styles.grid} >
        {data?.map(capsule => 
          <div className={styles.capsule} onClick={() => toggleModal(capsule)} key={capsule.id} tabIndex={0}>
              <p>{capsule.type}</p>
              <p>{capsule.status}</p>
          </div>
        )}
    </div>
  )
}

export default Grid