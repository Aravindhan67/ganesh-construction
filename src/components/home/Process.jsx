import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../reactbits/ScrollReveal';

const Process = () => {
  const steps = [
    { num: '01 — DISCOVER', desc: 'We understand the site, ambition, constraints and opportunities before defining the path forward.' },
    { num: '02 — DEFINE', desc: 'We align design, engineering, budget and timeline into one clear execution strategy.' },
    { num: '03 — BUILD', desc: 'Specialist teams and disciplined systems transform plans into measurable progress.' },
    { num: '04 — DELIVER', desc: 'Every detail is reviewed, tested and refined before the project becomes yours.' }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading>HOW GREAT<br/>STRUCTURES HAPPEN.</SectionHeading>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '32px' }}>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} animation="slide-up">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                gap: '40px',
                padding: '40px 0',
                borderBottom: i !== steps.length - 1 ? '1px solid var(--color-concrete-gray)' : 'none'
              }}>
                <div style={{ 
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-primary)'
                }}>
                  {step.num}
                </div>
                <div style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                  {step.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
