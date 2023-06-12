/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
// Edited from auto-generation by: https://github.com/pmndrs/gltfjsx
import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion-3d'
import {
    BBAnchor,
    Html,
    PerspectiveCamera,
    Stage,
    useGLTF,
} from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'
import { getFormattedDate } from '@utils'
import { useAnimationControls } from 'framer-motion'
import { bounce, bounceTimes, revbounce } from '@motion'
import { Canvas } from '@react-three/fiber'

export default function Model({ isLg }) {
    const v3ToRads = (v3) => v3.map((v) => degToRad(v))

    return (
        <Suspense fallback={null}>
            <Canvas shadows gl={{ antialias: true }} dpr={[1, 2]}>
                <Camera isLg={isLg} />
                <Stage intensity={0.24} adjustCamera environment="sunset">
                    <Device
                        rotation={v3ToRads(isLg ? [0, 0, 0] : [-90, 0, 0])}
                    />
                </Stage>
            </Canvas>
        </Suspense>
    )
}

function Camera({ isLg }) {
    const position = isLg ? [0, 0, 20] : [1, 10, 22]
    return <PerspectiveCamera makeDefault position={position} fov={10} />
}

function Device({ ...props }) {
    const { nodes } = useGLTF('/models/iphoneMockUp.gltf')
    const ref = useRef()
    const controls = useAnimationControls()
    const d = new Date()
    const currentDate = getFormattedDate(d)
    const currentTime = d.toTimeString().split(' ')[0].slice(0, -3)

    const Layer = ({ name, children, ...props }) => (
        <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes[name].geometry}
            material={nodes[name].material}
            {...props}
        >
            {children}
        </motion.mesh>
    )

    const sequence = async () => {
        await controls.start({
            rotateX: degToRad(-10),
            originY: 1,
            transition: { duration: 0.25, ease: 'backOut' },
        })
        controls.start({
            rotateX: 0,
            transition: { duration: 0.25, ease: 'backOut' },
        })
    }

    return (
        <group ref={ref} {...props} dispose={null}>
            <motion.group animate={controls}>
                <Layer name="mesh_9" />
                <Layer name="mesh_9_1" />
                <Layer name="mesh_9_2" />
                <Layer name="mesh_9_3" />
                <Layer name="mesh_9_4" />
                <Layer name="AccentsBottom" position={[0, -2.68, 0]} />
                <Layer name="AccentsTop" position={[0, 0.02, 0]} />
                <Layer name="FrontCamera" position={[0.34, 1.32, 0.08]} />
                <Layer name="FrontSpeaker" position={[0.16, 1.32, 0.08]} />
                <Layer name="MuteSwitch" position={[-0.65, 0.92, 0.01]} />
                <group position={[0.97, 0.56, 0]}>
                    <Layer name="mesh_5" />
                    <Layer name="mesh_5_1" />
                </group>
                <group position={[0.98, -0.04, 0]}>
                    <Layer name="mesh_6" />
                    <Layer name="mesh_6_1" />
                </group>
                <Layer name="VolumeButtons" position={[-0.66, 0.21, 0]} />
                <Layer name="Screen">
                    <BBAnchor anchor={[0, 0, 0]}>
                        <Html
                            className="flex-col-top relative h-[800px] w-[425px] overflow-hidden text-[3.5vh]"
                            center
                            distanceFactor={1.25}
                            transform
                            position={[0.14, 0, 0]}
                        >
                            <div className="flex-col-top pointer-events-auto w-full py-10 text-center font-montserrat leading-[0.9] text-white">
                                <div className="text-[22px]">{currentDate}</div>
                                <div className="text-[112px]">
                                    {currentTime}
                                </div>
                            </div>
                            <div className="flex-col-top h-full w-full">
                                <div className="display-item flex-col-left relative my-10 h-[3em] w-[100%] rounded-xl bg-grey p-[0.15em] pl-[3.25em] text-[1em] text-white after:flex-center after:absolute after:left-[0.5em] after:aspect-[1/1] after:h-[1.5em] after:rounded-full after:bg-grey-40 after:text-[1.35em] after:content-['✉'] lg:text-[1em]">
                                    <span className="ml-auto w-full text-[0.75em] font-medium">{`New Mesaage`}</span>
                                    <span className="ml-auto w-full leading-[1]">{`Hello, my name's...`}</span>
                                </div>
                            </div>
                        </Html>
                    </BBAnchor>
                </Layer>
            </motion.group>
        </group>
    )
}

useGLTF.preload('/models/iphoneMockUp.gltf')
