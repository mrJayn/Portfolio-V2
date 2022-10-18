import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

import Card_Base from './Card_Base'
import Card_Expanded from './Card_Expanded'
import { useGlobalControls, useMediaQuery } from '@hooks'

const Card_Group = ({ tabs, globalControls, ...data }) => {
    const isMd = useMediaQuery(768)
    const [expanded, setExpanded] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])

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
        cardData: cardData,
        tabs: tabs,
        isAbout: isAbout,
        currentTab: currentTab,
        direction: direction,
        setTab: setTab,
        expanded: expanded,
        setExpanded: setExpanded,
        isMd: isMd,
    }

    // useGlobalControls for dynamic NAV (@media<768px)
    useGlobalControls(globalControls, [expanded, setExpanded], ['card', isMd])

    return (
        <div className="relative mx-auto h-full w-full max-w-[500px] md:h-[500px] md:max-w-none lg:h-[450px] xl:h-[550px]">
            <Card_Base {...cardProps} />
            {/**************************************/}
            <AnimatePresence onExitComplete={() => setTab([0, 0])}>
                {expanded && <Card_Expanded {...card_expanded_props} />}
            </AnimatePresence>
        </div>
    )
}
export default Card_Group
