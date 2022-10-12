import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'

import { Styled_ExitButton, Styled_Icon } from '@components'
import { useOnClickOutside } from '@hooks'
import { aboutMotion } from '@motion'

// Header Component @Media >= 768px
const Exit_Button = ({ sidebar, setSidebar }) => (
    <AnimatePresence>
        {sidebar ? (
            <div
                className="flex-center absolute top-0 right-0 z-10 m-3 aspect-square h-10 cursor-pointer"
                onClick={() => setSidebar(false)}
            >
                <Styled_ExitButton
                    key="skills-exit-btn"
                    toggleCard={() => setSidebar(false)}
                    useExitAnim={true}
                />
            </div>
        ) : null}
    </AnimatePresence>
)
// Styled-Header Component
const Styled_Header = ({ isMd, sidebar }) => (
    <h6
        className={`mt-[1.5em] hidden whitespace-nowrap sm:block md:my-4 md:h-10 ${
            isMd && sidebar
                ? 'text-black dark:text-white'
                : 'text-grey-20 dark:text-grey-80'
        }`}
    >
        {isMd ? 'Skills' : "Tech I've worked with recently"}
    </h6>
)
// Styled-Image Component
const Skills_Img = ({ src, alt, ...props }) => (
    <motion.div className="relative aspect-square h-full" {...props}>
        <Image
            src={src}
            alt={alt + ' -image'}
            layout="fill"
            objectFit="cover"
        />
    </motion.div>
)
// Styled-Text Component
const Skills_Txt = ({ text, ...props }) => (
    <motion.p
        className="ml-[10px] whitespace-nowrap text-[16px] italic tracking-tighter text-grey-40 dark:text-teal-lightest  sm:tracking-tight md:rounded-lg md:text-base"
        {...props}
    >
        {text}
    </motion.p>
)

const Skills = ({ skills, isMd }) => {
    const [sidebar, setSidebar] = useState(false)
    const ref = useRef(null)

    // Close Skills if Click Outside Ref @Media >= 768px
    useOnClickOutside(ref, () => {
        if (!sidebar) return
        setSidebar(false)
    })

    return (
        <motion.div
            className={
                isMd
                    ? 'flex-col-top absolute top-0 right-0 z-10 h-full cursor-pointer bg-card_grad shadow-[-5px_0px_5px_0px_#aaa] dark:bg-card_grad_DARK'
                    : 'flex-col-top full'
            }
            initial="hidden"
            animate={isMd ? (sidebar ? 'opened' : 'closed') : 'show'}
            variants={isMd ? aboutMotion.Skills_Md.Wrap : null}
            onClick={() => {
                if (isMd & !sidebar) setSidebar(true)
            }}
            ref={ref}
        >
            {/** [  HEADER  ] **/}
            <Styled_Header sidebar={sidebar} isMd={isMd} />
            <Exit_Button sidebar={sidebar} setSidebar={setSidebar} />
            {/** [  SKILLS LIST  ] **/}
            <ul
                className={
                    isMd
                        ? 'grid w-full grid-cols-2'
                        : 'mt-3 grid w-full grid-cols-2 gap-3 sm:grid-cols-3'
                }
            >
                {skills.map(([title, src], i) =>
                    isMd ? (
                        <motion.li
                            key={`skill-${i}`}
                            className="flex-right relative mb-3 h-10 rounded-lg bg-grey-80 shadow-[5px_2.5px_5px_-2.5px_#111] odd:z-10 dark:bg-grey-40"
                            variants={aboutMotion.Skills_Md.Item}
                            custom={i}
                        >
                            <Skills_Txt
                                text={title}
                                variants={aboutMotion.Skills_Md.Text}
                            />
                            <Skills_Img
                                src={src}
                                alt={title}
                                variants={aboutMotion.Skills_Md.Img}
                            />
                        </motion.li>
                    ) : (
                        <motion.li
                            key={`skill-${i}`}
                            className="flex-left rounded-lg bg-grey-60/25 p-2"
                            variants={aboutMotion.Skills_Sm.Item}
                            custom={i}
                        >
                            <Skills_Img src={src} alt={title} />
                            <Skills_Txt text={title} />
                        </motion.li>
                    )
                )}
            </ul>
        </motion.div>
    )
}

export default Skills
