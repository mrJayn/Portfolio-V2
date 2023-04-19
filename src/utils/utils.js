import { router } from 'next/router'
import { scrollIntoView } from 'seamless-scroll-polyfill'

export const sectionIDs = [
    'intro',
    'about',
    'experience',
    'projects',
    'contact',
]

export const navLinks = [
    'about',
    'experience',
    'projects',
    'contact',
    'my Resume',
]

export function pushPage(id, href = '/', as = '') {
    var el, prevScrollY

    if (id === '/') {
        el = document.querySelector('main')
        el.style.overflowY = 'hidden'
        el.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        el = document.getElementById(id)
        scrollIntoView(el, { behavior: 'smooth', block: 'center' })
        document.body.style.overflowY = 'hidden'
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

export function reload() {
    router.reload()
}

export function handleNavLink(id, callbackFn) {
    if (id === 'my Resume') {
        window.open('/assets/misc/resume2022.jpg', '_blank')
    } else {
        document.getElementById(id).scrollIntoView({})
    }
    if (callbackFn) {
        setTimeout(() => callbackFn(), 100)
    }
}

export function handleSwipe(offset, velocity, currentTab, span, setTab) {
    const threshold = 5000
    const swipe = Math.abs(offset) * velocity
    if (swipe < -threshold) {
        paginate(1, currentTab, span, setTab)
    } else if (swipe > threshold) {
        paginate(-1, currentTab, span, setTab)
    }
}

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
