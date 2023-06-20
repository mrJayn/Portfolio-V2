import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { socials } from '@config'
import Paths from './Paths'

const cursorSpring = { type: 'spring', stiffness: 700, damping: 40 }
function MagnetElement({ children }) {
    const x = useSpring(0, cursorSpring)
    const y = useSpring(0, cursorSpring)
    const hover = useRef(false)
    const enable = (e) => {
        hover.current = e.pointerType === 'mouse'
    }
    const updateXY = (e) => {
        if (!hover.current) return
        let { height, width, top, left } = e.target.getBoundingClientRect()
        x.set(e.clientX - left - width / 2)
        y.set(e.clientY - top - height / 2)
    }
    const reset = () => {
        x.set(0)
        y.set(0)
    }
    return (
        <motion.div
            className="group absolute inset-0 flex touch-none"
            style={{ scale: 1 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.85 }}
            onHoverStart={enable}
            onMouseMove={updateXY}
            onHoverEnd={reset}
        >
            <motion.div
                className="transition-colors pointer-events-none absolute inset-1.5 rounded-full stroke-grey p-2 duration-[100ms] ease-in lg:group-hover:bg-grey-80 lg:group-hover:stroke-slate"
                style={{ x, y }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

const Footer = () => (
    <div className="flex-col-center mb-10 w-full gap-5">
        <div className="flex-center relative h-16 max-w-full gap-x-2.5">
            {socials.map(({ name, href }, i) => (
                <div key={`social-icon-${i}`} className="relative aspect-[1/1] h-full">
                    <a href={href} target="_blank" rel="noopener noreferrer" title={name}>
                        <MagnetElement>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <Paths name={name} />
                            </svg>
                        </MagnetElement>
                    </a>
                </div>
            ))}
        </div>
        <p className="text-[17px] font-semibold tracking-[0.225em]">
            <span className="uppercase text-white">Michael Jayne</span>
            &nbsp;&nbsp;
            <span className="font-montserrat text-slate-neon">&#169;{new Date().getFullYear()}</span>
        </p>
    </div>
)

export default Footer
