import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { useMediaQuery } from '@hooks'
import { Section, Featured_Project, Tabs, ReadMore } from '@components'
import { Variants } from '@config'

const Featured = ({ ...data }) => {
    const isMd = useMediaQuery()
    const featured_data = data.featured

    const [readMoreSmall, setReadMoreSmall] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const i = wrap(0, Object.keys(featured_data).length, currentTab)

    const indicatorProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabCount: wrap.length,
    }
    const tabProps = {
        key: currentTab,
        drag: 'x',
        dragConstraints: { left: 0, right: 0 },
        dragElastic: 1,
        currentTab: currentTab,
        setTab: setTab,
        tabCount: wrap.length,
        variants: Variants.sliders,
        custom: direction,
    }

    const mobileRMProps = {
        project: featured_data[i],
        isOpen: readMoreSmall,
        setReadMore: setReadMoreSmall,
        isMd: isMd,
    }
    return (
        <Section
            id="featured"
            fullScreen={false}
            marginBottom={false}
            scrollTarget="start"
        >
            {/** Md - ALL SHOWN **/}
            <div id="featured-md" className="full py-10">
                <div className="sm:flex-col-center hidden w-full">
                    {data.featured.map((obj, i) => {
                        return (
                            <Featured_Project
                                key={i}
                                project={obj}
                                i={i}
                                isMd={true}
                            />
                        )
                    })}
                </div>
            </div>
            {/** Sm - TABS **/}
            <div id="featured-sm" className="flex-col-btw  w-full sm:hidden">
                <div className="relative h-[450px] w-full">
                    <AnimatePresence initial={false} custom={direction}>
                        <Tabs.Wrap {...tabProps}>
                            <Featured_Project
                                project={featured_data[i]}
                                setMobileRM={setReadMoreSmall}
                            />
                        </Tabs.Wrap>
                    </AnimatePresence>
                </div>
                <Tabs.Indicators {...indicatorProps} />
                {!isMd && <ReadMore {...mobileRMProps} />}
            </div>
        </Section>
    )
}

export default Featured
