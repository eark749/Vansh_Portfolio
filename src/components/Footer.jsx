import React from 'react';
import './Footer.css';

const footerLinks = ['About', 'Skills', 'Education', 'Projects', 'Contact'];
const footerSocials = ['LinkedIn', 'X', 'Thread', 'GitHub', 'Mail'];

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
                <li key={link}><a href="#" className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading">socials</h4>
            <ul>
              {footerSocials.map(s => (
                <li key={s}><a href="#" className="footer-link">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <span className="footer-copyright">© 2026 Vansh. All rights reserved.</span>
      </div>
    </footer>
  );
}
