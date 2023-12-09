
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import './signup.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
const Addcourse = () => {
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const navigate=useNavigate();

  const handleSubmit=()=>{
    navigate("/signin");
    fetch("http://localhost:3000/admin/courses",{
      method:"POST",
      body:JSON.stringify({
        title:title,
        description:description,
        imageLink:"",
        published:true
      }),
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
        //authorisation we need to send that too
      }
    }).then((response)=>{
      response.json().then((data)=>{
        console.log(data);
       
      })
    })


  }
  return (
    <>
    <div className='main-signup'>
      <AppBar position="static" style={{height:'5vh',width:'100vw', margin:'0px', padding:'0px' , backgroundColor:'black'}}>
      
      </AppBar>
      <Typography variant="h4" gutterBottom style={{color:'red' , marginTop:'10vh'}}>
        Add Course
      </Typography>
      <Card variant="outlined" className="sign-up-cover" style={{
    border: '2px solid #333', // Example: Border with 2px thickness and color #333
    backgroundColor: '#f5f5f5', // Example: Light blue background color
    padding: '10px',
  }}>
      <div className='sign-up-input'>
      <label className='sign-up-label'>Title</label> <TextField id="outlined-basic" label="username" variant="outlined" onChange={(e)=>{
        setTitle(e.target.value);
      }} />
      </div>

      
      
      <div className='sign-up-input'>
      <label className='sign-up-label'>Descriptions</label><TextField id="outlined-basic" type="password" label="password" variant="outlined"  onChange={(e)=>{
        setDescription(e.target.value);
      }} />
      </div>
      <Button variant="contained" style={{marginTop:'6px'}} onClick={handleSubmit}>AddCourse</Button>
      </Card>
      
      
      
    
      </div>
    
    </>
  )
}

export default Addcourse



