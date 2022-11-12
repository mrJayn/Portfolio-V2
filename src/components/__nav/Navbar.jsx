import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, useScroll } from 'framer-motion'

import { BackBtn, Burger, Logo, Menu, MsgBtn, NavLinks } from '@navItems'
import { useIsRouting } from '@hooks'
import { toggleScrolling } from '@utils'
import { navVariants } from '@motion'

const Navbar = ({ isHome, isMd, scrollRef, globalControls }) => {
    const router = useRouter()
    const isRouting = useIsRouting(true)
    const [globOpen, setGlobOpen] = globalControls
    const globalOpen = globOpen !== null
    const [menuOpen, setMenuOpen] = useState(false)
    const { scrollY } = useScroll({ container: scrollRef })

    // Menu Toggle Function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        toggleScrolling(menuOpen)
    }

    // Return from SectionPage
    const returnHome = () => {
        document
            .querySelector('main > div')
            .scrollTo({ top: 0, behavior: 'smooth' })

        var position = null
        const checkIfScrollIsStatic = setInterval(() => {
            if (position == scrollY.get()) {
                clearInterval(checkIfScrollIsStatic)
                router.back()
            }
            position = scrollY.get()
        }, 50)
    }

    const handleBurger = () => (isHome ? toggleMenu() : returnHome())
    const handleLogo = () => {
        if (isHome) {
            if (menuOpen) toggleMenu()
            window.scrollTo({ top: 0, behavior: isMd ? 'auto' : 'smooth' })
        } else {
            returnHome()
        }
    }

    // ~ Components ~ @Media max-width: 767px
    const Components = {
        0: (
            <Burger
                ANIM={
                    !isHome
                        ? 'return'
                        : menuOpen || globalOpen
                        ? 'opened'
                        : 'closed'
                }
                handleBurger={handleBurger}
            />
        ),
        1: <Logo handleLogo={handleLogo} />,
        2: <MsgBtn isHome={isHome} router={router} />,
        3: (
            <NavLinks
                state={isHome & !isRouting}
                variants={navVariants.NavLinks}
            />
        ),
    }

    // Select Keys to display
    const ActiveKeys = isMd ? [1, 3] : [0, 1, 2]

    // Close Menu if isRouting || @media > 768px
    useEffect(() => {
        // if (isMd & menuOpen || !isHome & menuOpen) setMenuOpen(false)
        if (isMd & menuOpen || !isHome & menuOpen) setMenuOpen(false)
    }, [isMd, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="nav"
                data-menuopen={menuOpen}
                className="fixed top-0 left-0 z-30 h-12 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="flex-btw full md:pl-[calc(5vw-30px)] md:pr-[calc(2.5vw-20px)]">
                    <>
                        {ActiveKeys.map((key) => {
                            return (
                                <li
                                    key={`nav-item-${key}`}
                                    className="flex-center relative z-10 h-[48px] min-w-[48px]"
                                    style={{ order: key }}
                                >
                                    {Components[key]}
                                </li>
                            )
                        })}
                    </>
                </ul>
            </motion.nav>
            {/** Menu **/}
            {isMd ? <BackBtn isHome={isHome} returnHome={returnHome} /> : null}
            {/** Menu **/}
            {isMd ? null : <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Navbar
