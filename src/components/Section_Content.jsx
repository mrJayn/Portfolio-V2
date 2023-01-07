import Link from 'next/link'
import { motion } from 'framer-motion'

import { Styled } from '@components'

const variants = {
    Container: {
        hidden: {
            transition: { duration: 0.75, ease: 'easeIn' },
        },
        show: {
            transition: {
                delay: 0.25,
                duration: 1,
                ease: 'circOut',
                staggerChildren: 0.1,
                delayChildren: 0.15,
            },
        },
        exit: {
            transition: {
                duration: 0.75,
                ease: 'easeIn',
                staggerChildren: 0.1,
            },
        },
    },
    Item: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: { opacity: 0 },
    },
}

const Section_Content = ({ id, index, isLg, style = {}, data, featured }) => {
    const even = index % 2 == 0
    const pathAs = data.id.charAt(0).toUpperCase() + data.id.slice(1)

    return (
        <motion.div
            id={id + '-content'}
            className={`flex-col-center fixed inset-0 select-text overflow-hidden py-28 ${
                even
                    ? 'lg:items-end lg:text-end'
                    : 'lg:items-start lg:text-start'
            } lg:full lg:relative lg:py-0`}
            style={style}
            variants={isLg && variants.Container}
        >
            <motion.h3
                className="leading-none"
                variants={isLg && variants.Item}
            >
                {data.title}
            </motion.h3>

            <motion.h4
                className="text-center font-light tracking-wider lg:mx-1 lg:whitespace-nowrap"
                variants={isLg && variants.Item}
            >
                {data.subtitle.replaceAll('<br/>', `\n`)}
            </motion.h4>

            <motion.div className="mt-2" variants={isLg && variants.Item}>
                <Styled.Button>
                    <Link
                        href={{
                            pathname: '/section/[slug]',
                            query: { slug: data.id },
                        }}
                        as={`/${pathAs}`}
                        scroll={false}
                    >
                        {featured ? 'View All' : 'Read More'}
                    </Link>
                </Styled.Button>
            </motion.div>
        </motion.div>
    )
}

export default Section_Content
