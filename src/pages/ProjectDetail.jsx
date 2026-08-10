import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import TiltedCard from '../components/reactbits/TiltedCard';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];
  
  useEffect(() => {
    if (!project) {
      navigate('/404', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <main>
      {/* Hero */}
      <section style={{ height: '100vh', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(247,247,247,1) 0%, transparent 70%)' }} />
        
        <div className="container" style={{ position: 'absolute', bottom: '80px', left: 0, right: 0 }}>
          <ScrollReveal animation="slide-up">
            <h1 className="text-hero" style={{ marginBottom: '24px' }}>{project.title}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Info */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--color-concrete-gray)' }}>
        <div className="container grid-12">
          <div className="col" style={{ '--col-desktop': 3, '--col-mobile': 2 }}>
            <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Location</div>
            <div style={{ fontWeight: 500 }}>{project.location}</div>
          </div>
          <div className="col" style={{ '--col-desktop': 3, '--col-mobile': 2 }}>
            <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Type</div>
            <div style={{ fontWeight: 500 }}>{project.type}</div>
          </div>
          <div className="col" style={{ '--col-desktop': 3, '--col-mobile': 2 }}>
            <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Status</div>
            <div style={{ fontWeight: 500 }}>{project.status}</div>
          </div>
          <div className="col" style={{ '--col-desktop': 3, '--col-mobile': 2 }}>
            <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Area</div>
            <div style={{ fontWeight: 500 }}>{project.area}</div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: '60px 0' }}>
        <div className="container grid-12">
          <div className="col" style={{ '--col-desktop': 4 }}>
            <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.05em', marginBottom: '24px' }}>SERVICES PROVIDED</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--color-text-secondary)' }}>
              {project.services?.map(s => <li key={s}>— {s}</li>)}
            </ul>
          </div>
          <div className="col" style={{ '--col-desktop': 7, gridColumnStart: 6 }}>
            <div style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
              {project.fullDescription || project.description}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <section style={{ padding: '0 0 60px 0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '24px', paddingLeft: 'var(--container-padding)', overflowX: 'auto', paddingBottom: '40px' }}>
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i}`} style={{ height: '600px', width: 'auto', objectFit: 'cover' }} />
            ))}
          </div>
        </section>
      )}

      {/* Technical Details */}
      {Object.keys(project.technicalDetails || {}).length > 0 && (
        <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <SectionHeading>TECHNICAL<br/>DETAILS.</SectionHeading>
            <div className="grid-12" style={{ marginTop: '32px' }}>
              {Object.entries(project.technicalDetails).map(([key, val]) => (
                <div key={key} className="col" style={{ '--col-desktop': 4, marginBottom: '40px' }}>
                  <div style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '16px', fontWeight: 600 }}>
                    {key}
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer Review */}
      {project.review && (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-concrete-gray)' }}>
          <div className="container">
            <SectionHeading>CLIENT<br/>FEEDBACK.</SectionHeading>
            
            <div style={{ marginTop: '40px', maxWidth: '800px' }}>
              <ScrollReveal animation="slide-up">
                <div style={{ 
                  backgroundColor: 'var(--color-bg-primary)',
                  padding: '40px',
                  borderRadius: '16px',
                  border: '1px solid var(--color-concrete-gray)',
                  boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
                  position: 'relative'
                }}>
                  {/* Quote icon watermark */}
                  <div style={{ 
                    position: 'absolute', top: '20px', right: '30px', 
                    fontFamily: 'var(--font-primary)', fontSize: '8rem', color: 'var(--color-concrete-gray)', 
                    opacity: 0.3, lineHeight: 0.5, pointerEvents: 'none' 
                  }}>
                    "
                  </div>

                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p style={{ 
                    fontSize: '1.25rem', 
                    lineHeight: 1.6, 
                    color: 'var(--color-text-primary)',
                    marginBottom: '32px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    "{project.review.text}"
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.25rem'
                    }}>
                      {project.review.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'var(--font-primary)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        marginBottom: '4px'
                      }}>
                        {project.review.author}
                      </div>
                      <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.875rem' }}>
                        {project.review.role}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {project.related && project.related.length > 0 && (
        <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-concrete-gray)' }}>
          <div className="container">
            <SectionHeading>RELATED<br/>PROJECTS.</SectionHeading>
            
            <div className="grid-12" style={{ marginTop: '40px', alignItems: 'start' }}>
              {project.related.map((relatedId, idx) => {
                const relatedProj = projects.find(p => p.id === relatedId);
                if (!relatedProj) return null;
                
                return (
                  <div key={relatedId} className="col" style={{ '--col-desktop': 6 }}>
                    <ScrollReveal delay={idx * 0.1} animation="slide-up">
                      <Link to={`/projects/${relatedProj.id}`}>
                        <TiltedCard 
                          imageSrc={relatedProj.image}
                          altText={relatedProj.title}
                          containerHeight="400px"
                          imageHeight="400px"
                          scaleOnHover={1.03}
                          rotateAmplitude={3}
                          displayOverlayContent={true}
                          overlayContent={
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(247, 247, 247, 0.8) 0%, transparent 60%)' }} />
                          }
                        />
                        <div style={{ marginTop: '24px' }}>
                          <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{relatedProj.title}</h4>
                          <div style={{ display: 'flex', gap: '12px', color: 'var(--color-accent)', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            <span>{relatedProj.type}</span>
                            <span>•</span>
                            <span>{relatedProj.location}</span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--color-concrete-gray)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={`/projects/${prevProject.id}`} style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', fontWeight: 600 }}>
            ← Previous
          </Link>
          <Link to="/projects" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', fontWeight: 600 }}>
            All Projects
          </Link>
          <Link to={`/projects/${nextProject.id}`} style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', fontWeight: 600 }}>
            Next →
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ProjectDetail;
