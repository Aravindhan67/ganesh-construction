import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Environment = ({ progress }) => {
  // Environment and lighting reveal 0.85 - 1.0
  const p = Math.max(0, Math.min(1, (progress - 0.85) / 0.15));
  const eased = 1 - Math.pow(1 - p, 3);
  
  const lightRef = useRef();

  return (
    <group>
      {/* Base ambient lighting */}
      <ambientLight intensity={0.4 + (eased * 0.4)} color="#FFFFFF" />
      
      {/* Main directional light */}
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1 + (eased * 1.5)} 
        color="#B8860B"
        castShadow
      />

      {/* Fill light */}
      <directionalLight 
        position={[-10, 10, -10]} 
        intensity={0.5 + (eased * 0.5)} 
        color="#9CA3AF"
      />

      {/* Background fog to blend the horizon */}
      <fog attach="fog" args={['#F7F7F7', 20, 50]} />

      {/* Landscape Platform */}
      {eased > 0 && (
        <mesh position={[0, -0.55, 0]}>
          <boxGeometry args={[40, 0.1, 40]} />
          <meshStandardMaterial 
            color="#111313" 
            transparent
            opacity={eased}
            roughness={1}
          />
        </mesh>
      )}
    </group>
  );
};

export default Environment;
