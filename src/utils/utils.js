import { router } from 'next/router'

export function reload() {
    router.reload()
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

export function scroll2id(id, extraAction) {
    const elTop = document.getElementById(id).getBoundingClientRect().top

    setTimeout(() => {
        window.parent.scrollTo({
            top: elTop + window.scrollY,
            behavior: screen.width >= 1024 ? 'smooth' : 'auto',
        })
        if (extraAction) extraAction()
    }, 1)
}

export const openResumeJPG = () => window.open('/assets/misc/resume2022.jpg', '_blank', 'noopener noreferrer')

/*
function calculateCh(fontSize) {
    const el = Object.assign(document.createElement('span'), {
        style: `position:absolute; font-size:${fontSize}`,
        textContent: '0',
    })

    document.body.appendChild(el)
    const chPx = el.getBoundingClientRect().width
    document.body.removeChild(el)

    return chPx
}
*/
