import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'

const Skills = ({ skills }) => (
    <motion.div
        className="flex-col-left mx-auto w-full pl-[2.5%] max-md:max-w-[475px] md:col-start-2"
        variants={aboutVariants.Skills.Container}
    >
        {skills.map(({ title, src, colors, rating }, i) => {
            const [c0, c1, c2] = colors
            return (
                <motion.div
                    key={`${title}-skill-item`}
                    className="relative flex h-[1.5em] items-center"
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
                        className="relative mb-0.5 h-[0.4em] w-full origin-left rounded-sm after:absolute after:right-0 after:font-montserrat after:text-[0.75em] after:font-bold after:leading-[0.4] after:text-current after:content-[attr(data-rating)'%']"
                        style={{
                            color: c2,
                            background: `no-repeat left / calc(100% - 1.75em) linear-gradient(90deg, ${c0}, ${c1})`,
                        }}
                        variants={aboutVariants.Skills.Rating}
                    />
                </motion.div>
            )
        })}
    </motion.div>
)

const About = ({ data, content }) => (
    <>
        <h2>About Me</h2>
        <div className="grid w-full grid-cols-1 space-y-4 md:grid-cols-[50%_50%]">
            <div
                className="subsection mx-auto flex w-[33.5ch] max-w-full md:row-span-2 md:h-full"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="flex-center relative mx-auto aspect-[1/1] h-[250px] overflow-hidden shadow-md shadow-black md:ml-[2.5%] md:h-[300px]">
                <motion.div
                    className="absolute top-0 left-[-80%] h-[200%] w-[200%] select-none will-change-transform"
                    style={{ scale: 0.5, originX: 0.8, originY: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Image
                        priority
                        loading="eager"
                        src={data.src}
                        alt={data.alt}
                        layout="fill"
                        className="object-cover object-top"
                    />
                </motion.div>
            </div>
            <Skills {...data} />
        </div>
    </>
)

export default About
