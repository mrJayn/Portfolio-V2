/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import {
    motion,
    useScroll,
    useInView,
    useTransform,
    useSpring,
} from 'framer-motion'

import { Featured_Slides, Section_Card, Styled } from '@components'
import { sectionVariants as variants, springTransition } from '@motion'
import { index2id } from '@utils'

const Section = ({
    id,
    index,
    activeSection,
    setSection,
    direction,
    isLg,
    isRouting,
    screenOrientation,
    useChildren = false,
    children,
    ...data
}) => {
    const ref = useRef(null)
    const [initialAnim, setInitialAnim] = useState('hidden')

    const inView = useInView(ref, { amount: 0.95 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const ySpring = useSpring(scrollYProgress, springTransition)
    const y = useTransform(ySpring, [0, 0.5, 1], ['100%', '0%', '-100%'])

    // Scroll to section on Resize / md breakpoint
    useEffect(() => {
        const resizehandler = (current) => {
            if ((index == current) & (current !== 0)) {
                document.getElementById(`${index2id(current)}`).scrollIntoView({
                    behavior: 'auto',
                    block: isLg ? 'center' : 'center',
                })
                y.set('0%')
                setSection(activeSection)
            }
        }
        resizehandler(activeSection)
    }, [isLg, screenOrientation])

    // Set Initial Variant if Routing
    useEffect(() => {
        if (index == activeSection)
            setInitialAnim(isRouting ? 'exit' : 'hidden')
    }, [isRouting])

    // Set Active Section
    useEffect(() => {
        if ((activeSection !== index) & inView & !isRouting) {
            setSection(index)
        }
    }, [inView])

    const SectionCardProps = {
        id: id,
        index: index,
        inView: inView,
        isLg: isLg,
        ...data,
    }
    const isActive = index == activeSection
    const even = index % 2 == 0

    return (
        <>
            <section
                id={id}
                data-section-in-view={isActive}
                className="h-screen w-screen snap-center last-of-type:mb-0 lg:mb-[200%] lg:h-view"
                ref={ref}
            >
                <div
                    id={`${id}-content`}
                    className={`flex-center full relative overflow-hidden lg:fixed lg:inset-0 lg:h-auto lg:w-auto ${
                        isActive ? 'lg:z-10' : 'lg:z-0'
                    }`}
                >
                    {isLg ? (
                        <motion.div
                            key={`${id}-scroll-motion`}
                            className="absolute inset-0 flex"
                            style={{ y }}
                            initial={initialAnim}
                            animate={
                                !inView ? 'hidden' : isRouting ? 'exit' : 'show'
                            }
                            exit="exit"
                            transition={{
                                delay: inView ? 0.25 : 0,
                                ...springTransition,
                            }}
                            variants={variants.Content}
                        >
                            {useChildren ? (
                                children
                            ) : (
                                <>
                                    <div
                                        className="full z-10 select-none"
                                        style={{ order: even ? 2 : 1 }}
                                    >
                                        {data.featured ? (
                                            <Featured_Slides
                                                isRouting={isRouting}
                                                {...data.featured}
                                            />
                                        ) : (
                                            <Styled.Image
                                                isPriority
                                                src={data.data.src}
                                                alt={data.data.alt}
                                                variants={variants.Graphic}
                                            />
                                        )}
                                    </div>
                                    <Section_Card
                                        key={id}
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
                                    <Section_Card {...SectionCardProps} />
                                </>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

export default Section
