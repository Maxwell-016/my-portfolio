import React from 'react'
import TextField from './labelledTextField'
import style from './module.styles/contactForm.module.css'
import validator from 'validator'
import { useState } from 'react'
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);
  const handleInputChange =(e) =>{
    const emailValue = e.target.value;
    setEmail(emailValue);
    setValid(validator.isEmail(emailValue));
  }
  const handleSubmit = (e) =>{
    console.log(email);
    
    e.preventDefault();
    if(validator.isEmail(email)){
      alert("The email is valid")
    }
    else{
      alert("The email is invalid")
    }
  }
  return (
    <>
    <div className={style.contactUs}>
        <div className={style.contactText}>
            <h2>Get In Touch</h2>
            <p>Hi there! I'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                 Your thoughts are important to me, and I'm here to help. Fill out the form below, and I'll get back to you as soon as possible. 
                 Thanks for connecting with Me!</p>
        </div>
        <form action="/submit-form" onSubmit={handleSubmit}>
            <TextField  isValid= {true} label = "Name" placeholder = "Your name here..." name = "name" type = "text"/>
            <TextField  isValid={isValid} onChange={handleInputChange}  label = "Email" placeholder = "Your email here..." name = "email" type = "email"/>
            <TextField label = "Message" placeholder = "Your message here..." name = "message" isMessage = {true}/>
            <div className={style.buttons}>
                <button type="submit" className={style.submit}>Submit</button>
                <button type="reset" className={style.reset}>Reset</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default ContactForm