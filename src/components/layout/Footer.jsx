import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)', paddingTop: '100px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div className="grid-12" style={{ marginBottom: '80px', position: 'relative', zIndex: 2 }}>
          
          {/* Column 1: Brand */}
          <div className="col" style={{ '--col-desktop': 4, paddingRight: '40px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Logo size={48} color="var(--color-accent)" />
              <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.05em', lineHeight: 1.1 }}>
                GANESH<br/>PROPERTIES
              </div>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, fontSize: '0.9375rem', marginBottom: '32px' }}>
              Building enduring spaces with uncompromising precision. We bring visionary architecture to life across residential, commercial, and infrastructure projects.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col" style={{ '--col-desktop': 2 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600 }}>
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9375rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>About</Link></li>
              <li><Link to="/projects" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Projects</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Services</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="col" style={{ '--col-desktop': 3 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600 }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9375rem' }}>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Design & Build</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>General Contracting</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Project Management</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Premium Interiors</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="col" style={{ '--col-desktop': 3 }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600 }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9375rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>124 Architecture Avenue,<br/>Chennai, TN 600001, India</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span>+91 44 4000 2026</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span>hello@ganeshproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Background Logo */}
        <div style={{ 
          position: 'absolute', 
          bottom: '-25%', 
          right: '-10%', 
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.03
        }}>
          <Logo size={1000} color="#FFFFFF" />
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '60px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.4)',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            &copy; {new Date().getFullYear()} Ganesh Properties. All rights reserved.
          </div>
          
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link to="#" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}>Privacy Policy</Link>
            <Link to="#" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}>Terms of Use</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFF', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <FiLinkedin size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFF', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <FiInstagram size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFF', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <FiTwitter size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
