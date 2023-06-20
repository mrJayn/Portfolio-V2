import { motion } from 'framer-motion'
import { aboutMotion } from '@motion'

const AboutMe = ({ content, src }) => (
    <div className="w-full">
        <h3>Who Am I</h3>
        <div className="flex-col-center mt-5 w-full gap-5 lg:flex-row">
            <div
                className="flex w-[min(37ch,100%)] flex-col rounded-lg p-5 indent-4 shadow-[inset_0_0_0_2px_#404040] lg:mb-auto"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="relative aspect-[1/1] h-[290px] overflow-hidden lg:h-[350px] lg:min-w-[350px]">
                <motion.div
                    className="absolute left-[-80%] top-0 h-[200%] w-[200%] select-none will-change-transform"
                    style={{
                        scale: 0.5,
                        originX: 0.8,
                        originY: 0,
                        background: `top / cover no-repeat url(${src})`,
                    }}
                    whileInView={{ scale: 0.5 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 'all' }}
                />
            </div>
        </div>
    </div>
)

const Skills = ({ languages, skills }) => (
    <motion.div className="w-full" {...aboutMotion.skills.wrap}>
        <h3>My Skills</h3>
        <ul className="flex-col-left mx-auto mt-5 w-full max-w-[1000px] gap-y-2.5">
            {languages.map(({ title, src, colors, rating }) => {
                const [c1, c2] = colors
                return (
                    <motion.li key={`${title}-skill-item`} className="flex-col-left w-full">
                        <motion.div
                            layout
                            className="flex-left pl-[2.5%] text-h4"
                            custom={rating}
                            {...aboutMotion.skills.item}
                        >
                            <h4
                                className="mr-[0.4em] whitespace-nowrap pl-[1.4em]"
                                style={{ color: c1, background: `left / 1em url(${src}) no-repeat` }}
                            >
                                {title}
                                {title === 'HTML |' && <span style={{ color: c2 }}>| CSS</span>}
                            </h4>
                            <div
                                className="full flex-right font-montserrat after:mt-[-0.25em] after:inline-block after:font-raleway after:text-[0.75em] after:content-['%']"
                                style={{
                                    color: c2,
                                    background: `left / calc(100% - 2.1em) 10% linear-gradient(90deg, ${c1}, ${c2}) no-repeat`,
                                }}
                            >
                                {rating}
                            </div>
                        </motion.div>
                    </motion.li>
                )
            })}
        </ul>
        <div className="flex-col-center mt-10 w-full gap-5">
            <p>And just a few of my favorite tools...</p>
            <ul className="grid max-w-[500px] grid-cols-4 flex-wrap gap-x-[1em] text-h4">
                {skills.map(({ title, src }) => (
                    <motion.div
                        key={title}
                        className="mx-auto aspect-[1/1] h-[1.5em]"
                        style={{ background: `center / contain url(${src}) no-repeat` }}
                        title={title}
                    />
                ))}
            </ul>
        </div>
    </motion.div>
)

export default function About({ ...data }) {
    return (
        <div id="about-content" className="flex-col-top max-w-[1000px] gap-24">
            <AboutMe {...data} />
            <Skills {...data} />
        </div>
    )
}
