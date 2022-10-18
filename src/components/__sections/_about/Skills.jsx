import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { useOnClickOutside } from '@hooks'
import { aboutMotion } from '@motion'

const Skills = ({ skills, isMd }) => {
    const [sidebar, setSidebar] = useState(false)
    const variants = aboutMotion.Skills

    // handle Hover
    const handleHov = () => {
        if (!isMd) return
        if (!sidebar) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }

    return (
        <motion.div
            className={
                isMd
                    ? ' flex-col-top group absolute top-0 right-0 z-10 h-full w-auto cursor-pointer overflow-hidden rounded-[3rem] bg-card_grad px-4 text-dark saturate-0 duration-200 ease-in hover:saturate-100 dark:bg-card_grad_DARK dark:text-grey'
                    : 'flex-col-top full'
            }
            initial="hidden"
            animate={isMd ? (sidebar ? 'opened' : 'closed') : 'show'}
            onClick={() => {
                if (isMd) setSidebar(!sidebar)
            }}
        >
            {/** [  HEADER  ] **/}
            <h6 className="mt-[1.5em] hidden whitespace-nowrap duration-250 ease-in sm:block">
                {isMd ? 'SKILLS' : "Tech I've worked with recently"}
            </h6>

            {/** [  SKILLS  ] **/}
            <ul className="grid h-[75%] w-full grid-cols-2 gap-3 px-3 pt-3 sm:grid-cols-3 md:w-auto md:grid-cols-2">
                {skills.map(([title, src], i) => {
                    const li_vars = isMd && variants.ItemMd
                    return (
                        <motion.li
                            key={`about-skills-${i}`}
                            className={
                                isMd
                                    ? 'flex-right relative mr-auto h-12 rounded-lg bg-light shadow-[-5px_2.5px_5px_-2.5px_#111] odd:flex-row-reverse even:z-10 dark:bg-grey-40'
                                    : 'flex h-12 overflow-hidden rounded-lg bg-grey-60/25 pr-2'
                            }
                            variants={li_vars}
                            custom={i}
                        >
                            <motion.p
                                className="whitespace-nowrap italic tracking-tighter text-grey-40 dark:text-teal-lightest  sm:tracking-tight md:mx-[10px] md:rounded-lg"
                                style={{ order: isMd ? 0 : 1 }}
                                variants={variants.Text}
                            >
                                {title}
                            </motion.p>
                            {/***/}
                            <motion.div
                                className="relative aspect-square h-12 p-2"
                                style={{ order: isMd ? 1 : 0 }}
                                variants={isMd ? variants.Img : null}
                            >
                                <div className="full relative">
                                    <Image
                                        src={src}
                                        alt={`about-skills-${title}-image`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </motion.div>
                            {/***/}
                        </motion.li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default Skills
