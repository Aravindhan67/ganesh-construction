import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from '../common/Logo';
import SpecularButton from '../reactbits/SpecularButton';

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
          top: isScrolled ? '24px' : 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: isScrolled ? 'calc(100% - 48px)' : '100%',
          maxWidth: isScrolled ? '1200px' : '100%',
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
          border: isScrolled ? '1px solid rgba(17, 19, 19, 0.05)' : '1px solid transparent',
          borderRadius: isScrolled ? '100px' : '0',
          boxShadow: isScrolled ? '0 20px 40px rgba(0, 0, 0, 0.06)' : 'none'
        }}
      >
        <div 
          className={isScrolled ? '' : 'container'} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: isScrolled ? '16px 32px' : '24px 0',
            transition: 'padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            width: '100%'
          }}
        >
          
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
            <div>GANESH<br />PROPERTIES</div>
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
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)'
                      }} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="nav-desktop">
            <SpecularButton 
              to="/contact"
              size="sm"
              radius={100}
              tint="#b8860b"
              tintOpacity={1}
              textColor="#ffffff"
              baseColor="#b8860b"
              lineColor="#ffffff"
              style={{ padding: '0 24px', height: '40px', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase' }}
            >
              Contact
            </SpecularButton>
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
