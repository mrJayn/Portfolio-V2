import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { sectionVariants } from '@motion'
import { Intro, Contact, PageLink } from '@components'

const Section = ({ id, isActive, setActive, data }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.51 })

    return (
        <motion.section
            id={id}
            className="relative z-10 flex min-h-screen w-screen justify-center overflow-hidden lg:h-screen portrait:h-screen"
            initial={isActive ? 'hidden' : 'show'}
            animate="show"
            {...(inView && { exit: 'exit' })}
            ref={ref}
        >
            {{
                intro: <Intro activate={setActive} />,
                contact: <Contact />,
            }[id] ?? (
                <div
                    id={`${id}-content`}
                    className="flex-col-top absolute z-10 text-center portrait:top-1/3 landscape:top-[37.5%]"
                >
                    <h3>{data.title}</h3>
                    <PageLink
                        id={id}
                        variants={sectionVariants.Button}
                        activate={setActive}
                    >
                        {data.btnText}
                    </PageLink>
                </div>
            )}
        </motion.section>
    )
}

export default Section
