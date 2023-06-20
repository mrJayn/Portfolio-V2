import { motion, useAnimate } from 'framer-motion'
import { pushPage } from '@utils'
import { backBtnMotion } from '@motion-nav'

const { wrapVars, arrowVars } = backBtnMotion

export default function BackButton() {
    const [scope, animate] = useAnimate()
    const handleClick = () =>
        animate(scope.current, { scale: 0.85 }, { type: 'spring', duration: 0.15, bounce: 0 }).then(() => pushPage('/'))

    return (
        <motion.button
            ref={scope}
            className="transition-colors group absolute left-2 top-2 z-[100] flex aspect-[1/1] h-14 select-none items-center rounded-md bg-grey-75 shadow-lg shadow-black/50 hover:bg-grey-65"
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
                    className="transition-colors absolute left-1/4 h-[4px] bg-grey group-hover:bg-white"
                    style={{ width: `${[55, 35, 35][i]}%`, originX: 0, originY: [1, -0.5, 1.5][i] }}
                    variants={arrowVars}
                    custom={deg}
                />
            ))}
        </motion.button>
    )
}
