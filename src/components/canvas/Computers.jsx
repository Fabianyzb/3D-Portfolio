import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
    /* Carga el archivo GLTF y sus animaciones */
    const computer = useGLTF('./gundam/scene.gltf');
    const { actions } = useAnimations(computer.animations, computer.scene);

    useEffect(() => {
        // Reproduce la primera animación
        actions[computer.animations[4].name]?.play();
    }, [actions]);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={'black'} />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 1.3 : 2.3}  // Ajusta el tamaño del modelo
                position={isMobile ? [0.5, -3, -2.2] : [0.5, -3.25, -1.5]}  // Ajusta la posición
                rotation={[0, 1.9, 0]}  // Ajusta la rotación
            />
        </mesh>
    );
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop='always'
            shadows
            camera={{ position: [20, 3, 5], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} /> */}

                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />

        </Canvas>
    )
}

export default ComputersCanvas;
