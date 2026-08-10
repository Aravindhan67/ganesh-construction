import React from 'react';
import Logo from '../common/Logo';

const Loader = ({ progress = 0 }) => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--color-bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-primary)'
    }}>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        letterSpacing: '0.1em',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <Logo size={48} />
        <div>GANESH CONSTRUCTION</div>
      </div>
      <div style={{
        width: '200px',
        height: '2px',
        backgroundColor: 'var(--color-concrete-gray)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          backgroundColor: 'var(--color-accent)',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <div style={{
        marginTop: '10px',
        fontSize: '0.875rem',
        color: 'var(--color-steel-gray)'
      }}>
        LOADING MODEL... {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Loader;
