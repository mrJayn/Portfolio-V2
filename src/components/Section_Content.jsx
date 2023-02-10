import Link from 'next/link'
import { motion } from 'framer-motion'
import { Styled } from '@components'

const Section_Content = ({ even, style, variants, data, featured }) => (
    <motion.div
        layout
        className={`flex-col-center max-lg:safe-area-padding fixed text-center max-lg:top-24 ${
            even ? 'lg:items-end lg:text-end' : 'lg:items-start lg:text-start'
        } lg:full lg:relative lg:pt-[33vh] lg:will-change-transform`}
        style={style}
        variants={variants.Container}
    >
        <motion.h3
            className="leading-none max-lg:duration-250 max-lg:ease-in-out max-lg:portrait:pt-[clamp(0px,calc(0px+112*((100vw-320px)/704)),112px)]"
            variants={variants.Title}
        >
            {data.title}
        </motion.h3>
        <motion.h4
            className="whitespace-pre max-lg:h-full max-lg:py-[1.5vh] max-lg:duration-250 max-lg:ease-in-out lg:whitespace-nowrap"
            variants={variants.Item}
        >
            {data.subtitle.replaceAll('<br/>', `\n`)}
        </motion.h4>
        <motion.div className="max-lg:w-full" variants={variants.Item}>
            <Styled.Button even={even}>
                <Link
                    href={{
                        pathname: '/[sid]',
                        query: { sid: data.id },
                    }}
                    scroll={false}
                >
                    {featured ? 'View All' : 'Read More'}
                </Link>
            </Styled.Button>
        </motion.div>
    </motion.div>
)

export default Section_Content
