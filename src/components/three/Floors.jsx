import React, { useMemo } from 'react';

const Floors = ({ progress }) => {
  // Floors appear 0.35 - 0.60
  const p = Math.max(0, Math.min(1, (progress - 0.35) / 0.25));
  const eased = 1 - Math.pow(1 - p, 3);

  const numFloors = 10;
  const floorHeight = 1.2;
  const buildingSize = 10.2; // Slightly larger than columns
  const floorThickness = 0.15;

  if (p === 0) return null;

  return (
    <group>
      {Array.from({ length: numFloors }).map((_, f) => {
        // Stagger by floor
        const floorDelay = f / numFloors;
        // The individual floor progress
        const floorProgress = Math.max(0, Math.min(1, (eased - floorDelay) * (1 / (1 - floorDelay))));
        
        if (floorProgress === 0) return null;

        // Slide in from center (scale out) and slight drop
        const scaleX = floorProgress;
        const scaleZ = floorProgress;
        const yOffset = (1 - floorProgress) * 0.5;

        return (
          <mesh 
            key={f} 
            position={[0, (f * floorHeight) + floorHeight + yOffset, 0]}
          >
            <boxGeometry args={[buildingSize * scaleX, floorThickness, buildingSize * scaleZ]} />
            <meshStandardMaterial color="#D1D5DB" roughness={0.8} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Floors;
