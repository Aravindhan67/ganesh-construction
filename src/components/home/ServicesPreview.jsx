import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../reactbits/ScrollReveal';

const ServicesPreview = () => {
  const services = [
    { num: '01', title: 'DESIGN & BUILD', desc: 'An integrated approach that connects concept, engineering and execution from the first sketch to final handover.' },
    { num: '02', title: 'GENERAL CONTRACTING', desc: 'Disciplined project delivery supported by experienced teams, trusted partners and transparent management.' },
    { num: '03', title: 'PROJECT MANAGEMENT', desc: 'Clear planning, precise coordination and rigorous control across every phase of the construction lifecycle.' },
    { num: '04', title: 'PREMIUM INTERIORS', desc: 'Thoughtfully executed interior environments where material, detail and craftsmanship meet.' }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-primary)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading>CAPABILITY<br/>WITHOUT COMPROMISE.</SectionHeading>
        </ScrollReveal>
        
        <div className="grid-12" style={{ marginTop: '32px' }}>
          {services.map((service, i) => (
            <div key={i} className="col" style={{ '--col-desktop': 6, marginBottom: '64px' }}>
              <ScrollReveal delay={i * 0.1} animation="slide-up">
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontSize: '1.5rem', 
                    fontWeight: 700,
                    color: 'var(--color-accent)'
                  }}>
                    {service.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', letterSpacing: '0.05em' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '400px' }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
