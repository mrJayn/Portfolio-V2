import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tabs from './Tabs'
import { cardExpanded_Variants as variants } from '@motion'

const Card_Expanded = ({
    cardData,
    tabs,
    isAbout = false,
    currentTab,
    direction,
    setTab,
    isMd,
}) => {
    const scrollRef = useRef(null)

    const tabListProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabNames: cardData.tabNames,
    }
    const tabProps = {
        section: isAbout ? 'About' : 'Experience',
        currentTab: currentTab,
        setTab: setTab,
        span: cardData.tabNames.length,
        custom: direction,
    }

    return (
        <motion.div
            className="fixed left-0 right-0 top-12 bottom-0 bg-background"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
        >
            <div className="full relative overflow-hidden">
                <div className="absolute top-12 left-0 right-0 bottom-16">
                    <motion.div
                        className="absoluteFull overflow-x-hidden overflow-y-scroll bg-background text-center"
                        ref={scrollRef}
                    >
                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                            initial={false}
                            onExitComplete={() =>
                                scrollRef.current.scrollTo(0, 0)
                            }
                        >
                            <Tabs.Wrap key={currentTab} {...tabProps}>
                                {tabs[currentTab]}
                            </Tabs.Wrap>
                        </AnimatePresence>
                    </motion.div>
                    {/***/}
                    <motion.div
                        className="flex-center fixed bottom-0 left-0 right-0 z-10 h-16 bg-nav"
                        variants={variants.TabListContainer}
                    >
                        <Tabs.List {...tabListProps} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card_Expanded
