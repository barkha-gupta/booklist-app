import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import bookcover from "../assets/bookcover.png"
import { Bookrecord } from './bookrecord';

export const Book = ({book}) => {
    const navigate= useNavigate();
    const [show, setShow] = useState(false)
    function handleClick(){
        setShow(true)
    }
  return (
      <>{show && <Bookrecord  rbook={book} show={show} setShow={setShow}/>}
          <div className='book-conatiner' onClick={handleClick}>
              <div className='book-cover'>
                  <img src={bookcover} alt="harry potter" />
              </div>
              <div className='book-info'>
                  <div className='blue-text'>{book.title}</div>
                  <div className='low-opacity'>{book.author}</div>
                  <div>{book.description}</div>
              </div>
          </div>
      </>
  )
}
