import { motion, useInView } from 'framer-motion'

import { createRef, useMemo } from 'react'
import { featuredProjectVariants as variants } from '@motion'
import Project_Items from './Items'
import Featured_IMG from './Featured_IMG'

function Featured_Project({ featuredData, inViewRef, ...props }) {
    const { data, content } = featuredData
    const isEven = props.i % 2 == 0
    const inView = useInView(inViewRef, { amount: 0.25, once: true })

    const CONTENT = () => (
        <motion.div
            className="content-innerHTML w-full max-md:text-center"
            dangerouslySetInnerHTML={{ __html: content }}
            variants={variants.Content}
        />
    )

    return (
        <>
            <motion.header
                key={`${data.title}-header`}
                className={`z-20 flex w-full min-w-min max-w-md flex-col  ${
                    isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                }`}
                style={{ filter: `hue-rotate(${props.i * 60}deg)` }}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
            >
                <motion.h3 className="w-full border-y-2 lg:whitespace-nowrap">
                    {data.title}
                </motion.h3>
                <motion.div
                    className="flex w-full overflow-hidden text-slate-60"
                    variants={variants.TechWrap}
                    custom={isEven}
                >
                    <Project_Items.Tech
                        techs={data.tech}
                        variants={variants.Tech}
                    />
                </motion.div>
            </motion.header>

            <motion.div
                className="flex-col-center py-4 pt-8 lg:p-0 z-20 flex w-full max-lg:max-w-xl"
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
            >
                <CONTENT />
                <div className="flex-around h-16 md:h-20 w-full lg:w-3/4">
                    <Project_Items.Icon_Links
                        iconData={[
                            ['GitHub', data.github],
                            ['External', data.external],
                        ]}
                        variants={variants.LinkItem}
                    />
                </div>
            </motion.div>

            <Featured_IMG
                src={data.src}
                alt={data.alt}
                isEven={isEven}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                variants={variants.Image}
                custom={isEven ? 1 : -1}
            />
        </>
    )
}

export default Featured_Project
