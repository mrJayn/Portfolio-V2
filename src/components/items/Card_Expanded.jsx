import { useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

import Tabs from './Tabs'
import Styled_ExitButton from './Styled_ExitButton'
import { expandedMotion } from '@motion'
import { useMediaQuery } from '@hooks'

const cardExpVars = expandedMotion.Card

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
    const pRM = useReducedMotion()
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
        <motion.div initial="hidden" animate="show" exit="hidden">
            {/** Md - [  Title  |  Styled_ExitButton  ]  **/}
            <>
                {isMd ? (
                    <>
                        <motion.h4
                            className="absolute -top-12 -z-10 h-12 w-full text-center"
                            variants={cardExpVars.Title}
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
                    <motion.div
                        className="flex-center fixed top-0 left-[50%] z-50 h-12 translate-x-[-50%]"
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={expandedMotion.Title}
                        custom={pRM}
                    >
                        <h4 className="whitespace-nowrap">{cardData.title}</h4>
                    </motion.div>
                )}
            </>

            {/** CONTENT **/}
            <motion.div
                className="fixed left-3 right-3 top-12 bottom-0 z-30 bg-light dark:bg-dark md:absolute md:top-0 md:left-0 md:right-0 md:bottom-[5%] md:z-10 md:bg-transparent"
                variants={isMd & !pRM ? cardExpVars.Wrap : cardExpVars.Wrap.pRM}
                custom={!isMd & pRM && isMd}
                transition={!isMd || (pRM && {})}
            >
                <div className="full relative">
                    <motion.div
                        className="absoluteFull overflow-hidden md:rounded-[5rem]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2 },
                        }}
                        exit={{ opacity: 0 }}
                    >
                        {/** ================================================== **/}
                        {isSm & isAbout ? (
                            <>
                                {/**  About Section @ isSm **/}
                                <div className="full overflow-y-scroll md:overflow-hidden">
                                    <div className="md:full flex-row p-4 pb-16 md:flex md:items-start md:pb-4">
                                        {[...Array(tabProps.span).keys()].map(
                                            (i) => tabs[i]
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/** Experience Section **/}
                                {/** About Section @ min->sm. **/}
                                <div className="full relative overflow-hidden">
                                    <div
                                        className="absoluteFull scollbar-visible overflow-y-scroll"
                                        ref={scrollRef}
                                    >
                                        <div className="mb-10 overflow-hidden sm:m-0 sm:p-10">
                                            <AnimatePresence
                                                mode="wait"
                                                custom={direction}
                                                onExitComplete={() =>
                                                    scrollRef.current.scrollTo(
                                                        0,
                                                        0
                                                    )
                                                }
                                            >
                                                <Tabs.Wrap
                                                    key={currentTab}
                                                    {...tabProps}
                                                >
                                                    {tabs[currentTab]}
                                                </Tabs.Wrap>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/** ================================================== **/}
                    </motion.div>
                    {/***/}
                    {isSm &
                        !isAbout(
                            <div className="fixed bottom-0 left-0 right-0 z-10 h-14 bg-red md:absolute md:left-6 md:right-6 md:-bottom-20 md:h-14">
                                <Tabs.List {...tabListProps} />
                            </div>
                        )}
                    {/***/}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Card_Expanded
