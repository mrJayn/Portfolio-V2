import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'

const Tabs_List = ({ currentTab, setTab, tabNames, altStyle = false }) => {
    // Featured Section uses ( tabNames asType INT )
    const isLabeled = isNaN(tabNames)

    // Hnadle List Item Click
    function handleTab(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }

    return (
        <LayoutGroup>
            <div
                className={`flex-evenly w-full overflow-hidden  ${
                    isLabeled
                        ? 'h-12 rounded-b-xl bg-grey shadow-sm dark:bg-black sm:h-14 lg:h-16'
                        : 'max-w-screen-md'
                } ${altStyle && 'rounded-t-xl'}`}
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
                                        className={`z-10 select-none text-xs font-semibold tracking-normal text-white/50 duration-250 ${
                                            ACTIVE && 'text-white/100'
                                        }`}
                                    >
                                        {tabNames[i]}
                                    </span>
                                    <AnimatePresence mode="wait">
                                        {ACTIVE ? (
                                            <motion.div
                                                className="full tabListEffects absolute top-0 left-0 rounded-lg bg-teal-light/75 saturate-150 dark:bg-gradient"
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
                                <div className="relative aspect-square h-5 rounded-lg bg-grey-dark/75 duration-250 dark:bg-white/50">
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

export default Tabs_List
