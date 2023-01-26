import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { paginate } from '@utils'
import { ftdSlidesVariants as variants } from '@motion'
import Project_Items from './Items'
import Featured_IMG from './Featured_IMG'

const Featured_Slide = ({ data, ...props }) => (
    <>
        <motion.div
            className="flex-col-center absolute right-[-10%] bottom-2 z-20 w-full"
            variants={variants.Slides.Details}
            custom={props.direction}
        >
            <div className="ml-auto mb-1 mr-4 w-min whitespace-nowrap rounded-2xl bg-grey-10 py-3 px-6 shadow-sm">
                <h5 className="font-bold tracking-normal text-black">
                    {data.title}
                </h5>
            </div>
            <div className="flex min-w-full rounded-2xl bg-grey-10 p-2 text-black/90 shadow-md">
                <Project_Items.Tech techs={data.tech} />
            </div>
        </motion.div>
        <Featured_IMG isHome src={data.src} alt={data.alt} />
    </>
)

const Ftd_Slides = ({ inView, ...projects }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])
    const n = wrap(0, Object.keys(projects).length, currentTab)
    const time = useRef(0)
    const intervalTime = 15

    useEffect(() => {
        if (!inView) return () => (time.current = 0)
        const interval = setInterval(function cycleProjects() {
            if (time.current !== intervalTime) {
                time.current++
            } else {
                time.current = 0
                paginate(-1, currentTab, wrap.length, setTab)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [currentTab, setTab, inView])

    return (
        <div className="flex-col-top full relative gap-y-4">
            <div className="relative mt-[15%] h-[70%] w-[65%]">
                <AnimatePresence custom={direction}>
                    <motion.div
                        key={`featured-slide-${n}`}
                        className="absolute inset-0 rounded-4xl shadow-md"
                        initial="hidden"
                        animate="show"
                        exit="next"
                        variants={variants.Slides.Dsktp}
                        custom={direction}
                        transition={{ duration: 1.25 }}
                    >
                        <Featured_Slide
                            data={projects[n].data}
                            direction={direction}
                        />
                        <span
                            className="absolute inset-0 z-10 rounded-4xl shadow-inset"
                            style={{
                                background:
                                    'linear-gradient(to bottom, transparent 60%, black 95%)',
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <LayoutGroup>
                <div className="flex-around relative h-16 w-full max-w-screen-sm overflow-hidden rounded-lg bg-grey/25">
                    {[...Array(wrap.length).keys()].map((idx) => {
                        const isActive = idx == currentTab
                        return (
                            <motion.div
                                key={`indicator-${idx}`}
                                className="flex-center z-10 aspect-square h-10 cursor-pointer rounded-lg bg-white"
                                initial={false}
                                animate={
                                    isActive
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0.5, scale: 0.9 }
                                }
                                whileHover={{
                                    scale: isActive ? 1.05 : 0.95,
                                    opacity: isActive ? 1 : 0.75,
                                }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    if (idx !== currentTab)
                                        setTab([idx, idx - currentTab])
                                }}
                            />
                        )
                    })}
                </div>
            </LayoutGroup>
        </div>
    )
}

export default Ftd_Slides
