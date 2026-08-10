import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment as DreiEnvironment, Preload } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Building from '../three/Building';

gsap.registerPlugin(ScrollTrigger);

// Custom proxy component to pass the ref value into the 3D scene without React re-renders
const SceneContent = ({ progressRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We can use a GSAP ticker to update state if needed, or simply read the ref inside Building via useFrame.
    // For simplicity of passing to children, we'll update local state here but ideally via a store or context.
    const updateProgress = () => {
      setProgress(progressRef.current);
    };
    gsap.ticker.add(updateProgress);
    return () => gsap.ticker.remove(updateProgress);
  }, [progressRef]);

  return (
    <>
      <Building scrollProgress={progress} />
      <DreiEnvironment preset="city" />
      <Preload all />
    </>
  );
};

const ConstructionScene = () => {
  const progressRef = useRef(0);
  const triggerRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1, // Smooth scrub
      onUpdate: (self) => {
        progressRef.current = self.progress;
      }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '600vh', zIndex: 0, pointerEvents: 'none' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%' }}>
        <Canvas 
          camera={{ position: [15, 10, 15], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <SceneContent progressRef={progressRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ConstructionScene;
