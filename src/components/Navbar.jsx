import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { FiLinkedin, FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>Vansh</Link>
        
        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="navbar-socials">
          <a href="https://www.linkedin.com/in/vansh-soni-7b918524a/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://x.com/_VanshSoni_" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://github.com/eark749" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="mobile-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="https://www.linkedin.com/in/vansh-soni-7b918524a/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="https://x.com/_VanshSoni_" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
                  <FaXTwitter />
                </a>
                <a href="https://github.com/eark749" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <FiGithub />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
