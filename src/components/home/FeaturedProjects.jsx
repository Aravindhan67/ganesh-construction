import React from 'react';
import SectionLabel from '../common/SectionLabel';
import SectionHeading from '../common/SectionHeading';
import TiltedCard from '../reactbits/TiltedCard';
import ScrollReveal from '../reactbits/ScrollReveal';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <SectionLabel>02 — Selected Work</SectionLabel>
        <SectionHeading>STRUCTURES WITH<br/>A POINT OF VIEW.</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '16px' }}>
          {featured.map((project, index) => (
            <div key={project.id} className="grid-12" style={{ alignItems: 'center', width: '100%' }}>
              
              <div className="col" style={{ 
                gridColumn: index % 2 === 0 ? '1 / 8' : '6 / 13',
                gridRow: 1
              }}>
                <ScrollReveal animation={index % 2 === 0 ? 'slide-right' : 'slide-left'} style={{ width: '100%' }}>
                  <Link to={`/projects/${project.id}`} style={{ display: 'block', width: '100%' }}>
                    <TiltedCard 
                      imageSrc={project.image}
                      altText={project.title}
                      containerHeight="clamp(300px, 60vh, 600px)"
                      imageHeight="clamp(300px, 60vh, 600px)"
                      scaleOnHover={1.02}
                      rotateAmplitude={5}
                      displayOverlayContent={true}
                      overlayContent={
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(247, 247, 247, 0.9) 0%, transparent 70%)' }} />
                      }
                    />
                  </Link>
                </ScrollReveal>
              </div>

              <div className="col" style={{ 
                gridColumn: index % 2 === 0 ? '9 / 13' : '1 / 5',
                gridRow: 1,
                padding: '40px 0'
              }}>
                <ScrollReveal delay={0.2} animation="slide-up" style={{ width: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-primary)', fontSize: '4rem', fontWeight: 800, color: 'rgba(17, 19, 19, 0.05)', lineHeight: 1, marginBottom: '24px' }}>
                    0{index + 1}
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '16px', color: 'var(--color-accent)', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' }}>
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  
                  <Link 
                    to={`/projects/${project.id}`}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      borderBottom: '1px solid var(--color-accent)',
                      paddingBottom: '8px',
                      color: 'var(--color-accent)'
                    }}
                  >
                    View Project <ArrowRight size={16} />
                  </Link>
                </ScrollReveal>
              </div>
              
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <ScrollReveal animation="slide-up">
            <Link 
              to="/projects"
              style={{
                display: 'inline-block',
                padding: '20px 48px',
                border: '1px solid var(--color-concrete-gray)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
                e.currentTarget.style.color = 'var(--color-bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              View All Projects
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
