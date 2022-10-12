import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Social_Icons } from '@components'
import { menuVariants } from '@motion'
import { sections } from '@config'

const Menu = ({ isOpen, toggleMenu }) => {
    const handleLink = (section, target) => {
        if (section == 'my resume') {
            window.open(target, '_blank')
        } else {
            document.querySelector(`#${section}`).scrollIntoView({
                behavior: 'smooth',
                block: target,
            })
        }
        toggleMenu()
    }
    const StyledText = ({ txt }) => (
        <span className="full text-[16px] capitalize tracking-wide text-grey-60/90 duration-250 ease-in hover:text-white">
            {txt}
        </span>
    )

    return (
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                    id="menu"
                    className="fixed left-0 top-12 bottom-0 w-screen bg-grey-60 dark:bg-black"
                    initial="hidden"
                    animate="enter"
                    exit="hidden"
                    variants={menuVariants.backgroundClip}
                >
                    <div className="absoluteFull flex-col-btw overflow-hidden px-6 py-3 landscape:flex-row">
                        <motion.ul
                            className="full relative"
                            variants={menuVariants.LinkWrap}
                        >
                            {sections.map(([section, target], i) => {
                                return (
                                    <motion.li
                                        key={`menu-links-${i}`}
                                        className="my-[8px] h-[26px] cursor-pointer border-[1px] border-b-grey-60/25"
                                        variants={menuVariants.Links}
                                        custom={i + 1}
                                        onClick={() =>
                                            handleLink(section, target)
                                        }
                                    >
                                        <StyledText txt={section} />
                                    </motion.li>
                                )
                            })}
                        </motion.ul>
                        <motion.div
                            className="full grid grid-cols-4 px-2 landscape:grid-cols-1"
                            variants={menuVariants.IconWrap}
                        >
                            <Social_Icons
                                size={50}
                                variants={menuVariants.Icons}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default Menu
