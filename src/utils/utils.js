import { ssOffset } from '@config'
import { router } from 'next/router'

export function scroll2id(id, extraAction) {
    const isLg = screen.width >= 1024

    const elTop = document.getElementById(id).getBoundingClientRect().top
    const scrollY = window.scrollY
    const scrollOffset = isLg ? Math.max(0, ssOffset - scrollY) : 0

    const top = elTop + scrollY + scrollOffset
    const behaivor = isLg ? 'smooth' : 'auto'

    setTimeout(() => {
        window.parent.scrollTo({ top: top, behavior: behaivor })
        if (extraAction) extraAction()
    }, 1)
}
export const openResumeJPG = () =>
    window.open('/assets/misc/resume2022.jpg', '_blank', 'noopener noreferrer')

export function calculateCh(fontSize) {
    const el = Object.assign(document.createElement('span'), {
        style: `position:absolute; font-size:${fontSize}`,
        textContent: '0',
    })

    document.body.appendChild(el)
    const chPx = el.getBoundingClientRect().width
    document.body.removeChild(el)

    return chPx
}

export function pushPage(id, href = '/', as = '') {
    var scrollRef, prevScrollY

    /** 1. Assign Variables & Begin Scroll */
    if (id === '/') {
        scrollRef = document.querySelector('main')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        //
    } else {
        // let el = document.getElementById('projects')
        // window.scrollTo({ top: el.offsetTop })
        scrollRef = document.body
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

    /** 2. Prevent User Scroll */
    scrollRef.style.pointerEvents = 'none'

    /** 3. Scroll Interval */
    const scrollCheckInterval = setInterval(() => {
        var scrollY = scrollRef.scrollTop

        if (scrollY == prevScrollY || scrollY === 0) {
            clearInterval(scrollCheckInterval)
            router.push(href, as, { scroll: false })
            setTimeout(() => (document.body.style.pointerEvents = 'auto'), 750)
        }

        prevScrollY = scrollY
    }, 50)
}

export function reload() {
    router.reload()
}

export function handleSwipe(offset, velocity, currentTab, span, setTab) {
    const threshold = 5000
    const swipe = Math.abs(offset) * velocity

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) return

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

export function getFormattedDate(date) {
    let weekday = date.toLocaleDateString('en-us', { weekday: 'long' })
    let month = date.toLocaleString('en-us', { month: 'long' })
    let day = date.getDate().toString().padStart(2, '0')

    return weekday + ', ' + month + ' ' + day
}

const computeNewX = () => -index * (containerRef.current?.clientWidth || 0)

const handleEndDrag = (e, { offset, velocity }) => {
    const clientWidth = containerRef.current?.clientWidth || 0
    const threshold = clientWidth / 4
    var idxValue = index

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
        return
    }

    if (offset.x > threshold) {
        idxValue = index - 1
        setIndex(index - 1)
        //
    } else if (offset.x < -threshold) {
        idxValue = index + 1
        setIndex(index + 1)
        //
    }
    animate(x, -idxValue * clientWidth, slideTransition)
}
