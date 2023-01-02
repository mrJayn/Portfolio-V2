import Link from 'next/link'
import { motion } from 'framer-motion'

import { Styled } from '@components'
import { sectionCardVariants as variants } from '@motion'

const Section_Card = ({ id, index, isLg, inView, data, featured }) => {
    const even = index % 2 == 0
    const pathAs = data.id.charAt(0).toUpperCase() + data.id.slice(1)

    const SectionLink = () => (
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
    )

    return (
        <motion.div
            id={id + '-content'}
            className={`flex-col-btw full select-text gap-y-4 py-28 lg:h-full lg:justify-center lg:overflow-hidden lg:py-0 ${
                even
                    ? 'order-1 lg:items-end lg:text-end'
                    : 'order-2 lg:items-start lg:text-start'
            }`}
            variants={isLg && variants.StaggerContainer}
        >
            <>
                <motion.h3
                    className="relative lg:w-full"
                    variants={isLg && variants.Title}
                    custom={isLg && even ? 1 : -1}
                >
                    {data.title}
                    <motion.span
                        className="styled-underline inset-x-[-5vw] lg:left-auto lg:w-[calc(5em+15vw)]"
                        style={{
                            originX: isLg && (even ? 0.85 : 0.15),
                            right: isLg && (even ? 0 : 'auto'),
                            left: isLg && (even ? 'auto' : 0),
                        }}
                        variants={isLg && variants.Decoration}
                    />
                </motion.h3>
                <motion.div
                    className="flex-top full relative overflow-hidden lg:h-auto lg:w-auto lg:p-4 lg:pb-0"
                    variants={isLg && variants.Items_X}
                    custom={isLg && even ? 1 : -1}
                >
                    <h4>{data.subtitle.replace('<br/>', `\n`)}</h4>
                </motion.div>
            </>

            <motion.div
                className="lg:mt-20 lg:w-auto lg:translate-x-0 lg:px-4"
                variants={isLg && variants.Btn}
            >
                <SectionLink />
            </motion.div>
        </motion.div>
    )
}

export default Section_Card
