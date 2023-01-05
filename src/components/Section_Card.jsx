import Link from 'next/link'
import { motion } from 'framer-motion'

import { Styled } from '@components'
import { sectionCardVariants as variants } from '@motion'

const Section_Card = ({ id, index, isLg, data, featured, style = {} }) => {
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
            <motion.h3 variants={isLg && variants.Item}>{data.title}</motion.h3>

            <motion.h4
                className="text-center lg:whitespace-nowrap"
                variants={isLg && variants.Item}
            >
                {data.subtitle.replaceAll('<br/>', `\n`)}
            </motion.h4>

            <motion.div className="mt-3" variants={isLg && variants.Item}>
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
    )
}

export default Section_Card
