import React from "react";
import "./style/main.css";
import pic from './assets/pic.jpg'


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
          <i className="fa-brands fa-linkedin icon"></i>
          <i className="fa-brands fa-github icon"></i>
        </div>
        <div className="buttons">
          <button className='button'><a href='https://github.com/Purnima-1' target= "_blank" rel="noreferrer" >See My Work</a></button>
          <button className='button'><a href ="/contact"  rel="noreferrer" >Hire Me</a></button>
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
