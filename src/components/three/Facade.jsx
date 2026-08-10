import React from 'react';

const Facade = ({ progress }) => {
  // Facade appears 0.60 - 0.85
  const p = Math.max(0, Math.min(1, (progress - 0.60) / 0.25));
  const eased = 1 - Math.pow(1 - p, 3);

  const numFloors = 10;
  const floorHeight = 1.2;
  const buildingSize = 10.4; // Extends slightly past floors
  const totalHeight = numFloors * floorHeight;

  if (p === 0) return null;

  return (
    <group position={[0, totalHeight / 2, 0]}>
      {/* 4 sides of the glass facade */}
      {[
        [0, 0, buildingSize / 2], // Front
        [0, 0, -buildingSize / 2], // Back
        [buildingSize / 2, 0, 0], // Right
        [-buildingSize / 2, 0, 0], // Left
      ].map((pos, i) => {
        const isSide = i > 1;
        const width = isSide ? buildingSize : buildingSize;
        const height = totalHeight;

        // Facade slides up or opacity fades in
        return (
          <mesh 
            key={i} 
            position={[pos[0], pos[1] - (height/2 * (1 - eased)), pos[2]]}
            rotation={[0, isSide ? Math.PI / 2 : 0, 0]}
          >
            <planeGeometry args={[width, height * eased]} />
            <meshPhysicalMaterial 
              color="#E2E8F0"
              transparent
              opacity={eased * 0.7}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        );
      })}
      
      {/* Subtle blueprint grid around the building during construction */}
      <gridHelper 
        args={[buildingSize, 10, '#B8860B', '#E5E7EB']} 
        position={[0, 0, buildingSize/2 + 0.01]} 
        rotation={[Math.PI/2, 0, 0]} 
        visible={eased > 0.5}
      />
    </group>
  );
};

export default Facade;
