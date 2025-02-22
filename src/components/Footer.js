import React from 'react'
import './utils.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import mail from '../images/mail.png'


function Footer() {

    const container = {
        width: '100vw',
        height:'100%',
        backgroundColor:'black',
        color:'white',
        display:'flex',
        // justifyContent:'space-evenly',
        padding:'49px 0',
        // flexWrap:'wrap'
    }

    // const left = {
    //     padding:'0 10px',
    //     position:'relative',
    //     width:'60vw',
    //     margin:'0 auto'
    //     // left:'-23px',
    //     // maxWidth:'400px'
    // }
    const line={
        marginTop:'10px',
        fontSize:'0.87rem',
        color:'rgba(255, 255, 255, 0.812)',
        maxWidth:'400px'
    }
    const dark = {
        backgroundColor:'black'
    }

    // const right = {
    //     padding:'0 10px',
    //     position:'relative',
    //     width:'40vw',
    //     margin:'0 auto'
    //     // left:'-23px',
    // }

    const bold = {
        color:'white'
    }

    const logos = {
        display:'flex',
        marginTop:'10px'
    }
    const logo = {
        height:'23px',
        width:'23px',
        borderRadius:'50%',
        margin:'0 8px'
    }
    const center = {
        textAlign:'center',
        padding:'16px 0',
        color:'white',
        fontSize:'0.8rem'
    }

  return (
    <div style={dark}>
    <div className='footerFlex' style={container}>
        <div className='footerLeft'>
            <h3>Soham Sinha</h3>
            <p style={line}>"Passionate about crafting tech that matters—AI-driven innovation, seamless code, and smarter applications."</p>
            <div style={logos}>
                <a href='https://www.linkedin.com/in/soham-sinha-605046289/'><img style={logo} src={linkedin} alt='linkedin'/></a>
                <a href='https://github.com/soham-hecker'><img style={logo} src={github} alt='github'/></a>
                <a href='mailto:sohamsinha2006@gmail.com'><img style={logo} src={mail} alt='mail'/></a>
            </div>
        </div>
        <div className='footerRight'>
            <ul>
                <li><b style={bold}>Sections</b></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='certificates'>Certificates</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    </div>
    <br/><br/>
    {/* <hr/> */}
    <div>
        <p style={center}>© All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer