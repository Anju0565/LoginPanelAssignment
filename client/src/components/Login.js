// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../Redux/auth/auth.actions';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../style/login.css"

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      const {token} = response.data
      const {username} = response.data
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("token", JSON.stringify(token));
      console.log(token)

      const { role } = response.data; // Assuming the response contains the user role

      if (role === 'user' || role === 'admin') {
        dispatch(loginSuccess(role));
        // Redirect the user based on the role
        if (role === 'user') {
          history('/user'); // Replace with your user page route
        } else if (role === 'admin') {
          history('/admin'); // Replace with your admin page route
        }
      } else {
        dispatch(loginFailure('Invalid role'));
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      dispatch(loginFailure(error.message));
      alert("Please check the credential")
    }
  };

  return (
    <div className='signin'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='loginForm'>
        <div>
          <input
          className='formInput'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </div>
        <div>
          <input
          className='formInput'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        <button className='buttonStyle' type="submit">Login</button><br /><br />
        <Link to={'/register'}>New User? register here</Link>
      </form>
    </div>
  );
};

export default Login;
