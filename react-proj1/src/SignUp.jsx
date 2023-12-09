import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import './signup.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const navigate=useNavigate();

  const handleSubmit=()=>{
    navigate("/signin");
    fetch("http://localhost:3000/admin/signup",{
      method:"POST",
      body:JSON.stringify({
        username:username,
        passord:email
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response)=>{
      response.json().then((data)=>{
        console.log(data.token);
        localStorage.setItem("token",data.token)
      })
    })


  }
  return (
    <>
    <div className='main-signup'>
      <AppBar position="static" style={{height:'5vh',width:'100vw', margin:'0px', padding:'0px' , backgroundColor:'black'}}>
      
      </AppBar>
      <Typography variant="h4" gutterBottom style={{color:'red' , marginTop:'10vh'}}>
        Sign Up
      </Typography>
      <Card variant="outlined" className="sign-up-cover" style={{
    border: '2px solid #333', // Example: Border with 2px thickness and color #333
    backgroundColor: '#f5f5f5', // Example: Light blue background color
    padding: '10px',
  }}>
      <div className='sign-up-input'>
      <label className='sign-up-label'>Username</label> <TextField id="outlined-basic" label="username" variant="outlined" onChange={(e)=>{
        setUsername(e.target.value);
      }} />
      </div>

      
      
      <div className='sign-up-input'>
      <label className='sign-up-label'>Password</label><TextField id="outlined-basic" type="password" label="password" variant="outlined"  onChange={(e)=>{
        setEmail(e.target.value);
      }} />
      </div>
      <Button variant="contained" style={{marginTop:'6px'}} onClick={handleSubmit}>Login</Button>
      </Card>
      
      
      
    
      </div>
    
        
      </>
  )
}

export default SignUp
