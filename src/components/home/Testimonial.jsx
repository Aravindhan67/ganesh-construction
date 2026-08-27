import React, { useState } from 'react';
import ScrollReveal from '../reactbits/ScrollReveal';
import AccordionGallery from '../reactbits/AccordionGallery';

const reviews = [
  { 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', 
    label: 'Elena Rostova', 
    text: "The interior execution was flawless. Dazzy Interiors brought our vision to life with exceptional attention to material quality and spatial flow.",
    role: "CEO, Horizon Corporate"
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    label: 'James Hasting',
    text: "Their disciplined approach to high-end residential interiors gave us total peace of mind. Every finish, from the bespoke millwork to the lighting, was perfect.",
    role: "Director, Nexus Residential"
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    label: 'Meera Sharma',
    text: "Balancing design ambition with practical execution is rarely easy, but their interior contracting team made it look effortless. Truly outstanding work.",
    role: "Lead Designer, Studio Inscape"
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    label: 'David Chen',
    text: "A truly collaborative partner in commercial interiors. They navigated tight timelines without ever compromising on aesthetic details or execution quality.",
    role: "Principal, Chen & Associates"
  },
  {
    image: 'https://images.unsplash.com/photo-1598928506311-c55dedbfc181?auto=format&fit=crop&w=800&q=80',
    label: 'Sarah Jenkins',
    text: "From the initial material selection to the final handover, their team demonstrated an uncompromising commitment to crafting beautiful, functional spaces.",
    role: "Managing Partner, Zenith Investments"
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-primary)', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        
        <ScrollReveal animation="slide-up">
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <h2 className="text-h2">CLIENT LEGACIES.</h2>
            <p className="text-body" style={{ marginTop: '16px', color: 'var(--color-steel-gray)' }}>
              Hear from the partners and visionaries we've built with.
            </p>
          </div>
          
          <AccordionGallery 
            items={reviews} 
            defaultIndex={2} 
            expandRatio={0.4} 
            onActiveChange={setActiveIndex}
            height={320}
            accentColor="var(--color-accent)"
            overlayColor="#000000"
          />
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ 
              fontFamily: 'var(--font-primary)',
              fontSize: '6rem',
              color: 'var(--color-concrete-gray)',
              lineHeight: 0.5,
              marginBottom: '32px'
            }}>
              "
            </div>
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
              fontWeight: 400, 
              lineHeight: 1.4, 
              maxWidth: '900px',
              marginBottom: '40px',
              fontStyle: 'italic',
              minHeight: '130px',
              transition: 'opacity 0.3s ease'
            }}>
              {reviews[activeIndex].text}
            </h3>
            
            <div>
              <div style={{ 
                fontFamily: 'var(--font-primary)',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
              }}>
                {reviews[activeIndex].label}
              </div>
              <div style={{ color: 'var(--color-steel-gray)', fontSize: '1rem' }}>
                {reviews[activeIndex].role}
              </div>
            </div>

            <div style={{ 
              width: '100%', 
              maxWidth: '800px', 
              margin: '60px auto 0', 
              aspectRatio: '16/9', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
            }}>
              <img 
                key={activeIndex} // Force re-render for smooth transition if needed, though simple src change is fine
                src={reviews[activeIndex].image} 
                alt={`Interior project for ${reviews[activeIndex].label}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Testimonial;
