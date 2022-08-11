import { useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Section, Items } from '@components'
import { config } from '@config'

const Skills = ({ readMore, ...content }) => {
    const [skills, icons] = [content.data.skills, content.data.skills_icons]
    const skillVariant = {
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.08,
            },
        }),
    }
    return (
        <div className="flex-col-center absolute right-0 top-32 w-[35%] pr-6 text-center md:top-36 md:w-[30%] md:pr-10">
            <p className="font-robotoMono font-medium text-lightTeal">
                Tech I&apos;ve worked with recently
            </p>
            <ul>
                {skills.map((skill, i) => (
                    <motion.li
                        key={`skill-item-${i}`}
                        className="flex-left my-2 rounded  bg-eee/50 py-2 pl-1 text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={readMore && 'animate'}
                        variants={skillVariant}
                        custom={i}
                    >
                        <div>
                            <Image
                                src={icons[i]}
                                alt={`${skill}.png`}
                                layout="intrinsic"
                                height={15}
                                width={15}
                            />
                        </div>
                        <p className="pl-[5px] font-robotoMono text-xs font-normal italic text-neon">
                            {skill}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

const About = ({ ...data }) => {
    const content = data.text.filter((obj) => {
        return (obj.id = 'about')
    })[0]

    const [readMore, setReadMore] = useState(false)

    const [infoProps, imgProps] = [
        {
            toggleCard: () => setReadMore(!readMore),
            card: config.cards.about,
            ...infoProps,
        },
        {
            src: config.cards.about.SRC,
            alt: config.cards.about.ALT,
            ...imgProps,
        },
    ]

    return (
        <Section id="about" fullScreen={false} marginBottom={false}>
            <div className="about-cards">
                <Items.InfoCard {...infoProps} />
                <Items.ImgCard {...imgProps} />
            </div>
            <Items.ExpandedCard
                state={readMore}
                toggleCard={() => setReadMore(!readMore)}
            >
                <div
                    className="about-content grid h-auto w-full grid-cols-6 rounded-md bg-grey/25 p-2 pt-6 md:p-10"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
                <Skills readMore={readMore} {...content} />
            </Items.ExpandedCard>
        </Section>
    )
}

export default About
