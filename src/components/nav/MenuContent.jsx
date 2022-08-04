import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import data from '@data'
import { useEffect, useState } from 'react'
import { useScreenOrientation } from '@hooks'

const socials = [
    [FaGithub, data.personal.social.github.url],
    [FaCodepen, data.personal.social.codepen.url],
    [FaLinkedinIn, data.personal.social.linkedin.url],
    [AiOutlineMail, data.personal.email],
]

const MenuContent = ({ menuState, handleClick, parent, child }) => {
    const dy = 10
    const orientation = useScreenOrientation()

    return (
        <motion.div
            className="menu-content"
            data-orientation={orientation}
            initial={false}
            animate={menuState}
        >
            {/** LINKS **/}
            <motion.ul
                className="menu-sections"
                variants={parent}
                custom={true}
            >
                {data.sectionLinks.map((link) => (
                    <motion.li
                        key={`menu-linkTo-${link.title}`}
                        onClick={handleClick}
                        variants={child}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={link.url}>{link.title}</Link>
                    </motion.li>
                ))}
            </motion.ul>
            {/** FOOTER  **/}
            <motion.div variants={parent} custom={false}>
                {/** FOOTER LINKS **/}
                {socials.map(([icon, url], i) => {
                    const Icon = icon
                    return (
                        <motion.a
                            key={`social-${i}`}
                            href={
                                i !== socials.length - 1
                                    ? url
                                    : `mailto:${data.personal.email}`
                            }
                            variants={child}
                            custom={dy}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size={24} />
                        </motion.a>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default MenuContent
