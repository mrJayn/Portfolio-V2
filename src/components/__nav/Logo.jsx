import { useRef } from 'react'
import { motion } from 'framer-motion'
import { reload } from '@utils'
import { NavMotion } from '@motion'

const Logo = () => {
    const logoRef = useRef(null)

    const handleLogo = () => {
        if (window.scrollY == 0 || typeof window == undefined) {
            reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const transition = {
        strokeOpacity: { duration: 0.01 },
        pathLength: { duration: 2, ease: 'easeInOut' },
        default: {
            duration: 2,
            ease: 'easeIn',
            delay: 1.5,
        },
    }

    return (
        <motion.div
            id="logo"
            className="flex-center pointer-events-none absolute top-0 h-16 w-16 cursor-pointer brightness-100 transition-[filter] duration-250 ease-tween hover:brightness-[1.3] lg:left-0"
            onClick={handleLogo}
            initial="hidden"
            animate="show"
            ref={logoRef}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 706"
                className="h-9 overflow-visible"
            >
                <motion.path
                    d="M 0 606 L 43 556 Q 72 598 110 620 Q 148 642 194 642 A 155.828 155.828 0 0 0 249.344 632.967 Q 318.003 606.973 323.518 506.177 A 332.886 332.886 0 0 0 324 488 L 324 64 L 68 64 L 68 0 L 397 0 L 397 485 A 382.067 382.067 0 0 1 392.461 545.971 Q 387.254 578.113 376.073 603.759 A 164.65 164.65 0 0 1 345.5 651 A 163.567 163.567 0 0 1 271.9 695.473 Q 237.188 706 193 706 Q 134 706 82.5 680 Q 31 654 0 606 Z"
                    variants={NavMotion.LogoVariants.path}
                    transition={transition}
                />
                <motion.rect
                    x={75}
                    y={280}
                    strokeLinecap="square"
                    style={{ height: 70, width: 248 }}
                    variants={NavMotion.LogoVariants.rect}
                    transition={transition}
                    onAnimationComplete={() => {
                        logoRef.current.classList.replace(
                            'pointer-events-none',
                            'pointer-events-auto'
                        )
                    }}
                />
            </svg>
        </motion.div>
    )
}
export default Logo
