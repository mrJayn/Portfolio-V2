import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { deviceViewportMask, ssOffset } from '@config'
import { circInOut, easeIn, easeInOut, easeOut, noop } from '@motion'

const springConfig = {
    stiffness: 600,
    damping: 50,
    mass: 0.25,
    restDelta: 0.001,
}

// Pure CSS btw...👀
const DeviceFrame = ({}) => (
    <div id="device-frame">
        <div className="island">
            <div className="camera" />
            <div className="speaker" />
        </div>
        <div className="btn btn-right" />
        <div className="btns-left">
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
        </div>
        <div className="screen-protector" />
        <div className="screen-glare" />
        <div className="screen" />
    </div>
)

const Intro = ({ shouldAnimate }) => {
    const { scrollYProgress } = useScroll({
        offset: ['0px 0px', `${ssOffset * 0.5}px 0px`],
    })
    const ySpring = useSpring(scrollYProgress, springConfig)

    const scale = useTransform(ySpring, [0, 0.4], [1, 0.3],{ease: [easeInOut]} )
    const y = useTransform(
        ySpring,
        [ 0.66, 1],
        ['100vh',  '0vh'],
        {
            ease: [ easeInOut],
        }
    )
    const rotateZ = useTransform(ySpring, [0, 0.4], [90, 0], {ease: [easeOut]})

    //const translateZ = useTransform(ySpring, [0, 0.33], [250, 0])

    // Anims 2
    //const translateY = useTransform(ySpring, [0.8, 1], ['0vh', '-50vh'], {ease: [easeIn]})

    return (
        <div
            id="intro-content"
            className="flex-col-center mx-auto h-screen w-screen max-w-[1920px]"
        >
            <motion.div
                className="flex-col-center absolute inset-0"
                style={{
                    perspective: '100vh',
                    perspectiveOrigin: '50% 50%',
                }}
            >
                <motion.div
                    className="absolute top-[35vh] z-0 text-center origin-[50%_-87.5%]"
                    style={{ scale: shouldAnimate ? scale : 0 }}
                >
                    <div className="h-0 -translate-y-5 text-h4">{`Hello, my name's`}</div>
                    <h1 className="max-w-[1440px] text-black">
                        {`Michael\nJayne`}
                    </h1>
                </motion.div>

                <motion.div
                    className="flex-col-center absolute top-[35vh] z-0 h-[64.3vh] w-[13.5ch] text-h3 text-black max-lg:leading-[1]"
                    style={{ y: shouldAnimate ? y : 0 }}
                >
                    {`I'm a chemical engineer who REALLY wants to be a Developer.`}
                </motion.div>

                <motion.div
                    className="flex-center absolute inset-x-0 inset-y-[-20vh] z-20 bg-body"
                    style={{
                        rotateZ: shouldAnimate ? rotateZ : 0,
                        WebkitMask: deviceViewportMask(64.3),
                        WebkitMaskComposite: 'destination-out',
                        mask: deviceViewportMask(64.3),
                        maskComposite: 'exclude',
                    }}
                >
                    <DeviceFrame />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Intro
