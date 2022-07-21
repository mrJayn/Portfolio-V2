import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const xOffset = 400
const variants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        transition: { duration: 0.25, ease: 'easeIn' },
    }),
    active: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.25 },
    },
    exit: (direction) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        transition: { duration: 0.25, ease: 'easeIn' },
    }),
}

const pages = [0, 1, 2]

const featured_slide = ({ currentPage, setPage, direction }) => {
    /* Add and remove pages from the array to checkout
     how the gestures and pagination animations are
     fully data and layout-driven. */
    const hasPaginated = useRef(false)

    function detectPaginationGesture(e, { offset }) {
        if (hasPaginated.current) return

        let newPage = currentPage
        const threshold = xOffset / 2

        if (offset.x < -threshold) {
            // If user is dragging left, go forward a page
            newPage = currentPage + 1
        } else if (offset.x > threshold) {
            // Else if the user is dragging right,
            // go backwards a page
            newPage = currentPage - 1
        }

        if (newPage !== currentPage) {
            hasPaginated.current = true
            // Wrap the page index to within the
            // permitted page range
            newPage = wrap(0, pages.length, newPage)
            setPage(newPage, offset.x < 0 ? 1 : -1)
        }
    }

    return (
        <div className="slider-container">
            <AnimatePresence custom={direction}>
                <motion.div
                    key={currentPage}
                    className="slide"
                    data-page={currentPage}
                    variants={variants}
                    initial="enter"
                    animate="active"
                    exit="exit"
                    drag="x"
                    onDrag={detectPaginationGesture}
                    onDragStart={() => (hasPaginated.current = false)}
                    onDragEnd={() => (hasPaginated.current = true)}
                    // Snap the component back to the center
                    // if it hasn't paginated
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    // This will be used for components to resolve all
                    // other variants, in this case initial and animate.
                    custom={direction}
                />
            </AnimatePresence>
        </div>
    )
}

export default featured_slide
