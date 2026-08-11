import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SplitText from '../components/reactbits/SplitText';
import ShinyText from '../components/reactbits/ShinyText';
import TiltedCard from '../components/reactbits/TiltedCard';
import { team } from '../data/team';

const About = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <SectionLabel>
            <ShinyText text="About Ganesh Properties" disabled={false} speed={3} className="" />
          </SectionLabel>
          <SectionHeading>
            <SplitText text="PRECISION IS OUR FOUNDATION." delay={50} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />
          </SectionHeading>
          <ScrollReveal delay={0.2} animation="slide-up">
            <p className="text-body-lg" style={{ maxWidth: '800px', marginTop: '24px', marginBottom: '40px' }}>
              We are builders, engineers, planners and problem-solvers united by one belief: the spaces we create should remain relevant long after they are complete.
            </p>
            <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src="/images/about_hero.png" alt="Precision architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <SectionHeading style={{ textAlign: 'center', marginBottom: '48px' }}>
            <SplitText text="A COMPANY BUILT TO STAY." delay={50} textAlign="center" />
          </SectionHeading>
          <div className="grid-12">
            <div className="col" style={{ gridColumn: 'span 5' }}>
              <ScrollReveal animation="slide-up" delay={0.2} style={{ height: '100%' }}>
                <img src="/images/about_story.png" alt="Architects on site" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
              </ScrollReveal>
            </div>
          <div className="col" style={{ gridColumn: 'span 7', display: 'flex' }}>
            <ScrollReveal animation="slide-up" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flexGrow: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <p>Ganesh Properties was founded with a simple idea: construction should feel as considered as the architecture itself.</p>
                <p>Over the years, that idea has shaped how we plan, communicate and build. We bring architects, engineers, consultants and skilled teams together around a single shared objective—delivering projects without losing sight of the details that define them.</p>
                <p>Our work spans private residences, commercial environments, mixed-use developments and complex infrastructure. While every project is different, our approach remains consistent: understand deeply, plan precisely and execute without compromise.</p>
              </div>
              
              {/* Added stats block to fill vertical space */}
              <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '32px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', border: '1px solid rgba(17, 19, 19, 0.05)' }}>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '8px', lineHeight: 1 }}>20+</div>
                  <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'var(--color-text-primary)' }}>Years of Excellence</div>
                </div>
                <div style={{ padding: '32px', backgroundColor: 'var(--color-bg-primary)', borderRadius: '4px', border: '1px solid rgba(17, 19, 19, 0.05)' }}>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '8px', lineHeight: 1 }}>150+</div>
                  <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'var(--color-text-primary)' }}>Projects Delivered</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid-12">
            {[
              { num: '01', title: 'OWNERSHIP', desc: 'We take responsibility for outcomes, not just tasks.' },
              { num: '02', title: 'PRECISION', desc: 'We believe small details determine long-term performance.' },
              { num: '03', title: 'TRANSPARENCY', desc: 'We communicate clearly because trust depends on visibility.' },
              { num: '04', title: 'ENDURANCE', desc: 'We build with materials, systems and decisions that stand the test of time.' }
            ].map((val, i) => (
              <div key={i} className="col" style={{ gridColumn: 'span 6', padding: '40px', border: '1px solid var(--color-concrete-gray)', marginBottom: '24px' }}>
                <ScrollReveal delay={i * 0.1} animation="slide-up">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: 'var(--font-primary)', color: 'var(--color-accent)', fontWeight: 700 }}>{val.num}</span>
                    <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.05em' }}>{val.title}</h3>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{val.desc}</p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <SectionHeading>
            <SplitText text="THE PEOPLE BEHIND THE BUILD." delay={50} />
          </SectionHeading>
          
          <div className="grid-12" style={{ marginTop: '32px' }}>
            {team.map((member, i) => (
              <div key={member.id} className="col" style={{ gridColumn: 'span 3' }}>
                <ScrollReveal delay={i * 0.1} animation="slide-up">
                  <div style={{ marginBottom: '24px', cursor: 'pointer' }}>
                    <TiltedCard
                      imageSrc={member.image}
                      altText={member.name}
                      captionText={member.role}
                      containerHeight="350px"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                    />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', letterSpacing: '0.05em', marginBottom: '8px' }}>{member.name}</h4>
                  <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.875rem' }}>{member.role}</div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section style={{ padding: '60px 0' }}>
        <div className="container grid-12">
          <div className="col" style={{ gridColumn: '2 / 12', textAlign: 'center' }}>
            <ScrollReveal animation="slide-up">
              <SectionHeading className="mx-auto text-center" style={{ textAlign: 'center' }}>
                <SplitText text="QUALITY ISN'T AN INSPECTION. IT'S A SYSTEM." delay={50} textAlign="center" />
              </SectionHeading>
              <p className="text-body-lg" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
                From material approval to final handover, quality is embedded into our process. Defined checkpoints, experienced supervision and documented accountability help us protect what matters most.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
