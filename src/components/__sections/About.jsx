import { motion } from 'framer-motion'
import { aboutMotion } from '@motion'

const AboutMe = ({ content, src }) => (
    <div className="w-full">
        <h3>Mike, Michael, Mikey</h3>
        <div className="flex-col-center mt-5 w-full gap-5 lg:flex-row">
            <div
                className="styled-content flex w-[min(37ch,100%)] flex-col indent-4 lg:mb-auto"
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
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 'all' }}
                />
            </div>
        </div>
    </div>
)

const Skills = ({ skills }) => (
    <motion.div className="w-full" {...aboutMotion.skills.wrap}>
        <h3>What I Do</h3>
        <ul className="flex-col-right mx-auto mt-5 w-full max-w-[1000px] gap-y-2.5">
            {skills.map(({ title, src, colors, rating }) => {
                const [c1, c2, c3] = colors
                const logo = `left / 1em url(${src}) no-repeat`
                const grad = `-2.6em 50% / 100% 15% linear-gradient(90deg, transparent, #0004) no-repeat, -2.66em 50% / 100% 15% linear-gradient(90deg, ${c1}, ${c2}) no-repeat`

                return (
                    <motion.li
                        key={`${title}-skill-item`}
                        layout
                        className="flex-left  text-h4 max-lg:pl-[2.5%]"
                        custom={rating}
                        {...aboutMotion.skills.item}
                    >
                        <h4
                            className="whitespace-nowrap pl-[calc(6px+1.125em)] pr-[0.33em]"
                            style={{ color: c1, background: logo }}
                        >
                            {title}
                            {title === 'HTML |' && <span style={{ color: c3 }}>| CSS</span>}
                        </h4>
                        <div
                            className="full flex-right rounded-r p-1 pr-2 font-montserrat font-medium"
                            style={{ color: c3, background: grad }}
                        >
                            {rating}%
                        </div>
                    </motion.li>
                )
            })}
        </ul>
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
