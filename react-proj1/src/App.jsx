import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp'
import Landing from './Landing'
import SignInSide from './SignInSide'
import SelectOptions from './SelectOptions';
import Addcourse from './Addcourse';

function App() {
  

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Landing
                />} />
                <Route path="/signin" element={<SignInSide />} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/addcourse" element={<Addcourse/>}/>
                
            </Routes>
      </Router>
  )
}

export default App


