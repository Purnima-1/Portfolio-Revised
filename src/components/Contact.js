
import React from 'react'
import {Link} from 'react-router-dom'
import './style/contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <Link to='/'>
         <button>Go Back </button>   
        </Link>
        <div className="inputs">
<h1>Contact me</h1>
<input type="text" placeholder='Name' />
<input type="text" placeholder='Email'/>
<input type="text" placeholder='Message' className='message'/>
<button className='send'>Send</button>
        </div>
    </div>
  )
}
export default Contact