import { motion, useAnimation } from 'framer-motion'
import { toggleScrolling } from '@utils'
import { useEffect } from 'react'

const ExitButton = ({ action, useExitAnim = false, className = '' }) => {
    const controls = useAnimation()

    // exit Anim
    const exit = {
        scaleX: 0,
        rotate: 0,
        transition: {
            rotate: { duration: 0.25, delay: 0 },
            scaleX: { duration: 0.25, delay: 0.25 },
        },
    }
    function exitNow() {
        controls.start(exit)
        setTimeout(() => {
            action()
            toggleScrolling(true)
        }, 350)
    }
    // enter Anim

    useEffect(() => {
        controls.start((i) => ({
            scaleX: 1,
            rotate: i * 45,
            transition: {
                scaleX: { duration: 0.5, delay: 0.25 },
                rotate: { duration: 0.35, delay: 0.75 },
            },
        }))
    })
    return (
        <motion.div
            className={`flex-center className group absolute z-10 aspect-square max-h-[76px] min-h-[48px] cursor-pointer ${className}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => exitNow()}
        >
            {[1, -1].map((n, i) => (
                <motion.span
                    key={`exitBtnLine-${i}`}
                    className="absolute h-1 w-[60%] bg-grey-60 group-hover:bg-red"
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    exit={useExitAnim ? exit : null}
                    custom={n}
                />
            ))}
        </motion.div>
    )
}

export default ExitButton
