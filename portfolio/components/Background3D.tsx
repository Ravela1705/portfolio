"use client";

import { Float, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FierceCyberCore() {
  // We use references to grab the 3D objects so we can spin them via code
  const coreRef = useRef<any>(null);
  const ring1Ref = useRef<any>(null);
  const ring2Ref = useRef<any>(null);
  const ring3Ref = useRef<any>(null);

  // This runs every single frame to create complex, chaotic rotation
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.3;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8; // Fast spin
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.6;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.4;
      ring3Ref.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[0, -0.5, -2]}>
        
        {/* The Core: A sharp, 20-sided geometric crystal */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#0a0a0a" emissive="#34d399" emissiveIntensity={0.6} wireframe={true} />
        </mesh>

        {/* Orbiting Energy Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.8, 0.015, 16, 100]} />
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={2} />
        </mesh>

        {/* Orbiting Energy Ring 2 (Tilted) */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={1} />
        </mesh>

        {/* Orbiting Energy Ring 3 (Outer Ring, slightly white for contrast) */}
        <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[2.6, 0.01, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        
      </group>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      {/* We pulled the camera back slightly so the whole structure fits perfectly */}
      <Canvas camera={{ position: [0, 0, 5.5] }}>
        <ambientLight intensity={0.2} />
        
        <FierceCyberCore />
        
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1.5} />
        <Sparkles count={200} scale={15} size={2.5} speed={0.6} opacity={0.4} color="#34d399" />
      </Canvas>
    </div>
  );
}