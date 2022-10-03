import { motion, AnimatePresence } from 'framer-motion'
import { ExitButton } from '@components'
import { expandedVariants } from '@motion'

const Card_Expanded = ({
    children,
    data,
    expanded,
    setExpanded,
    ltr,
    isMd,
    resetTabs,
    pRM,
}) => {
    const wrapProps = {
        initial: 'hidden',
        animate: 'show',
        exit: 'hidden',
        variants:
            isMd & !pRM ? expandedVariants.Card : expandedVariants.Card.pRM,
        custom: !isMd & pRM && isMd,
    }

    return (
        <AnimatePresence mode="wait" onExitComplete={resetTabs}>
            {expanded && (
                <>
                    {/** MOBILE **/}
                    {!isMd && (
                        <motion.div
                            className="flex-center fixed top-0 left-[50%] z-50 h-12 translate-x-[-50%]"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={expandedVariants.Title}
                            custom={pRM}
                        >
                            <h4 className="whitespace-nowrap">{data.title}</h4>
                        </motion.div>
                    )}
                    <motion.div
                        className="fixed top-12 left-0 right-0 bottom-0 z-30 overflow-hidden bg-white dark:bg-black-light md:absolute md:-top-12 md:left-3 md:right-3 md:bottom-3 md:z-10 md:rounded-[3rem] md:bg-transparent"
                        {...wrapProps}
                    >
                        <div className="relative mx-1 h-full sm:mx-2 lg:m-3">
                            {/** MD **/}
                            {isMd && (
                                <>
                                    <ExitButton
                                        toggleCard={() => setExpanded(false)}
                                    />
                                    <div
                                        className={`flex-center absolute top-0 left-0 h-16 w-full rounded-t-xl bg-grey dark:bg-black ${
                                            ltr && 'rounded-b-xl shadow-sm'
                                        }`}
                                    >
                                        <h4>{data.title}</h4>
                                    </div>
                                </>
                            )}

                            {/** [  CHILDREN  ] **/}
                            <div className="absolute top-0 left-0 right-0 bottom-0 select-none overflow-hidden md:top-16">
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
