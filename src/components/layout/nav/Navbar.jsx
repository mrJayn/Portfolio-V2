import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFileEarmarkPerson } from 'react-icons/bs'

import { toggleScrolling } from '@utils'
import { nav_vars } from '@variants'
import { Menu, Burger } from '@components'
import data from '@data'
import { useRouter } from 'next/router'

const NavLogo = ({ largeScreen }) => {
    return (
        <motion.div
            className="nav-logo"
            variants={nav_vars.logo}
            custom={largeScreen}
        >
            <Link href="/#intro">
                <p>MikeJayne</p>
            </Link>
        </motion.div>
    )
}
const NavLinks = () => {
    return (
        <motion.div className="nav-links" variants={nav_vars.child}>
            <motion.ul variants={nav_vars.links_ul}>
                {data.sectionLinks.map((link) => (
                    <motion.li
                        key={`nav-linkTo-${link.title}`}
                        variants={nav_vars.links_li}
                    >
                        <Link href={link.url} scroll={false}>
                            {link.title}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

const ResumeBtn = ({ largeScreen }) => {
    return (
        <motion.div
            className="nav-btns"
            variants={nav_vars.child}
            custom={largeScreen}
        >
            <div className="resumeBtn">
                <a
                    href="/assets/misc/resume2022.jpg"
                    alt="Resume of Michael Jayne"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Resume</p>
                    <div>
                        <BsFileEarmarkPerson size={32} />
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

const Navbar = ({ isLoading, isMain }) => {
    const [navState, setNavState] = useState('hidden')
    const [menuState, setMenuState] = useState(false)
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
        setTimeout(() => {
            router.push('/')
        }, 100)
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
                    {/** Menus **/}
                    <Menu state={menuState} handleClick={handleBurger} />

                    {/** NAV **/}
                    <motion.div
                        className="nav-content"
                        initial={false}
                        animate={navState}
                        variants={nav_vars.parent}
                        custom={largeScreen}
                    >
                        {/** Hamburger **/}
                        <Burger
                            isMain={isMain}
                            state={menuState}
                            variants={nav_vars.child}
                            onClick={isMain ? handleBurger : handleReturn}
                        />

                        {/** nav-Logo **/}
                        <NavLogo largeScreen={largeScreen} />

                        {/** Nav-Links **/}
                        <NavLinks />

                        {/** Resume Buttons **/}
                        <ResumeBtn largeScreen={largeScreen} />
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default Navbar
