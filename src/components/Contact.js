import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    console.log(formData);
    alert('Message sent!');
    setFormData({
      name: 'Epic Coders',
      email: 'satyasri66118@gmail.com',
      message: 'Contact me on mail'
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email:satyasri66118@gmail.com</p>
          <p>Phone:965834271</p>
          <p>Location: Amalapuram</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;