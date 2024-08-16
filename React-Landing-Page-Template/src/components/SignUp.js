import React, { useState } from 'react';
import './SignUp.css'; // Import external CSS file for styling
import { Navigate, useNavigate } from 'react-router-dom';
import DbService from '../shared/service/DataBaseService';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    username: '',
    password: '',
    bookedrooms: []
  });
  const navigate = useNavigate()

  const inputChangeHandler=(event)=>
    {
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
const checkData=(event)=>{
    event.preventDefault();
    if(formData.name.trim()==="")
      {
          window.alert("Name is Required")
          return false
      }
      if (formData.name.trim().match(/[a-zA-Z]/) && formData.name.trim().match(/[0-9]/)) {
        window.alert("Name must not contain both letters and numbers.");
        return false;
    }
    
    if (!formData.name.trim().match('^[a-zA-Z]{3,20}$')) {
        window.alert("Name must contain only letters with a length between 3 and 20 characters.");
        return false;
    }
    if(!formData.contact.trim().match('^[0-9]{10}$'))
        {
            window.alert("Contact Number Must Be (0-9) and 10 digit");
            return false;
        }
    if(!formData.email.trim().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))
        {
                window.alert("Email Must be In Format");
                return false;
        }
    if(formData.username.trim()==="")
        {
            window.alert("Username is Required")
            return false
        }
    if(!formData.username.trim().match('^[a-zA-Z]{3,20}$'))
    {
        window.alert("User Name must contain only character min-3 and max-20");
        return false;
    }
      
    if(formData.password.trim()==="")
        {
            window.alert("Password is Required")
            return false
        }
        if(!formData.password.trim().match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            {
                window.alert("Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
                return false;
            }  


            DbService.post("users",formData).then((res)=>{
              
            })
            window.alert("User Registeration Successful!!!")
        
        // window.alert(JSON.stringify(formData)); 
        navigate("/login") 
        
}  

  return (
    <div className="signup-form-container">
      <h2>Signup</h2>
      <form onSubmit={checkData}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Contact:</label>
          <input
            type="text"
            id="name"
            name="contact"
            value={formData.contact}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={inputChangeHandler}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
