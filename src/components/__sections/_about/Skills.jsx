import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { useOnClickOutside } from '@hooks'
import { aboutMotion } from '@motion'

const Skills = ({ skills, isMd }) => {
    const [sidebar, setSidebar] = useState(false)
    const ref = useRef(null)

    // Styled-Header Component
    const Styled_Header = () => (
        <h6
            className={`mt-[1.5em] hidden whitespace-nowrap sm:block md:mb-2 ${
                isMd && sidebar
                    ? 'text-black dark:text-white'
                    : 'text-grey-20 dark:text-grey-80'
            }`}
        >
            {isMd ? 'Skills' : "Tech I've worked with recently"}
        </h6>
    )

    // Close Skills if Click Outside Ref @Media >= 768px
    useOnClickOutside(ref, () => {
        if (!sidebar) return
        setSidebar(false)
    })

    return (
        <motion.div
            className={
                isMd
                    ? 'flex-col-top absolute top-0 right-0 z-10 h-full w-auto cursor-default rounded-[3rem] bg-card_grad px-4 dark:bg-card_grad_DARK'
                    : 'flex-col-top full'
            }
            initial="hidden"
            animate={isMd ? (sidebar ? 'opened' : 'closed') : 'show'}
            variants={isMd ? aboutMotion.Skills.Wrap : null}
            onHoverStart={() => {
                if (isMd & !sidebar) setSidebar(true)
            }}
            onHoverEnd={() => setSidebar(false)}
            onClick={() => {
                if (isMd) setSidebar(true)
            }}
            ref={ref}
        >
            {/** [  HEADER  ] **/}
            <Styled_Header sidebar={sidebar} isMd={isMd} />
            {/** [  SKILLS LIST  ] **/}
            <ul
                className={
                    isMd
                        ? 'grid w-auto grid-cols-2 gap-3'
                        : 'mt-3 grid w-full grid-cols-2 gap-3 sm:grid-cols-3'
                }
            >
                {skills.map(([title, src], i) => (
                    <motion.li
                        key={`about-skills-${i}`}
                        className={
                            isMd
                                ? 'flex-right relative mr-auto h-12 rounded-lg bg-grey-80 shadow-[-5px_2.5px_5px_-2.5px_#111] odd:flex-row-reverse even:z-10 dark:bg-grey-40'
                                : 'flex-left space-x-2 rounded-lg bg-grey-60/25 p-2'
                        }
                        variants={
                            isMd
                                ? aboutMotion.Skills.ItemMd
                                : aboutMotion.Skills.ItemSm
                        }
                        custom={i}
                    >
                        <motion.p
                            className="ml-[10px] whitespace-nowrap text-[16px] italic tracking-tighter text-grey-40 dark:text-teal-lightest  sm:tracking-tight md:mx-[10px] md:rounded-lg md:text-base"
                            style={{ order: isMd ? 0 : 1 }}
                            variants={isMd ? aboutMotion.Skills.Text : null}
                        >
                            {title}
                        </motion.p>
                        <motion.div
                            className="relative aspect-square h-full md:p-2"
                            style={{ order: isMd ? 1 : 0 }}
                            variants={isMd ? aboutMotion.Skills.Img : null}
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
                ))}
            </ul>
        </motion.div>
    )
}

export default Skills
