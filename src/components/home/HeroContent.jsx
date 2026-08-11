import React, { useState, useEffect } from 'react';
import SpecularButton from '../reactbits/SpecularButton';
import ScrollExpand from '../reactbits/ScrollExpand';

const HeroContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <ScrollExpand
      images={[
        "/images/hero_bg.png",
        "/images/projects/nexus.png",
        "/images/projects/aurelia.png",
        "/images/projects/meridian.png"
      ]}
      alt="Ganesh Properties"
      title="GANESH PROPERTIES"
      scrollHint="Scroll to explore"
      useWindowScroll={true}
      startWidth={isMobile ? 92 : 65}
      startHeight={isMobile ? 90 : 75}
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
          Delivering exceptional projects through uncompromising engineering and refined design.
        </p>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <SpecularButton 
            to="/projects" 
            withArrow
            tint="#ffffff"
            tintOpacity={1}
            textColor="var(--color-text-primary)"
            baseColor="#ffffff"
            lineColor="var(--color-text-primary)"
          >
            Explore Projects
          </SpecularButton>
          <SpecularButton 
            to="/about" 
            tint="#ffffff"
            tintOpacity={0}
            textColor="#ffffff"
            baseColor="#525252"
            style={{ border: '1px solid rgba(255,255,255,0.4)' }}
          >
            Our Approach
          </SpecularButton>
        </div>
      </div>
    </ScrollExpand>
  );
};

export default HeroContent;
