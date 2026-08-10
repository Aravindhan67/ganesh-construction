import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Foundation from './Foundation';
import Columns from './Columns';
import Floors from './Floors';
import Facade from './Facade';
import Environment from './Environment';

const Building = ({ scrollProgress }) => {
  const groupRef = useRef();

  // Subtle floating animation or rotation based on scroll
  useFrame(() => {
    if (groupRef.current) {
      // Very subtle rotation to make it feel alive
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]} scale={0.5}>
      <Foundation progress={scrollProgress} />
      <Columns progress={scrollProgress} />
      <Floors progress={scrollProgress} />
      <Facade progress={scrollProgress} />
      <Environment progress={scrollProgress} />
    </group>
  );
};

export default Building;
