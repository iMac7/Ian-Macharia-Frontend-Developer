import styles from '../styles/modal.module.css'

function Modal({data = {}, toggleModal}) {
  return (
    <div className={styles.modal} data-testid='modal' onClick={toggleModal}> 
        <div className={styles.details} onClick={(e) => e.stopPropagation() }>
            <table>
              <caption>DETAILS</caption>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{data.type}</td>
                </tr>
                <tr>
                  <td>Serial</td>
                  <td>{data.serial}</td>
                </tr>
                <tr>
                  <td>Land landings</td>
                  <td>{data.land_landings}</td>
                </tr>
                <tr>
                  <td>Water landings</td>
                  <td>{data.water_landings}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{data.status}</td>
                </tr>
                <tr>
                  <td>Last update</td>
                  <td>{data.last_update}</td>
                </tr>
                <tr>
                  <td>Reuse count</td>
                  <td>{data.reuse_count}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default Modal