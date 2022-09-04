import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import {
    Section,
    Featured_Project,
    Tabs,
    Tabs_List,
    ReadMore,
} from '@components'

const Featured = ({ featured, isMd }) => {
    const [readMoreSmall, setReadMoreSmall] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const i = wrap(0, Object.keys(featured).length, currentTab)

    const tabListProps = {
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
        custom: direction,
    }

    const mobileRMProps = {
        project: featured[i],
        isOpen: readMoreSmall,
        setReadMore: setReadMoreSmall,
        isMd: isMd,
    }

    return (
        <Section id="featured" fullScreen={isMd ? false : true}>
            {/** Sm - TABS **/}
            <div id="featured-sm" className="flex-col-btw w-full sm:hidden">
                <div className="relative h-[450px] w-full">
                    <AnimatePresence initial={false} custom={direction}>
                        <Tabs {...tabProps}>
                            <Featured_Project
                                project={featured[i]}
                                setMobileRM={setReadMoreSmall}
                            />
                        </Tabs>
                    </AnimatePresence>
                </div>
                <Tabs_List {...tabListProps} />
                {!isMd && <ReadMore {...mobileRMProps} />}
            </div>
            {/** Md - ALL SHOWN **/}
            <div id="featured-md" className="full sm:flex-col-top hidden py-10">
                <div className="w-full">
                    {featured.map((obj, i) => {
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
        </Section>
    )
}

export default Featured
