import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader'; // Carga los porcentajes

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Usamos useFrame para actualizar la rotación de la bola en cada cuadro de animación
  useFrame((state, delta) => {
    // Modificamos la rotación de la bola agregando un pequeño valor de rotación en cada cuadro
    props.meshRef.current.rotation.x += 0.01 * delta; // Rotación en el eje X
    props.meshRef.current.rotation.y += 0.01 * delta; // Rotación en el eje Y
    props.meshRef.current.rotation.z += 0.01 * delta; // Rotación en el eje Z
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={props.meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Inicialmente están volteados tipo espejo. Así que 2 veces Math.PI los voltea */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const meshRef = React.useRef(); // Ref para la bola

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '15vw', height: '15vh' }} // Ajusta el tamaño del lienzo al tamaño de la ventana
      camera={{ fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 50 }} // Ajusta la cámara
    >
      {/* Suspense es una característica de React que permite que haya un loader mientras se está cargando el modelo */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls permite mover el modelo con el ratón. Sin zoom, y solo se puede rotar el objeto desde un ángulo determinado, en este caso de izquierda y derecha. */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} meshRef={meshRef} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
