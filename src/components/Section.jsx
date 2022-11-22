/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useInView, AnimatePresence } from 'framer-motion'

import { Section_Card } from '@components'
import { sectionVariants as variants } from '@motion'
import { index2id } from '@utils'

const Section = ({
    id,
    index,
    activeSection,
    setSection,
    isMd,
    isRouting,
    screenOrientation,
    useChildren = false,
    children,
    ...data
}) => {
    // REMEMBER TO CHANGE THIS ROUTING TO FALSE --- TRUE FOR EDTING PURPOSES
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.75 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })
    const scrollDirection = scrollYProgress.get() > 0.5 ? -1 : 1

    const [initialAnim, setInitialAnim] = useState('hidden')
    const anim = isRouting & (index == activeSection) ? 'exit' : 'show'

    const SectionContent = useChildren ? (
        children
    ) : (
        <Section_Card
            id={id}
            idx={index}
            initialAnim={initialAnim}
            anim={anim}
            scrollDirection={scrollDirection}
            isMd={isMd}
            isRouting={isRouting}
            {...data}
        />
    )

    // Scroll to section on Resize / md breakpoint
    useEffect(() => {
        let current = activeSection
        if (current == 0) return
        const resizehandler = () => {
            if (index == current) {
                document
                    .getElementById(`${index2id(current)}-area`)
                    .scrollIntoView({
                        behavior: 'auto',
                        block: isMd ? 'center' : 'end',
                    })
            }
            setSection(current)
        }
        resizehandler()
        window.addEventListener('resize', resizehandler)
        return () => window.removeEventListener('resize', resizehandler)
    }, [isMd, screenOrientation])

    // Set Initial Variant if Routing
    useEffect(() => {
        if ((index == activeSection) & (index !== 0))
            setInitialAnim(isRouting ? 'exit' : 'hidden')
    }, [isRouting])

    // Set Active Section
    useEffect(() => {
        if ((activeSection !== index) & inView & !isRouting) setSection(index)
    }, [inView])

    return (
        <>
            <span
                id={`${id}-area`}
                className={` md:section-snap mb-24 h-[calc(100vh-var(--nav-height))] w-full last-of-type:mb-0`}
                ref={ref}
            >
                {!isMd ? (
                    <section id={id} className="flex-center full">
                        {SectionContent}
                    </section>
                ) : null}
            </span>

            {isMd ? (
                <AnimatePresence
                    mode="sync"
                    initial={false}
                    custom={scrollDirection}
                >
                    {(activeSection === index) & inView ? (
                        <section
                            key={id}
                            id={id}
                            className="flex-center fixed left-0 top-0 h-screen w-full"
                        >
                            <motion.div
                                className="absoluteFull overflow-hidden"
                                initial={initialAnim}
                                animate={anim}
                                exit="hidden"
                                variants={variants}
                                custom={scrollDirection}
                            >
                                {SectionContent}
                            </motion.div>
                        </section>
                    ) : null}
                </AnimatePresence>
            ) : null}
        </>
    )
}

export default Section
