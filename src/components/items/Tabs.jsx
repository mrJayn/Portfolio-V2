import { tabsMotion } from '@motion'
import {
    motion,
    useDragControls,
    useMotionValue,
    useReducedMotion,
    useTransform,
} from 'framer-motion'

function Cases(section) {
    switch (section) {
        case 'About':
            return [true, false]
        case 'Experience':
            return [true, false]
        case 'Featured':
            return [true, true]
        default:
            return [false, false]
    }
}

const Tabs = ({
    children,
    section,
    currentTab = null,
    setTab = null,
    span = null,
    ...tabProps
}) => {
    const pRM = useReducedMotion()
    const [dragEnabled, dragShadow] = Cases(section)
    const variants = tabsMotion.Tabs
    // Shadow Opacity dependent on drag position
    const controls = useDragControls()
    const x = useMotionValue(0)
    const d = useTransform(x, [-150, 0, 150], [0, 1, 0])

    const dragControlProps =
        dragShadow & !pRM
            ? {
                  onMouseDown: (e) => controls.start(e),
                  dragControls: controls,
                  style: { x },
              }
            : null

    // drag enabled or disabled for slide-able tabs
    const dragProps =
        dragEnabled & !pRM
            ? {
                  drag: 'x',
                  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
                  dragElastic: 0.75,
                  onDragEnd: detectGesture,
              }
            : null

    tabProps = {
        variants: pRM ? tabsMotion.Reduced : variants,
        initial: 'enter',
        animate: 'show',
        exit: 'exit',
        ...dragControlProps,
        ...dragProps,
        ...tabProps,
    }

    function detectGesture(e, { offset, velocity }) {
        const swipe = Math.abs(offset.x) * velocity.x
        const threshold = 100
        if (swipe < -threshold) {
            paginate(1)
        } else if (swipe > threshold) {
            paginate(-1)
        }
    }

    const paginate = (newDirection) => {
        if (
            currentTab + newDirection < span &&
            currentTab + newDirection >= 0
        ) {
            // moving , normal
            setTab([currentTab + newDirection, newDirection])
        } else if (currentTab + newDirection === span && span > 2) {
            // last slide >> first slide
            setTab([0, newDirection])
        } else if (currentTab + newDirection === -1 && span > 2) {
            // first slide >> last slide
            setTab([span - 1, newDirection])
        }
    }

    return (
        <motion.div
            className={`md:flex-top full relative z-0 rounded-lg opacity-100`}
            {...tabProps}
        >
            {children}
            {dragShadow ? (
                <motion.div
                    className="absolute top-0 bottom-0 right-0 left-0 -z-10 rounded-xl shadow"
                    style={{ opacity: d, zIndex: -20 }}
                />
            ) : null}
        </motion.div>
    )
}

export default Tabs
