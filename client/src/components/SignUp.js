import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {registerUser} from '../Redux/register/register.actions';

const SignUp = () => {
  const navigate = useNavigate()
 const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  role: ''
});
  const dispatch  = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData.role)
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(registerUser(formData))
      setFormData({ username: '',
      email: '',
      password: '',
      role:''});
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error during signup:', error.message);
      // Implement error handling logic here
      alert("Try Again")
    }
  };

  return (
    <div className='register'>
      <div>
      <h2>Sign Up</h2>
        <form className='loginForm' onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                className='formInput'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Enter UserName'
            />
            <input 
                className='formInput'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter Your Email ID'
            />
            <input
                type="password"
                name="password"
                className='formInput'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Enter Your Password'
            />
            <input
                type="role"
                name="role"
                className='formInput'
                value={formData.role}
                onChange={handleInputChange}
                placeholder='Enter Your Role(Admin/User)'
            />
            <button type="submit" className='buttonStyle'>Register</button>
            <Link style={{marginTop:"8px"}} to="/login">Already Registered? Login Here</Link>
        </form>
    </div>
  </div>
  );
};

export default SignUp;
