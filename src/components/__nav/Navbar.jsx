import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import Burger from './Burger'
import Logo from './Logo'
import Menu from './Menu'
import MessageBtn from './MessageBtn'
import NavLinks from './NavLinks'
import { toggleScrolling } from '@utils'

const Navbar = ({ isHome, isMd, globalControls }) => {
    const router = useRouter()
    const [globOpen, setGlobOpen] = globalControls
    const globalOpen = globOpen !== null
    const [menuOpen, setMenuOpen] = useState(false)

    // Menu Toggle Function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        toggleScrolling(menuOpen)
    }

    // Burger Function
    const handleBurger = () => {
        if (isHome) {
            if (globOpen !== null) {
                setGlobOpen(null)
            } else {
                toggleMenu()
            }
        } else {
            router.push('/', '', { scroll: false })
        }
    }

    // Logo Function
    const handleLogo = () => {
        if (isHome) {
            if (menuOpen) {
                toggleMenu()
                setTimeout(() => {
                    window.scrollTo(0, 0)
                }, 500)
            } else {
                window.scrollTo(0, 0)
            }
        } else {
            router.push('/', '', { scroll: false })
        }
    }

    // Burger Display Mode
    const burgerDisplay = !isHome
        ? 'return'
        : menuOpen || globalOpen
        ? 'opened'
        : 'closed'

    const constLogo = {
        1: (
            <Logo
                logoState={!isMd || isHome}
                logoDisplay={(globOpen !== null) & !isMd ? 'exit' : 'show'}
                handleLogo={handleLogo}
            />
        ),
    }
    // ~ Nav Components ~ @Media min-width: 768px
    const desktop_items = {
        2: <NavLinks isHome={isHome} />,
        ...constLogo,
    }

    // ~ Nav Components ~ @Media max-width: 767px
    const nav_items = {
        0: <Burger display={burgerDisplay} handleBurger={handleBurger} />,
        2: <MessageBtn isHome={isHome} router={router} />,
        ...constLogo,
    }
    // Active Components + Contant Components
    const active_items = isMd ? desktop_items : nav_items
    // Close Menu if [ @media >=768px ]
    useEffect(() => {
        if (isMd & menuOpen || !isHome & menuOpen) setMenuOpen(false)
    }, [isMd, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="nav"
                data-menuopen={menuOpen}
                className="fixed top-0 left-0 z-30 h-[48px] w-full min-w-[320px] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="flex-btw full list-none items-center">
                    <>
                        {Object.keys(active_items).map((i) => {
                            return (
                                <li
                                    key={`nav-item-${i}`}
                                    className="flex-evenly relative z-10 h-[48px] min-w-[48px] md:min-w-[5rem]"
                                    style={{ order: i }}
                                >
                                    {active_items[i]}
                                </li>
                            )
                        })}
                    </>
                </ul>
            </motion.nav>

            {!isMd ? <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> : null}
        </>
    )
}

export default Navbar
