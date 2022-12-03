import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Book } from './book';

export const Booklist = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [booklist, setBooklist] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    fetch("/booklist/username", {
      method: "GET",
      headers: {
          "Authorization": token,
      },
    }).then(res => res.json())
      .then(data => setUser(data.email))
  }, [])

  useEffect(() =>{
    let token = localStorage.getItem("token");
    fetch("/booklist", {
      method: "GET",
      headers: {
        "Authorization": token,
      }
    }).then(res => res.json())
      .then(data => {
        setBooklist(data.booklist)

      })
  }, [])
  function handleLogout(){
    navigate("/");
    localStorage.clear();
  }
  return (
    <div className='main-container'>
      <header>
        <span> 
          <h2>Welcome {user.split("@")[0]}  !!</h2>
        </span>
        <button className='logout-btn' 
                onClick={handleLogout}>
            Logout
          </button>
      </header>
      <section>
        <div>
          <h1>Books List</h1>
        </div>
        <div>
          <Link to="/addbook" >
            <button className='add-btn'>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              <span>Add New Book</span>
            </button>
          </Link>
        </div>
      </section>
      <div className='booklist-container'>
        {booklist.map((book) => {
          return <Book key={book._id} 
                       book={book}/>
        })}
      </div>
    </div>
  )
}
