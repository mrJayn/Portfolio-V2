import { useState } from 'react'
import { motion } from 'framer-motion'
import { reload } from '@utils'
import { NavMotion } from '@motion'

const Logo = () => {
    const [is1st, setIs1st] = useState(true)

    const handleLogo = () => {
        if (window.scrollY == 0 || typeof window == undefined) {
            reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const onComplete = () => {
        if (is1st) setIs1st(false)
    }

    function initialTransition(i) {
        return {
            strokeOpacity: { duration: 0.01 },
            pathLength: { duration: 2, ease: 'easeInOut' },
            default: {
                duration: 2,
                ease: 'easeIn',
                delay: 1.5,
            },
        }
    }

    return (
        <motion.div
            id="logo"
            className={`flex-center absolute top-1 z-10 h-[85%] overflow-visible rounded-br-2xl p-[3px] pl-[0px] lg:left-4 lg:h-[125%] ${
                is1st
                    ? 'pointer-events-none'
                    : ' pointer-events-auto cursor-pointer'
            }`}
            onClick={handleLogo}
            initial="hidden"
            animate="show"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 706"
                //viewBox="-25 -35 700 150"
                className="z-10 h-full cursor-pointer select-none overflow-visible linecap-round linejoin-round"
            >
                <motion.path
                    d="M 0 606 L 43 556 Q 72 598 110 620 Q 148 642 194 642 A 155.828 155.828 0 0 0 249.344 632.967 Q 318.003 606.973 323.518 506.177 A 332.886 332.886 0 0 0 324 488 L 324 64 L 68 64 L 68 0 L 397 0 L 397 485 A 382.067 382.067 0 0 1 392.461 545.971 Q 387.254 578.113 376.073 603.759 A 164.65 164.65 0 0 1 345.5 651 A 163.567 163.567 0 0 1 271.9 695.473 Q 237.188 706 193 706 Q 134 706 82.5 680 Q 31 654 0 606 Z"
                    variants={NavMotion.LogoVariants.path}
                    transition={
                        is1st ? { ...initialTransition(0) } : { duration: 0.25 }
                    }
                    onAnimationComplete={onComplete}
                />
                <motion.rect
                    x={75}
                    y={280}
                    strokeLinecap="square"
                    style={{ height: 70, width: 248 }}
                    variants={NavMotion.LogoVariants.rect}
                    transition={
                        is1st
                            ? { ...initialTransition(0) }
                            : { duration: 0.35, ease: 'backInOut' }
                    }
                    onAnimationComplete={onComplete}
                />
            </svg>
        </motion.div>
    )
}
export default Logo
