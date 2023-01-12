/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import {
    motion,
    useScroll,
    useInView,
    useTransform,
    useSpring,
} from 'framer-motion'

import { Section_Content, Section_Graphic } from '@components'
import { sectionVariants } from '@motion'

function useParrallax(scrollYProgress, scrollSpeed) {
    const d = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]).current
    const ySpring = useSpring(scrollYProgress, {
        type: 'spring',
        stiffness: 200 - d * 50,
        damping: 100 - d * 50,
        mass: 7.5,
        restDelta: scrollSpeed,
    })

    return {
        y: useTransform(ySpring, [0, 1], ['100%', '-100%']),
        translateY: useTransform(ySpring, [0, 1], ['50%', '-50%']),
        rowGap: useTransform(ySpring, [0, 0.5, 1], ['20vh', '2vh', '20vh']),
        opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
    }
}

const Section = ({
    id,
    index,
    restDelta,
    activeSection,
    setSection,
    isLg,
    isRouting,
    useChildren = false,
    children,
    ...data
}) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: isLg ? 0.5 : 0.75 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const { y, translateY, rowGap, opacity } = useParrallax(
        scrollYProgress,
        restDelta
    )
    useEffect(() => {
        if ((activeSection !== index) & inView & !isRouting) setSection(index)
    }, [inView])

    const dataProps = { data: data.data, featured: data.featured }
    return (
        <motion.section
            id={id}
            data-section-in-view={index == activeSection}
            className="relative h-screen w-full snap-center last-of-type:mb-0 lg:mb-[100%]"
            ref={ref}
        >
            {useChildren ? (
                <motion.div
                    key={`${id}-section-content`}
                    className="flex-center inset-0 overflow-hidden max-lg:absolute lg:fixed"
                    style={isLg ? { y } : {}}
                >
                    {children}
                </motion.div>
            ) : (
                <motion.div
                    key={`${id}-section-content-${isLg ? 'dsktp' : 'mobile'}`}
                    className="flex-center relative inset-0 overflow-hidden max-lg:absolute lg:fixed"
                    style={isLg ? { y } : {}}
                    initial="exit"
                    animate={
                        activeSection === index || !isLg ? 'show' : 'hidden'
                    }
                    exit="exit"
                >
                    <Section_Graphic
                        key={`${id}-graphic`}
                        inView={inView}
                        isLg={isLg}
                        {...dataProps}
                    />
                    <Section_Content
                        key={id + '-content'}
                        urlAs={id.charAt(0).toUpperCase() + id.slice(1)}
                        even={index % 2 == 0}
                        style={
                            isLg
                                ? {
                                      order: (index % 2) * 2 - 1,
                                      translateY,
                                      rowGap,
                                  }
                                : { opacity }
                        }
                        variants={sectionVariants.Content(isLg)}
                        {...dataProps}
                    />
                </motion.div>
            )}
        </motion.section>
    )
}

export default Section
