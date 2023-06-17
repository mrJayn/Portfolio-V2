import { useEffect, useRef, useCallback } from 'react'

const data = { scrollY: 0, y: 0, sigY: 0 }

export default function useSmoothScroll(ref, ease) {
    const frame = useRef()
    const is1st = useRef(true)

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                document.body.style.height = `${Math.max(screen.height, entry.contentRect.height)}px`
            })
        })
        ref && resizeObserver.observe(ref.current)
        return () => resizeObserver.disconnect()
    }, [ref])

    const animate = useCallback(
        (ease) => {
            if (!ref.current) return
            data.scrollY = window.scrollY
            data.y += (data.scrollY - data.y) * ease
            data.sigY = Math.round(data.y * 100) / 100
            ref.current.style.transform = `translateY(-${data.sigY}px)`
            frame.current = requestAnimationFrame(() => animate(ease))
        },
        [ref]
    )

    useEffect(() => {
        if (frame.current) cancelAnimationFrame(frame.current)
        if (is1st.current) {
            data.scrollY = 0
            data.y = 0
            data.sigY = 0
            is1st.current = false
        }
        frame.current = requestAnimationFrame(() => animate(ease))
        return () => cancelAnimationFrame(frame.current)
    }, [ease, animate])
}

/*
    // https://www.framer.com/motion/frame/
    // Says "Prevents Layout Thrashing"... Uhhhh actuallly... it did quite the opposite
    //const dfRef = useRef({ curr: 0, prev: 0, rounded: 0 })
    const dfRef = useRef({ curr: 0, prev: 0 })
    const updating = useRef(false)
    useEffect(() => {
        console.log('updated')
        //if (updating.current) cancelFrame(updateScroll)
        let df = dfRef.current
        const updateScroll = () => {
            df.prev += (df.curr - df.prev) * ease
            df.prev = Math.round(df.prev * 100) / 100 //Number(df.prev.toFixed(2))
            dfRef.current = { curr: df.curr, prev: df.prev }
        }
        frame.read(() => {
            df.curr = window.scrollY
        }, true)
        frame.update(updateScroll, true)
        frame.render(() => {
            if (!ref.current) return
            ref.current.style.transform = `translateY(-${df.prev}px)`
        }, true)
        updating.current = true
    }, [ease,ref])
    */
