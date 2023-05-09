import '../styles/modal.css'

function Modal({data, toggleModal}) {
  return (
    <div className='modal' onClick={toggleModal}> 
        <div className="details" onClick={(e) => e.stopPropagation() }>
            {/* <p>{data.type}</p>
            <p>{data.land_landings}</p>
            <p>{data.status}</p> */}
            <table>
              <caption>DETAILS</caption>
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
            </table>
        </div>
    </div>
  )
}

export default Modal