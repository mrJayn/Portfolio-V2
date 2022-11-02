import { useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { Section, Ftd_Project, Ftd_Expanded, Tabs } from '@components'
import { useGlobalControls, useMediaQuery } from '@hooks'

const Featured = ({ globalControls, ...data }) => {
    const [expandedTabs, setExpandedTabs] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const n = wrap(0, Object.keys(data).length, currentTab)

    const tabListProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabNames: wrap.length,
    }
    const tabProps = {
        key: currentTab,
        section: 'Featured',
        currentTab: currentTab,
        setTab: setTab,
        span: wrap.length,
        custom: direction,
    }

    // layout / User Preference Props
    const isSm = useMediaQuery(600)
    const config = {
        isSm: isSm,
        pRM: useReducedMotion(),
    }
    // useGlobalControls for dynamic NAV (@media<768px)
    useGlobalControls(
        globalControls,
        [expandedTabs, setExpandedTabs],
        ['Featured', isSm]
    )

    return (
        <div id="featured-projects" className="full">
            {isSm && (
                /** GRID **/
                <div id="featured-md" className="flex-col-top">
                    {Object.keys(data).map((idx, i) => {
                        return (
                            <Ftd_Project
                                key={`ftd-project-${i}`}
                                project={data[idx]}
                                even={i % 2 == 0}
                                {...config}
                            />
                        )
                    })}
                </div>
            )}
            {!isSm && (
                /** TABS **/
                <div
                    className="flex-col-btw"
                    style={{ height: `calc(100vh - 68px)` }}
                >
                    <Ftd_Expanded
                        project={data[n]}
                        expanded={expandedTabs}
                        setExpanded={setExpandedTabs}
                        {...config}
                    />
                    <div className="full relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            {!expandedTabs && (
                                <Tabs.Wrap id="Ftd-Tabs" {...tabProps}>
                                    <Ftd_Project
                                        key={`ftd-project-${n}`}
                                        project={data[n]}
                                        setExpandedTabs={setExpandedTabs}
                                        {...config}
                                    />
                                </Tabs.Wrap>
                            )}
                        </AnimatePresence>
                    </div>
                    <Tabs.List {...tabListProps} />
                </div>
            )}
        </div>
    )
}

export default Featured
