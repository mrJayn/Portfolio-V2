import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Tabs from './Tabs'
import Styled_ExitButton from './Styled_ExitButton'
import { cardExpanded_Variants as variants } from '@motion'
import { useMediaQuery } from '@hooks'

const Expanded_Title = ({ title, setExpanded, isMd }) =>
    isMd ? (
        <div className="flex-center absolute top-0 -z-10 h-12 w-full">
            <motion.h4 variants={variants.Title}>{title}</motion.h4>
            <Styled_ExitButton
                action={() => setExpanded(false)}
                className="left-0 top-0 h-full"
            />
        </div>
    ) : (
        <motion.h5
            className="flex-center absolute -top-12 left-[50%] z-50 h-12 translate-x-[-50%] whitespace-nowrap tracking-wide text-white"
            variants={variants.NavTitle}
        >
            {title}
        </motion.h5>
    )
const Expanded_TabList = ({ ...tabListProps }) => (
    <motion.div
        className="md:flex-center fixed bottom-0 left-0 right-0 z-10 h-14 bg-nav py-1 md:rounded-xl"
        variants={variants.TabListContainer}
    >
        <Tabs.List {...tabListProps} />
    </motion.div>
)
const Card_Expanded = ({
    cardData,
    tabs,
    isAbout,
    currentTab,
    direction,
    setTab,
    setExpanded,
    isMd,
}) => {
    const scrollRef = useRef()
    const isSm = useMediaQuery(600)

    const tabListProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabNames: cardData.tabNames,
    }
    const tabProps = {
        section: isAbout ? 'About' : 'Experience',
        currentTab: currentTab,
        setTab: setTab,
        span: cardData.tabNames.length,
        custom: direction,
    }

    return (
        <motion.div
            id={`${tabProps.section}-expanded`}
            className="fixed left-0 right-0 top-12 bottom-0 z-30 md:top-0 md:pt-12"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
            custom={isMd}
        >
            {/** HEADER **/}
            <Expanded_Title
                isMd={isMd}
                title={cardData.title}
                setExpanded={setExpanded}
            />

            {/** CONTENT **/}
            <motion.div className="full relative overflow-hidden bg-background md:overflow-visible md:rounded-[3rem] md:bg-transparent">
                {isSm & isAbout ? (
                    <div className="absoluteFull overflow-y-scroll md:overflow-visible">
                        <div className="p-4 pb-16 md:pb-4">
                            {[...Array(tabProps.span).keys()].map(
                                (i) => tabs[i]
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="absolute top-0 left-0 right-0 bottom-14 md:bottom-0">
                        <motion.div
                            className="absoluteFull overflow-hidden p-2 md:mt-[5px]"
                            variants={variants.Content}
                            custom={isMd}
                            ref={scrollRef}
                        >
                            <AnimatePresence
                                mode="wait"
                                custom={direction}
                                onExitComplete={() =>
                                    scrollRef.current.scrollTo(0, 0)
                                }
                            >
                                <Tabs.Wrap key={currentTab} {...tabProps}>
                                    {tabs[currentTab]}
                                </Tabs.Wrap>
                            </AnimatePresence>
                        </motion.div>
                        {/***/}
                        {!isMd ? <Expanded_TabList {...tabListProps} /> : null}
                    </div>
                )}
            </motion.div>
            {isMd & !isAbout ? <Expanded_TabList {...tabListProps} /> : null}
        </motion.div>
    )
}

export default Card_Expanded
