import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Skills from './Skills'
import Image from 'next/image'

const AboutImage = ({ img }) => {
    console.log(img)
    const Img = () => (
        <Image src={img.src} alt={img.alt} layout="fill" objectFit="contain" />
    )
    return img.href !== '' ? (
        <a
            href={img.href}
            alt={img.alt}
            target="_blank"
            rel="noopenner noreferrer"
        >
            <div className="full relative">
                <Img />
            </div>
        </a>
    ) : (
        <div className="full relative">
            <Img />
        </div>
    )
}

const About = ({ isMd, ...props }) => {
    const Summary = () => (
        <div className="flex-col-center full mt-4 md:mt-0 md:justify-center">
            <h3>Who I am</h3>
            <div className="flex-col-center h-auto w-full gap-y-4 sm:flex-row">
                <div className="h-auto w-full">
                    <p>{props.data.brief.replace('<br/>', `\n`)}</p>
                </div>
                <div className="aspect-[1/1.25] w-full sm:w-3/4 md:w-1/2">
                    <AboutImage img={props.data.images[0]} />
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
            className="full md:flex-center z-10"
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
