import React, { useState, useEffect, useRef } from 'react'
import { FaFileSignature } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { myVariants, toggleScrolling } from '@utils'
import { Menu, Burger } from '@components'
import data from '@data'

const [parent, child_logo, child_link, parent_links, child] = [
    myVariants.nav.parent,
    myVariants.nav.child_logo,
    myVariants.nav.child_links,
    myVariants.nav.parent_links,
    myVariants.nav.child,
]
const Navbar = ({ isLoading, basePath }) => {
    const [navState, setNavState] = useState('hidden')
    const [menuState, setMenuState] = useState(false)
    const [viewerDelay, setViewerDelay] = useState()
    const ref = useRef()

    // open/close Menu
    function handleMenu() {
        setMenuState(!menuState)
        toggleScrolling(menuState)
    }
    // setState/Hide Menu at Medium(768px) Breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767 && menuState) {
                setMenuState(!menuState)
                toggleScrolling({ menuState })
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [menuState])

    // initialize animations after Loader
    useEffect(() => {
        if (!isLoading) {
            setViewerDelay(ref.current.clientWidth < 768)
            setNavState('show')
        }
    }, [isLoading, basePath])

    return (
        <div className="nav" id="nav" ref={ref}>
            <motion.div
                className="nav-content"
                data-state={navState}
                initial={false}
                animate={navState}
                variants={parent}
            >
                {/** Hamburger **/}
                <Burger
                    isOpen={menuState}
                    onClick={handleMenu}
                    variants={child}
                />

                {/** nav-Logo **/}
                <motion.div className="nav-logo" variants={child_logo}>
                    <Link href="/#intro">
                        <p>MikeJayne</p>
                    </Link>
                </motion.div>

                {/** Nav-Links **/}
                <motion.div className="nav-links" variants={child}>
                    <motion.ul variants={parent_links}>
                        {data.sectionLinks.map((link) => (
                            <motion.li
                                key={`nav-link-${link.item}`}
                                variants={child_link}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/** Resume Buttons **/}
                <motion.div className="nav-btns" variants={child}>
                    {basePath && ResumeBtn}
                </motion.div>
            </motion.div>

            {/** Menu **/}
            <Menu state={menuState} handleClick={handleMenu} />
        </div>
    )
}

const ResumeBtn = (
    <>
        <div className="resume-btn-lg">
            <Link href="/resume">
                <p>Resume</p>
            </Link>
        </div>
        <div className="resume-btn-sm" data-label="Resume">
            <Link href="/resume">
                <a>
                    <FaFileSignature className="symbol" />
                </a>
            </Link>
        </div>
    </>
)

export default Navbar
