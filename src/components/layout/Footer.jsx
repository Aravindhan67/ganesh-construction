import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-secondary)', paddingTop: '100px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div className="grid-12" style={{ marginBottom: '80px', position: 'relative', zIndex: 2 }}>
          <div className="col" style={{ '--col-desktop': 4 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-steel-gray)' }}>
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col" style={{ '--col-desktop': 4 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-steel-gray)' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/services">Design & Build</Link></li>
              <li><Link to="/services">General Contracting</Link></li>
              <li><Link to="/services">Project Management</Link></li>
              <li><Link to="/services">Premium Interiors</Link></li>
            </ul>
          </div>
          
          <div className="col" style={{ '--col-desktop': 4 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-steel-gray)' }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--color-text-secondary)' }}>
              <li>hello@ganeshconstruction.com</li>
              <li>+91 44 4000 2026</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          position: 'absolute', 
          bottom: '-20%', 
          right: '-5%', 
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.03
        }}>
          <Logo size={800} color="var(--color-text-primary)" />
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '60px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(17, 19, 19, 0.1)',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: 'var(--color-steel-gray)',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>&copy; 2026 Ganesh Construction. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
