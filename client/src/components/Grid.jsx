import React from 'react'
import '../styles/grid.css'

function Grid({data, toggleModal}) {
    const imgs = [1,1,1,1,1,1,2,2,2,2,2,2]

  return (
    <>
        <div className='grid' >

        {data?.map(capsule => 
            <div className='capsule' onClick={() => toggleModal(capsule)} key={capsule.id} tabIndex={0}>
                <p>{capsule.type}</p>
                <p>{capsule.serial}</p>
            </div>    
        )}
        </div>

    </>
  )
}

export default Grid