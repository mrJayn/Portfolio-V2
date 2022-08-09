import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'

import { Menu, Burger } from '@components'
import { toggleScrolling } from '@utils'
import { config } from '@config'
const navVariants = config.variants.nav

import { BsFileEarmarkPerson } from 'react-icons/bs'

const NavLogo = ({ largeScreen }) => {
    return (
        <motion.div
            className="nav-logo"
            variants={navVariants.navLogo}
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
        <motion.div className="nav-links" variants={config.variants.fade}>
            <motion.ul variants={navVariants.navLinks}>
                {config.sectionLinks.map((link) => (
                    <motion.li
                        key={`nav-linkTo-${link.title}`}
                        variants={config.variants.fadeY}
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

const ResumeBtn = ({ isMd }) => {
    return (
        <motion.div
            className="nav-btns"
            variants={config.variants.fade}
            transition={{ delay: isMd ? 1.5 : 0 }}
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
    const [isMd, setIsMd] = useState()
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
            setIsMd(ref.current.clientWidth > 767)
            setNavState('enter')
        }
    }, [isLoading])
    return (
        <AnimatePresence exitBeforeEnter>
            {!isLoading && (
                <motion.nav className="nav" id="nav" ref={ref}>
                    {/** Menus **/}
                    <Menu state={menuState} handleClick={handleBurger} />

                    {/** NAV **/}
                    <motion.div
                        className="nav-content"
                        initial="hidden"
                        animate={navState}
                        variants={config.variants.fade}
                    >
                        {/** Hamburger **/}
                        <Burger
                            isMain={isMain}
                            state={menuState}
                            onClick={isMain ? handleBurger : handleReturn}
                        />

                        {/** nav-Logo **/}
                        <NavLogo largeScreen={isMd} />

                        {/** Nav-Links **/}
                        <NavLinks />

                        {/** Resume Buttons **/}
                        <ResumeBtn isMd={isMd} />
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default Navbar
