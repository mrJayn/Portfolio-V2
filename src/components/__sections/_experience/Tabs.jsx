import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Tabs_List from '../../items/Tabs_List'
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
            className="fixed left-0 right-0 top-12 bottom-0 bg-background"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
        >
            <div className="absolute top-0 left-0 right-0 bottom-16">
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
                    className="flex-center fixed bottom-0 left-0 right-0 z-10 h-16 bg-nav"
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

/**
 * const Tabs_Wrap = ({
    children,
    section,
    currentTab = null,
    setTab = null,
    span = null,
    ...tabProps
}) => {
    const pRM = useReducedMotion()

    const x = useMotionValue(0)
    const shadowOpacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

    // ~ Props ~
    
    const controls = useDragControls()
    const dragShadowProps = (section == 'Featured') & !pRM && {
        onMouseDown: (e) => controls.start(e),
        dragControls: controls,
        style: { x },
    }
    
    tabProps = {
        ...tabProps,
    }
    // Basic Gesture Detection
    const threshold = 5000
    function handleSwipe(e, { offset, velocity }) {
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
            *  {section == 'Featured' ? (
                <motion.div
                    className="absoluteFull -z-10 rounded-xl shadow"
                    style={{ opacity: shadowOpacity, zIndex: -20 }}
                />
            ) : null}
            *
        </motion.div>
    )
}
 */
