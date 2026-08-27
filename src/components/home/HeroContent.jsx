import React, { useState, useEffect } from 'react';
import SpecularButton from '../reactbits/SpecularButton';

const HeroContent = () => {
  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Images */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero background ${idx + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: idx === activeIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div 
          className="text-eyebrow" 
          style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}
        >
          Premium Interior Execution / Design
        </div>
        
        <h1 className="text-h1" style={{ marginBottom: '24px', maxWidth: '1000px', lineHeight: 1.1, color: 'white' }}>
          DAZZY INTERIORS
        </h1>
        
        <p 
          className="text-body-lg" 
          style={{ maxWidth: '600px', marginBottom: '48px', marginInline: 'auto', color: 'rgba(255,255,255,0.9)' }}
        >
          Delivering exceptional spaces through uncompromising execution and refined interior design.
        </p>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
    </section>
  );
};

export default HeroContent;
