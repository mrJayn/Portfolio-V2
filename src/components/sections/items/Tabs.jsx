import { LayoutGroup, motion } from 'framer-motion'
import { config } from '@config'

const TabList = ({ currentTab, setTab, tabNames }) => {
    const tabNums = [...Array(tabNames.length).keys()]
    function handleTab(clickedTab) {
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full border-b-[1px] border-lightTeal/75 bg-black/75 shadow-xl shadow-black/75">
                {tabNums.map((tabNum) => (
                    <motion.div
                        key={tabNum}
                        className="flex-center group relative my-1 h-12 w-full cursor-pointer whitespace-nowrap rounded-md rounded-b-none p-2 text-center md:mx-5"
                        onClick={() => handleTab(tabNum)}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="full flex-center rounded-md font-medium capitalize tracking-wide text-white group-hover:bg-[#eeeeee25]">
                            {tabNames[tabNum]}
                        </span>
                        {tabNum === currentTab ? (
                            <motion.div
                                className="absolute bottom-2 top-2 left-2 right-2 rounded-md bg-neon/50 opacity-100"
                                layoutId="underline"
                            />
                        ) : null}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    )
}
const TabWrap = ({
    children,
    variants = config.variants.slideshow,
    ...tabProps
}) => {
    tabProps = {
        variants: variants,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        ...tabProps,
    }
    return (
        <motion.div className=" md:flex-top full" {...tabProps}>
            {children}
        </motion.div>
    )
}

const Tabs = {
    List: TabList,
    Item: TabWrap,
}
export default Tabs
