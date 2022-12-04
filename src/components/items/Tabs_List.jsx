import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

const Tabs_List = ({ currentTab, tabNames, handleSelect }) => {
    return (
        <LayoutGroup>
            <div className="flex-evenly full gap-x-1">
                {tabNames.map((label, index) => {
                    const isActive = index == currentTab
                    return (
                        <motion.div
                            key={`tabList-Item-${index}`}
                            className="full flex cursor-pointer"
                            whileTap={{ scale: 1 }}
                            onClick={() => handleSelect(index)}
                        >
                            <div className="full flex-center relative z-10 overflow-hidden rounded-xl bg-white p-0.5 shadow-inset shadow-black/25">
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

export default Tabs_List
