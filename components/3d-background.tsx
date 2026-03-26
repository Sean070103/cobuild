'use client';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function AnimatedSpheres() {
  const groupRef = useRef(null);

  return (
    <group ref={groupRef}>
      <Sphere args={[2, 32, 32]} position={[-5, 0, 0]}>
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          wireframe={false}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      <Sphere args={[1.5, 32, 32]} position={[5, 2, -3]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          wireframe={false}
          metalness={0.7}
          roughness={0.3}
        />
      </Sphere>

      <Sphere args={[1, 32, 32]} position={[0, -3, -5]}>
        <meshStandardMaterial
          color="#ec4899"
          emissive="#be185d"
          emissiveIntensity={0.5}
          wireframe={false}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      <Stars radius={200} depth={50} count={5000} factor={4} />
    </group>
  );
}

export function ThreeDBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();

    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom, #0f0a1a, #1a0f2e)' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[-10, -10, 10]} intensity={1} color="#06b6d4" />
        <AnimatedSpheres />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={!reduceMotion}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
