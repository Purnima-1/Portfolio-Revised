import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/header.css'

const Header = () => {
const [active,setActive] = useState(false)
const showMenu = () => {
 setActive(!active)
}

  return (
    <div className='header'>
        <div className="header_logo">
            <h1>Web Developer</h1>
        </div>
<nav className={active? 'navbar active': 'navbar'}>
    <ul>
        <div className="closed"></div>
        <i className="fa-solid fa-xmark" onClick={showMenu}></i>
        <li>    <Link to="/experience">Experience</Link></li>
         
          <li>  <Link to="/contact">Contact</Link></li>
            </ul>
</nav>
<div className="changer">
<i className="fa-solid fa-bars" onClick={showMenu}></i>
</div>
    </div>
  )
}

export default Header