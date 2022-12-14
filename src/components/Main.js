import React from "react";
import "./style/main.css";
import pic from './assets/pic.jpg'
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
        <div className="text">
          <p>Hey There</p>
          <h1>I am Purnima Kumar</h1>
          <p>Front End Web Developer</p>
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook icon"></i>
           {/* eslint-disable-next-line */}
           <a href= "https://www.linkedin.com/in/purnima-kumar/" target= "_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin icon"></i></a>
          <a href= "https://github.com/purnima-1" target= "_blank" rel="noreferrer">
          <i className="fa-brands fa-github icon"></i></a>
        </div>
        <div className="buttons">
          <button className='button'><a href='https://github.com/Purnima-1' target= "_blank" rel="noreferrer" >See My Work</a></button>
          <button className='button'><Link to="/contact">Hire Me</Link></button>
        </div>
      </div>
      <div className="main_img">
        <img src={pic} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Main;
