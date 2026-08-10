import React from 'react';
import Button from '../common/Button';
import ScrollExpand from '../reactbits/ScrollExpand';

const HeroContent = () => {
  return (
    <ScrollExpand
      images={[
        "/images/hero_bg.png",
        "/images/projects/nexus.png",
        "/images/projects/aurelia.png",
        "/images/projects/meridian.png"
      ]}
      alt="Ganesh Construction"
      title="GANESH CONSTRUCTION"
      scrollHint="Scroll to explore"
      useWindowScroll={true}
      startWidth={65}
      startHeight={75}
      style={{ zIndex: 10, position: 'relative' }}
    >
      <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div 
          className="text-eyebrow" 
          style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}
        >
          Architecture / Engineering / Construction
        </div>
        
        <h1 className="text-h1" style={{ marginBottom: '32px', maxWidth: '1000px', lineHeight: 1.1, color: 'white' }}>
          WE DON'T JUST BUILD STRUCTURES.<br/>WE BUILD LEGACIES.
        </h1>
        
        <p 
          className="text-body-lg" 
          style={{ maxWidth: '600px', marginBottom: '48px', marginInline: 'auto', color: 'rgba(255,255,255,0.9)' }}
        >
          Ganesh Construction delivers exceptional residential, commercial and infrastructure projects through uncompromising engineering, refined design and disciplined execution.
        </p>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <Button to="/projects" style={{ backgroundColor: 'white', color: 'var(--color-text-primary)' }} withArrow>Explore Projects</Button>
          <Button to="/about" variant="secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>Our Approach</Button>
        </div>
      </div>
    </ScrollExpand>
  );
};

export default HeroContent;
