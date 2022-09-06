
import React from 'react'
import {Link} from 'react-router-dom'
import './style/contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_biui84f', 'template_udpr6vn', e.target, 'yfYOljbOxHsooJqnW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
        };

  return (
    <div className='contact'>
        <Link to='/'>
         <button className='back'>Go Back </button>   
        </Link>
        <div className="inputs">
<h1>Contact me</h1>
<form onSubmit={sendEmail}>
<input type="text" placeholder='Name' name="yourname" />
<input type="email" placeholder='Email' name='email'/>
<input type="text" placeholder='Message' className='message' name="message"/>
<button className='send'>Send</button>
</form>
        </div>
    </div>
  )
}
export default Contact