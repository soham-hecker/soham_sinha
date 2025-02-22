import React from 'react'
import "../components/utils.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import course01 from '../images/ML01.jpg'
import course02 from '../images/ML02.jpg'
import course03 from '../images/ML03.jpg'
import course04 from '../images/ML04.jpg'
import course05 from '../images/ML05.jpg'
import course06 from '../images/ML06.jpg'
import ProCerti from '../images/ProfessionalCerti.jpg'
import problemSolving from '../images/HackerRankProblemSolving.jpg'

function Certificates() {

    // const page = {
    //     backgroundColor:'black'
    // }

    const container = {
        display:'block',
        height:'100%',
        width:'100vw',
        color:'white',
        background:"linear-gradient(to bottom right, rgb(20, 0, 53) 10%, black 90%)",
    };
    const footer = {
        display:'block',
        position:'relative',
        // top:'899px'
    }
    const title = {
        color: "white",
        margin: "0px auto",
        textAlign: "center",
        fontSize: "1.69rem",
        fontWeight: "bold",
        padding: "10px",
      };
      const titleSpan = {
        color: "white",
        margin: "0px 14px",
        // textAlign: "center",
        fontSize: "1.69rem",
        fontWeight: "bold",
        padding: "10px",
      };

    // const certiDiv = {
    //     position:'relative',
    //     left:'-8px',
    //     width:'550px',
    //     height:'375px'
    // }
    const carousel = {
        position:'relative',
        left:'36px'
    }
    const flex = {
        // marginTop:'63px',
        width:'100vw',
        // backgroundColor:'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    };
    const member = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };
    const nameStyle = {
        position:'relative',
        color:'white',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textAlign: 'center',
        marginTop: '10px',
        top:'-5px',
        textShadow: '2px 2px rgb(0, 0, 0)'
    };
    const role = {
        position:'relative',
        color: 'rgb(210, 210, 210)',
        textAlign: 'center',
        marginBottom: '15px',
        fontSize:'1.23rem',
        top:'-5px',
        textShadow: '2px 2px rgb(0, 0, 0)'
    };

  return (
    <div>
    <Navbar/>
    <div style={container}>
        <div style={title}>
            <span className="purple">Certificates</span>
        </div>
        {/* <div style={title}>
            <span className="purple-span">Competetive Coder{" "}</span>
            at NSCC
        </div> */}
        <br/>
        <div style={titleSpan}>
            IBM Machine Learning
        </div>
        <br/><br/>
        <div style={carousel}>
            <span className="purple-span">Professional Certificate</span>
            <br/>
            <img className='certi' src={ProCerti} alt='Professional Certificate'/>
        </div>
        <br/><br/>
        <div style={flex}>
            <div style={member}>
                <img className='certi' src={course01} alt='certificate'/> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 1</p>
                <p style={role}>Exploratory Data Analysis</p>
            </div>
            <div style={member}>
                <img className='certi' src={course02} alt='certificate' /> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 2</p>
                <p style={role}>Supervised Machine Learning: Regression</p>
            </div>
            <div style={member}>
                <img className='certi' src={course03} alt='certificate' /> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 3</p>
                <p style={role}>Supervised Machine Learning: Classification</p>
            </div>
            <div style={member}>
                <img className='certi' src={course04} alt='certificate' /> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 4</p>
                <p style={role}>Unsupervised Machine Learning</p>
            </div>
            <div style={member}>
                <img className='certi' src={course05} alt='certificate' /> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 5</p>
                <p style={role}>Deep Learning and Reinforcement Learning</p>
            </div>
            <div style={member}>
                <img className='certi' src={course06} alt='certificate' /> {/* Empty div as image placeholder */}
                <p style={nameStyle}>Course 6</p>
                <p style={role}>Capstone</p>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div style={carousel}>
            <span className="purple-span">HackerRank Problem Solving</span>
            <br/><br/>
            <img className='certi' src={problemSolving} alt='Problem Solving'/>
            <br/><br/><br/><br/>
        </div>

    </div>
    {/* <br/> */}
    <div style={footer}><Footer/></div>
    </div>
  )
}

export default Certificates