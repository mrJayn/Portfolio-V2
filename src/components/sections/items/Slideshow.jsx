import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { ReadMore, Featured_Project } from '@components'
import { Variants } from '@config'

const slides = [0, 1, 2]

const Indicators = ({ currentSlide, handleIndicator }) => {
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full max-w-[768px]">
                {slides.map((item) => (
                    <div
                        className="mt-5 cursor-pointer p-3"
                        key={item}
                        onClick={() => handleIndicator(item)}
                    >
                        <div className="relative aspect-square h-4 rounded bg-charcoal">
                            {item === currentSlide && (
                                <motion.div
                                    className="absolute -top-1 -left-1 -z-10 aspect-square h-6 rounded-md bg-neon"
                                    layoutId="highlight"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </LayoutGroup>
    )
}
const Slideshow = ({ isMd, ...featuredData }) => {
    const [smReadMore, setSmReadMore] = useState(false)
    const [[currentSlide, direction], setSlide] = useState([0, 0])
    const i = wrap(0, slides.length, currentSlide)
    // ========================
    function detectGesture(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        const nextSlide = currentSlide
        const threshold = 100

        if (swipe < -threshold) {
            paginate(1)
            nextSlide = currentSlide + 1
        } else if (swipe > threshold) {
            paginate(-1)
            nextSlide = currentSlide - 1
        }
    }
    const paginate = (newDirection) => {
        if (
            currentSlide + newDirection < slides.length &&
            currentSlide + newDirection >= 0
        ) {
            // moving , normal
            setSlide([currentSlide + newDirection, newDirection])
        } else if (currentSlide + newDirection === slides.length) {
            // last slide >> first slide
            setSlide([0, newDirection])
        } else if (currentSlide + newDirection === -1) {
            // first slide >> last slide
            setSlide([slides.length - 1, newDirection])
        }
    }
    function handleIndicator(selectedSlide, newDirection) {
        if (!newDirection) newDirection = selectedSlide - currentSlide
        setSlide([selectedSlide, newDirection])
    }

    // ========================
    const contentProps = {
        key: currentSlide,
        custom: direction,
        variants: Variants.sliders,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        drag: 'x',
        dragConstraints: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        dragElastic: 1,
        onDragEnd: detectGesture,
    }
    const smReadMoreProps = {
        project: featuredData[currentSlide],
        readMore: smReadMore,
        setReadMore: setSmReadMore,
        isMd: isMd,
    }
    return (
        <>
            <div className="relative h-[450px] w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className="absolute left-[5%] right-[5%] h-[400px]"
                        {...contentProps}
                    >
                        <Featured_Project
                            key={`featured-${i}`}
                            currentSlide={i}
                            project={featuredData[currentSlide]}
                            setSmReadMore={setSmReadMore}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <Indicators
                currentSlide={currentSlide}
                handleIndicator={handleIndicator}
            />
            {!isMd && <ReadMore {...smReadMoreProps} />}
        </>
    )
}
export default Slideshow
