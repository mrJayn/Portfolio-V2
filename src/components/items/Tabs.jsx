import { useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import { paginate } from '@utils'
import { tabsMotion as variants } from '@motion'

const Tabs_List = ({ currentTab, tabNames, handleSelect }) => {
    return (
        <LayoutGroup>
            <div className="flex-evenly full bg-white/90">
                {tabNames.map((label, index) => {
                    const isActive = index == currentTab
                    return (
                        <motion.div
                            key={`tabList-Item-${index}`}
                            className="full flex cursor-pointer p-0.5"
                            whileTap={{ scale: 1 }}
                            onClick={() => handleSelect(index)}
                        >
                            <div className="full flex-center relative z-10 overflow-hidden rounded-lg shadow-inset shadow-black/25">
                                <span
                                    className={`z-10 select-none font-semibold duration-250 ${
                                        isActive ? 'text-black' : 'text-grey'
                                    }`}
                                >
                                    {label}
                                </span>
                                <AnimatePresence mode="wait">
                                    {isActive && (
                                        <motion.div
                                            layoutId="highlight"
                                            className="absolute inset-0 -z-10 rounded-lg bg-slate/50 bg-blend-multiply blur-sm"
                                            transition={{ delay: 0.1 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </LayoutGroup>
    )
}

const Tabs = ({ tabs, tabNames, ...props }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])
    const scrollRef = useRef(null)
    const span = tabNames.length

    function handleSwipe(e, { offset, velocity }) {
        const threshold = 5000
        const swipe = Math.abs(offset.x) * velocity.x
        if (swipe < -threshold) {
            paginate(1, currentTab, span, setTab)
        } else if (swipe > threshold) {
            paginate(-1, currentTab, span, setTab)
        }
    }
    function handleSelect(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }

    return (
        <motion.div
            className="fixed inset-0"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
            {...props}
        >
            <div className="absolute inset-0">
                <div
                    className="absoluteFull overflow-x-hidden overflow-y-scroll text-center"
                    ref={scrollRef}
                >
                    <AnimatePresence
                        mode="wait"
                        custom={direction}
                        initial={false}
                        onExitComplete={() => scrollRef.current.scrollTo(0, 0)}
                    >
                        <motion.div
                            key={currentTab}
                            className="full relative rounded-lg opacity-100"
                            initial="enter"
                            animate="show"
                            exit="exit"
                            variants={variants.Tabs}
                            custom={direction}
                            drag="x"
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            onDragEnd={handleSwipe}
                        >
                            <div className="w-full py-14">
                                {tabs[currentTab]}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/***/}
                <motion.div
                    className="fixed bottom-0 left-0 right-0 z-10 h-12"
                    variants={variants.TabListContainer}
                >
                    <Tabs_List
                        currentTab={currentTab}
                        tabNames={tabNames}
                        handleSelect={handleSelect}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Tabs
