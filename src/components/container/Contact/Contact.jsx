import React from 'react';
import "./Contact.scss";
import { contacts, socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import emailjs-com

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Use your EmailJS service ID, template ID, and user ID
    emailjs.sendForm('service_sfcefvd', 'template_870l93h', e.target, 'namburidhanu@gmail.com')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    // Clear the form fields after submission
    e.target.reset();
  };

  // Social media links
  const socialLinks = {
    instagram: "YOUR_INSTAGRAM_PROFILE_LINK",
    github: "https://github.com/DHANUNJAYA98/",
    linkedin: "https://www.linkedin.com/in/dhanunjaya-namburi-11232b237",
    medium: "YOUR_MEDIUM_PROFILE_LINK",
    leetcode: "https://leetcode.com/20dhanunjaya/" // Add your LeetCode profile link here
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_left_container'
        >
          <h3>Just Say Hi</h3>
          <p className='contact_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil unde atque voluptates, cumque molestias eveniet voluptatum animi consectetur magni mollitia dolor exercitationem labore maiores!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              // Determine the social media platform and assign the appropriate link
              let link = "";
              switch (index) {
                case 0: // Instagram
                  link = socialLinks.instagram;
                  break;
                case 1: // GitHub
                  link = socialLinks.github;
                  break;
                case 2: // LinkedIn
                  link = socialLinks.linkedin;
                  break;
                case 3: // Medium
                  link = socialLinks.medium;
                  break;
                case 4: // LeetCode
                  link = socialLinks.leetcode;
                  break;
                default:
                  link = "";
              }
              // If a link is provided, wrap the icon in an <a> tag
              return link ? (
                <div key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{socialIcon}</a>
                </div>
              ) : (
                <div key={index}>
                  {socialIcon}
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <form onSubmit={sendEmail}>
              <input type="text" placeholder='First Name' name="first_name" />
              <input type="text" placeholder='Last name' name="last_name" />
              <input type="text" placeholder='Phone' name="phone" />
              <input type="email" placeholder='Email' name="email" />
              <textarea placeholder='Message' name="message"></textarea>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="btn"
              >
                <button type="submit">Send</button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
