import React from "react";
import "./style/main.css";
import pic from './assets/pic.png'

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
          <i className="fa-brands fa-linkedin icon"><a href="https://www.linkedin.com/in/purnima-kumar/" target= "_blank" rel="noreferrer" ></a></i>
          <i className="fa-brands fa-github icon"></i>
        </div>
        <div className="buttons">
          <button className='button'><a href='https://github.com/Purnima-1' target= "_blank" rel="noreferrer" >See My Work</a></button>
          <button className='button'><a href ="https://docs.google.com/document/d/1z6dhqAQgDYjAYvEAFQh8QqyaDO3mx0Xb/edit?usp=sharing&ouid=109590025155698111452&rtpof=true&sd=true" target= "_blank" rel="noreferrer" >Hire Me</a></button>
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
