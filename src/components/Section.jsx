/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import {
    motion,
    useScroll,
    useInView,
    useTransform,
    useSpring,
} from 'framer-motion'

import { Featured_Slides, Section_Card, Styled } from '@components'
import { sectionVariants as variants } from '@motion'

function useParrallax(scrollYProgress, isLg, isRouting) {
    const d = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]).current
    const ySpring = useSpring(scrollYProgress, {
        type: 'spring',
        stiffness: 1000,
        damping: isRouting ? 50 : 400 - d * 200,
        restDelta: 0.0005,
    })
    const props = {
        opacityMV: isLg ? ySpring : scrollYProgress,
        bounds: isLg ? [0, 0.5, 1] : [0.3, 0.5, 0.7],
        rowGap: isLg ? ['100px', '0px', '100px'] : ['10px', '0px', '10px'],
    }
    return {
        yPos: useTransform(ySpring, [0, 1], ['150%', '-150%']),
        yNeg: useTransform(ySpring, [0, 1], ['-50%', '50%']),
        opacity: useTransform(props.opacityMV, props.bounds, [0, 1, 0]),
        rowGap: useTransform(scrollYProgress, props.bounds, props.rowGap),
    }
}

const Section = ({
    id,
    index,
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
    const { yPos, yNeg, opacity, rowGap } = useParrallax(
        scrollYProgress,
        isLg,
        isRouting
    )

    // Set Active Section
    useEffect(() => {
        if ((activeSection !== index) & inView & !isRouting) setSection(index)
    }, [inView])

    const SectionCardProps = {
        id: id,
        index: index,
        isLg: isLg,
        ...data,
    }

    // !inView ? 'hidden' : isRouting ? 'exit' : 'show'
    return (
        <motion.section
            id={id}
            data-section-in-view={index == activeSection}
            className="h-screen w-screen snap-center last-of-type:mb-0 lg:mb-[200%]"
            initial={isRouting ? 'exit' : 'hidden'}
            animate="show"
            exit={isRouting ? 'exit' : 'hidden'}
            ref={ref}
        >
            <div
                id={`${id}-content`}
                className={`flex-center full relative overflow-hidden lg:fixed lg:inset-0 lg:h-auto lg:w-auto ${
                    index == activeSection ? 'lg:z-10' : 'lg:z-0'
                }`}
            >
                {isLg ? (
                    <motion.div
                        key={`${id}-scroll-motion`}
                        className="flex-center absolute inset-0"
                        style={{ y: yPos, opacity }}
                    >
                        {useChildren ? (
                            children
                        ) : (
                            <>
                                {data.featured ? (
                                    <motion.div
                                        className="full z-10 select-none"
                                        variants={variants.Graphic('slides')}
                                    >
                                        <Featured_Slides
                                            isLg
                                            inView={inView}
                                            isRouting={isRouting}
                                            {...data.featured}
                                        />
                                    </motion.div>
                                ) : (
                                    <Styled.Image
                                        isPriority
                                        src={data.data.src}
                                        alt={data.data.alt}
                                        variants={variants.Graphic()}
                                    />
                                )}
                                <Section_Card
                                    style={{
                                        order: (index % 2) * 2 - 1,
                                        y: yNeg,
                                    }}
                                    {...SectionCardProps}
                                />
                            </>
                        )}
                    </motion.div>
                ) : (
                    <>
                        {useChildren ? (
                            children
                        ) : (
                            <>
                                <Styled.Image
                                    src={data.data.src}
                                    alt={data.data.alt}
                                />
                                <Section_Card
                                    style={{ opacity, rowGap: rowGap }}
                                    {...SectionCardProps}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
        </motion.section>
    )
}

export default Section
