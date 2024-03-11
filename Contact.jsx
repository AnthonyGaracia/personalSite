import './App.css'
import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import FollowMe from './FollowMe';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
    <div className="formContact">
      
      <h1>Contact</h1>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
      
      <label>Name</label>
        <input type="text" name="user_name" />
      
      <label>Email</label>
        <input type="email" name="user_email" />
      
      <label>Message</label>
        <textarea name="message" />
      
      <input type="submit" value="Send" />
    </form>
    </div>
    <FollowMe/>
  </div>
  
  )
}


export default Contact