import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '@hooks'
import { pushPage } from '@utils'
import { Styled } from '@components'
import Burger from './Burger'
import Logo from './Logo'
import Menu from './Menu'
import NavLinks from './NavLinks'

const Navbar = ({ isHome }) => {
    const isLg = useMediaQuery(1024)
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = useCallback(
        (open = !menuOpen) => {
            let _logo = document.getElementById('logo'),
                _body = document.body

            setMenu(open)
            _body.style.overflowY = open ? 'hidden' : 'auto'
            _logo.style.pointerEvents = open ? 'none' : 'auto'
        },
        [menuOpen]
    )

    useEffect(() => {
        if (menuOpen && (isLg || !isHome)) toggleMenu(false)
    }, [isLg, isHome, menuOpen, toggleMenu])

    return (
        <>
            <nav
                id="navbar"
                className={`tempered-bg fixed -inset-x-1 top-0 z-[99] h-16 transition-colors ease-in ${
                    menuOpen
                        ? 'bg-nav duration-[350ms]'
                        : 'bg-nav/60 delay-[350ms] duration-[350ms]'
                }`}
            >
                <div className="flex-center absolute inset-0 z-10 mx-auto max-w-screen-xl lg:justify-start">
                    <Logo isHome={isHome} menuOpen={menuOpen} />
                    <Burger
                        key="nav-burger"
                        ANIM={
                            !isHome ? 'return' : menuOpen ? 'exit' : 'default'
                        }
                        onClick={() => (isHome ? toggleMenu() : pushPage('/'))}
                    />
                    <AnimatePresence>
                        {isHome && <NavLinks key="nav-section-links" />}
                        {!isHome && isLg && (
                            <Styled.BackButton key="back-btn" />
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && <Menu key="nav-menu" toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </>
    )
}

export default Navbar
