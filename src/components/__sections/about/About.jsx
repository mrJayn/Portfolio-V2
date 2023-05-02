import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'

const Picture = ({ src, alt }) => (
    <div className="flex-center relative aspect-[1/1] h-[250px] overflow-hidden shadow-md shadow-black lg:h-[350px]">
        <motion.div
            className="absolute top-0 left-[-80%] h-[200%] w-[200%] will-change-transform"
            style={{ scale: 0.5, originX: 0.8, originY: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
            <Image
                priority
                loading="eager"
                src={src}
                alt={alt}
                layout="fill"
                className="object-cover object-top"
            />
        </motion.div>
    </div>
)

const Skills = ({ skills }) => (
    <motion.div
        className="flex-col-left w-full max-w-[475px] max-lg:pl-[2.5%]"
        variants={aboutVariants.Skills.Container}
    >
        {skills.map(({ title, src, colors, rating }, i) => {
            const [c0, c1, c2] = colors
            return (
                <motion.div
                    key={`${title}-skill-item`}
                    className="relative flex h-[1.5em] items-center lg:h-[1.75em] lg:text-[1.125em]"
                    style={{ width: rating + '%' }}
                    variants={aboutVariants.Skills.Item}
                >
                    <div
                        className="mr-1 flex pl-[calc(8px+1em)]"
                        style={{
                            color: c0,
                            background: `no-repeat left / contain url(${src})`,
                        }}
                    >
                        {title === 'HTML/CSS' ? (
                            <>
                                HTML
                                <span
                                    style={{ color: c2 }}
                                    className=" first-letter:text-black/50"
                                >
                                    |CSS
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
        <div
            className="subsection w-[44ch] max-w-full text-start leading-1.25 lg:w-[56ch]"
            dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex-col-center w-full gap-12 lg:flex-row">
            <Picture {...data} />
            <Skills {...data} />
        </div>
    </>
)

export default About
