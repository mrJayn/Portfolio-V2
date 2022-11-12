import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Social_Icons } from '@components'
import { menuVariants } from '@motion'
import { scrollToID } from '@utils'

const SectionIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const Menu = ({ isOpen, toggleMenu }) => {
    // Handle Section Clicked
    const handleClick = (section) => {
        if (section == 'my resume') {
            window.open('/assets/misc/resume2022.jpg', '_blank')
        } else {
            scrollToID(`#${section}`, 'smooth')
        }
        toggleMenu()
    }

    return (
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.menu
                    id="menu"
                    className="fixed left-0 top-12 bottom-0 z-30 w-screen bg-grey-10"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={menuVariants.backgroundClip}
                >
                    <div className="absoluteFull flex-col-btw overflow-hidden p-4 landscape:flex-row landscape:pt-4">
                        <motion.ul
                            className="full relative flex flex-col space-y-3 landscape:grid"
                            variants={menuVariants.Links.Wrap}
                        >
                            {SectionIds.map((section, i) => {
                                return (
                                    <motion.li
                                        key={`menu-links-${i}`}
                                        className={`menu-links relative cursor-pointer py-[2vh] px-3 sm:px-5 landscape:h-auto`}
                                        variants={menuVariants.Links.Items}
                                        custom={i + 1}
                                        onClick={() => handleClick(section)}
                                    >
                                        <span className="text-base capitalize tracking-widest text-grey-60/90 sm:text-lg">
                                            {section}
                                        </span>
                                    </motion.li>
                                )
                            })}
                        </motion.ul>

                        <motion.div
                            className="grid w-full grid-cols-4 py-5 landscape:h-full landscape:w-1/2 landscape:grid-cols-1 landscape:py-0"
                            variants={menuVariants.IconWrap}
                        >
                            <Social_Icons
                                size={50}
                                variants={menuVariants.Icons}
                            />
                        </motion.div>
                    </div>
                </motion.menu>
            ) : null}
        </AnimatePresence>
    )
}

export default Menu
