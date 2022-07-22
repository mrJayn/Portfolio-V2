import { useEffect, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { Featured_Item, Section } from '@components'

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    show: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: { duration: 0.35, ease: 'easeIn' },
    }),
}

const slides = [0, 1, 2]

const Featured = () => {
    // ========================

    const [[currentSlide, direction], setSlide] = useState([0, 0])
    const [reset, SetReset] = useState(false)
    const i = wrap(0, slides.length, currentSlide)
    const threshold = 100

    function detectGesture(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        const nextSlide = currentSlide

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

    // If un-touched, slides will automatically sldie every 4 seconds
    const handleDrag = () => {
        SetReset(true)
        setTimeout(() => {
            SetReset(false)
        }, 1000)
    }

    useEffect(() => {
        if (reset) {
            const interval = setInterval(() => {
                if (currentSlide + 1 === slides.length) {
                    setSlide([0, 1])
                } else {
                    setSlide([currentSlide + 1, 1])
                }
            }, 10000)
            return () => clearInterval(interval)
        }
    }, [currentSlide, setSlide, reset])

    return (
        <Section id="featured">
            <div className="slider-container">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className="slide"
                        data-slide={currentSlide}
                        key={currentSlide}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="show"
                        exit="exit"
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={1}
                        onDragEnd={detectGesture}
                        onDrag={handleDrag}
                    >
                        <Featured_Item currentSlide={i} />
                    </motion.div>
                </AnimatePresence>
            </div>
            <SlideSelectors
                currentSlide={currentSlide}
                handleClick={handleIndicator}
            />
        </Section>
    )
}

const SlideSelectors = ({ currentSlide, handleClick }) => {
    return (
        <LayoutGroup>
            <div className="Indicators">
                {slides.map((item) => (
                    <Indicator
                        key={item}
                        onClick={() => handleClick(item)}
                        isSelected={item === currentSlide}
                    />
                ))}
            </div>
        </LayoutGroup>
    )
}

const Indicator = ({ isSelected, onClick }) => {
    return (
        <div className="Indicator-container" onClick={onClick}>
            <div className="Indicator">
                {isSelected && (
                    <motion.div
                        className="Indicator-highlight"
                        layoutId="highlight"
                    />
                )}
            </div>
        </div>
    )
}

export default Featured
