import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Tabs, Tabs_List } from '@components'
import Card_Base from './Card_Base'
import Card_Expanded from './Card_Expanded'

const Card_Group = ({ tabs, isMd, ...data }) => {
    const Data = data.data

    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const scrollRef = useRef()

    /** CARD **/
    const cardProps = {
        toggleCard: () => setReadMore(true),
        isMd,
        data: Data,
    }
    /** EXPANDED **/
    const expandedProps = {
        title: Data.title,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }
    /** TAB LIST **/
    const indicatorProps = {
        tabNames: Data.tabNames,
        currentTab: currentTab,
        setTab: setTab,
        scrollRef: scrollRef,
    }
    /** TABS **/
    const tabProps = {
        key: currentTab,
        custom: direction,
    }

    return (
        <>
            <Card_Base {...cardProps} />
            {/** ---------------------------- **/}
            <Card_Expanded {...expandedProps}>
                {/** MIN: TABS **/}
                <div
                    className={`full relative overflow-hidden ${
                        Data.responsive && 'sm:hidden'
                    }`}
                >
                    {/** MIN: TABS **/}
                    {/** 1 **/}
                    <div className="absolute top-0 left-0 z-10 h-12 w-full">
                        <Tabs_List {...indicatorProps} />
                    </div>
                    {/** 2 **/}
                    <div
                        className="absolute top-14 left-0 right-0 bottom-0 overflow-y-scroll"
                        ref={scrollRef}
                    >
                        <div className="mb-10 mt-5">
                            <AnimatePresence mode="wait" custom={direction}>
                                <Tabs {...tabProps}>{tabs[currentTab]}</Tabs>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/** SM: FLEX-ROW  \\  MD: FLEX-COL **/}
                {Data.responsive && (
                    <div className="sm:flex-col-top hidden h-full overflow-y-scroll p-5 md:flex-row md:items-start">
                        {[...Array(Data.tabNames.length).keys()].map(
                            (i) => tabs[i]
                        )}
                    </div>
                )}
            </Card_Expanded>
        </>
    )
}
export default Card_Group
