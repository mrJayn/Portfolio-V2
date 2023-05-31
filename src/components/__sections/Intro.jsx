import { Suspense, useEffect, useRef } from 'react'
import { motion, stagger, useAnimate, useAnimationControls } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Bounds } from '@react-three/drei'
import { DeviceFrame, Styled } from '@components'
import { scroll2id, openResumeJPG } from '@utils'
import Model from '../items/Model'

const backOutKeyFrames = (max) =>
    [0, 0.1, 0.43, 0.98, 0.75, 0.98, 0.93, 0.99, 0.98, 1].map((v) => v * max)
const backOutTimes = [0, 0.12, 0.24, 0.36, 0.54, 0.74, 0.82, 0.94, 0.96, 1]
const Transition = {
    opacity: { duration: 0.5, ease: 'easeIn' },
    y: { duration: 0.6, ease: 'circOut' },
}

/*
const deviceSequence = [
    ['#display', { opacity: 1 }, { duration: 0.5 }],
    [
        '#notification',
        { opacity: 1, y: [25, 0] },
        { at: '+0.5', ...Transition },
    ],
    [
        '#notification',
        { scale: 0.95, filter: 'brightness(0.8)' },
        { at: '+1.25', duration: 0.15, ease: 'easeIn' },
    ],
    [
        '#device-frame',
        { rotateX: backOutKeyFrames(100) },
        { at: '+0.2', duration: 0.8, times: backOutTimes },
    ],
]
*/

const contentSequence = [
    ['#title', { opacity: 1, y: [10, 0] }, {...Transition }],
    ['#subtitle', { opacity: 1, y: [20, 0] }, { at: 0.75, ...Transition }],
    [
        'button',
        { opacity: 0.5, y: [30, 0] },
        { at: 1.25, delay: stagger(0.1), ...Transition },
    ],
]

const Intro = ({ shouldAnimate }) => {
    const [contentScope, animateContent] = useAnimate()
    const controls = useAnimationControls()
    const hasMounted = useRef(false)
    const handleBtnClick = (e, action) => {
        let thisBtn = e.currentTarget
        thisBtn.classList.add('clicked')
        setTimeout(() => action(), 500)
        setTimeout(() => thisBtn.classList.remove('clicked'), 1500)
    }

    useEffect(() => {
        if(!controls) return
        controls.mount()

        const sequence = async()=>{
            await controls.start({
                rotateX: backOutKeyFrames(-Math.PI / 2),
                transition: { delay: 1, duration: 0.8, times: backOutTimes },
            })
            animateContent(contentSequence)
        }

      sequence()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            id="intro-content"
            className="flex-col-center relative mx-auto h-screen w-screen max-w-[1920px] overflow-hidden shadow-[inset_0_-25vh_30vh_-25vh_#0004] max-lg:min-h-[100vmax]"
        >
            <div
                className="flex-col-center absolute z-10 h-[60%] max-h-[410px] pt-[clamp(64px,12.5vh,96px)] lg:pt-[17.5%]"
                ref={contentScope}
            >
                <h1
                    id="title"
                    className="text-center text-h1 lg:text-[min(14vh,108px)] lg:opacity-0"
                >{`Michael\nJayne`}</h1>
                <div
                    id="subtitle"
                    className="flex-center py-4 text-center text-[1.1em] font-medium lg:aspect-[1/1] lg:w-full lg:pb-10 lg:text-[1.2em] lg:opacity-0"
                >
                    {`Just a chemical engineer who\n wants to be a Developer.`}
                </div>
                <div className="flex-evenly gap-x-12 max-md:flex-col lg:text-[1.2em]">
                    <Styled.Button
                        className="lg:w-[7.5em] lg:opacity-0"
                        onClick={(e) =>
                            handleBtnClick(e, () => scroll2id('projects'))
                        }
                    >
                        Projects
                    </Styled.Button>
                    <Styled.Button
                        className="lg:w-[7.5em] lg:opacity-0"
                        onClick={(e) =>
                            handleBtnClick(e, () => scroll2id('contact'))
                        }
                    >
                        Contact
                    </Styled.Button>
                    <Styled.Button
                        className="lg:w-[7.5em] lg:opacity-0"
                        onClick={(e) => handleBtnClick(e, openResumeJPG)}
                    >
                        Resume
                    </Styled.Button>
                </div>
            </div>

            <motion.div
                className="full flex-center z-0"
                style={{ perspective: '120vh', perspectiveOrigin: '50% 50%' }}
            >
                <div
                    id="device-frame"
                    className="flex-center absolute inset-0 top-16"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                        <Suspense fallback={null}>
                            <directionalLight
                                intensity={0.5}
                                position={[0, 35, 50]}
                            />
                            <Bounds fit observe damping={6} margin={1}>
                                <Model controls={controls} />
                            </Bounds>
                        </Suspense>
                    </Canvas>
                </div>
            </motion.div>
        </div>
    )
}

export default Intro
