import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutMotion } from '@motion'
import SubSection from '../items/SubSection'

const Skills = ({ skills }) => (
    <SubSection className="max-w-[650px]" {...aboutMotion.skills.wrap}>
        {skills.map(({ title, src, colors, rating }) => {
            const [c1, c2, c3] = colors
            const logo = `left / 1.125em url(${src}) no-repeat`,
                grad = `-2.25em 50% / 100% 25% linear-gradient(90deg, ${c1}, ${c2}) no-repeat `

            return (
                <motion.div
                    key={`${title}-skill-item`}
                    layout
                    className="flex leading-[1.75] max-lg:pl-[2.5%]"
                    custom={rating}
                    {...aboutMotion.skills.item}
                >
                    <div
                        className="whitespace-nowrap pr-[6px] pl-[calc(6px+1.125em)]"
                        style={{ color: c1, background: logo }}
                    >
                        {title}
                        {title === 'HTML |' && (
                            <span style={{ color: c3 }}>| CSS</span>
                        )}
                    </div>
                    <div
                        className="flex-right h-3/4 w-full font-montserrat text-[0.75em] font-bold"
                        style={{ color: c3, background: grad }}
                    >
                        {rating}%
                    </div>
                </motion.div>
            )
        })}
    </SubSection>
)

const ScalingImage = ({ src }) => (
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
)

const Content = ({ content }) => (
    <SubSection className="flex-col-center gap-5 md:flex-row-reverse">
        <div
            data-about-content
            className="styled-content flex max-w-[min(37ch,100%)] flex-col child-p:mb-2 child-p-first:font-medium"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    </SubSection>
)

const About = ({ ...props }) => {
    return (
        <div id="about-content" className="flex-col-top relative">
            <Content {...props} />
            <Skills {...props.data} />
            <ScalingImage {...props.data} />
        </div>
    )
}

export default About
