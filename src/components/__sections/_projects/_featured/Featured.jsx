import { useState } from 'react'
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    useDragControls,
    LayoutGroup,
} from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import Ftd_Project from './Ftd_Project'
import { paginate } from '@utils'
import { tabsMotion } from '@motion'

const All_Featured = ({ ...projects }) =>
    Object.keys(projects).map((idx, i) => (
        <Ftd_Project
            key={`ftd-project-${i}`}
            project={projects[idx]}
            even={i % 2 == 0}
        />
    ))

const Slide_Wrap = ({
    currentTab = null,
    setTab = null,
    span = null,
    children,
    ...tabProps
}) => {
    const x = useMotionValue(0)
    const shadowOpacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

    const controls = useDragControls()

    tabProps = {
        onMouseDown: (e) => controls.start(e),
        dragControls: controls,
        style: { x },
        ...tabProps,
    }

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
            className={`md:flex-top full relative z-0`}
            variants={tabsMotion.Tabs}
            initial="enter"
            animate="show"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleSwipe}
            {...tabProps}
        >
            <motion.div
                className="absoluteFull -z-10 overflow-hidden rounded-4xl shadow-inset-outset"
                style={{ opacity: shadowOpacity, zIndex: -20 }}
            />
            {children}
        </motion.div>
    )
}
const Indicators = ({ currentTab, setTab, span }) => {
    function handleSelect(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full max-w-screen-md overflow-hidden">
                {[...Array(span).keys()].map((idx) => (
                    <div
                        key={`tabList-Item-${idx}`}
                        className="mt-5 cursor-pointer p-4"
                        onClick={() => handleSelect(idx)}
                    >
                        <div className="relative h-8 w-8 rounded-full bg-grey/50 duration-250">
                            <AnimatePresence mode="wait">
                                {idx == currentTab ? (
                                    <motion.div
                                        className="absoluteFull rounded-full bg-slate shadow-inset-outset-md"
                                        style={{
                                            filter: `hue-rotate(${
                                                (idx / span) * 45
                                            }deg) saturate(2) contrast(2) blur(2px)`,
                                        }}
                                        layoutId="highlight"
                                    />
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutGroup>
    )
}

const Slides = ({ slug = null, ...projects }) => {
    const [expandedTabs, setExpandedTabs] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const n = wrap(0, Object.keys(projects).length, currentTab)

    return (
        <div className="flex-col-btw full">
            <div className="h-[50vh] w-full md:m-auto md:h-[80%] md:w-[80%]">
                <AnimatePresence mode="wait" custom={direction}>
                    {!expandedTabs && (
                        <Slide_Wrap
                            key={currentTab}
                            currentTab={currentTab}
                            setTab={setTab}
                            span={wrap.length}
                            custom={direction}
                        >
                            <Ftd_Project
                                slug={slug}
                                project={projects[n]}
                                setExpandedTabs={setExpandedTabs}
                                direction={direction}
                            />
                        </Slide_Wrap>
                    )}
                </AnimatePresence>
            </div>
            <>
                <Indicators
                    currentTab={currentTab}
                    setTab={setTab}
                    span={wrap.length}
                />
            </>
        </div>
    )
}

// SectionCard is able to call <Slides/> because it does not pass 'isMd' as a prop
const Featured = ({ isMd, slug = null, ...projects }) =>
    isMd ? <All_Featured {...projects} /> : <Slides slug={slug} {...projects} />

export default Featured
