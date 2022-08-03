import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import data from '@data'

const MenuContent = ({ menuState, handleClick, parent, child }) => {
    const dy = 10
    return (
        <motion.div
            className="menu-content"
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
            <motion.div
                className="menu-footer"
                variants={parent}
                custom={false}
            >
                {/** FOOTER RESUME **/}
                <motion.div
                    className="menu-resume"
                    variants={child}
                    custom={dy}
                    onClick={handleClick}
                >
                    <Link href="/resume">
                        <p>Resume</p>
                    </Link>
                </motion.div>
                {/** FOOTER LINKS **/}
                <motion.a
                    href={data.personal.social.github.url}
                    variants={child}
                    custom={dy}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href={data.personal.social.codepen.url}
                    variants={child}
                    custom={dy}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaCodepen />
                </motion.a>
                <motion.a
                    href={data.personal.social.linkedin.url}
                    variants={child}
                    custom={dy}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedinIn />
                </motion.a>
                <motion.a
                    href={data.personal.social.gmail.url}
                    variants={child}
                    custom={dy}
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineMail />
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default MenuContent
