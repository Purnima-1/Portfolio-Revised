import React from "react";
import { Link } from "react-router-dom";
import "./style/experience.css";
import Accordion from "react-bootstrap/Accordion";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <Link to="/">
          <button className="back">Go Back </button>
        </Link>
        <div className="container">
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" className="points">
              <Accordion.Header className='heading'>
                {" "}
                Frontend Developer at Radiance Technologies, WA <br />
                Jan 2021 - Current
              </Accordion.Header>

              <Accordion.Body>
                <li>
                  {" "}
                  Built responsive website using HTML, CSS, Bootstrap and jQuery{" "}
                </li>
                <li>Build the user interaction interface using ReactJS</li>
                <li>
                  Collaborated with database team to store the user data into
                  SQL & JSON structure by providing the endpoint.
                </li>
                <li>
                  {" "}
                  Designing and implementation was managed on GitHub
                  repositories
                </li>
                <li>Also tested the web page using Jest and Selenium</li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="points">
              <Accordion.Header className='heading'>
                Full Stack Web Development Bootcamp <br /> Jan 2020 - Dec 2020
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  Learn about Programming Essential, Introduction to the Web and
                  Software Development Life cycle.
                </li>
                <li>
                  Learn about building responsive websites using HTML5 and CSS3
                  with key HTML APIs and their use cases
                </li>
                <li>
                  Build componentized JavaScript web application and user
                  interface including the Hooks API, server-side rendering, and
                  writing testable components.
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="points">
              <Accordion.Header>
              Frontend Developer at Pravel Solutions, India <br />
                Dec 2010 - Dec 2012
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  Designed and developed the single page web application using
                  HTML, CSS and JavaScript.
                </li>
                <li>
                  Created a user-friendly interface using AngularJS and AJAX.
                </li>
                <li>
                  Build unit test case using Jasmine which helps to reduce the
                  user-reported bugs by 19% monthly.
                </li>
                <li>
                  {" "}
                  Work in collaboration with back-end team to process the user
                  data and return the result back on the application.
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Experience;
