import React , { useState} from 'react'
import { Link } from 'react-router-dom'

export const Addbook = () => {
 
  const [formData, setFormData] = useState({
    title : "",
    isbn : "",
    author : "",
    description : "", 
    publishedDate : "", 
    publisher : ""
  });
  function handleChange(e){
    const {name, value} = e.target;
   
    setFormData({...formData, 
                  [name] : value})
  }
  function handleSubmit(e){
    e.preventDefault();
    const {title, isbn, author, description, publishedDate, publisher} = formData;
    let token = localStorage.getItem("token");
    fetch("/booklist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        title, isbn, author, description, publishedDate, publisher
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.message === "new book added"){
          alert("new book added")
        }
      })
  }

  return (
    <div className='main-container'>
      <section className="add-container">
        <div>
          <h1>Add Book</h1>
        </div>
        <div>
          <Link to="/booklist" >
            <button className='add-btn'>
              <span>Show Book List</span>
            </button>
          </Link>
        </div>
      </section>
      
      <form className="add-form-container">
          <div>
            <h2>Create new Book</h2>
          </div>
          <div>
            <input type="text"
                    placeholder="Title of book"
                    name="title"
                    onChange={handleChange}
                    value={formData.title} />
          </div>
          <div>
            <input type="text"
                    placeholder="ISBN"
                    name="isbn"
                    onChange={handleChange}
                    value={formData.isbn} />
          </div>
          <div>
            <input type="text"
                    placeholder="Author"
                    name="author"
                    onChange={handleChange}
                    value={formData.author} />
          </div>
          <div>
            <input type="text"
                    placeholder="Describe this book"
                    name="description"
                    onChange={handleChange}
                    value={formData.description} />
          </div>
          <div>
            <input type="text"
                    placeholder="Publish date"
                    name="publishedDate"
                    onChange={handleChange}
                    value={formData.publishedDate} />
          </div>
          <div>
            <input type="text"
                    placeholder="Publisher of this book"
                    name="publisher"
                    onChange={handleChange}
                    value={formData.publisher} />
          </div>
          <div>
            <button className="submit-btn"
                    onClick={handleSubmit}>
              Submit
            </button>
          </div>
      </form>
    </div>
  )
}
