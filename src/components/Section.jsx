import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { sectionVariants } from '@motion'
import { Intro, Contact, PageLink } from '@components'

const Section = ({ id, i, activeSection, setSection, data }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.51 })
    const activate = () => setSection(i)

    return (
        <motion.section
            id={id}
            className="flex-col-around group relative z-10 h-screen w-screen overflow-hidden p-4 pt-[max(12.5vh,70px)] max-lg:snap-center"
            initial={activeSection === i ? 'hidden' : 'show'}
            animate="show"
            {...(inView && { exit: 'exit' })}
            ref={ref}
        >
            {id === 'intro' ? (
                <Intro activate={activate} />
            ) : id === 'contact' ? (
                <Contact activate={activate} />
            ) : (
                <div
                    id={`${id}-content`}
                    className="flex-col-top absolute z-10 text-center portrait:top-1/3 landscape:top-[37.5%]"
                >
                    <h3 className="whitespace-nowrap">{data.title}</h3>
                    <PageLink
                        id={id}
                        variants={sectionVariants.Button}
                        activate={activate}
                    >
                        {data.btnText}
                    </PageLink>
                </div>
            )}
        </motion.section>
    )
}

export default Section
