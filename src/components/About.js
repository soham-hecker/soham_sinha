import React from "react";
import "./utils.css";
// import bgImg from '../images/beam-light-bg.jpg'

function About() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Soham_Sinha_Resume.pdf"; // Change this to your actual file path
    link.download = "Soham_Sinha_Resume.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const container = {
    color: "white",
    // backgroundImage: 'url("../images/beam-light-bg.jpg")',
    /* Add the blur effect */
    // filter: 'blur(8px)',
    // -webkitFilter: 'blur(8px)',

    /* Full height */
    height: "100%",
    width: "100vw",
    background:
      "linear-gradient(to bottom right, rgb(20, 0, 53) 10%, black 90%)",
    position: "relative",
    top: "0px",
    paddingTop: '23px',
    paddingBottom:'270px'

    /* Center and scale the image nicely */
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  };

  const title = {
    color: "white",
    margin: "0px auto",
    textAlign: "center",
    fontSize: "1.4rem",
    fontWeight: "bold",
    padding: "10px",
  };

  const btnStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "rgb(57, 12, 141)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin:'10px auto'
  };

  const btnDiv = {
    // padding:'0 45%'
    // display:'inline',
    // padding:'0 auto'
    marginTop:'10px',
    display:'flex',
    alignItems:'center'
  }

  return (
    <div className="gradient" style={container}>
      <div style={title}>
        I find solutions to problems and integrate them
      </div>
      <div style={title}>
        <span className="purple-span">Competetive Coder{" "}</span>
        at NSCC
      </div>
      <div style={title}>
        Self Taught{" "}
        <span className="purple-span">Full-Stack Developer</span>
      </div>
      <div style={title}>
        <span className="purple-span">AI ML{" "}</span>
        Enthusiast
      </div>

      <div style={btnDiv}>
        <button
          onClick={handleDownload}
          style={btnStyle}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default About;
