import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">Vansh</Link>
        <div className="navbar-links">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
          ))}
        </div>
        <div className="navbar-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
