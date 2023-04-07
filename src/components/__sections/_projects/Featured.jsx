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
        className="flex-col-center w-full min-w-min"
        style={style}
    >
        <span className="font-inconsolata leading-none text-slate-neon">
            Featured Project
        </span>

        <h4 className="w-full border-y-2 text-center lg:whitespace-nowrap">
            {title}
        </h4>
        <motion.div
            className="flex w-full overflow-hidden text-slate-neon"
            variants={variants.TechWrap}
            custom={isEven ? 1 : -1}
            {...inViewProps}
        >
            <Styled.Tech techs={tech} variants={variants.Tech} />
        </motion.div>
    </header>
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

const Featured = ({ featuredData }) =>
    Object.entries(featuredData).map(([key, value], i) => {
        const { data, content } = value
        const isEven = i % 2 == 0

        return (
            <div className="mb-12 lg:mb-24" key={`featured-project-${key}`}>
                <HEADER
                    style={{ filter: `hue-rotate(${i * 60}deg)` }}
                    isEven={isEven}
                    {...data}
                />
                <div
                    className={`relative mt-4 flex w-full flex-col gap-y-8 ${
                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                    <div className="relative aspect-[16/9] w-full select-none lg:max-w-[850px]">
                        <Image
                            src={data.src}
                            alt={data.alt}
                            layout="fill"
                            className="object-contain object-top"
                        />
                    </div>
                    <div
                        className={`flex-col-center relative w-full rounded-3xl bg-white-dark/90 lg:p-4 ${
                            isEven ? 'lg:left-0' : 'lg:right-0'
                        }`}
                    >
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
            </div>
        )
    })

export default Featured
