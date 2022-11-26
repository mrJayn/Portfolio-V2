import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

const Tabs_List = ({
    currentTab,
    setTab,
    tabNames,
    bgStyle = '',
    style = '',
}) => {
    const isLabeled = isNaN(tabNames)

    function handleSelect(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }
    return (
        <LayoutGroup>
            <div
                className={`w-auto min-w-full  ${
                    isLabeled
                        ? 'flex h-12 overflow-x-scroll sm:h-14 lg:h-16'
                        : 'flex-evenly max-w-screen-md overflow-hidden'
                } ${bgStyle}`}
            >
                {[...Array(isLabeled ? tabNames.length : tabNames).keys()].map(
                    (idx) =>
                        isLabeled ? (
                            <div
                                key={`tabList-Item-${idx}`}
                                className="flex-center full group relative min-w-[115px] cursor-pointer whitespace-nowrap p-1 sm:p-2 lg:p-3"
                                onClick={() => handleSelect(idx)}
                            >
                                <div className="full flex-center relative z-10 rounded-lg bg-white/10 font-medium capitalize tracking-wide text-grey duration-100 group-hover:bg-[#eeeeee50]">
                                    <span
                                        className={`z-10 select-none text-xs font-semibold tracking-normal duration-250 ${
                                            idx == currentTab
                                                ? 'text-white/100'
                                                : 'text-white/50'
                                        }`}
                                    >
                                        {tabNames[idx]}
                                    </span>
                                    <AnimatePresence mode="wait">
                                        {idx == currentTab ? (
                                            <motion.div
                                                className=" absoluteFull tabListEffects rounded-lg bg-teal-40/75 saturate-150 dark:bg-gradient"
                                                style={{
                                                    filter: `hue-rotate(${
                                                        (idx /
                                                            tabNames.length) *
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
                                key={`tabList-Item-${idx}`}
                                className="mt-5 cursor-pointer p-4"
                                onClick={() => handleSelect(idx)}
                            >
                                <div className="relative aspect-square h-5 rounded-lg bg-grey-40/75 duration-250 dark:bg-white/50">
                                    <AnimatePresence mode="wait">
                                        {idx == currentTab ? (
                                            <motion.div
                                                className="absolute -top-1 -left-1 -z-10 aspect-square h-7 rounded-lg bg-teal/75 dark:bg-gradient"
                                                style={{
                                                    filter: `hue-rotate(${
                                                        (idx / tabNames) * 135
                                                    }deg) saturate(2) brightness(1.26) blur(4px)`,
                                                }}
                                                layoutId="highlight"
                                            />
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )
                )}
            </div>
        </LayoutGroup>
    )
}

export default Tabs_List
