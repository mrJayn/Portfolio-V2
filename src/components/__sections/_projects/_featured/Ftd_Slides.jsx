import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup, useCycle } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import Featured_Slide from './Ftd_SlideProject'
import { handleSwipe, paginate } from '@utils'
import { ftdSlidesVariants as variants } from '@motion'
import { Styled } from '@components'

const Indicators = ({ currentTab, handleIndicator, span }) => (
    <div className="relative mt-2 w-full sm:mt-4 md:mt-8 lg:invisible lg:hidden">
        <LayoutGroup>
            <motion.div
                className="flex-around absolute -left-2 h-12 w-screen md:left-auto md:w-full"
                variants={variants.IndicatorsWrap}
            >
                {[...Array(span).keys()].map((idx) => (
                    <motion.div
                        key={`indicator-${idx}`}
                        className="cursor-pointer p-2"
                        variants={variants.Indicators}
                        onClick={() => handleIndicator(idx)}
                    >
                        <motion.div className="relative aspect-square h-8 rounded-xl bg-black/25 md:h-10">
                            <AnimatePresence mode="wait">
                                {idx == currentTab ? (
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-slate-40 shadow-inset"
                                        layoutId="underline"
                                    />
                                ) : null}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </LayoutGroup>
    </div>
)

const UserControls = ({ chevronAction, userPause, setUserPause }) => (
    <>
        <motion.div
            key="pause-btn"
            className={`pause-btn flex-btw order-[0] aspect-square h-full cursor-pointer py-3 px-3.5 ${
                userPause
                    ? 'text-[#F448] hover:text-[#A448]'
                    : 'text-white/40 hover:text-white'
            }`}
            whileTap={{ scale: 0.9 }}
            onClick={() => setUserPause(!userPause)}
        />
        {[
            ['left', -1],
            ['right', 1],
        ].map(([dir, value]) => (
            <div
                key={`${dir == 'left' ? 'last' : 'next'}-btn`}
                className="h-full py-2.5 px-4"
                style={{ order: value }}
            >
                <Styled.Chevron
                    direction={dir}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => chevronAction(value)}
                />
            </div>
        ))}
    </>
)

const Ftd_Slides = ({ isLg = true, isRouting, ...projects }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])
    const n = wrap(0, Object.keys(projects).length, currentTab)
    // Dsktp cycling slides - Related States
    const [pause, setPause] = useState(false)
    const [userPause, setUserPause] = useState(false)

    const time = useRef(0)

    // On drag detect direction
    function useDetectGesture(e, { offset, velocity }) {
        const [x, v] = [offset.x, velocity.x]
        handleSwipe(x, v, currentTab, wrap.length, setTab)
        time.current = 0
    }

    // Mobile Indicators - onTap
    function handleIndicator(idx) {
        if (idx !== currentTab) setTab([idx, idx - currentTab])
    }

    // Dsktp cycling slides - Interval
    useEffect(() => {
        if (!isLg || pause || userPause) return
        const interval = setInterval(function cycleProjects() {
            const intervalTime = 10
            if (time.current !== intervalTime) {
                time.current++
            } else {
                time.current = 0
                paginate(-1, currentTab, wrap.length, setTab)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [isLg, currentTab, setTab, pause, userPause])

    return (
        <div className="flex-col-center full relative">
            {!isLg && <h3>Featured Projects</h3>}
            <div className="mt-2 h-auto w-full lg:mt-[10%] lg:h-[70%] lg:w-[75%]">
                <AnimatePresence mode="wait" custom={direction}>
                    {!isRouting && (
                        <motion.div
                            key={`featured-slide-${n}`}
                            className="full relative cursor-grab rounded-3xl active:cursor-grabbing lg:rounded-4xl"
                            initial="hidden"
                            animate="show"
                            exit="next"
                            variants={variants.Slides[isLg ? 'Dsktp' : 'Mble']}
                            custom={direction}
                            transition={{ duration: isLg ? 1.25 : 0.5 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.75}
                            onMouseDown={() => setPause(true)}
                            onMouseOut={() => setPause(false)}
                            onDragEnd={useDetectGesture}
                        >
                            <Featured_Slide
                                projectData={projects[n].data}
                                direction={direction}
                                isLg={isLg}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {isLg ? (
                <motion.div
                    className="flex-evenly absolute bottom-[2.5%] h-10 w-1/4"
                    variants={variants.PlayPauseControls}
                >
                    <UserControls
                        chevronAction={(n) => {
                            time.current = 0
                            setTab([currentTab + n, -n])
                        }}
                        userPause={userPause}
                        setUserPause={setUserPause}
                    />
                </motion.div>
            ) : (
                <Indicators
                    currentTab={currentTab}
                    handleIndicator={handleIndicator}
                    span={wrap.length}
                />
            )}
        </div>
    )
}

export default Ftd_Slides
