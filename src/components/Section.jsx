import { useEffect, useRef, useState } from 'react'
import {
    motion,
    useScroll,
    useInView,
    AnimatePresence,
    useTransform,
} from 'framer-motion'

import { Section_Card } from '@components'
import { useIsRouting, useMediaQuery } from '@hooks'
import { sectionVariants as variants } from '@motion'

const Section = ({
    id,
    index,
    useChildren,
    activeSection,
    setSection,
    allowUpdates,
    INITIAL,
    scrollRef,
    children,
    ...data
}) => {
    const ref = useRef(null)
    // REMEMBER TO CHANGE THIS ROUTING TO FALSE --- TRUE FOR EDTING PURPOSES
    const isRouting = useIsRouting(true)
    const isMd = useMediaQuery(768)
    const [topOffset, setTopOffset] = useState(0)
    const inView = useInView(ref, { amount: isMd ? 0.75 : 0.5 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const { scrollY } = useScroll({ container: scrollRef })
    // Desktop EXIT directions
    const yDir = scrollYProgress.get() > 0.5 ? -1 : 1
    // Mobile y
    const y = useTransform(scrollY, (n) => -n - 48)
    // Motion
    const ANIM = isRouting ? 'exit' : 'show'
    const EXIT = isRouting ? 'exit' : 'hidden'

    // Set current Section
    useEffect(() => {
        if (inView & allowUpdates & !isRouting) setSection(index)
    }, [isMd, inView, allowUpdates, index, setSection, isRouting])

    // Set Section offsets while using mobile view (<768px)
    useEffect(() => {
        if (isMd) return
        const getScrollY = () => {
            const areaScrollY = document
                .getElementById(`${id}-area`)
                .getBoundingClientRect().top
            setTopOffset(areaScrollY + window.pageYOffset)
        }
        getScrollY()
        window.addEventListener('resize', getScrollY)
        return () => window.removeEventListener('resize', getScrollY)
    }, [isMd, setTopOffset, id])

    const cardProps = {
        idx: index,
        INITIAL: INITIAL,
        ANIM: ANIM,
        EXIT: EXIT,
        yDir: yDir,
        isMd: isMd,
        ...data,
    }
    return (
        <>
            <span
                id={`${id}-area`}
                className="section-area mb-24 h-[calc(100vh-var(--nav-height))] min-h-[100vw] w-full last-of-type:mb-0 md:min-h-0"
                ref={ref}
            />
            {isMd ? (
                <>
                    <AnimatePresence mode="sync" initial={false} custom={yDir}>
                        {(activeSection === index) & inView ? (
                            <section
                                key={id}
                                id={id}
                                className="flex-center fixed left-0 top-12 h-[calc(100vh-48px)]  w-full"
                            >
                                <motion.div
                                    className="absoluteFull overflow-hidden"
                                    initial={INITIAL}
                                    animate={ANIM}
                                    exit={EXIT}
                                    variants={variants}
                                    custom={yDir}
                                >
                                    {useChildren ? (
                                        children
                                    ) : (
                                        <Section_Card {...cardProps} />
                                    )}
                                </motion.div>
                            </section>
                        ) : null}
                    </AnimatePresence>
                </>
            ) : (
                <motion.section
                    id={id}
                    className="flex-center absolute left-0 h-[calc(100vh-48px)] min-h-[100vw] w-full"
                    style={{ y, top: topOffset }}
                >
                    <div className="absoluteFull overflow-hidden">
                        {useChildren ? (
                            children
                        ) : (
                            <Section_Card {...cardProps} />
                        )}
                    </div>
                </motion.section>
            )}
        </>
    )
}

export default Section
