import { tabVariants } from '@config'
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
            <div className="flex-evenly w-full rounded-b-lg bg-black-light shadow-[0px_5px_15px_-7.5px] shadow-black dark:shadow-teal-neon">
                {[...Array(tabNames.length).keys()].map((idx) => (
                    <motion.div
                        key={idx}
                        className="flex-center group relative h-12 w-full cursor-pointer whitespace-nowrap p-2 text-center sm:my-1 md:mx-5"
                        onClick={() => handleTab(idx)}
                        transition={{ duration: 0.1 }}
                    >
                        <span
                            className="full flex-center z-10 rounded-md font-medium capitalize tracking-wide group-hover:bg-[#eeeeee25]"
                            style={{
                                color: idx === currentTab ? '#fff' : '#d5d5d5',
                                transition:
                                    'backgroundColor 0.1s, color 0.25s 0.15s ease-in',
                            }}
                        >
                            {tabNames[idx]}
                        </span>
                        {idx === currentTab ? (
                            <motion.div
                                className="absolute bottom-2 top-2 left-2 right-2 rounded-md bg-teal-neon/40"
                                layoutId="underline"
                                transition={{ type: 'tween' }}
                            />
                        ) : null}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    ) : (
        <LayoutGroup>
            <div className="flex-evenly w-full max-w-screen-md">
                {[...Array(tabCount).keys()].map((idx) => (
                    <div
                        key={idx}
                        className="mt-5 cursor-pointer p-3"
                        onClick={() => handleTab(idx)}
                    >
                        <div className="relative aspect-square h-4 rounded bg-grey-dark dark:bg-grey-darker">
                            {idx === currentTab && (
                                <motion.div
                                    className="absolute -top-1 -left-1 -z-10 aspect-square h-6 rounded-md bg-teal-neon/75"
                                    layoutId="highlight"
                                    transition={{ type: 'tween' }}
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
    variants = tabVariants,
    ...tabProps
}) => {
    tabProps = {
        variants: variants,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        drag: drag,
        onDragEnd: drag !== null && detectGesture,
        ...tabProps,
    }

    function detectGesture(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        const threshold = 100
        if (swipe < -threshold) {
            paginate(1)
        } else if (swipe > threshold) {
            paginate(-1)
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
