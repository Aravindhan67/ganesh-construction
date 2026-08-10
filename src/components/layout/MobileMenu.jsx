import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Logo from '../common/Logo';

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--color-bg-primary)',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px var(--container-padding)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ 
              fontFamily: 'var(--font-primary)', 
              fontWeight: 800, 
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Logo size={32} />
              <div>GANESH<br />CONSTRUCTION</div>
            </div>
            <button onClick={onClose}>
              <X size={32} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {links.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link 
                    to={link.path}
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: '3rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (links.length * 0.1), duration: 0.5 }}
                style={{ marginTop: '24px' }}
              >
                <Link 
                  to="/contact"
                  onClick={onClose}
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-accent)'
                  }}
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ paddingBottom: '32px' }}
          >
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              hello@ganeshconstruction.com
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              +91 44 4000 2026
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
