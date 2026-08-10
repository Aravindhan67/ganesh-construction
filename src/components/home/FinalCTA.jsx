import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../reactbits/ScrollReveal';
import ShinyText from '../reactbits/ShinyText';

const FinalCTA = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: 'var(--color-bg-secondary)', 
      position: 'relative', 
      zIndex: 10 
    }}>
      <div className="container" style={{ width: '100%', textAlign: 'center' }}>
        <ScrollReveal animation="slide-up">
          <h2 className="text-h1" style={{ marginBottom: '32px' }}>
            HAVE A VISION<br />
            <ShinyText text="WORTH BUILDING?" speed={3} />
          </h2>
          
          <p className="text-body-lg" style={{ maxWidth: '600px', margin: '0 auto 48px auto' }}>
            Tell us what you are planning. We'll help define the path from possibility to reality.
          </p>
          
          <Button to="/contact" withArrow>START A CONVERSATION</Button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FinalCTA;
