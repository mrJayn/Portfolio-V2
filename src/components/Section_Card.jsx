import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Styled } from '@components'
import { sectionCardVariants as variants } from '@motion'
import { useEffect, useRef } from 'react'

const Section_Card = ({ id, index, isLg, inView, data, featured }) => {
    const even = index % 2 == 0
    const pathAs = data.id.charAt(0).toUpperCase() + data.id.slice(1)

    const mobileMotion = {
        initial: false,
        animate: inView ? { opacity: 1 } : { opacity: 0 },
        exit: { opacity: 0 },
    }

    const Headline = (
        <>
            <motion.h3
                className="relative lg:w-full"
                {...(isLg ? { variants: variants.Title } : { ...mobileMotion })}
                custom={isLg && even}
            >
                {data.title}
                <motion.span
                    className="styled-underline lg:left-auto lg:w-[calc(5em+15vw)]"
                    style={{
                        originX: isLg ? (even ? 0.85 : 0.15) : 0.5,
                        right: isLg ? (even ? 0 : 'auto') : '-5vw',
                        left: isLg ? (even ? 'auto' : 0) : '-5vw',
                    }}
                    variants={isLg && variants.Decoration}
                />
            </motion.h3>
        </>
    )
    const Subhead = (
        <motion.div
            className="flex-top full relative overflow-hidden lg:h-auto lg:w-auto lg:p-4 lg:pb-0"
            {...(isLg ? { variants: variants.Items_X } : { ...mobileMotion })}
            custom={isLg && even ? 1 : -1}
        >
            <h4>{data.subtitle.replace('<br/>', `\n`)}</h4>
        </motion.div>
    )

    return (
        <>
            <motion.div
                id={id + '-content'}
                className={`flex-col-btw full select-text gap-y-4 py-[10vh] lg:h-full lg:justify-center lg:overflow-hidden lg:py-0 ${
                    even
                        ? 'order-1 lg:items-end lg:text-end'
                        : 'order-2 lg:items-start lg:text-start'
                }`}
                variants={variants.StaggerContainer}
            >
                <>
                    {Headline}
                    {Subhead}
                </>

                <motion.div
                    className="lg:mt-20 lg:w-auto lg:translate-x-0 lg:px-4"
                    {...(isLg
                        ? { variants: variants.Btn }
                        : { ...mobileMotion })}
                >
                    <Styled.Button>
                        <Link
                            href={{
                                pathname: '/section/[slug]',
                                query: { slug: data.id },
                            }}
                            as={'/' + pathAs}
                            scroll={false}
                        >
                            {featured ? 'View All' : 'Read More'}
                        </Link>
                    </Styled.Button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Section_Card
