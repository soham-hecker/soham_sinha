import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
// import '../App.css'

function Home() {

  // const AboutStyle = {
  //   position:'relative',
  //   top:'123px'
  // }

  const block = {
    display:'block'
  }

  return (
    <div>
        <Navbar style={block}/>
        <About style={block} className='container'/>
        <Footer style={block}/>
    </div>
  )
}

export default Home