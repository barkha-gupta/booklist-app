import React, {useState} from 'react'
import "../App.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate= useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  function handleInput(e){
    let {name, value} = e.target;
    setUserData({...userData, 
      [name] : value})
  }

  function handleLogin(event){
    event.preventDefault();
    const {email, password} = userData;
    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.message === "user not registered"){
        alert("user not registered");
        return;
      }
      if(data.message === "user login successfull!"){
        const token= data.token;
        localStorage.setItem("token", token);
        navigate("/booklist")
      }
    })
  }
  return (
    <div className='login-body-conatiner'>
      <div className='login-container'>
        <form className='login-form'>
        <pre>{JSON.stringify(userData)}</pre>
          <div>
            <h2>Member Login</h2>
          </div>
          <div>
            <input type="text"
                    placeholder='email'
                    name="email"
                    onChange={handleInput}
                    value={userData.email} />
          </div>
          <div>
            <input type="password"
                    placeholder='password'
                    name="password"
                    onChange={handleInput}
                    value={userData.password} />
          </div>
          <div>
            <button onClick={handleLogin}>
              LOGIN
            </button>
          </div>
          <div>
            <Link to="/register">
              <p className='red-text link'>Not Regsitered</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
