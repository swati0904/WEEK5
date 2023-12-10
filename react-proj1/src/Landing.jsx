// Landing.jsx
import React from 'react';
 import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Paper } from '@mui/material';

const Landing = () => {
    const navigate = useNavigate(); // Updated hook

    const handleSubmit = () => {
        // Assuming authentication is successful, navigate to the next page
        navigate('/signup');
    };

  return (
    <div className='main-signup'>
      <AppBar position="static" style={{ backgroundColor: 'black', marginBottom: '10vw' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                hello world
                </Typography>
                <Button color="inherit" onClick={handleSubmit} sx={{ ml: 'auto' }}>
                Login
                </Button >
            </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '3rem' ,width:'50vw'}}>
        <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Sprint Planner
          </Typography>
          <Typography variant="body1">
            Plan and manage your sprints with ease using Sprint Planner. Stay organized, collaborate
            with your team, and achieve your project goals efficiently.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            Get started today and boost your productivity!
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Landing;
