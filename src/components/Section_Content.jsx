import Link from 'next/link'
import { motion } from 'framer-motion'
import { Styled } from '@components'

const Section_Content = ({ even, style, variants, data, featured }) => (
    <motion.div
        className={`flex-col-top fixed max-lg:inset-x-0 max-lg:top-[clamp(64px,calc(var(--vh)*25),25vh)] max-lg:h-[calc(var(--vh,1vh)*50)] ${
            even ? 'lg:items-end lg:text-end' : 'lg:items-start lg:text-start'
        } lg:full lg:relative lg:pt-[33vh] lg:will-change-transform`}
        style={style}
        variants={variants.Container}
    >
        <motion.h3 className="leading-none" variants={variants.Title}>
            {data.title}
        </motion.h3>
        <motion.h4
            className="whitespace-pre text-center max-lg:h-full max-lg:pt-[1.5vh] lg:whitespace-nowrap"
            variants={variants.Item}
        >
            {data.subtitle.replaceAll('<br/>', `\n`)}
        </motion.h4>
        <motion.div variants={variants.Item}>
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
