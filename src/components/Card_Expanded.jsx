import { createRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from '@hooks'
import { toggleScrolling } from '@utils'
import { Variants } from '@config'
import { ExitButton } from '@components'

const Card_Expanded = ({ children, toggleCard, ...props }) => {
    const ref = createRef()
    useOnClickOutside(ref, () => {
        toggleCard()
        toggleScrolling(true)
    })
    return (
        <AnimatePresence mode="wait">
            {props.state && (
                <>
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-[30] bg-black/50"
                        {...Variants.fade_props}
                    />
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1280px] overflow-hidden rounded-lg bg-charcoal shadow-2xl shadow-black md:top-20 md:bottom-4 md:left-12 md:right-12"
                        ref={ref}
                        {...Variants.fade_props}
                    >
                        <div className="relative m-1 h-full md:m-3">
                            <ExitButton toggleCard={toggleCard} />
                            <h4 className="flex-bottom absolute top-0 left-0 h-20 w-full rounded-t-md border-b-2 border-b-neon/75 bg-black/75 pb-5 text-lightTeal md:h-20 md:pb-3">
                                {props.title}
                            </h4>
                            <div className="absolute top-20 left-0 right-0 bottom-0 select-none md:top-20">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Card_Expanded
