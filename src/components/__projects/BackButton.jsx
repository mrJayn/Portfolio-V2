import { motion, useAnimate } from 'framer-motion'
import { pushPage } from '@utils'
import { sidebarMotion } from '@motion'

const wrapVars = {
    hidden: {
        opacity: 0,
        transition: { when: 'afterChildren', duration: 0.25, ease: 'easeIn' },
    },
    show: {
        opacity: 1,
        transition: { when: 'beforeChildren', delay: 0.5, duration: 0.25, ease: 'easeIn' },
    },
}
const arrowVars = {
    hidden: (deg) => ({
        scaleX: 0,
        rotate: 0,
        transition: {
            scaleX: deg === 0 ? { duration: 0.5 } : { delay: 0.25 },
            rotate: { duration: 0.25 },
        },
    }),
    show: (deg) => ({
        scaleX: 1,
        rotate: deg,
        transition: {
            scaleX: { duration: 0.5 },
            rotate: { delay: 0.25, duration: 0.5 },
        },
    }),
}

export default function BackButton() {
    const [scope, animate] = useAnimate()
    const handleClick = () =>
        animate(scope.current, { scale: 0.85 }, { type: 'spring', duration: 0.15, bounce: 0 }).then(() => pushPage('/'))

    return (
        <motion.button
            ref={scope}
            className="group absolute left-4 top-2 z-[100] flex aspect-[1/1] h-14 select-none items-center rounded-md bg-grey-75 shadow-lg shadow-black/50 transition-colors duration-250 ease-in-out hover:bg-grey-65 "
            onClick={handleClick}
            title="Back to Portfolio"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={wrapVars}
        >
            {[0, 50, -50].map((deg, i) => (
                <motion.span
                    key={`line${i}`}
                    className="absolute left-1/4 h-[4px] bg-grey transition-colors duration-250 ease-in-out group-hover:bg-white"
                    style={{ width: `${[55, 35, 35][i]}%`, originX: 0, originY: [1, -0.5, 1.5][i] }}
                    variants={arrowVars}
                    custom={deg}
                />
            ))}
        </motion.button>
    )
}
