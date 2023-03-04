import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import { useMediaQuery } from '@hooks'
import { returnHome } from '@utils'
import { Styled } from '@components'
import Burger from './Burger'
import Menu from './Menu'

const LOGO = ({ centered, handleLogo }) => (
    <motion.a
        id="logo"
        className="flex-center relative z-10 min-w-max cursor-pointer select-none overflow-hidden whitespace-nowrap text-center text-28pt font-thin tracking-2xl text-white/60 transition-colors duration-500 ease-tween after:content-['MIKE_JAYNE'] hover:text-white/80"
        initial={false}
        animate={{ x: centered ? 'calc(50vw - 116px)' : '0px' }}
        transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
        onClick={handleLogo}
    >
        MIKE JAYNE
    </motion.a>
)

const NavLinks = ({ activeSection }) => (
    <motion.ul
        className="flex-center absolute right-0 top-0 z-10 h-full"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
            hidden: { transition: { staggerChildren: 0.075 } },
            show: {
                transition: {
                    staggerChildren: 0.075,
                    staggerDirection: -1,
                    delayChildren: 0.5,
                },
            },
        }}
    >
        <Styled.SectionLinks
            activeSection={activeSection}
            className="flex-center relative mx-4 h-3/4 bg-clip-text text-[0.9em] leading-none transition-colors delay-100 duration-250 ease-in hover:text-white"
            variants={{ hidden: { y: -50 }, show: { y: 0 } }}
            transition={{ duration: 0.5 }}
        />
    </motion.ul>
)

const Navbar = ({ activeSection, isHome }) => {
    const router = useRouter()
    const isLg = useMediaQuery(1024)
    const [menuOpen, setMenu] = useState(false)
    const handleLogo = () => {
        if (window.scrollY == 0 || typeof window == undefined) {
            router.reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    const backToHome = () => returnHome(router)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        const overflowStyle = menuOpen ? 'auto' : 'hidden'
        document.querySelector('body').style.overflow = overflowStyle
    }

    useEffect(() => {
        if (isLg & menuOpen || !isHome & menuOpen) setMenu(false)
    }, [isLg, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="navbar"
                className="tempered-bg fixed top-0 left-0 z-30 flex h-14 w-screen items-center bg-nav/50 px-4"
                data-menuopen={menuOpen}
                initial={{ opacity: 0, y: -56 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    when: 'beforeChildren',
                    duration: 1,
                    ease: 'easeInOut',
                    delayChildren: 0.25,
                }}
            >
                <LOGO centered={!isLg || !isHome} handleLogo={handleLogo} />
                <AnimatePresence mode="wait">
                    {isLg ? (
                        isHome && (
                            <NavLinks
                                key="nav-links"
                                activeSection={activeSection}
                            />
                        )
                    ) : (
                        <Burger
                            key="nav-burger"
                            ANIM={
                                !isHome
                                    ? 'return'
                                    : menuOpen
                                    ? 'opened'
                                    : 'closed'
                            }
                            handleBurger={() =>
                                isHome ? toggleMenu() : backToHome()
                            }
                        />
                    )}
                </AnimatePresence>
            </motion.nav>
            <AnimatePresence>
                {isLg && !isHome && (
                    <Styled.BackButton
                        key="nav-back-btn"
                        backToHome={backToHome}
                    />
                )}
                {menuOpen && <Menu key="nav-menu" toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </>
    )
}

export default Navbar
