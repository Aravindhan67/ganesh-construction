import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { services } from '../data/services';

const Services = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container">

        {/* Hero */}
        <section style={{ marginBottom: '60px' }}>
          <SectionHeading>EXPERTISE<br />THAT BUILDS.</SectionHeading>
          <div className="grid-12" style={{ marginTop: '40px' }}>
            <div className="col" style={{ gridColumn: 'span 5' }}>
              <ScrollReveal delay={0.4} animation="slide-up">
                <div style={{ width: '100%', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src="/images/hero_bg.png" alt="Construction expertise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            </div>
            <div className="col" style={{ gridColumn: '7 / span 6' }}>
              <ScrollReveal delay={0.6} animation="slide-up">
                <p className="text-body-lg">
                  We leverage decades of experience to deliver projects that stand the test of time. From complex structural foundations to high-end architectural finishes, our team combines precision engineering with artisanal craft.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {services.map((service, index) => (
              <ScrollReveal key={service.id} animation="slide-up">
                <div className="grid-12" style={{
                  paddingBottom: index !== services.length - 1 ? '120px' : '0',
                  borderBottom: index !== services.length - 1 ? '1px solid var(--color-concrete-gray)' : 'none'
                }}>
                  {/* Text Content */}
                  <div className="col" style={{ gridColumn: index % 2 === 0 ? '1 / span 5' : '8 / span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="service-number" style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: '5rem',
                      fontWeight: 800,
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                      marginBottom: '24px'
                    }}>
                      {service.num}
                    </div>
                    <h2 style={{ fontSize: '2rem', letterSpacing: '0.05em', lineHeight: 1.2, marginBottom: '32px' }}>
                      {service.title}
                    </h2>

                    <p className="text-body-lg" style={{ marginBottom: '48px' }}>
                      {service.description}
                    </p>

                    <h4 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '24px' }}>
                      Capabilities
                    </h4>

                    <ul style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '16px',
                      color: 'var(--color-text-secondary)'
                    }}>
                      {service.capabilities.map((cap, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Content */}
                  <div className="col" style={{ gridColumn: index % 2 === 0 ? '7 / span 6' : '1 / span 6', gridRow: 1 }}>
                    <div style={{ width: '100%', height: '500px', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Services;
