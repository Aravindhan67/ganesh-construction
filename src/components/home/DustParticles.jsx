import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DustParticles = ({ progress, area = 40, count = 1000 }) => {
  const pointsRef = useRef();
  const materialRef = useRef();

  // Create random positions and unique speeds for each particle
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Randomly scatter particles across the construction area (ground level to slightly above)
      pos[i * 3] = (Math.random() - 0.5) * area;
      pos[i * 3 + 1] = Math.random() * 5; // Mostly near the ground (0 to 5)
      pos[i * 3 + 2] = (Math.random() - 0.5) * area;
      
      // Speed multiplier
      spd[i] = Math.random() * 0.5 + 0.1;
    }
    return { positions: pos, speeds: spd };
  }, [count, area]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slowly float particles upwards and wrap around
    const time = state.clock.getElapsedTime();
    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      // Y axis
      positionsArray[i * 3 + 1] += Math.sin(time * 0.5 + speeds[i]) * 0.01 + 0.01;
      // X axis (gentle drift)
      positionsArray[i * 3] += Math.cos(time * 0.2 + speeds[i]) * 0.005;
      
      // Wrap around if it goes too high
      if (positionsArray[i * 3 + 1] > 10) {
        positionsArray[i * 3 + 1] = 0;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Fade opacity based on progress:
    // Starts fading in at 20% (0.2), peaks at 50% (0.5), fades out towards 90% (0.9)
    if (materialRef.current) {
      let targetOpacity = 0;
      if (progress >= 0.2 && progress <= 0.85) {
        // Bell curve-like opacity
        const normalized = (progress - 0.2) / 0.65; // 0 to 1 mapping for the emergence duration
        targetOpacity = Math.sin(normalized * Math.PI) * 0.5; // Max opacity 0.5
      }
      // Smoothly interpolate material opacity
      materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOpacity, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        ref={materialRef}
        size={0.15} 
        color="#D1D5DB" 
        transparent 
        opacity={0} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default DustParticles;
