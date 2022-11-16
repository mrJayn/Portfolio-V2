import { motion } from 'framer-motion'

import Skills from './Skills'
import { inViewFadeIn } from '@motion'

const About = ({ ...data }) => {
    const components = {
        0: (
            <div
                id="about-innerHTML"
                className="w-full"
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
        ),
        1: <hr className="w-full text-white" />,
        2: <Skills skills={data.data.skills} isMd={data.isMd} />,
    }

    return (
        <div className="flex-col-center mx-auto h-auto w-full max-w-[1440px] space-y-8 py-8 md:space-y-16 md:py-16">
            {[...Object.values(components)].map((component, i) => (
                <motion.div
                    key={`about-item-${i}`}
                    className="subsection full"
                    {...inViewFadeIn}
                >
                    {component}
                </motion.div>
            ))}
        </div>
    )
}
export default About
