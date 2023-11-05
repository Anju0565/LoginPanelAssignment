import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    let LocalToken = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
        <div>
          <center>{LocalToken===null?<div><br />
            <div style={{fontSize:"28px"}}>Please Login First</div><br />
            <div><Link to={'/login'}>
              <button style={{backgroundColor:"teal",color:'whitesmoke',height:"40px",fontWeight:"bolder"}}>Click Here To Login</button></Link></div>
            </div>:<div>Welcome To Home Page</div>}
          </center></div>
    </div>
  )
}

export default Home