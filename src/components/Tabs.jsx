import { Variants } from '@config'
import { LayoutGroup, motion } from 'framer-motion'

const Tabs_List = ({
    currentTab,
    setTab,
    tabNames = null,
    tabCount = null,
    scrollRef = null,
}) => {
    function handleTab(clickedTab) {
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
        setTimeout(() => {
            if (!scrollRef) return
            scrollRef.current.scrollTo(0, 0)
        }, 250)
    }
    return tabNames ? (
        <LayoutGroup>
            <div className="flex-evenly w-full rounded-md border-b-[1px] border-lightTeal/75 bg-black/75 shadow-xl shadow-black/75">
                {[...Array(tabNames.length).keys()].map((idx) => (
                    <motion.div
                        key={idx}
                        className="flex-center group relative my-1 h-12 w-full cursor-pointer whitespace-nowrap rounded-md rounded-b-none p-2 text-center md:mx-5"
                        onClick={() => handleTab(idx)}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="full flex-center rounded-md font-medium capitalize tracking-wide text-white group-hover:bg-[#eeeeee25]">
                            {tabNames[idx]}
                        </span>
                        {idx === currentTab ? (
                            <motion.div
                                className="absolute bottom-2 top-2 left-2 right-2 rounded-md bg-neon/50 opacity-100"
                                layoutId="underline"
                            />
                        ) : null}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    ) : (
        <LayoutGroup>
            <div className="flex-evenly w-full max-w-[768px]">
                {[...Array(tabCount).keys()].map((idx) => (
                    <div
                        key={idx}
                        className="mt-5 cursor-pointer p-3"
                        onClick={() => handleTab(idx)}
                    >
                        <div className="relative aspect-square h-4 rounded bg-charcoal">
                            {idx === currentTab && (
                                <motion.div
                                    className="absolute -top-1 -left-1 -z-10 aspect-square h-6 rounded-md bg-neon"
                                    layoutId="highlight"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </LayoutGroup>
    )
}
const Tabs = ({
    children,
    drag = null,
    currentTab = null,
    setTab = null,
    tabCount = null,
    variants = Variants.sliders,
    ...tabProps
}) => {
    function detectGesture(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        // const nextTab = currentTab
        const threshold = 100
        if (swipe < -threshold) {
            paginate(1)
            // nextTab = currentTab + 1
        } else if (swipe > threshold) {
            paginate(-1)
            // nextTab = currentTab - 1
        }
    }
    const paginate = (newDirection) => {
        if (
            currentTab + newDirection < tabCount &&
            currentTab + newDirection >= 0
        ) {
            // moving , normal
            setTab([currentTab + newDirection, newDirection])
        } else if (currentTab + newDirection === tabCount) {
            // last slide >> first slide
            setTab([0, newDirection])
        } else if (currentTab + newDirection === -1) {
            // first slide >> last slide
            setTab([tabCount - 1, newDirection])
        }
    }

    tabProps = {
        variants: variants,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        drag: drag,
        onDragEnd: drag !== null && detectGesture,
        ...tabProps,
    }
    return (
        <motion.div
            className={
                drag == null
                    ? 'md:flex-top full'
                    : 'absolute left-[5%] right-[5%] h-[400px]'
            }
            {...tabProps}
        >
            {children}
        </motion.div>
    )
}

export { Tabs_List, Tabs }
