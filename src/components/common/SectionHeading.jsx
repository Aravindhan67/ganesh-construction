import React from 'react';
import ScrollReveal from '../reactbits/ScrollReveal';

const SectionHeading = ({ children, className = '', delay = 0, style = {} }) => {
  return (
    <div className={className} style={style}>
      <ScrollReveal delay={delay} animation="slide-up">
        <h2 className={`text-h2 ${className}`} style={{ marginBottom: '16px' }}>
          {children}
        </h2>
      </ScrollReveal>
    </div>
  );
};

export default SectionHeading;
