import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      < directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={2.75} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5} /* sombreado */
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} /* Inicial% estan volteados tipo espejo. Asi que 2 veces Math.Pi los voltea */
          flatShading
          map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      /* frameloop: Configura el bucle de renderizado para que se active solo cuando sea necesario. */
      frameloop='demand'
      /*"gl:  configurar opciones específicas de WebGLRenderer".  preserveDrawing... tiene que estar para renderear bien el modelo  */
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense es una caracteristica de React que permite que haya un loader mientras se esta cargando el modelo */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls permite mover el modelo con el raton. Sin zoom, y solo se puede rotar el objeto desde un angulo determinado, en este caso de izquierda y derecha. */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas