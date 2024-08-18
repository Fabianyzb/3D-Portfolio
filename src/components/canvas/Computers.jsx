import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
    /* constante para usar el archivo GLTF */
    const computer = useGLTF('./desktop_pc/myavatar.glb')
    return (
        /* para empezar con threejs no se empieza con un "div", se empieza con un "mesh" Y dentro de ese mesh hay que anadir una luz y un objeto(primitive) */
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={'black'} />
            {/* pointLight es la luz que se ve de reflejo en la pantalla */}
            <pointLight intensity={1} />
            {/* spotlight es la luz principal */}
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 1.0 : 1.2}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]} />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    /* Lo que hara todo este useEffect es cambiar la variable isMobile */
    /* Anadira listeners para los cambios del tamano de la pantalla */
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        /* Dara el valor inicial al estado de la variable "isMobile" */
        setIsMobile(mediaQuery.matches);

        /* Define una funcion de callback para manejar cambios en el mediaQuery */
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }
        /* Anadir una callback function  para los cambios del mediaQuery*/
        mediaQuery.addEventListener('change', handleMediaQueryChange)

        /* Remover el listener cuando el component este desmontado*/
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            /* frameloop: Configura el bucle de renderizado para que se active solo cuando sea necesario. */
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            /*"gl:  configurar opciones específicas de WebGLRenderer".  preserveDrawing... tiene que estar para renderear bien el modelo  */
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* Suspense es una caracteristica de React que permite que haya un loader mientras se esta cargando el modelo */}
            <Suspense fallback={<CanvasLoader />}>
                {/* OrbitControls permite mover el modelo con el raton. Sin zoom, y solo se puede rotar el objeto desde un angulo determinado, en este caso de izquierda y derecha. */}
                <OrbitControls
                    enableZoom={false}
                    /* los PolarAngle son para rotar el objeto en un angulo especifico, en este caso de izq a derecha y al reves */
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />

                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />

        </Canvas>
    )
}

export default ComputersCanvas