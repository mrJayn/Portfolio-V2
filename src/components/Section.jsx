import { motion, useInView } from 'framer-motion'
import { Intro, Contact, PageLink, About, Experience } from '@components'
import { useRef } from 'react'

const Section = ({ id, isActive, setActive, ...props }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.5, once: true })
    return (
        <motion.section
            id={id}
            className="flex-col-center first-of-type:flex-col-top relative mb-24 min-h-screen w-full min-w-[320px] max-w-[1024px] select-none first-of-type:pt-[20vh] last-of-type:mb-0"
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            {...(inView && { exit: 'exit' })}
            viewport={{ once: true }}
            ref={ref}
        >
            {{
                intro: <Intro setActive={setActive} />,
                about: <About {...props} />,
                experience: <Experience {...props} />,
                contact: <Contact />,
                projects: (
                    <div
                        id="projects-content"
                        className="flex-col-top absolute z-10 border-2 text-center portrait:top-1/3 landscape:top-[37.5%]"
                    >
                        <h2>Projects</h2>
                        <div
                            className="cursor-pointer bg-red"
                            onClick={() => {
                                let el = document.getElementById('projects')
                                window.scrollTo({ top: el.offsetTop })
                            }}
                        >
                            Click
                        </div>
                        <PageLink from="projects" activate={setActive}>
                            View Projects
                        </PageLink>
                    </div>
                ),
            }[id] ?? null}
        </motion.section>
    )
}

export default Section
