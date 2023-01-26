import Image from 'next/image'
import { motion } from 'framer-motion'

import { featuredVariants } from '@motion'
import Project_Items from './Items'

const Featured_Full = ({ i, ...data }) => {
    const Data = data.data
    const HtmlContent = data.content
    const even = i % 2 == 0

    const whileInView = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: false },
    }
    return (
        <motion.section
            id={`${Data.title}-featured-project`}
            className="flex-col-top relative z-10 h-[calc(75vh-56px)] w-full bg-white-dark"
            style={{ alignItems: even ? 'start' : 'end' }}
            data-featured-project-full
        >
            <header
                id={`${Data.title}-header`}
                className="flex-col-center relative whitespace-nowrap"
            >
                <h3
                    className=" mb-1 flex w-full items-end border-[1px] p-2"
                    style={{ filter: `hue-rotate(${i * 60}deg)` }}
                >
                    {Data.title}
                </h3>
                <div className="flex-center absolute bottom-[-1.75em]">
                    <Project_Items.Tech techs={Data.tech} />
                </div>
            </header>

            <motion.div
                id={`${Data.title}-content`}
                className="full relative"
                {...whileInView}
            >
                <motion.div
                    key={`${Data.title}-text`}
                    className={`content-innerHTML pt-12 ${
                        even ? 'pr-8' : ' ml-auto pl-8 text-end'
                    }`}
                    data-section-name="projects"
                    dangerouslySetInnerHTML={{ __html: HtmlContent }}
                    variants={{
                        hidden: { opacity: 0, x: even ? '50%' : '-50%' },
                        show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.div
                    key={`${Data.title}-image`}
                    className={`absolute top-[10%] z-10 h-[80%] w-[60%] select-none overflow-hidden rounded-3xl shadow-md shadow-black/50 ${
                        even ? 'left-1/2' : 'right-1/2'
                    }`}
                    style={{ originX: even ? 2 : -1 }}
                    variants={{
                        hidden: { scale: 0.9, opacity: 0 },
                        show: { scale: 1, opacity: 1 },
                    }}
                    transition={{ duration: 1, ease: 'circOut' }}
                >
                    <Image
                        src={Data.src}
                        alt={Data.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    />
                </motion.div>
                <motion.div
                    className={`flex-btw mx-[2.5%] h-16 w-1/4 ${
                        even ? 'mr-auto' : 'ml-auto'
                    }`}
                    variants={featuredVariants.IconLinks.Wrap}
                    {...whileInView}
                >
                    <Project_Items.Icon_Links
                        iconData={[
                            ['GitHub', Data.github],
                            ['External', Data.external],
                        ]}
                        variants={featuredVariants.IconLinks.Icons}
                        custom={even}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Featured_Full
