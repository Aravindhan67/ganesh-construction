import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SplitText from '../components/reactbits/SplitText';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY', 'INTERIORS'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.type.toUpperCase().includes(activeFilter) || (activeFilter === 'RESIDENTIAL' && p.type === 'Private Villa') || (activeFilter === 'RESIDENTIAL' && p.type === 'Private Residence') || (activeFilter === 'COMMERCIAL' && p.type === 'Mixed Use'));

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container">
        <SectionHeading>
          <SplitText text="SELECTED WORK." delay={60} />
        </SectionHeading>
        <p className="text-body-lg" style={{ maxWidth: '600px', marginBottom: '80px' }}>
          Explore a portfolio of places shaped by context, performance and enduring design.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '80px' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 24px',
                border: '1px solid',
                borderColor: activeFilter === filter ? 'var(--color-accent)' : 'var(--color-concrete-gray)',
                backgroundColor: activeFilter === filter ? 'var(--color-accent)' : 'transparent',
                color: activeFilter === filter ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-primary)',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid-12" style={{ alignItems: 'start' }}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="col"
                style={{ 
                  '--col-desktop': 6,
                  marginBottom: '40px'
                }}
              >
                <Link to={`/projects/${project.id}`} style={{ display: 'block', group: 'true' }}>
                  <div style={{ 
                    overflow: 'hidden', 
                    aspectRatio: '4/3',
                    marginBottom: '24px'
                  }}>
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{project.title}</h3>
                  <div style={{ color: 'var(--color-steel-gray)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.type} • {project.location}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Projects;
