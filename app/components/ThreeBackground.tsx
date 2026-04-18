"use client";

import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleCloud() {
  const points = useMemo(() => {
    const particles = new Float32Array(1200);

    for (let i = 0; i < particles.length; i += 3) {
      particles[i] = (pseudoRandom(i + 0.37) - 0.5) * 14;
      particles[i + 1] = (pseudoRandom(i + 1.13) - 0.5) * 9;
      particles[i + 2] = (pseudoRandom(i + 2.91) - 0.5) * 8;
    }

    return particles;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#67f8b8" size={0.03} transparent opacity={0.65} />
    </points>
  );
}

function GeometryCluster() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.1}>
        <mesh position={[-2.2, 1.3, -1.3]}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial
            color="#56f0a8"
            emissive="#1f7a54"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={1} floatIntensity={0.9}>
        <mesh position={[2.4, -1.1, -1.8]}>
          <torusGeometry args={[1, 0.22, 16, 80]} />
          <meshStandardMaterial
            color="#7dffd1"
            emissive="#1f7a54"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.75} floatIntensity={0.85}>
        <mesh position={[0, 1.8, -2.4]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial
            color="#8cffca"
            emissive="#1f7a54"
            wireframe
            transparent
            opacity={0.38}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.85]">
      <Canvas camera={{ position: [0, 0, 7], fov: 56 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#020705", 4.5, 14]} />
        <ambientLight intensity={0.42} />
        <pointLight position={[4, 4, 3]} intensity={1} color="#76ffd0" />
        <pointLight position={[-4, -3, -2]} intensity={0.65} color="#36b47c" />
        <ParticleCloud />
        <GeometryCluster />
      </Canvas>
    </div>
  );
}
