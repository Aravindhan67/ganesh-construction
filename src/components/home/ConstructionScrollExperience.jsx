import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment as DreiEnvironment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AlignedModel from './AlignedModel';
import SceneLoader from './SceneLoader';

gsap.registerPlugin(ScrollTrigger);

import DustParticles from './DustParticles';

const SceneContent = ({ progressRef }) => {
  const buildingWorldRef = useRef();
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  
  // Dynamic emergence calculated from the building's bounding box height
  const [emergenceDistance, setEmergenceDistance] = useState(20); // Fallback
  const finalY = 0; // The target ground level

  useFrame(({ camera }) => {
    const p = progressRef.current; // 0 to 1

    // 1. Model Animations
    // Building rises from p=0.3 to p=0.85
    if (buildingWorldRef.current) {
      if (p < 0.3) {
        buildingWorldRef.current.position.y = finalY - emergenceDistance;
      } else if (p > 0.85) {
        buildingWorldRef.current.position.y = finalY;
      } else {
        const buildP = (p - 0.3) / 0.55;
        const easedP = 1 - Math.pow(1 - buildP, 3); // Ease out cubic
        buildingWorldRef.current.position.y = (finalY - emergenceDistance) + (emergenceDistance * easedP);
      }
    }

    // 2. Camera Animations
    const targetPos = new THREE.Vector3();
    const targetLookAt = new THREE.Vector3();

    if (p < 0.2) {
      // 0% - 20%: Wide cinematic view, slow push
      const subP = p / 0.2;
      targetPos.set(
        0, 
        THREE.MathUtils.lerp(15, 12, subP), 
        THREE.MathUtils.lerp(35, 30, subP)
      );
      targetLookAt.set(0, 0, 0);
    } else if (p < 0.4) {
      // 20% - 40%: Camera moves slightly closer
      const subP = (p - 0.2) / 0.2;
      const ease = 1 - Math.pow(1 - subP, 2);
      targetPos.set(
        0,
        THREE.MathUtils.lerp(12, 10, ease),
        THREE.MathUtils.lerp(30, 20, ease)
      );
      targetLookAt.set(0, THREE.MathUtils.lerp(0, 2, ease), 0);
    } else if (p < 0.85) {
      // 40% - 85%: Subtle cinematic orbit (begins around 60%, but scales across this phase)
      const subP = (p - 0.4) / 0.45;
      const angle = subP * Math.PI / 3; // Orbit 60 degrees
      targetPos.set(
        20 * Math.sin(angle),
        10 + (subP * 5),
        20 * Math.cos(angle)
      );
      targetLookAt.set(0, 2 + (subP * 3), 0);
    } else {
      // 85% - 100%: Wide final reveal
      const subP = (p - 0.85) / 0.15;
      const ease = 1 - Math.pow(1 - subP, 3);
      // Orbit reached (20*sin60, 15, 20*cos60) roughly (17, 15, 10)
      targetPos.set(
        THREE.MathUtils.lerp(20 * Math.sin(Math.PI / 3), 20, ease),
        THREE.MathUtils.lerp(15, 25, ease),
        THREE.MathUtils.lerp(20 * Math.cos(Math.PI / 3), 35, ease)
      );
      targetLookAt.set(0, THREE.MathUtils.lerp(5, 8, ease), 0);
    }

    // Smoothly interpolate current camera position to target
    camera.position.lerp(targetPos, 0.05);
    cameraTarget.current.lerp(targetLookAt, 0.05);
    camera.lookAt(cameraTarget.current);
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#FFFFFF" />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.2} 
        color="#B8860B"
        castShadow
      />
      <directionalLight 
        position={[-10, 10, -10]} 
        intensity={0.6} 
        color="#9CA3AF"
      />
      <fog attach="fog" args={['#F7F7F7', 30, 80]} />
      <DreiEnvironment preset="city" />

      {/* Dynamic dust particles linked to scroll progress */}
      <DustParticles progress={progressRef.current} />

      {/* MASTER REFERENCE - The land sets the bounds */}
      <AlignedModel url="/model/emptyland.glb" scale={1} />
      
      {/* TWO-GROUP ARCHITECTURE */}
      {/* Outer Group: Controls world translation Y via GSAP */}
      <group ref={buildingWorldRef} position={[0, finalY - emergenceDistance, 0]}>
        
        {/* Inner Group: Handles precise localized alignment to the land */}
        <AlignedModel 
          url="/model/building.glb" 
          scale={0.11} 
          rotation={[0, 0, 0]} 
          positionOffset={[0, 0, 0]} 
          onLoaded={(info) => {
            // Calculate a healthy emergence distance based on its actual bounding box size
            setEmergenceDistance(info.height * 1.05);
          }}
        />

      </group>
    </>
  );
};

const ConstructionScrollExperience = () => {
  const progressRef = useRef(0);
  const triggerRef = useRef(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: canvasContainerRef.current, // GSAP handles the sticky behavior bulletproof
      pinSpacing: false, // Essential since the parent is already 600vh tall and absolute
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
      <div ref={canvasContainerRef} style={{ height: '100vh', width: '100%' }}>
        <Canvas 
          camera={{ position: [0, 15, 35], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={<SceneLoader />}>
            <SceneContent progressRef={progressRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ConstructionScrollExperience;
