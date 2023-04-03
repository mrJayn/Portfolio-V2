import { createRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

import { featuredProjectVariants as variants } from '@motion'
import { Styled } from '@components'

const Content = ({ featuredData, inViewRef, ...props }) => {
    const { data, content } = featuredData
    const isEven = props.i % 2 == 0
    const inView = useInView(inViewRef, { amount: 0.25, once: true })

    const HEADER = () => (
        <header
            key={`${data.title}-header`}
            className={`flex-col-center w-full min-w-min rounded-3xl bg-white-dark/90 lg:max-w-max lg:px-8 lg:py-4 lg:shadow-xs `}
            style={{ filter: `hue-rotate(${props.i * 60}deg)` }}
        >
            <motion.h3
                className="w-full border-y-2 lg:whitespace-nowrap"
                variants={variants.Title}
            >
                {data.title}
            </motion.h3>
            <motion.div
                className="flex w-full overflow-hidden text-slate-60"
                variants={variants.TechWrap}
                custom={isEven ? -1 : 1}
            >
                <Styled.Tech techs={data.tech} variants={variants.Tech} />
            </motion.div>
        </header>
    )

    const IMG = ({ ...props }) => (
        <Styled.Featured_Image
            src={data.src}
            alt={data.alt}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={variants.Image}
            custom={isEven ? 1 : -1}
            {...props}
        />
    )
    return (
        <>
            <motion.div
                className={`flex-col-top relative z-10 w-full gap-y-8 max-lg:mx-auto lg:absolute lg:w-1/2 ${
                    isEven
                        ? 'lg:left-0 lg:items-start'
                        : 'lg:right-0 lg:items-end'
                }`}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
            >
                <HEADER />
                <IMG />
                <div className="flex-col-center relative w-full rounded-3xl bg-white-dark/90 lg:p-4 lg:shadow-sm">
                    <motion.div
                        className="content-innerHTML w-full max-lg:text-center"
                        dangerouslySetInnerHTML={{ __html: content }}
                        variants={variants.Content}
                    />
                    <div
                        className="flex-around h-[clamp(56px,calc(56px+24*((100vw-320px)/448)),80px)] w-full lg:w-1/2"
                        style={{ filter: `hue-rotate(${props.i * 60}deg)` }}
                    >
                        <Styled.Icon_Links
                            iconData={[
                                ['GitHub', data.github],
                                ['External', data.external],
                            ]}
                            variants={variants.LinkItem}
                        />
                    </div>
                </div>
            </motion.div>
            <IMG LG />
        </>
    )
}

function Featured({ featuredData }) {
    const refs = useMemo(
        () => Array.from({ length: 3 }).map(() => createRef()),
        []
    )
    return [...Object.keys(featuredData)].map((key, i) => {
        return (
            <section
                key={`featured-project-${key}`}
                className={`relative mb-24 flex min-h-[600px] w-full flex-col items-center ${
                    i % 2 == 0 ? 'lg:items-end' : 'lg:items-start'
                }`}
                ref={refs[i]}
            >
                <Content
                    inViewRef={refs[i]}
                    featuredData={featuredData[key]}
                    i={i}
                />
            </section>
        )
    })
}

export default Featured
