/**
 * Enable or Disable page scrolling
 * @param {boolean} allowScroll
 */
export function toggleScrolling(allowScroll) {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            allowScroll == true ? 'auto' : 'hidden'
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
 * @param {string} id - section or anchor id including the "#"
 * @param {string} behaivor - scroll behaivor "smooth" or "auto"
 */
export function scrollToID(id, behaivor = null) {
    const scrollType = behaivor !== null ? behaivor : isMd ? 'auto' : 'smooth'
    const isMd = window.innerWidth >= 768
    document.querySelector(id).scrollIntoView({
        behavior: scrollType,
    })
}

/**
 * Return an index value from a specified index
 * @param idx - index of active section
 */
export const index2id = (idx) => {
    const sectionsIDXs = {
        0: 'intro',
        1: 'about',
        2: 'experience',
        3: 'projects',
        4: 'contact',
    }
    return sectionsIDXs[idx]
}
