import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Section, Items } from '@components'

const Skills = ({ readMore, ...content }) => {
    const [skills, icons] = [content.data.skills, content.data.skills_icons]
    const motionProps = {
        initial: { opacity: 0, y: 10 },
        animate: readMore && { opacity: 1, y: 0 },
    }
    return (
        <div className="md:flex-col-center mt-4 border-t-2 border-t-eee/50 pt-4 md:mt-0 md:w-[30%] md:border-l-2 md:border-t-0 md:border-l-eee/50 md:pt-0 md:pl-10">
            <Items.SplitText
                className="text-sm font-medium text-lightTeal md:text-md"
                {...motionProps}
            >
                Tech I&apos;ve worked with recently
            </Items.SplitText>
            <ul className="grid grid-cols-3 gap-x-2 text-xs md:block md:text-md">
                {skills.map((skill, i) => (
                    <motion.li
                        key={`skill-item-${i}`}
                        className="flex-left my-2 rounded bg-grey p-2"
                        transition={{ delay: 0.75 + i * 0.08 }}
                        {...motionProps}
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
                        <p className="pl-[5px] font-robotoMono text-xs font-normal italic text-neon md:text-sm">
                            {skill}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

const About = ({ ...data }) => {
    const about = data.text.filter((obj) => obj.id == 'about')[0]
    const [readMore, setReadMore] = useState(false)

    const cardProps = {
        toggleCard: () => setReadMore(true),
        ...about,
    }
    const expandedProps = {
        title: about.data.title,
        subtitle: about.data.subtitle,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }

    return (
        <Section id="about" fullScreen={false} marginBottom={false}>
            <div className="about-cards">
                <Items.InfoCard {...cardProps} />
                <Items.ImgCard {...cardProps} />
            </div>
            <Items.ExpandedCard {...expandedProps}>
                <div className="md:flex-top w-full p-5 md:p-10 ">
                    <div
                        id="about-innerHTML"
                        className="text-white md:w-[70%] md:pr-10 "
                        dangerouslySetInnerHTML={{ __html: about.content }}
                    />
                    <Skills readMore={readMore} {...about} />
                </div>
            </Items.ExpandedCard>
        </Section>
    )
}

export default About
