import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

const SceneLoader = () => {
  const { active, progress } = useProgress();

  return (
    <Html center zIndexRange={[100, 100]}>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '-50vh', // Adjust because Html centers it
              left: '-50vw',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'var(--color-bg-primary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
          >
            <div style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>
              GANESH PROPERTIES
            </div>
            
            <div style={{
              width: '200px',
              height: '2px',
              backgroundColor: 'var(--color-concrete-gray)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  backgroundColor: 'var(--color-accent)'
                }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              />
            </div>
            
            <div style={{
              marginTop: '16px',
              fontFamily: 'var(--font-secondary)',
              fontSize: '0.75rem',
              color: 'var(--color-steel-gray)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Loading 3D Models {Math.round(progress)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
};

export default SceneLoader;
