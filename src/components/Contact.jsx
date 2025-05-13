import React, { useState } from 'react';
import '../css/contact.css'; // Make sure this CSS file exists
import image from '../assets/image/back.jpg'; // Add your image here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <img src={image} alt="Contact Us" className="contact-img" />
        </div>
        <div className="contact-right">
          <h2>Get in Touch</h2>
          <p>We would love to hear from you. Please fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
            <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGoogle} />
  </a>
</div>

          </form>
        </div>
      </div>
     
    </div>
   
  );
};

export default Contact;
