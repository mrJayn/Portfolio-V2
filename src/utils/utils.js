import { router } from 'next/router'

export const sectionIDs = [
    'intro',
    'about',
    'experience',
    'projects',
    'contact',
]

export function pushPage(id, href = '/', as = '') {
    var el, prevScrollY

    document.body.style.overflowY = 'hidden'

    if (id === '/') {
        el = document.querySelector('main')
        el.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        el = document.getElementById(id)
        el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }

    const checkIfAtTop = setInterval(() => {
        var scrollY = el.scrollTop
        if (scrollY == prevScrollY) {
            clearInterval(checkIfAtTop)
            router.push(href, as, { scroll: false })
        }
        prevScrollY = scrollY
    }, 50)
}

/**
 * @param {number} offset - Drag event offset x value
 * @param {number} velocity  - Drag event velocity x value
 * @param {number} currentTab - Index of current open tab
 * @param {number} span - Total number of tabs
 * @param {function} setTab - Function to set new current Tab
 */
export function handleSwipe(offset, velocity, currentTab, span, setTab) {
    const threshold = 5000
    const swipe = Math.abs(offset) * velocity
    if (swipe < -threshold) {
        paginate(1, currentTab, span, setTab)
    } else if (swipe > threshold) {
        paginate(-1, currentTab, span, setTab)
    }
}

/**
 * Gesture Recognition for Tab Swiping
 * @param {number} newDirection
 * @param {number} currentTab
 * @param {number} span -
 * @param {function} setTab
 */
export const paginate = (newDirection, currentTab, span, setTab) => {
    if (currentTab + newDirection < span && currentTab + newDirection >= 0) {
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

/** REACT HOOK */
function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null,
    })
    useEffect(() => {
        const updatePosition = (e) => {
            setMousePosition({
                x: (e.clientX / screen.width) * 10,
                y: (e.clientY / screen.height) * 10,
            })
        }
        window.addEventListener('mousemove', updatePosition)
        return () => window.removeEventListener('mousemove', updatePosition)
    }, [])
    return {
        cursorX: mousePosition.x,
        cursorY: mousePosition.y,
    }
}
