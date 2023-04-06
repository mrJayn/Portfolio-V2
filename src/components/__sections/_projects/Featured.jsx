import Image from 'next/image'
import { motion } from 'framer-motion'
import { featuredProjectVariants as variants } from '@motion'
import { Styled } from '@components'

const inViewProps = {
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true },
}

const HEADER = ({ title, tech, style, isEven }) => (
    <header
        key={`${title}-header`}
        className={`flex-col-center w-full min-w-min rounded-3xl bg-white-dark/90 lg:max-w-max lg:px-8 lg:py-4 lg:shadow-xs `}
        style={style}
    >
        <h3 className="w-full border-y-2 lg:whitespace-nowrap">{title}</h3>
        <motion.div
            className="flex w-full overflow-hidden text-slate-60"
            variants={variants.TechWrap}
            custom={isEven ? -1 : 1}
            {...inViewProps}
        >
            <Styled.Tech techs={tech} variants={variants.Tech} />
        </motion.div>
    </header>
)

const Featured_Image = ({ LG = false, src, alt }) => (
    <div
        key={`featured-image-${alt}`}
        className={`relative aspect-[16/9] w-full select-none lg:mt-8 lg:max-w-[850px] ${
            LG ? 'hidden lg:block' : 'lg:hidden'
        }`}
    >
        <Image
            src={src}
            alt={alt}
            layout="fill"
            className="object-cover object-top"
        />
    </div>
)

const Icon_Links = ({ iconData, style }) => (
    <div className="flex-btw h-icon w-1/2" style={style}>
        {iconData.map(([name, href], i) => {
            const title = {
                GitHub: 'View on GitHub',
                External: 'Visit Project',
            }[name]

            return (
                <motion.div
                    key={`icon-link-${i}`}
                    className="relative flex aspect-square h-full"
                    custom={i}
                    variants={variants.Item}
                    {...inViewProps}
                >
                    <motion.a
                        key={i}
                        href={href}
                        title={title}
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="relative h-full w-full"
                        whileHover={{ y: -2.5 }}
                        whileTap={{ y: -3.5 }}
                    >
                        <Styled.Icon name={name} />
                    </motion.a>
                </motion.div>
            )
        })}
    </div>
)

function Featured({ featuredData }) {
    return [...Object.keys(featuredData)].map((key, i) => {
        const { data, content } = featuredData[key]
        const isEven = i % 2 == 0

        return (
            <section
                key={`featured-project-${key}`}
                className={`relative mb-24 flex min-h-[600px] w-full flex-col items-center ${
                    i % 2 == 0 ? 'lg:items-end' : 'lg:items-start'
                }`}
            >
                <div
                    className={`flex-col-top relative z-10 w-full gap-y-8 max-lg:mx-auto lg:absolute lg:w-1/2 ${
                        isEven
                            ? 'lg:left-0 lg:items-start'
                            : 'lg:right-0 lg:items-end'
                    }`}
                >
                    <HEADER
                        style={{ filter: `hue-rotate(${i * 60}deg)` }}
                        isEven={isEven}
                        {...data}
                    />
                    <Featured_Image {...data} />
                    <div className="flex-col-center relative w-full rounded-3xl bg-white-dark/90 lg:p-4 lg:shadow-sm">
                        <motion.div
                            className="content-innerHTML w-full max-lg:text-center"
                            dangerouslySetInnerHTML={{ __html: content }}
                            variants={variants.Item}
                            {...inViewProps}
                        />

                        <Icon_Links
                            iconData={[
                                ['GitHub', data.github],
                                ['External', data.external],
                            ]}
                            style={{ filter: `hue-rotate(${i * 60}deg)` }}
                        />
                    </div>
                </div>
                <Featured_Image LG {...data} />
            </section>
        )
    })
}

export default Featured
