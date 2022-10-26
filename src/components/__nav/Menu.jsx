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
        <span className="text-base capitalize tracking-wide text-grey-60/90 duration-250 ease-in hover:text-white">
            {txt}
        </span>
    )

    return (
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.menu
                    id="menu"
                    className="fixed left-0 top-12 bottom-0 z-30 w-screen bg-grey-10"
                    initial="hidden"
                    animate="enter"
                    exit="hidden"
                    variants={menuVariants.backgroundClip}
                >
                    <div className="absoluteFull flex-col-btw overflow-hidden px-6 py-3 landscape:flex-row landscape:pt-0">
                        <motion.ul
                            className="full relative landscape:grid"
                            variants={menuVariants.LinkWrap}
                        >
                            {sections.map(([section, target], i) => {
                                return (
                                    <motion.li
                                        key={`menu-links-${i}`}
                                        className="my-3 cursor-pointer border-[1px] border-b-grey-60/25 px-1 py-[1vh] landscape:my-1"
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
                            className="grid w-full grid-cols-4 py-10 landscape:h-full landscape:grid-cols-1 landscape:py-0"
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
