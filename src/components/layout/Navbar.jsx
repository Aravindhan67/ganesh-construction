import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from '../common/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasDarkHero = location.pathname === '/' || location.pathname === '/contact';
  const textColor = (hasDarkHero && !isScrolled) ? '#FFFFFF' : 'var(--color-text-primary)';
  const secondaryTextColor = (hasDarkHero && !isScrolled) ? 'rgba(255, 255, 255, 0.7)' : 'var(--color-text-secondary)';

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(247, 247, 247, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(17, 19, 19, 0.1)' : '1px solid transparent',
          padding: isScrolled ? '16px 0' : '24px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Link to="/" style={{ 
            fontFamily: 'var(--font-primary)', 
            fontWeight: 800, 
            fontSize: '1.25rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: textColor,
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Logo color={textColor} size={36} />
            <div>GANESH<br />CONSTRUCTION</div>
          </Link>

          <div style={{ display: 'none' }} className="nav-desktop">
            <ul style={{ display: 'flex', gap: '32px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    style={{
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                      color: location.pathname === link.path ? textColor : secondaryTextColor,
                      transition: 'color 0.3s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = textColor}
                    onMouseLeave={(e) => {
                      if (location.pathname !== link.path) {
                        e.currentTarget.style.color = secondaryTextColor;
                      }
                    }}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundColor: textColor
                      }} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="nav-desktop">
            <Link 
              to="/contact"
              style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                padding: '10px 24px',
                border: `1px solid ${textColor}`,
                color: textColor,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = textColor;
                e.currentTarget.style.color = (hasDarkHero && !isScrolled) ? 'var(--color-text-primary)' : 'var(--color-bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = textColor;
              }}
            >
              Contact
            </Link>
          </div>

          <button 
            className="nav-mobile-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ display: 'block', color: textColor, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={navLinks}
      />
      
      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
