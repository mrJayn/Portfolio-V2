import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'
import SubSection from '../items/SubSection'

const Education = ({ university, degree, dates }) => (
    <SubSection title="Education" className="styled-content">
        <h4>{university}</h4>
        <h5>{degree}</h5>
        <span className="text-min italic text-grey">{dates}</span>
    </SubSection>
)

const Skills = ({ skills }) => (
    <SubSection
        title="What Can I do?"
        className="flex-col-left max-w-[768px] pl-[2.5%]"
        variants={aboutVariants.Skills.Container}
    >
        {skills.map(({ title, src, colors, rating }, i) => {
            const [c0, c1, c2] = colors
            return (
                <motion.div
                    key={`${title}-skill-item`}
                    className="relative flex h-[2.25em] items-center"
                    style={{ width: rating + '%' }}
                    variants={aboutVariants.Skills.Item}
                >
                    <div
                        className="mr-1 flex pl-[calc(10px+1em)]"
                        style={{
                            color: c0,
                            background: `no-repeat left / contain url(${src})`,
                        }}
                    >
                        {title === 'HTML/CSS' ? (
                            <>
                                <span className="my-auto text-[0.8em]">
                                    HTML
                                </span>
                                <span className="text-black/60">|</span>
                                <span
                                    style={{ color: c2 }}
                                    className="my-auto text-[0.8em]"
                                >
                                    CSS
                                </span>
                            </>
                        ) : (
                            title
                        )}
                    </div>

                    <motion.div
                        layout
                        data-rating={rating}
                        className="after:font-montserrat relative mb-0.5 h-[0.4em] w-full origin-left rounded-sm after:absolute after:right-0 after:text-[0.75em] after:font-bold after:leading-[0.4] after:text-current after:content-[attr(data-rating)'%']"
                        style={{
                            color: c2,
                            background: `no-repeat left / calc(100% - 1.75em) linear-gradient(90deg, ${c0}, ${c1})`,
                        }}
                        variants={aboutVariants.Skills.Rating}
                    />
                </motion.div>
            )
        })}
    </SubSection>
)

const Content = ({ content, src }) => (
    <SubSection className="flex-col-center gap-5 md:flex-row-reverse">
        <div className="styled-image relative aspect-[1/1] h-[250px] md:h-[300px]">
            <motion.div
                className="absolute top-0 left-[-80%] h-[200%] w-[200%] select-none will-change-transform"
                style={{
                    scale: 0.5,
                    originX: 0.8,
                    originY: 0,
                    background: `top / cover no-repeat url(${src})`,
                }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 1 }}
            />
        </div>
        <div
            className="styled-content flex max-w-[min(37ch,100%)] indent-4 leading-[1.5] md:h-[250px]"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    </SubSection>
)

const About = ({ data, content }) => {
    return (
        <div id="about-content" className="flex-col-top relative w-full">
            <Content {...{ content: content, ...data }} />
            <Education {...data.education} />
            <Skills {...data} />
        </div>
    )
}

export default About
