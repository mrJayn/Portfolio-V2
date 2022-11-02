import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import Card_Base from './Card_Base'
import Card_Expanded from './Card_Expanded'
import Styled_Button from './Styled_Button'
import { useGlobalControls, useMediaQuery } from '@hooks'
import { cardVariants as variants } from '@motion'

// Next Image w/Props
const Styled_Image = ({ src, alt, isAbout, isMd, pRM }) => {
    const Styled_Img = () => (
        <div className="relative aspect-[4/3] w-10/12 overflow-hidden rounded-xl shadow-md md:mx-auto md:mt-6 md:aspect-auto md:h-[90%] md:w-[calc(100%-24px)] md:shadow-sm">
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
            />
        </div>
    )
    return isMd ? (
        <motion.div
            data-imgcard
            className="relative -z-10 h-full w-1/2 overflow-hidden motion-reduce:z-10 motion-reduce:rounded-[3rem]"
            style={{
                borderRadius: isAbout ? '' : '0 3rem 3rem 0',
            }}
            variants={variants.Img}
            custom={!pRM && isAbout}
        >
            <Styled_Img />
        </motion.div>
    ) : (
        <Styled_Img />
    )
}

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
        <>
            <Card_Base {...cardProps} />
            {/**************************************/}
            <AnimatePresence onExitComplete={() => setTab([0, 0])}>
                {expanded && <Card_Expanded {...card_expanded_props} />}
            </AnimatePresence>
        </>
    )
}
export default Card_Group
