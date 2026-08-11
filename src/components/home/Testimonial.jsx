import React, { useState } from 'react';
import ScrollReveal from '../reactbits/ScrollReveal';
import AccordionGallery from '../reactbits/AccordionGallery';

const reviews = [
  { 
    image: '/images/testimonials/aurelia.png', 
    label: 'Meera Sharma', 
    text: "Ganesh Properties brought exceptional clarity to a complex project. Their ability to balance design ambition with technical discipline made every stage feel controlled and confident.",
    role: "Lead Architect, Studio Inscape"
  },
  {
    image: '/images/testimonials/nexus.png',
    label: 'James Hasting',
    text: "The precision in their concrete finishes and the rigorous attention to structural integrity set Ganesh Properties apart from any other firm we've worked with. Outstanding execution.",
    role: "Director of Development, Nexus Commercial"
  },
  {
    image: '/images/testimonials/horizon.png',
    label: 'Elena Rostova',
    text: "From the initial feasibility study to the final handover, their team demonstrated an uncompromising commitment to quality. Our headquarters stands as a testament to their legacy.",
    role: "CEO, Horizon Corporate"
  },
  {
    image: '/images/testimonials/chen.png',
    label: 'David Chen',
    text: "A truly collaborative partner. Ganesh Properties navigated challenging site conditions and tight timelines without ever compromising on safety, aesthetic details, or structural excellence.",
    role: "Principal, Chen & Associates"
  },
  {
    image: '/images/testimonials/zenith.png',
    label: 'Sarah Jenkins',
    text: "Their disciplined approach to construction management gave our investors total peace of mind. The project was delivered flawlessly, exceeding our highest expectations.",
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
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/OBaYB9tXYEc?si=OGpasJ417Vm4H8OK" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Testimonial;
