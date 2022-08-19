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
        <Link href="/#intro">
            <p
                className="cursor-pointer text-2xl font-medium uppercase text-white hover:text-lightTeal md:text-lg"
                style={{ transition: '0.25s ease-in' }}
            >
                MikeJayne
                <motion.div
                    className="absolute top-0 left-0 bottom-0 right-0 z-10 border-l-4 bg-white"
                    initial={{ scaleX: 1, originX: 1 }}
                    animate={{
                        scaleX: 0,
                        originX: 1,
                        transition: { duration: 0.5, delay: 0.5 },
                    }}
                />
            </p>
        </Link>
    )
}
const NavLinks = () => {
    return (
        <motion.ul
            className="md:flex-right full hidden select-none"
            variants={config.variants.fade_stagger}
        >
            {config.sectionLinks.map((link) => (
                <Link
                    key={`nav-linkTo-${link.title}`}
                    href={link.url}
                    scroll={false}
                >
                    <motion.li
                        className="flex-center styled-link group mx-3 cursor-pointer pt-2 pb-1 text-base tracking-tight text-lightgrey/75 hover:text-white"
                        style={{ transition: 'color 0.25s linear' }}
                        variants={config.variants.fadeY}
                    >
                        {link.title}
                    </motion.li>
                </Link>
            ))}
        </motion.ul>
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
                        className="flex-center md:flex-btw h-12 w-full transform-none bg-charcoal md:h-16 md:px-4 lg:px-16"
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
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default Navbar
