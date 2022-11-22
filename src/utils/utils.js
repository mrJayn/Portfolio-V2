/**
 * @param {string} querySelector - Selector string for scrollable element
 * @param {function} callback - Function to perform after scroll
 */
export function awaitScrollToTop(querySelector = 'body', callback) {
    const scrollDiv = document.querySelector(querySelector)
    const prevScrollY = null

    scrollDiv.scrollTo({ top: 0, behavior: 'smooth' })

    const checkIfAtTop = setInterval(() => {
        var scrollY = scrollDiv.scrollTop
        if (scrollY == prevScrollY) {
            clearInterval(checkIfAtTop)
            callback()
        }
        prevScrollY = scrollY
    }, 50)
}

/**
 * @param {boolean} toggle - True - enabled / False - disabled
 */
export function toggleScrolling(toggle) {
    const overflowStyle = toggle ? 'auto' : 'hidden'
    document.querySelector('body').style.overflow = overflowStyle
}

/**
 * @param {number} x - Drag event offset x value
 * @param {number} v  - Drag event velocity x value
 * @param {number} currentTab - Index of current open tab
 * @param {number} span - Total number of tabs
 * @param {function} setTab - Function to set new current Tab
 */
export function handleSwipe(x, v, currentTab, span, setTab) {
    const threshold = 5000
    const swipe = Math.abs(x) * v
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

/**
 * Scroll to the specified id
 * @param {string} querySelector - Query Selector of target element
 * @param {string} behaivor - scroll behaivor "smooth" or "auto"
 */
export function scrollToID(querySelector, behaivor = null) {
    const isMd = window.innerWidth >= 768

    const scrollBehaivor =
        behaivor !== null ? behaivor : isMd ? 'auto' : 'smooth'

    document.querySelector(querySelector).scrollIntoView({
        behavior: scrollBehaivor,
        block: isMd ? 'center' : 'end',
    })
}

/**
 * @param {number} index - index of active section
 */
export const index2id = (index) => {
    const sectionsIDXs = {
        0: 'intro',
        1: 'about',
        2: 'experience',
        3: 'projects',
        4: 'contact',
    }
    return sectionsIDXs[index]
}
