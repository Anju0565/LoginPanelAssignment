import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{marginLeft:"4%"}}>
      <h1>List of Users:</h1>
      <div style={{width:"80%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"4%", textAlign:"left"}}>
        {data.map((item)=>(
          <div key={item._id} style={{height:"150px",border:"1px solid black"}}><br /><br />
              <div><span style={{fontWeight:"bolder"}}>UserName: </span>{item.username}</div>
              <div><span style={{fontWeight:"bolder"}}>UserId: </span>{item._id}</div>
              <div><span style={{fontWeight:"bolder"}}>Role: </span>{item.role}</div><br />
            </div>
        ))}
      </div>
    </div>
  );
};


export default Admin