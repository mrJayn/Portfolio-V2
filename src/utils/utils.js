export function toggleScrolling(state) {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            state == true ? 'auto' : 'hidden'
    }
}

// Gesture Recognition for Tab Swiping
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

export function scrollToID(id, behaivor = null) {
    const scrollType = behaivor !== null ? behaivor : isMd ? 'auto' : 'smooth'
    const isMd = window.innerWidth >= 768
    document.querySelector(id).scrollIntoView({
        behavior: scrollType,
    })
}
