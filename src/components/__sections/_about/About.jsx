import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutMotion } from '@motion'
import { Section_Hero } from '@components'
const varaints = aboutMotion.Skills
import { id2index } from '@config'
// SKILLS Component
const Skills = ({ skills, isMd }) => (
    <div id="about-skills" className="flex-col-top full">
        <h6 className="mt-[1.5em] hidden whitespace-nowrap sm:block md:border-b-2 md:px-10">
            Tech I&apos;ve worked with recently
        </h6>

        {/***/}
        <ul className="grid h-auto w-full grid-cols-2 gap-y-3 p-3 sm:grid-cols-3 md:w-auto md:grid-cols-8 md:gap-y-[1.75em] md:gap-x-5 lg:grid-cols-10 lg:gap-[1.75em_1.25em]">
            {skills.map(([title, src], i) => {
                return (
                    <motion.li
                        key={`about-skills-${i}`}
                        data-title={isMd ? title : false}
                        className="sm:flex-center relative mx-auto flex h-12 w-[95%] cursor-pointer items-center justify-between overflow-hidden rounded-lg border-background/75 bg-grey/20 px-3 py-2 shadow-xs dark:bg-grey-80/20 sm:w-auto md:overflow-visible md:border-2 md:bg-transparent md:p-[6px]"
                    >
                        <p className="whitespace-nowrap italic tracking-tighter text-grey-40  dark:text-teal-10 sm:tracking-tight md:hidden">
                            {title}
                        </p>
                        {/***/}
                        <div className="relative h-full min-w-[48px]">
                            <div className="full relative z-0">
                                <Image
                                    src={src}
                                    alt={`about-skills-${title}-image`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        {/***/}
                    </motion.li>
                )
            })}
        </ul>
    </div>
)

// ABOUT Page
const About = ({ ...data }) => {
    const components = [
        <Section_Hero
            key="about-hero"
            idx={data.activeSection}
            isMd={data.isMd}
            {...data.data}
        />,
        <div
            key="about"
            id="about-innerHTML"
            className="w-full"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />,
        <Skills key="skills" skills={data.data.skills} isMd={data.isMd} />,
    ]
    return components.map((component, i) => component)
}
export default About
