import { motion, useAnimation } from 'framer-motion'
import { toggleScrolling } from '@utils'
import { useEffect } from 'react'

const ExitButton = ({ toggleCard }) => {
    const controls = useAnimation()

    // exit Anim
    async function exitNow() {
        await controls.start({
            scaleX: 0,
            rotate: 0,
            transition: {
                rotate: { duration: 0.25, delay: 0 },
                scaleX: { duration: 0.25, delay: 0.25 },
            },
        })
        toggleCard()
        toggleScrolling(true)
    }
    // enter Anim
    useEffect(() => {
        controls.start((i) => ({
            scaleX: 1,
            rotate: i * 45,
            transition: {
                scaleX: { duration: 0.25, delay: 0.25 },
                rotate: { duration: 0.25, delay: 0.5 },
            },
        }))
    })
    return (
        <motion.div
            className="flex-center group absolute z-10 ml-1 aspect-square h-12 cursor-pointer text-[36px] sm:m-2 md:h-14 md:text-[56px] lg:m-3"
            whileTap={{ scale: 0.95 }}
            onClick={() => exitNow()}
        >
            {[1, -1].map((n, i) => (
                <motion.span
                    key={`exitBtnLine-${i}`}
                    className="absolute h-1 w-[60%] bg-grey-light group-hover:bg-red"
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    custom={n}
                />
            ))}
        </motion.div>
    )
}

export default ExitButton
