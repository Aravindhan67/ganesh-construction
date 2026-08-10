import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Foundation = ({ progress }) => {
  const groupRef = useRef();
  
  // Foundation appears 0 - 0.15
  const localProgress = Math.max(0, Math.min(1, progress / 0.15));
  
  // Easing function
  const eased = 1 - Math.pow(1 - localProgress, 3);
  
  const yPos = -0.5 + (eased * 0.5); // Rises from -0.5 to 0
  
  return (
    <group ref={groupRef} position={[0, yPos, 0]}>
      {/* Main Slab */}
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[12, 0.5, 12]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          transparent 
          opacity={eased}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Blueprint grid effect */}
      <gridHelper args={[20, 20, '#9CA3AF', '#E5E7EB']} position={[0, -0.49, 0]} />
    </group>
  );
};

export default Foundation;
