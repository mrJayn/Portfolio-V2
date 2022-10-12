import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

import Styled_ExitButton from './Styled_ExitButton'
import { expandedVariants } from '@motion'

const Card_Expanded = ({
    children,
    data,
    expanded,
    setExpanded,
    isMd,
    resetTabs,
}) => {
    const pRM = useReducedMotion()
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
                    {/** TITLE **/}
                    {isMd ? (
                        <>
                            <div className="left-10 -top-12 absolute z-20">
                                <Styled_ExitButton
                                    toggleCard={() => setExpanded(false)}
                                />
                            </div>

                            <motion.h4
                                className="absolute left-[50%] -z-10 translate-x-[-50%]"
                                {...expandedVariants.Card.TitleProps}
                            >
                                {data.title}
                            </motion.h4>
                        </>
                    ) : (
                        <motion.div
                            className="flex-center top-0 h-12 fixed left-[50%] z-50 translate-x-[-50%]"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={expandedVariants.Title}
                            custom={pRM}
                        >
                            <h4 className="whitespace-nowrap">{data.title}</h4>
                        </motion.div>
                    )}
                    {/** CONTENT **/}
                    <motion.div
                        className="top-12 left-3 right-3 bottom-0 md:top-3 fixed z-30 overflow-hidden bg-light dark:bg-dark md:absolute md:z-10 md:bg-transparent"
                        {...wrapProps}
                    >
                        <div className="full relative">
                            {/***/}
                            <div className="absoluteFull overflow-hidden md:rounded-[3rem] md:bg-card_grad md:dark:bg-card_grad_DARK">
                                <motion.div
                                    className="full "
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: 2 },
                                    }}
                                    exit={{ opacity: 0 }}
                                >
                                    {children}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Card_Expanded
