import { motion } from 'framer-motion'

import Skills from './Skills'
import Image from 'next/image'

const About = ({ isMd, ...props }) => {
    const Summary = () => (
        <div className="flex-col-center full md:items-start">
            <h3 className="relative mb-[0.5em] md:my-0">Who I am</h3>
            <div className="flex-col-top full md:flex-row md:items-start">
                <div className="w-full whitespace-pre-line px-2 indent-8 sm:px-4 md:h-full md:px-4 md:leading-7">
                    <p>{props.data.introduction.replace('<br/>', `\n`)}</p>
                </div>
                <div className="aspect-[4/5] w-full max-w-[400px] p-4 md:-mt-4 md:w-3/4  md:max-w-none md:py-0">
                    <div className="full relative overflow-hidden rounded-3xl shadow-sm">
                        <Image
                            src="./assets/misc/mikeJayne.JPG"
                            alt="Me accepting congratulations after recieving my diploma"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    const Components = [
        <Summary key={0} />,
        <Skills key={1} isMd={isMd} {...props.data} />,
        <div
            key={2}
            className="content-innerHTML about"
            dangerouslySetInnerHTML={{ __html: props.content }}
        />,
    ]

    return Components.map((component, i) => (
        <motion.div
            key={`about-item-${i}`}
            className="full md:flex-center z-10 md:h-auto"
            initial={{ opacity: 1, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'circOut' }}
            viewport={{ once: true }}
        >
            {component}
        </motion.div>
    ))
}
export default About
