import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaFileSignature } from 'react-icons/fa'

import { myVariants, toggleScrolling } from '@utils'
import { Menu, Burger } from '@components'
import data from '@data'

const [parent, child, logo, links, links_child] = [
    myVariants.nav.parent,
    myVariants.nav.child,
    myVariants.nav.logo,
    myVariants.nav.links,
    myVariants.nav.links_child,
]

const Navbar = ({ isLoading, isMain }) => {
    const [navState, setNavState] = useState('hidden')
    const [menuState, setMenuState] = useState(false)
    const [largeScreen, setLargeScreen] = useState()
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
            setLargeScreen(ref.current.clientWidth > 767)
            setNavState('show')
        }
    }, [isLoading])

    return (
        <AnimatePresence exitBeforeEnter>
            {!isLoading && (
                <motion.nav
                    className="nav"
                    id="nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    ref={ref}
                >
                    {/** Menu **/}
                    <Menu state={menuState} handleClick={handleMenu} />
                    {/** NAV **/}
                    <motion.div
                        className="nav-content"
                        initial={false}
                        animate={navState}
                        variants={parent}
                        custom={largeScreen}
                    >
                        {/** Hamburger **/}
                        <Burger
                            state={menuState}
                            variants={child}
                            onClick={handleMenu}
                        />

                        {/** nav-Logo **/}
                        <motion.div
                            className="nav-logo"
                            variants={logo}
                            custom={largeScreen}
                        >
                            <Link href="/#intro">
                                <p>MikeJayne</p>
                            </Link>
                        </motion.div>

                        {/** Nav-Links **/}
                        <motion.div className="nav-links" variants={child}>
                            <motion.ul variants={links}>
                                {data.sectionLinks.map((link) => (
                                    <motion.li
                                        key={`nav-link-${link.item}`}
                                        variants={links_child}
                                    >
                                        <Link href={link.url}>
                                            {link.title}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/** Resume Buttons **/}
                        <motion.div
                            className="nav-btns"
                            variants={child}
                            custom={largeScreen}
                        >
                            {isMain && ResumeBtn}
                        </motion.div>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
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
