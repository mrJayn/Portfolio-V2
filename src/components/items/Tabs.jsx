import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Tabs_List from './Tabs_List'
import { paginate } from '@utils'
import { cardExpanded_Variants as variants } from '@motion'
import { tabsMotion } from '@motion'

const Tabs_Wrap = ({
    currentTab = null,
    setTab = null,
    span = null,
    children,
    ...tabProps
}) => {
    function handleSwipe(e, { offset, velocity }) {
        const threshold = 5000
        const swipe = Math.abs(offset.x) * velocity.x
        if (swipe < -threshold) {
            paginate(1, currentTab, span, setTab)
        } else if (swipe > threshold) {
            paginate(-1, currentTab, span, setTab)
        }
    }
    return (
        <motion.div
            className={`md:flex-top full relative z-0 rounded-lg opacity-100`}
            variants={tabsMotion.Tabs}
            initial="enter"
            animate="show"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleSwipe}
            {...tabProps}
        >
            {children}
        </motion.div>
    )
}

const Tabs = ({ tabNames, tabs, currentTab, direction, setTab }) => {
    const scrollRef = useRef(null)
    return (
        <motion.div
            className="fixed left-0 right-0 top-14 bottom-0 bg-background"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
        >
            <div className="absolute top-0 left-0 right-0 bottom-14">
                <motion.div
                    className="absoluteFull overflow-x-hidden overflow-y-scroll bg-background text-center"
                    ref={scrollRef}
                >
                    <AnimatePresence
                        mode="wait"
                        custom={direction}
                        initial={false}
                        onExitComplete={() => scrollRef.current.scrollTo(0, 0)}
                    >
                        <Tabs_Wrap
                            key={currentTab}
                            currentTab={currentTab}
                            setTab={setTab}
                            span={tabNames.length}
                            custom={direction}
                        >
                            {tabs[currentTab]}
                        </Tabs_Wrap>
                    </AnimatePresence>
                </motion.div>
                {/***/}
                <motion.div
                    className="flex-center fixed bottom-0 left-0 right-0 z-10 h-14 bg-nav"
                    variants={variants.TabListContainer}
                >
                    <Tabs_List
                        currentTab={currentTab}
                        setTab={setTab}
                        tabNames={tabNames}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Tabs
