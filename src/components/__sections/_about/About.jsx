import { motion } from 'framer-motion'

import Skills from './Skills'
import Image from 'next/image'

const About = ({ ...props }) => {
    const Summary = () => (
        <>
            <h3 className=" w-auto">Who I am</h3>
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
        </>
    )

    const Components = [
        <Summary key={0} />,
        <Skills key={1} {...props.data} />,
        <div
            key={2}
            className="content-innerHTML w-full"
            dangerouslySetInnerHTML={{ __html: props.content }}
        />,
    ]

    return Components.map((component, i) => (
        <motion.section
            key={`about-item-${i}`}
            className="full"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'circOut' }}
            viewport={{ once: true }}
        >
            {component}
        </motion.section>
    ))
}
export default About
