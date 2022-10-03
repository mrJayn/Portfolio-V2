import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Tabs, Tabs_List, Card_Base, Card_Expanded } from '@components'
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
        ltr: isAbout,
        expanded: expanded,
        setExpanded: setExpanded,
        isMd: isMd,
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
            {/** ---------------------------- **/}
            <Card_Expanded resetTabs={() => setTab([0, 0])} {...cardProps}>
                {/** [  TABS  ] **/}
                {isAbout & isSm ? null : (
                    <div className="full relative overflow-hidden">
                        {/** ABOUT ( < 600px )  &  EXPERIENCE ( All Media ) **/}
                        {/** 1 **/}
                        <div className="fixed top-12 left-0 right-0 z-10 h-12 md:absolute md:top-0">
                            {/** tabListProps: [  currentTab, setTab, tabNames ]  **/}
                            <Tabs_List {...tabListProps} />
                        </div>
                        {/** 2 **/}
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
                                    {/** tabProps: [  currentTab, setTab, span  ]  **/}
                                    <Tabs key={currentTab} {...tabProps}>
                                        {tabs[currentTab]}
                                    </Tabs>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                )}

                {/** SM: FLEX-ROW  \\  MD: FLEX-COL **/}
                {isAbout & isSm && (
                    <div className="full overflow-y-scroll md:overflow-hidden">
                        <div className="md:full flex-row p-5 pb-20 md:flex md:items-start md:pb-5">
                            {[...Array(tabProps.span).keys()].map(
                                (i) => tabs[i]
                            )}
                        </div>
                    </div>
                )}
            </Card_Expanded>
        </>
    )
}
export default Card_Group
