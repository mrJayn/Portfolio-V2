import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { useOnClickOutside } from '@hooks'
import { aboutMotion } from '@motion'

const Skills = ({ skills, isMd }) => {
    const [sidebar, setSidebar] = useState(false)
    const clickOutsideRef = useRef(null)
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

    // Wrap Props
    const wrapProps = {
        initial: 'hidden',
        animate: isMd ? (sidebar ? 'opened' : 'closed') : 'show',
        variants: isMd ? variants.Wrap : null,
        onHoverStart: handleHov,
        onHoverEnd: handleHov,
        onClick: () => {
            if (isMd) setSidebar(true)
        },
        ref: clickOutsideRef,
    }

    // Close Skills if Click Outside Ref @Media >= 768px
    useOnClickOutside(clickOutsideRef, () => {
        if (!sidebar || isMd) return
        setSidebar(false)
    })

    return (
        <motion.div
            className={
                isMd
                    ? 'flex-col-top absolute top-0 right-0 z-10 h-full w-auto cursor-default overflow-hidden rounded-[3rem] bg-card_grad px-4 text-dark dark:bg-card_grad_DARK dark:text-grey'
                    : 'flex-col-top full'
            }
            {...wrapProps}
        >
            {/** [  HEADER  ] **/}
            <h6 className="mt-[1.5em] hidden whitespace-nowrap duration-250 ease-in sm:block">
                {isMd ? 'SKILLS' : "Tech I've worked with recently"}
            </h6>

            {/** [  SKILLS  ] **/}
            <ul className="mt-3 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:w-auto md:grid-cols-2">
                {skills.map(([title, src], i) => {
                    const li_vars = isMd ? variants.ItemMd : variants.ItemSm
                    return (
                        <motion.li
                            key={`about-skills-${i}`}
                            className={
                                isMd
                                    ? 'flex-right relative mr-auto h-12 rounded-lg bg-light shadow-[-5px_2.5px_5px_-2.5px_#111] odd:flex-row-reverse even:z-10 dark:bg-grey-40'
                                    : 'flex-left space-x-2 rounded-lg bg-grey-60/25 p-2'
                            }
                            variants={li_vars}
                            custom={i}
                        >
                            <motion.p
                                className="ml-[10px] whitespace-nowrap text-[16px] italic tracking-tighter text-grey-40 dark:text-teal-lightest  sm:tracking-tight md:mx-[10px] md:rounded-lg md:text-base"
                                style={{ order: isMd ? 0 : 1 }}
                                variants={isMd ? variants.Text : null}
                            >
                                {title}
                            </motion.p>
                            <motion.div
                                className="relative aspect-square h-full md:p-2"
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
                        </motion.li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default Skills
