import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ftdSlidesVariants as variants } from '@motion'
import { Styled } from '@components'

const FEATURED_SLIDE = ({ project, custom }) => (
    <motion.div
        className=" absolute right-0 h-full w-[32.5vw] rounded-4xl border-2 shadow-md"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={variants.Slide}
        custom={custom}
    >
        <motion.div
            className="flex-col-center absolute right-[-10%] bottom-2 z-20 w-full"
            variants={variants.Content}
            custom={custom}
        >
            <div className="ml-auto mb-1 mr-4 w-min whitespace-nowrap rounded-2xl bg-grey-10 py-3 px-6 shadow-sm">
                <h5 className="font-bold tracking-normal text-black">
                    {project.title}
                </h5>
            </div>
            <div className="flex min-w-full rounded-2xl bg-grey-10 p-2 text-black/90 shadow-md">
                <Styled.Technolgy techs={project.tech} />
            </div>
        </motion.div>
        <Styled.Featured_Image isHome src={project.src} alt={project.alt} />
        <span
            className="absolute inset-0 z-10 rounded-4xl shadow-inset"
            style={{
                background:
                    'linear-gradient(to bottom, transparent 60%, black 95%)',
            }}
        />
    </motion.div>
)

const Ftd_Slides = ({ inView, ...projects }) => {
    const [current, setCurrent] = useState(0)
    const span = Object.keys(projects).length
    const isChanging = useRef(false)
    const changeSlide = (newDirection) => {
        if (
            current + newDirection === span ||
            current + newDirection < 0 ||
            isChanging.current
        ) {
            return
        } else {
            isChanging.current = true
            setCurrent(current + newDirection)
            setTimeout(() => (isChanging.current = false), 1000)
        }
    }
    return (
        <div className="full relative">
            <div className="absolute top-[15%] left-0 right-[17.5%] h-[70%]">
                <AnimatePresence>
                    {Object.keys(projects).map(
                        (i) =>
                            i >= current && (
                                <FEATURED_SLIDE
                                    key={`featured-slide-${i}`}
                                    project={projects[i].data}
                                    custom={i - current}
                                />
                            )
                    )}
                </AnimatePresence>
            </div>

            <div className="flex-around absolute bottom-[5%] left-1/2 h-8 w-[300px] -translate-x-1/2">
                <Styled.Chevron
                    direction="left"
                    onClick={() => changeSlide(-1)}
                    whileTap={{ scale: 0.75 }}
                />
                <Styled.Chevron
                    direction="right"
                    onClick={() => changeSlide(1)}
                    whileTap={{ scale: 0.75 }}
                />
            </div>
        </div>
    )
}

export default Ftd_Slides
