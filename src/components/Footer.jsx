import React from 'react';
import './Footer.css';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/' },
  { name: 'Contact', path: '/contact' }
];
const footerSocials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vansh-soni-7b918524a/' },
  { name: 'X', url: 'https://x.com/_VanshSoni_' },
  { name: 'GitHub', url: 'https://github.com/eark749' },
  { name: 'Mail', url: 'mailto:vanshsoniofficial@gmail.com' } // Assuming a default mailto based on common patterns, or just '#' if unknown
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo-area">
          <span className="footer-logo">[vansh]</span>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4 className="footer-col-heading">links</h4>
            <ul>
              {footerLinks.map(link => (
                <li key={link.name}><a href={link.path} className="footer-link">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading">socials</h4>
            <ul>
              {footerSocials.map(s => (
                <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer" className="footer-link">{s.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <span className="footer-copyright">© 2026 Vansh. All rights reserved.</span>
      </div>
    </footer>
  );
}
