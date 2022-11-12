import {
    motion,
    useReducedMotion,
    AnimatePresence,
    LayoutGroup,
    useMotionValue,
    useDragControls,
    useTransform,
} from 'framer-motion'
import { paginate } from '@utils'
import { tabsMotion } from '@motion'

const Tabs_Wrap = ({
    children,
    section,
    currentTab = null,
    setTab = null,
    span = null,
    ...tabProps
}) => {
    const pRM = useReducedMotion()
    const controls = useDragControls()
    const x = useMotionValue(0)
    const shadowOpacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

    // ~ Props ~
    const dragShadowProps = (section == 'Featured') & !pRM && {
        onMouseDown: (e) => controls.start(e),
        dragControls: controls,
        style: { x },
    }
    tabProps = {
        ...dragShadowProps,
        ...tabProps,
    }
    // Basic Gesture Detection
    function handleSwipe(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        const threshold = 5000

        if (swipe < -threshold) {
            paginate(1, currentTab, span, setTab)
        } else if (swipe > threshold) {
            paginate(-1, currentTab, span, setTab)
        }
    }
    return (
        <motion.div
            className={`md:flex-top full relative z-0 rounded-lg opacity-100`}
            variants={pRM ? tabsMotion.Reduced : tabsMotion.Tabs}
            initial="enter"
            animate="show"
            exit="exit"
            drag={!pRM && 'x'}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            onDragEnd={handleSwipe}
            {...tabProps}
        >
            {children}
            {section == 'Featured' ? (
                <motion.div
                    className="absoluteFull -z-10 rounded-xl shadow"
                    style={{ opacity: shadowOpacity, zIndex: -20 }}
                />
            ) : null}
        </motion.div>
    )
}

const Tabs_List = ({ currentTab, setTab, tabNames, altStyle = '' }) => {
    const isLabeled = isNaN(tabNames)

    function handleTab(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }
    return (
        <LayoutGroup>
            <div
                className={`flex-evenly w-full overflow-hidden  ${
                    isLabeled ? 'h-12 sm:h-14 lg:h-16' : 'max-w-screen-md'
                } ${altStyle}`}
            >
                {[...Array(isLabeled ? tabNames.length : tabNames).keys()].map(
                    (i) => {
                        const ACTIVE = i == currentTab
                        return isLabeled ? (
                            <div
                                key={`tabList-Item-${i}`}
                                className="flex-center full group relative cursor-pointer whitespace-nowrap p-1 sm:p-2 lg:p-3"
                                onClick={() => handleTab(i)}
                            >
                                <div className="full flex-center relative z-10 rounded-lg bg-white/10 font-medium capitalize tracking-wide text-grey duration-100 group-hover:bg-[#eeeeee50]">
                                    <span
                                        className={`z-10 select-none text-xs font-semibold tracking-normal duration-250 ${
                                            ACTIVE
                                                ? 'text-white/100'
                                                : 'text-white/50'
                                        }`}
                                    >
                                        {tabNames[i]}
                                    </span>
                                    <AnimatePresence mode="wait">
                                        {ACTIVE ? (
                                            <motion.div
                                                className=" absoluteFull tabListEffects rounded-lg bg-teal-40/75 saturate-150 dark:bg-gradient"
                                                style={{
                                                    filter: `hue-rotate(${
                                                        (i / tabNames.length) *
                                                        135
                                                    }deg)`,
                                                }}
                                                layoutId="highlight"
                                            />
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={`tabList-Item-${i}`}
                                className="mt-5 cursor-pointer p-4"
                                onClick={() => handleTab(i)}
                            >
                                <div className="relative aspect-square h-5 rounded-lg bg-grey-40/75 duration-250 dark:bg-white/50">
                                    <AnimatePresence mode="wait">
                                        {ACTIVE ? (
                                            <motion.div
                                                className="absolute -top-1 -left-1 -z-10 aspect-square h-7 rounded-lg bg-teal/75 dark:bg-gradient"
                                                style={{
                                                    filter: `hue-rotate(${
                                                        (i / tabNames) * 135
                                                    }deg) saturate(2) brightness(1.26) blur(4px)`,
                                                }}
                                                layoutId="highlight"
                                            />
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </LayoutGroup>
    )
}

const Tabs = {
    Wrap: Tabs_Wrap,
    List: Tabs_List,
}

export default Tabs
