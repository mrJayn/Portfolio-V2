import Link from 'next/link'
import { motion } from 'framer-motion'
import { Variants } from '@config'

const sections = [
    ['about', 'center'],
    ['experience', 'center'],
    ['featured', 'start'],
    ['projects', 'start'],
    ['contact', 'end'],
    ['my Resume', ''],
]
const resumeDir = '/assets/misc/resume2022.jpg'

const SectionLinks = ({ handleClick, isMenu = false, ...props }) => {
    const scrollNow = (e, scrollTarget) => {
        e.preventDefault()
        document
            .querySelector(e.target.getAttribute('href').substring(1))
            .scrollIntoView({
                behavior: 'smooth',
                block: scrollTarget,
            })
    }
    const ul_props = {
        variants: isMenu ? Variants.menu.parent : Variants.fade_stagger,
        custom: true,
        ...props,
    }

    const li_props = {
        variants: Variants.fadeY,
        custom: isMenu ? 10 : 50,
        whileTap: { scale: isMenu ? 0.95 : 1 },
        onClick: handleClick,
    }
    return (
        <motion.ul
            className={
                isMenu
                    ? 'flex-col-center h-[70%]'
                    : 'md:flex-right full hidden select-none'
            }
            {...ul_props}
        >
            {sections.map((item, i) => {
                const isResumeLink = i == sections.length - 1
                return (
                    <motion.li
                        key={i}
                        className={`cursor-pointer font-medium tracking-tight text-lightgrey hover:text-white ${
                            isMenu
                                ? 'my-auto text-2xl capitalize'
                                : 'styled-link flex-center group mx-3 pt-2 pb-1 text-base'
                        }`}
                        style={{ transition: 'color 0.25s linear' }}
                        {...li_props}
                    >
                        {isResumeLink ? (
                            <a
                                href={resumeDir}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item[0]}
                            </a>
                        ) : (
                            <Link href={`#${item[0]}`} passHref>
                                <a onClick={(e) => scrollNow(e, item[1])}>
                                    {item[0]}
                                </a>
                            </Link>
                        )}
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

export default SectionLinks
