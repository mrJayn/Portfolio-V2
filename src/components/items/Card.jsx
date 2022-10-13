import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

import Tabs from './Tabs'
import Card_Base from './Card_Base'
import Card_Expanded from './Card_Expanded'
import { useGlobalControls, useMediaQuery } from '@hooks'

const Card_Group = ({ tabs, globalControls, ...data }) => {
    const [isSm, isMd] = [useMediaQuery(600), useMediaQuery(768)]
    const [expanded, setExpanded] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const scrollRef = useRef()

    const cardData = data.data
    const isAbout = cardData.section == 'About'

    const cardProps = {
        data: cardData,
        isAbout: isAbout,
        expanded: expanded,
        setExpanded: setExpanded,
        isMd: isMd,
    }
    const card_expanded_props = {
        data: cardData,
        expanded: expanded,
        setExpanded: setExpanded,
        isMd: isMd,
        resetTabs: () => setTab([0, 0]),
    }
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

    // useGlobalControls for dynamic NAV (@media<768px)
    useGlobalControls(globalControls, [expanded, setExpanded], ['card', isMd])

    return (
        <>
            <Card_Base {...cardProps} />
            {/**************************************/}
            <Card_Expanded {...card_expanded_props}>
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
                            {/***/}
                            <div className="fixed top-12 left-0 right-0 z-10 h-12 md:absolute md:left-6 md:right-6 md:top-0">
                                <Tabs.List {...tabListProps} />
                            </div>
                            {/***/}
                            <div
                                className="absolute top-14 left-0 right-0 bottom-0 overflow-y-scroll"
                                ref={scrollRef}
                            >
                                <div className="mb-10 overflow-hidden sm:mt-5">
                                    <AnimatePresence
                                        mode="wait"
                                        custom={direction}
                                        onExitComplete={() =>
                                            scrollRef.current.scrollTo(0, 0)
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
            </Card_Expanded>
        </>
    )
}
export default Card_Group
