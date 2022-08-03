import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaFileSignature } from 'react-icons/fa'

import { toggleScrolling } from '@utils'
import { nav_vars, resumeVars } from '@variants'
import { Menu, Burger, ResumeActions } from '@components'
import data from '@data'
import { useRouter } from 'next/router'

const [parent, child, logo, links_ul, links_li] = [
    nav_vars.parent,
    nav_vars.child,
    nav_vars.logo,
    nav_vars.links_ul,
    nav_vars.links_li,
]

const Navbar = ({ isLoading, isMain }) => {
    const [navState, setNavState] = useState('hidden')
    const [menuState, setMenuState] = useState(false)
    const [resControls, setResControls] = useState(false)
    const router = useRouter()
    const [largeScreen, setLargeScreen] = useState()
    const ref = useRef()
    // open/close Menu
    const handleBurger = () => {
        setMenuState(!menuState)
        toggleScrolling(menuState)
    }
    const handleReturn = (e) => {
        e.preventDefault()
        setResControls(false)

        setTimeout(() => {
            router.push('/')
        }, 100)
    }
    // ResumeBtn
    function handleResumeBtn() {
        if (menuState) {
            handleBurger()
        }
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
    console.log(resControls)
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
                    {/** Menus **/}
                    <Menu state={menuState} handleClick={handleBurger} />
                    <ResumeActions.ResumeControls state={resControls} />

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
                            isMain={isMain}
                            state={menuState}
                            variants={child}
                            onClick={isMain ? handleBurger : handleReturn}
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
                            <motion.ul variants={links_ul}>
                                {data.sectionLinks.map((link) => (
                                    <motion.li
                                        key={`nav-linkTo-${link.title}`}
                                        variants={links_li}
                                    >
                                        <Link href={link.url} scroll={false}>
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
                            onClick={handleResumeBtn}
                        >
                            <AnimatePresence exitBeforeEnter>
                                {isMain ? (
                                    <ResumeBtn />
                                ) : (
                                    <ResumeActions.ControlsBtn
                                        isOpen={resControls}
                                        onClick={() =>
                                            setResControls(!resControls)
                                        }
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

const ResumeBtn = () => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={resumeVars.btnWrap}
        >
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
        </motion.div>
    )
}

export default Navbar
