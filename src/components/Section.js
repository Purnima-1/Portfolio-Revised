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
            <p></p>
            <p>UI and UX Designer</p>
            <p>3 plus years of Experience</p>
            <p>Frontend Developer</p>
        </div>


     </div>
        </div>
  )
}

export default Section