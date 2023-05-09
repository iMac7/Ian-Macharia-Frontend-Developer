import '../styles/grid.css'

function Grid({data, toggleModal}) {

  return (
    <>
        <div className='grid' >
            {data?.map(capsule => 
              <div className='capsule' onClick={() => toggleModal(capsule)} key={capsule.id} tabIndex={0}>
                  <p>{capsule.type}</p>
                  <p>{capsule.status}</p>
              </div>
            )}
        </div>
    </>
  )
}

export default Grid