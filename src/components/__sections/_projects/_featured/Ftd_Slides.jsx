import { useEffect, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
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

const Ftd_Slides = ({ isLg = true, isRouting, ...projects }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])
    const n = wrap(0, Object.keys(projects).length, currentTab)

    function useDetectGesture(e, { offset, velocity }) {
        const [x, v] = [offset.x, velocity.x]
        handleSwipe(x, v, currentTab, wrap.length, setTab)
    }

    function handleIndicator(idx) {
        if (idx == currentTab) return
        setTab([idx, idx - currentTab])
    }

    // isLg/Desktop - Auto Cylce Projects
    useEffect(() => {
        if (!isLg) return
        const interval = setInterval(
            () => paginate(-1, currentTab, wrap.length, setTab),
            30000
        )
        return () => clearInterval(interval)
    }, [isLg, currentTab, setTab])

    const chevronProps = {
        initial: { opacity: 0 },
        variants: {
            show: { opacity: 1, transition: { delay: 1.5 } },
            exit: { opacity: 0 },
        },
        whileTap: { scale: 0.9 },
    }
    return (
        <div className="flex-col-center full relative">
            {!isLg && <h3>Featured Projects</h3>}
            <div className="mt-2 h-auto w-full lg:mt-[10%] lg:h-[70%] lg:w-[75%]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`featured-slide-${n}`}
                        className="full relative cursor-grab rounded-3xl active:cursor-grabbing lg:rounded-4xl lg:shadow-inset-outset-md"
                        initial="hidden"
                        animate={isRouting ? 'exit' : 'show'}
                        exit="next"
                        variants={
                            isLg ? variants.Slides : variants.draggableSlides
                        }
                        custom={direction}
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.75}
                        dragTransition={{ bounceDamping: 30 }}
                        onDragEnd={useDetectGesture}
                    >
                        <Featured_Slide
                            projectData={projects[n].data}
                            direction={direction}
                            isLg={isLg}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            {isLg ? (
                <>
                    <div className="absolute inset-y-[47%] left-2 flex xl:inset-y-[46.5%] xl:left-6">
                        <Styled.Chevron
                            direction="left"
                            onClick={() => setTab([currentTab - 1, 1])}
                            whileHover={{ x: -2.5 }}
                            {...chevronProps}
                        />
                    </div>
                    <div className="absolute inset-y-[47%] right-2 flex xl:inset-y-[46.5%] xl:right-6">
                        <Styled.Chevron
                            direction="right"
                            onClick={() => setTab([currentTab + 1, -1])}
                            whileHover={{ x: 2.5 }}
                            {...chevronProps}
                        />
                    </div>
                </>
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
