import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

import { Menu, Burger } from '@components'
import { config } from '@config'
import { useMediaQuery } from '@hooks'
import { toggleScrolling } from '@utils'

import { BsFileEarmarkPerson } from 'react-icons/bs'

const NavLogo = ({ isMd }) => {
    return (
        <motion.div
            className="z-10"
            initial="hidden"
            animate="enter"
            variants={config.variants.nav.logo}
            custom={isMd ? 2 : 1.25}
        >
            <Link href="/#intro">
                <p
                    className=" cursor-pointer text-2xl font-medium uppercase text-white hover:text-lightTeal md:text-lg"
                    style={{ transition: '0.25s ease-in' }}
                >
                    MikeJayne
                </p>
            </Link>
        </motion.div>
    )
}
const NavLinks = () => {
    return (
        <motion.div
            className="md:flex-center absolute left-0 bottom-3 hidden w-full"
            variants={config.variants.fade}
        >
            <motion.ul
                className="flex-btw"
                variants={config.variants.nav.links}
                custom={-100}
            >
                {config.sectionLinks.map((link) => (
                    <motion.li
                        key={`nav-linkTo-${link.title}`}
                        className="styled-link mx-5 w-full text-base tracking-tight text-lightgrey hover:text-white"
                        style={{ transition: 'color 0.25s linear' }}
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
            id="nav_resumeBtn"
            className="flex-center  absolute right-0 top-0 z-10 h-full px-4 md:relative"
            variants={config.variants.fade}
            transition={{ delay: isMd ? 2 : 0 }}
        >
            <div className="md:flex-center cursor-pointer">
                <a
                    href="/assets/misc/resume2022.jpg"
                    alt="Resume of Michael Jayne"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="hidden text-lg font-semibold uppercase text-white hover:text-lightTeal md:block">
                        Resume
                    </p>
                    <div className="text-teal hover:text-neon md:hidden">
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
    const isMd = useMediaQuery()
    const ref = useRef()

    // open/close Menu
    const handleMenu = () => {
        setMenuState(!menuState)
        toggleScrolling(menuState)
    }
    // Extra time for intermediate Page
    const handleReturn = (e) => {
        e.preventDefault()
        setTimeout(() => {
            router.push('/')
        }, 100)
    }

    // Close Menu if VP isMd
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
            setNavState('enter')
        }
    }, [isLoading])

    return (
        <AnimatePresence exitBeforeEnter>
            {!isLoading && (
                <motion.nav className=" fixed z-40 w-full" id="nav" ref={ref}>
                    <Menu isOpen={menuState} handleMenu={handleMenu} />
                    <motion.div
                        className="flex-center md:flex-btw h-12 w-full transform-none bg-charcoal md:px-4 lg:px-16"
                        initial="hidden"
                        animate={navState}
                        variants={config.variants.fade}
                    >
                        <Burger
                            isMain={isMain}
                            state={menuState}
                            onClick={isMain ? handleMenu : handleReturn}
                        />
                        <NavLogo isMd={isMd} />
                        <NavLinks />
                        <ResumeBtn isMd={isMd} />
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default Navbar
