import { useEffect, useRef } from 'react'
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
    initialVariant,
    children,
    ...data
}) => {
    const ref = useRef(null)
    const isRouting = useIsRouting()
    const isMd = useMediaQuery(768)
    // When "section-space" is inView animatePrescence of actual content
    // Reduces amount of content initially loaded?
    const inView = useInView(ref, { amount: 0.75 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const y_Md = scrollYProgress.get() > 0.5 ? -1 : 1
    const y_Sm = y_Md / 2

    // Animate fn
    const anim = isRouting ? 'expand' : 'show'

    // Set current Section
    useEffect(() => {
        if (inView & allowUpdates & !isRouting) setSection(index)
    }, [isMd, inView, allowUpdates, index, setSection, isRouting])

    return (
        <>
            <span id={`${id}-area`} className="section-area" ref={ref} />

            <AnimatePresence mode="sync" initial={false} custom={y_Md}>
                {(activeSection === index) & inView ? (
                    <section
                        key={id}
                        id={id}
                        className="flex-center fixed top-12 left-0 h-[calc(100vh-48px)] w-full"
                    >
                        <motion.div
                            className="absoluteFull overflow-hidden"
                            initial={initialVariant}
                            animate={anim}
                            exit={isRouting ? 'expand' : 'hidden'}
                            variants={variants}
                            custom={isMd ? y_Md : y_Sm}
                        >
                            {useChildren ? (
                                children
                            ) : (
                                <Section_Card
                                    idx={index}
                                    initialVariant={initialVariant}
                                    anim={anim}
                                    isMd={isMd}
                                    {...data}
                                />
                            )}
                        </motion.div>
                    </section>
                ) : null}
            </AnimatePresence>
        </>
    )
}

export default Section
