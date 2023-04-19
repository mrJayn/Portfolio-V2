import Image from 'next/image'
import { motion } from 'framer-motion'
import { featuredVariants } from '@motion'
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
        <span className="font-inconsolata leading-1 text-slate-neon">
            Featured Project
        </span>

        <h4 className="w-full border-y-2 text-center lg:whitespace-nowrap">
            {title}
        </h4>
        <motion.div
            className="flex w-full overflow-hidden text-slate-neon"
            variants={featuredVariants.TechWrap}
            custom={isEven ? 1 : -1}
            {...inViewProps}
        >
            <Styled.Tech
                tech={tech}
                className="font-medium even:border-x-2 max-md:text-[0.9em] max-md:leading-1.75 lg:px-4"
                variants={featuredVariants.Tech}
            />
        </motion.div>
    </header>
)

const Icon_Links = ({ iconData, style }) => (
    <>
        {iconData.map(([name, href], i) => {
            const title = {
                GitHub: 'View on GitHub',
                External: 'Visit Project',
            }[name]

            return (
                <motion.a
                    key={`icon-link-${i}`}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopenner"
                    title={title}
                    className="relative aspect-square h-full"
                    variants={featuredVariants.Item}
                    custom={i}
                    whileHover={{ y: -2.5 }}
                    whileTap={{ y: -3.5 }}
                    {...inViewProps}
                >
                    <Styled.Icon name={name} />
                </motion.a>
            )
        })}
    </>
)

const Featured = ({ featuredData }) =>
    Object.entries(featuredData).map(([key, value], i) => {
        const { data, content } = value
        const isEven = i % 2 == 0

        const Content = () => (
            <motion.div
                className="content-innerHTML w-full border-2 max-lg:text-center"
                dangerouslySetInnerHTML={{ __html: content }}
                variants={featuredVariants.Item}
                {...inViewProps}
            />
        )

        return (
            <div className="mb-12 lg:mb-24" key={`featured-project-${key}`}>
                <HEADER
                    style={{ filter: `hue-rotate(${i * 60}deg)` }}
                    isEven={isEven}
                    {...data}
                />
                <div
                    className={`relative mt-4 flex w-full flex-col ${
                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                    <div className="relative aspect-[16/9] w-full max-w-[850px] select-none">
                        <Image
                            src={data.src}
                            alt={data.alt}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div
                        className={`flex-col-center relative w-full lg:p-4 lg:pb-0 ${
                            isEven ? 'lg:left-0' : 'lg:right-0'
                        }`}
                    >
                        <Content />
                        <div
                            className="flex-btw h-[3.5em] w-1/2"
                            style={{ filter: `hue-rotate(${i * 60}deg)` }}
                        >
                            <Icon_Links
                                iconData={[
                                    ['GitHub', data.github],
                                    ['External', data.external],
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    })

export default Featured
