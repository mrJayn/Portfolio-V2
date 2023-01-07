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

function useParrallax(scrollYProgress, isLg, scrollSpeed) {
    const d = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]).current

    const ySpring = useSpring(scrollYProgress, {
        type: 'spring',
        stiffness: 1250 - 500 * d,
        damping: 500 - 250 * d,
        mass: 10,
        restDelta: scrollSpeed,
    })

    var bounds = isLg ? [0, 0.5, 1] : [0.3, 0.5, 0.7]
    var yOff = isLg ? 100 : 0
    var yOff2 = yOff * -0.15
    var motionValue = isLg ? ySpring : scrollYProgress

    return {
        y: useTransform(ySpring, [0, 1], [`${yOff}%`, `${-yOff}%`]),
        translateY: useTransform(ySpring, [0, 1], [`${-yOff2}%`, `${yOff2}%`]),
        opacity: useTransform(motionValue, bounds, [0, 1, 0]),
        rowGap: useTransform(motionValue, bounds, ['15vh', '1.5vh', '15vh']),
    }
}

const Section = ({
    id,
    index,
    scrollSpeed,
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
    const { y, translateY, opacity, rowGap } = useParrallax(
        scrollYProgress,
        isLg,
        scrollSpeed
    )

    useEffect(() => {
        if ((activeSection !== index) & inView & !isRouting) setSection(index)
    }, [inView])

    const contentProps = { id: id, index: index, isLg: isLg, ...data }
    const graphicProps = { inView: inView, isLg: isLg, ...data }
    return (
        <motion.section
            id={id}
            data-section-in-view={index == activeSection}
            className="relative h-screen w-screen snap-center last-of-type:mb-0 lg:mb-[200%]"
            ref={ref}
        >
            {useChildren ? (
                <motion.div
                    key={`${id}-section-content`}
                    className="flex-center inset-0 overflow-hidden max-lg:absolute lg:fixed"
                    style={{ y }}
                >
                    {children}
                </motion.div>
            ) : (
                <motion.div
                    key={`${id}-section-content-${isLg ? 'dsktp' : 'mobile'}`}
                    className="flex-center relative inset-0 overflow-hidden max-lg:absolute lg:fixed"
                    style={{ y }}
                    initial="exit"
                    animate={
                        activeSection === index || !isLg ? 'show' : 'hidden'
                    }
                    exit="exit"
                >
                    <Section_Graphic {...graphicProps} />
                    <Section_Content
                        style={{
                            order: (index % 2) * 2 - 1,
                            translateY,
                            rowGap,
                        }}
                        {...contentProps}
                    />
                </motion.div>
            )}
        </motion.section>
    )
}

export default Section
