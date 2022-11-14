import { createRef, useEffect, useRef } from 'react'
import { motion, useScroll, useInView, AnimatePresence } from 'framer-motion'

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
    const mdRef = useRef(null)
    const minRef = createRef(null)
    // REMEMBER TO CHANGE THIS ROUTING TO FALSE --- TRUE FOR EDTING PURPOSES
    const isRouting = useIsRouting(true)
    const isMd = useMediaQuery(768)

    const inView = useInView(mdRef, { amount: 0.75 })
    const inViewMin = useInView(minRef, { amount: 0.5 })

    const { scrollYProgress } = useScroll({
        target: mdRef,
        offset: ['end end', 'start start'],
    })

    // Desktop EXIT directions
    const yDir = scrollYProgress.get() > 0.5 ? -1 : 1

    // Motion
    const ANIM = isRouting ? 'exit' : 'show'
    const EXIT = isRouting ? 'exit' : 'hidden'

    // Set current Section
    useEffect(() => {
        if (isRouting || !allowUpdates || activeSection == index) return
        if (!isMd & inViewMin || isMd & inView) setSection(index)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMd, inView, inViewMin, allowUpdates, isRouting, setSection])

    const cardProps = {
        id: id,
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
                className={
                    isMd
                        ? 'section-snap h-[calc(100vh-var(--nav-height))] w-full'
                        : ''
                }
                ref={mdRef}
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
                <section
                    id={id}
                    className="section-snap flex-center h-[calc(100vh-var(--nav-height))] w-full overflow-hidden"
                    ref={minRef}
                >
                    {useChildren ? children : <Section_Card {...cardProps} />}
                </section>
            )}
        </>
    )
}

export default Section
