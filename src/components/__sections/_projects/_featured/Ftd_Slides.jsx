import { useEffect, useState } from 'react'
import {
    motion,
    AnimatePresence,
    useDragControls,
    LayoutGroup,
} from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import Featured_Slide from './Ftd_SlideProject'
import { handleSwipe, paginate } from '@utils'
import { ftdSlidesVariants as variants } from '@motion'

const StaticHeading = () => (
    <motion.p className="relative font-robotoMono text-lg italic text-slate-30 underline underline-offset-4">
        Featured Projects
    </motion.p>
)

const Indicators = ({ currentTab, handleIndicator, span }) => (
    <LayoutGroup>
        <motion.div
            className="flex-evenly h-[10%] w-full"
            variants={variants.IndicatorsWrap}
        >
            {[...Array(span).keys()].map((idx) => (
                <motion.div
                    key={`indicator-${idx}`}
                    className="cursor-pointer p-2"
                    variants={variants.Indicators}
                    onClick={() => handleIndicator(idx)}
                >
                    <motion.div
                        className="relative aspect-square h-7 rounded-md bg-grey/50"
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {idx == currentTab ? (
                                <motion.div
                                    className="absoluteFull rounded-md bg-slate shadow-inset blur-[2px] contrast-200 saturate-200"
                                    layoutId="highlight"
                                />
                            ) : null}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    </LayoutGroup>
)

const Ftd_Slides = ({ isMd = true, isRouting, ...projects }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])
    const controls = useDragControls()
    const n = wrap(0, Object.keys(projects).length, currentTab)

    function useDetectGesture(e, { offset, velocity }) {
        const [x, v] = [offset.x, velocity.x]
        handleSwipe(x, v, currentTab, wrap.length, setTab)
    }

    function handleIndicator(idx) {
        if (idx == currentTab) return
        setTab([idx, idx - currentTab])
    }

    useEffect(() => {
        if (!isMd) return
        const interval = setInterval(
            () => paginate(-1, currentTab, wrap.length, setTab),
            12000
        )
        return () => clearInterval(interval)
    }, [isMd, currentTab, setTab])

    return (
        <div className="flex-col-center full relative z-0 gap-y-5">
            {isMd ? null : <StaticHeading />}
            <div className="h-[50vh] w-full sm:h-[40vh] md:mt-[10%] md:h-[70%] md:w-[75%]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`featured-slide-${n}`}
                        className="md:flex-top full relative"
                        initial="enter"
                        animate={isRouting ? 'close' : 'show'}
                        exit="exit"
                        variants={
                            isMd ? variants.Slides : variants.draggableSlides
                        }
                        custom={direction}
                        {...(isMd
                            ? {}
                            : {
                                  drag: 'x',
                                  dragControls: controls,
                                  dragConstraints: {
                                      left: 0,
                                      right: 0,
                                      top: 0,
                                      bottom: 0,
                                  },
                                  onMouseDown: (e) => controls.start(e),
                                  onDragEnd: useDetectGesture,
                              })}
                    >
                        <Featured_Slide
                            projectData={projects[n].data}
                            direction={direction}
                            isMd={isMd}
                        />
                        <span className="absoluteFull rounded-4xl shadow-inset-outset" />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-full md:invisible md:hidden">
                <Indicators
                    currentTab={currentTab}
                    handleIndicator={handleIndicator}
                    span={wrap.length}
                />
            </div>
        </div>
    )
}

export default Ftd_Slides
