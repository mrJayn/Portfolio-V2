import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toggleScrolling } from '@utils'
import { cardVariants } from '@config'
import { ExitButton } from '@components'

const Card_Expanded = ({
    children,
    expanded,
    toggleCard,
    resetTabs,
    responsive = false,
    isMd,
    ...props
}) => {
    const ref = useRef()

    useEffect(() => {
        const clickedOutside = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return
            }
            toggleCard()
            toggleScrolling(true)
        }
        document.addEventListener('mousedown', clickedOutside)
        document.addEventListener('touchstart', clickedOutside)
        return () => {
            document.removeEventListener('mousedown', clickedOutside)
            document.removeEventListener('touchstart', clickedOutside)
        }
    }, [ref, toggleCard])

    const expandMotion = isMd
        ? { ...cardVariants.expPropsMd }
        : { ...cardVariants.expPropsSm }

    return (
        <AnimatePresence mode="wait" onExitComplete={resetTabs}>
            {expanded && (
                <>
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-30 md:bg-black/75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1280px] overflow-hidden rounded-lg bg-grey-light shadow-2xl dark:bg-grey-darker md:top-24 md:left-10 md:right-10 md:bottom-10 md:shadow-black lg:left-16 lg:right-16"
                        ref={ref}
                        {...expandMotion}
                    >
                        <motion.div className="relative m-1 h-full md:m-3">
                            <ExitButton
                                state={expanded}
                                toggleCard={toggleCard}
                            />
                            <div
                                className={`flex-center absolute top-0 left-0 h-12 w-full rounded-t-md bg-black-light shadow-black dark:shadow-teal-neon sm:h-16 lg:h-20 ${
                                    responsive &&
                                    'sm:rounded-b-md sm:shadow-[0px_5px_15px_-7.5px]'
                                }`}
                            >
                                <h4>{props.title}</h4>
                            </div>
                            <div className="absolute top-12 left-0 right-0 bottom-0 select-none overflow-hidden sm:top-16 lg:top-20">
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Card_Expanded
