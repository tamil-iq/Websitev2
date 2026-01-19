import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Trail } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Primary blue color matching the website theme (blue-500)
const PRIMARY_BLUE = "#3b82f6";
// Lighter blue for accents (blue-400)
const ACCENT_BLUE = "#60a5fa";

// Animated sphere with distortion effect - more prominent
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = clock.elapsedTime * 0.15;
    }
  });

  return (
    <group>
      {/* Main sphere - larger and more visible */}
      <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={PRIMARY_BLUE}
          attach="material"
          distort={0.25}
          speed={1.2}
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.75}
        />
      </Sphere>
      {/* Inner glow sphere */}
      <Sphere args={[1.6, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={ACCENT_BLUE}
          transparent
          opacity={0.15}
        />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[2.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={PRIMARY_BLUE}
          transparent
          opacity={0.08}
        />
      </Sphere>
    </group>
  );
};

// Shooting electron that travels across the scene
const ShootingElectron = ({
  startPosition,
  endPosition,
  speed,
  delay,
  color = PRIMARY_BLUE
}: {
  startPosition: [number, number, number];
  endPosition: [number, number, number];
  speed: number;
  delay: number;
  color?: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const progressRef = useRef(delay);

  useFrame((_, delta) => {
    if (!ref.current) return;

    progressRef.current += delta * speed;
    const progress = (progressRef.current % 1);

    ref.current.position.x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], progress);
    ref.current.position.y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], progress);
    ref.current.position.z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], progress);
  });

  return (
    <Trail
      width={0.25}
      length={10}
      color={color}
      attenuation={(t) => t * t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.001, 4, 4]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </Trail>
  );
};

// Electron beams - fewer for cleaner look
const ElectronBeam = ({ count = 10 }: { count?: number }) => {
  const electrons = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const yOffset = (Math.random() - 0.5) * 4;
      const zOffset = (Math.random() - 0.5) * 2;
      temp.push({
        start: [-8 - Math.random() * 2, yOffset, zOffset] as [number, number, number],
        end: [8 + Math.random() * 2, yOffset, zOffset] as [number, number, number],
        speed: 0.05 + Math.random() * 0.03,
        delay: Math.random(),
        color: Math.random() > 0.4 ? PRIMARY_BLUE : ACCENT_BLUE
      });
    }
    return temp;
  }, [count]);

  return (
    <>
      {electrons.map((electron, i) => (
        <ShootingElectron
          key={i}
          startPosition={electron.start}
          endPosition={electron.end}
          speed={electron.speed}
          delay={electron.delay}
          color={electron.color}
        />
      ))}
    </>
  );
};

// Grid planes - more visible with gradient fade effect
const GridPlane = () => {
  return (
    <group>
      {/* Main floor grid - more visible */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[30, 30, 30, 30]} />
        <meshBasicMaterial color={PRIMARY_BLUE} wireframe transparent opacity={0.12} />
      </mesh>
      {/* Secondary grid for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[30, 30, 60, 60]} />
        <meshBasicMaterial color={ACCENT_BLUE} wireframe transparent opacity={0.04} />
      </mesh>
    </group>
  );
};

const Hero3DScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={PRIMARY_BLUE} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color={ACCENT_BLUE} />
      {/* Additional light for sphere highlight */}
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />

      <AnimatedSphere />
      <ElectronBeam count={10} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Hero3DScene />
      </Canvas>
      {/* Gradient overlays - slightly reduced for more visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background opacity-90" />
    </div>
  );
};

export default Hero3D;
