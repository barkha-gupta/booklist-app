import React from 'react'


export const Bookrecord = ({rbook, setShow}) => {
  
  return (
    <div className='overlay'>
      <div className='bookrecord-container'>
        <pre>{JSON.stringify({rbook})}</pre>
        <div>
        
        </div>
      </div>
    </div>
  )
}
