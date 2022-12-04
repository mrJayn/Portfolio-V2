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

const StaticHeading = () => <h3>Featured Projects</h3>

const Indicators = ({ currentTab, handleIndicator, span }) => (
    <LayoutGroup>
        <motion.div
            className="flex-around absolute -left-2 h-12 w-screen"
            variants={variants.IndicatorsWrap}
        >
            {[...Array(span).keys()].map((idx) => (
                <motion.div
                    key={`indicator-${idx}`}
                    className="cursor-pointer p-2"
                    variants={variants.Indicators}
                    onClick={() => handleIndicator(idx)}
                >
                    <motion.div className="relative aspect-square h-8 rounded-xl bg-grey/75">
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
        <div className="flex-col-center full relative">
            {isMd ? null : <StaticHeading />}
            <div className="h-[50vh] w-full sm:h-[40vh] md:mt-[10%] md:h-[70%] md:w-[75%]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`featured-slide-${n}`}
                        className="md:flex-top full relative rounded-4xl pb-2 shadow-inset-outset-md shadow-grey-40 md:py-0"
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
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="relative mt-4 w-full md:invisible md:hidden">
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
