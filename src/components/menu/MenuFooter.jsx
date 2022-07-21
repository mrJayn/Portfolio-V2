import Link from 'next/link'

import { motion } from 'framer-motion'
import data from '@data'
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const parent = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}
const parent_2 = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}
const child = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        x: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const MenuFooter = ({ handleClick }) => {
    return (
        <motion.div variants={parent} className="menu-footer">
            <motion.div
                variants={child}
                className="menu-resume"
                onClick={handleClick}
            >
                <Link href="/resume">
                    <p>Resume</p>
                </Link>
            </motion.div>

            <motion.div variants={parent_2} className="menu-socials">
                <motion.a
                    variants={child}
                    href={data.personal.social.github.url}
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    variants={child}
                    href={data.personal.social.codepen.url}
                >
                    <FaCodepen />
                </motion.a>
                <motion.a
                    variants={child}
                    href={data.personal.social.linkedin.url}
                >
                    <FaLinkedinIn />
                </motion.a>
                <motion.a
                    variants={child}
                    href={data.personal.social.gmail.url}
                >
                    <AiOutlineMail />
                </motion.a>
            </motion.div>
        </motion.div>
    )
}
export default MenuFooter
