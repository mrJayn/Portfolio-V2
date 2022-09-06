import Link from 'next/link'
import { motion } from 'framer-motion'
import { menuVariants } from '@config'

// [ id , block scroll target ]
const sections = [
    ['about', 'center'],
    ['experience', 'center'],
    ['featured', 'start'],
    ['projects', 'start'],
    ['contact', 'end'],
    ['my Resume', '/assets/misc/resume2022.jpg'],
]

const NavLinks = ({ toggleMenu, forMenu = false }) => {
    const ul_props = {
        variants: forMenu ? menuVariants.menuLinks : menuVariants.navLinks,
        custom: true,
    }

    const li_props = {
        variants: menuVariants.children,
        custom: forMenu ? 10 : 50,
        whileTap: { scale: forMenu ? 0.95 : 1 },
        onClick: toggleMenu,
    }
    return (
        <motion.ul
            className={
                forMenu
                    ? 'flex-col-center landscape:full h-[70%] grid-flow-col grid-cols-3 grid-rows-2 landscape:grid'
                    : 'md:flex-right md:full hidden select-none'
            }
            {...ul_props}
        >
            {sections.map(([name, target], i) => {
                const isResumeLink = i == sections.length - 1
                return (
                    <motion.li
                        key={i}
                        className={`cursor-pointer font-medium tracking-tight text-black dark:text-lightgrey md:text-lightgrey md:hover:text-white ${
                            forMenu
                                ? 'landscape:flex-center my-auto text-2xl capitalize landscape:my-8 landscape:text-xl'
                                : 'flex-center mx-4 pt-2 pb-1 text-[16px] lg:text-[18px]'
                        }`}
                        style={{ transition: 'color 0.25s linear' }}
                        {...li_props}
                    >
                        {isResumeLink ? (
                            <a
                                href={target}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {name}
                            </a>
                        ) : (
                            <Link href={`/#${name}`} passHref>
                                <a>{name}</a>
                            </Link>
                        )}
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

export default NavLinks
