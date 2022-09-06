import React from 'react'
import pic2 from './assets/pic2.jpg'
import './style/section.css'
const Section = () => {
  return (
    <div className="section">
     <div className="section_container">
        <div className="section_img">
<img src={pic2} alt="" />
        </div>
        <div className="section_content">
            <h1>Who is Purnima?</h1>
            <p>Bootcamp Graduate (Scrum Master)</p>
            <p>UI and UX Designer</p>
            <p>2 years of Experience</p>
            <p>React Developer</p>
        </div>


     </div>
        </div>
  )
}

export default Section