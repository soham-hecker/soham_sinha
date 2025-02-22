import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Certificates from './pages/Certificates'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'
// import Navbar from './components/Navbar.jsx';
// import MeetOurTeam from './components/MeetOurTeam.jsx';

function App() {
  const containerStyle = {
    backgroundColor: 'black',
    height:'100vh',
    width:'100vw',
    // backgroundImage: 'linearGradient(to bottom right, red, yellow)'
  };
  return (
    <div className='container' style={containerStyle}>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home/>} />
          <Route path="/home" element= {<Home/>} />
          <Route path="/projects" element= {<Projects/>} />
          <Route path="/certificates" element= {<Certificates/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;