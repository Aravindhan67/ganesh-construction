import React, { useMemo } from 'react';

const Columns = ({ progress }) => {
  // Columns appear 0.15 - 0.35
  const p = Math.max(0, Math.min(1, (progress - 0.15) / 0.20));
  const eased = 1 - Math.pow(1 - p, 3);

  const numFloors = 10;
  const floorHeight = 1.2;
  const columnsPerSide = 4;
  const buildingSize = 10;
  const spacing = buildingSize / (columnsPerSide - 1);

  const columns = useMemo(() => {
    const cols = [];
    for (let f = 0; f < numFloors; f++) {
      for (let x = 0; x < columnsPerSide; x++) {
        for (let z = 0; z < columnsPerSide; z++) {
          // Only outer columns for a hollow center or all for solid structure
          if (x === 0 || x === columnsPerSide - 1 || z === 0 || z === columnsPerSide - 1) {
            cols.push({
              position: [
                -buildingSize / 2 + x * spacing,
                f * floorHeight + floorHeight / 2,
                -buildingSize / 2 + z * spacing
              ],
              floorIndex: f
            });
          }
        }
      }
    }
    return cols;
  }, []);

  if (p === 0) return null;

  return (
    <group>
      {columns.map((col, i) => {
        // Stagger animation based on floor
        const floorDelay = col.floorIndex / numFloors;
        const colProgress = Math.max(0, Math.min(1, (eased - floorDelay) * (1 / (1 - floorDelay))));
        
        if (colProgress === 0) return null;

        const scaleY = colProgress;
        
        return (
          <mesh 
            key={i} 
            position={[col.position[0], col.position[1] - (floorHeight/2) + (floorHeight * scaleY / 2), col.position[2]]}
          >
            <boxGeometry args={[0.3, floorHeight * scaleY, 0.3]} />
            <meshStandardMaterial color="#9CA3AF" roughness={0.7} metalness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Columns;
