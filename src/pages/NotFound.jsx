import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import SpecularButton from '../components/reactbits/SpecularButton';

const NotFound = () => {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-primary)', fontSize: '10rem', fontWeight: 800, color: 'var(--color-concrete-gray)', lineHeight: 1, marginBottom: '24px' }}>
          404
        </div>
        <SectionHeading className="mx-auto" style={{ textAlign: 'center' }}>PAGE NOT FOUND.</SectionHeading>
        <p className="text-body-lg" style={{ marginBottom: '40px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <SpecularButton 
          to="/"
          tint="var(--color-text-primary)"
          tintOpacity={1}
          textColor="#ffffff"
          baseColor="#111313"
        >
          Return Home
        </SpecularButton>
      </div>
    </main>
  );
};

export default NotFound;
