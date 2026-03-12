import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-card-container"
        >
          {/* Illustration Side */}
          <div className="contact-image-side">
            <img 
              src="/contact_abstract_drawing.png" 
              alt="Abstract Desk Illustration" 
              className="contact-illustration"
            />
          </div>

          {/* Form Side */}
          <div className="contact-form-side">
            <div className="contact-header">
              <p className="contact-subtitle">Looks like you need some help!!!</p>
              <h2 className="contact-title">Reach Out!</h2>
              <p className="contact-description">
                I usually respond within an hour, but designers do sleep 
                two to three hours a night, so it might take a bit longer. 
                Thank you and I am looking to hearing from you.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <input type="email" placeholder="example@mail.com" required />
                  <FiMail className="input-icon" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="What is the issue?" required></textarea>
              </div>
              
              <div className="form-actions">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-btn-black" 
                  type="submit"
                >
                  Submit
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="secondary-btn-outline" 
                  type="button"
                >
                  Schedule A Meeting
                </motion.button>
              </div>
            </form>
            <p className="contact-footer-text">
              By submitting this form, you acknowledge receipt of our company Privacy and policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
