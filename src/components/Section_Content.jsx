import Link from 'next/link'
import { motion } from 'framer-motion'
import { Styled } from '@components'

const Section_Content = ({ urlAs, even, style, variants, data, featured }) => (
    <motion.div
        className={`flex-col-center fixed inset-0 select-text overflow-hidden py-28 max-lg:gap-y-4 ${
            even ? 'lg:items-end lg:text-end' : 'lg:items-start lg:text-start'
        } lg:full lg:relative lg:py-0`}
        style={style}
        variants={variants.Container}
    >
        <motion.h3 className="leading-none" variants={variants.Item}>
            {data.title}
        </motion.h3>

        <motion.h4
            className="text-center font-light tracking-wider lg:mx-1 lg:whitespace-nowrap"
            variants={variants.Item}
        >
            {data.subtitle.replaceAll('<br/>', `\n`)}
        </motion.h4>

        <motion.div className="mt-2" variants={variants.Item}>
            <Styled.Button>
                <Link
                    href={{
                        pathname: '/section/[slug]',
                        query: { slug: data.id },
                    }}
                    as={`/${urlAs}`}
                    scroll={false}
                >
                    {featured ? 'View All' : 'Read More'}
                </Link>
            </Styled.Button>
        </motion.div>
    </motion.div>
)

export default Section_Content
