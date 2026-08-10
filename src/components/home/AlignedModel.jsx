import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const AlignedModel = ({ 
  url, 
  scale = 1, 
  visible = true,
  positionOffset = [0, 0, 0],
  rotation = [0, 0, 0],
  onLoaded
}) => {
  const { scene } = useGLTF(url);
  
  // Clone the scene so we can mutate it safely without affecting other instances if any
  const { clonedScene, boundingHeight } = useMemo(() => {
    const clone = scene.clone();
    
    // Calculate bounding box
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const min = box.min;
    const max = box.max;
    const bHeight = max.y - min.y;
    
    // Center the model on X and Z, and place the bottom at Y = 0
    clone.position.x = -center.x;
    clone.position.y = -min.y;
    clone.position.z = -center.z;
    
    // Enable shadows for all meshes
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    
    return { clonedScene: clone, boundingHeight: bHeight * scale };
  }, [scene, scale]);

  // Inform parent of the computed true world height when mounted
  React.useEffect(() => {
    if (onLoaded) {
      onLoaded({ height: boundingHeight });
    }
  }, [boundingHeight, onLoaded]);

  if (!visible) return null;

  return (
    <group position={positionOffset} scale={scale} rotation={rotation}>
      <primitive object={clonedScene} />
    </group>
  );
};

// Preload the models outside the component to help with loading times
useGLTF.preload('/model/emptyland.glb');
useGLTF.preload('/model/building.glb');

export default AlignedModel;
