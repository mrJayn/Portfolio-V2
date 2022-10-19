import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Tabs from './Tabs'
import Styled_ExitButton from './Styled_ExitButton'
import { cardExpanded_Variants as variants } from '@motion'
import { useMediaQuery } from '@hooks'

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
            className="fixed left-0 right-0 top-12 bottom-0 z-30 md:absolute md:top-0 md:bottom-10 md:z-10 md:bg-transparent"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrap}
            custom={isMd}
        >
            {/** HEADER **/}
            {isMd ? (
                <>
                    <motion.h4
                        className="absolute -top-12 -z-10 h-12 w-full text-center"
                        variants={variants.Title}
                    >
                        {cardData.title}
                    </motion.h4>
                    <div className="absolute left-0 -top-14">
                        <Styled_ExitButton
                            toggleCard={() => setExpanded(false)}
                        />
                    </div>
                </>
            ) : (
                <motion.h5
                    className="flex-center absolute -top-12 left-[50%] z-50 h-12 translate-x-[-50%] whitespace-nowrap tracking-wide text-white"
                    variants={variants.NavTitle}
                >
                    {cardData.title}
                </motion.h5>
            )}

            {/** CONTENT **/}
            <div className="full relative bg-background md:bg-transparent">
                {isSm & isAbout ? (
                    <div className="absoluteFull overflow-hidden   md:rounded-[5rem]">
                        <div className="full overflow-y-scroll md:overflow-hidden">
                            <div className="md:full flex-row p-4 pb-16 md:flex md:items-start md:pb-4">
                                {[...Array(tabProps.span).keys()].map(
                                    (i) => tabs[i]
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="absolute top-0 left-0 right-0 bottom-14 overflow-hidden md:rounded-[5rem]">
                        <motion.div
                            className="absoluteFull scollbar-visible overflow-x-hidden overflow-y-scroll p-2"
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
                        <motion.div
                            className="fixed bottom-0 left-0 right-0 z-10 h-14 bg-nav py-1 md:absolute md:left-6 md:right-6 md:-bottom-20 md:h-14"
                            variants={variants.TabListContainer}
                        >
                            <Tabs.List {...tabListProps} />
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Card_Expanded
