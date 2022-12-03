import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate= useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    cpassword: ""
  })
  function handleInput(e){
    let {name, value} = e.target;
    setUserData({...userData, 
      [name] : value})
  }
  function handleRegister(event){
    event.preventDefault();
    const {email, password, cpassword} = userData;
    fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password, cpassword
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.message === "User already regsitered!"){
        alert("User already regsitered!")
        return;
      }
      if(data.message === "User registered successfully!"){
        navigate("/")
      }
    })
  }
  
  return (
    <div className='register-body-conatiner'>
      <div className='login-container'>
        <form className='login-form'>
          <div>
            <h2>Register</h2>
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
            <input type="password"
                    placeholder='confirm password'
                    name="cpassword"
                    onChange={handleInput}
                    value={userData.cpassword} />
          </div>
          <div>
            <button onClick={handleRegister}>
              REGISTER
            </button>
          </div>
          <div>
            <Link to="/">
              <p className='red-text link'>Member Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}