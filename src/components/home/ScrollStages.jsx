import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import ScrollReveal from '../reactbits/ScrollReveal';

const stages = [
  {
    title: "EVERY LANDMARK\nBEGINS BELOW THE SURFACE.",
    subtitle: "Precision begins where no one sees it. Every structure starts with a foundation engineered to carry generations."
  },
  {
    title: "STRUCTURE.\nMEETS AMBITION.",
    subtitle: "We transform engineering precision into structural strength, one calculated connection at a time."
  },
  {
    title: "FROM VISION\nTO VOLUME.",
    subtitle: "Architecture becomes real when thousands of details move with one purpose."
  },
  {
    title: "BUILT TO\nOUTLIVE EXPECTATIONS.",
    subtitle: "Creating spaces defined by performance, precision and lasting value."
  },
  {
    title: "EXPLORE OUR WORK",
    isFinal: true
  }
];

const ScrollStages = () => {
  return (
    <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
      {stages.map((stage, i) => (
        <div key={i} style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
            <ScrollReveal animation="slide-up">
              <h2 
                className="text-h2" 
                style={{ 
                  whiteSpace: 'pre-line', 
                  marginBottom: '24px', 
                  maxWidth: '800px',
                  pointerEvents: 'auto'
                }}
              >
                {stage.title}
              </h2>
              {stage.subtitle && (
                <p 
                  className="text-body-lg" 
                  style={{ maxWidth: '500px', pointerEvents: 'auto' }}
                >
                  {stage.subtitle}
                </p>
              )}
              {stage.isFinal && (
                <div style={{ pointerEvents: 'auto', marginTop: '32px' }}>
                  <Button to="/projects" withArrow>VIEW PROJECTS</Button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStages;
