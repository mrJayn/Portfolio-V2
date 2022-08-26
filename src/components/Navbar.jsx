import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { theme } from 'tailwind.config'
import { AnimatePresence, motion } from 'framer-motion'

import { Menu, Burger, SectionLinks } from '@components'
import { config, Variants } from '@config'
import { toggleScrolling } from '@utils'

const NavLogo = ({ menuState }) => {
    const [color, setColor] = useState('#fff')
    const first = color === '#fff'
    setTimeout(() => {
        setColor(theme.colors.charcoal)
    }, 1000)

    const scrollTo = (e) => {
        e.preventDefault()
        document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Link href="/#intro" passHref>
            <a
                className="cursor-pointer text-2xl font-medium uppercase text-white hover:text-lightTeal md:text-lg"
                style={{ transition: '0.25s ease-in' }}
                onClick={scrollTo}
            >
                MikeJayne
                <AnimatePresence>
                    {!menuState && (
                        <motion.div
                            className="absolute top-0 left-0 bottom-0 right-0 z-10"
                            style={{ backgroundColor: color }}
                            initial={{
                                opacity: 1,
                                scaleX: 1,
                                originX: 1,
                            }}
                            animate={{
                                scaleX: 0,
                                opacity: first ? 1 : 0,
                                transition: {
                                    duration: first ? 0.5 : 1.5,
                                    delay: 0.5,
                                },
                            }}
                        />
                    )}
                </AnimatePresence>
            </a>
        </Link>
    )
}

const Navbar = ({ isLoading, isMain }) => {
    const [navState, setNavState] = useState('hidden')
    const [menuState, setMenuState] = useState(false)
    const router = useRouter()
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
                    <motion.div
                        className="flex-center md:flex-btw h-12 w-full transform-none bg-charcoal md:h-16 md:px-4 lg:px-16"
                        initial="hidden"
                        animate={navState}
                        variants={Variants.fade}
                    >
                        <Burger
                            isMain={isMain}
                            state={menuState}
                            onClick={isMain ? handleMenu : handleReturn}
                        />
                        <NavLogo menuState={menuState} />
                        <SectionLinks variants={Variants.fade_stagger} />
                    </motion.div>
                    <Menu isOpen={menuState} handleMenu={handleMenu} />
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default Navbar
