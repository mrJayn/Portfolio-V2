import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '@hooks'
import { pushPage } from '@utils'
import Burger from './Burger'
import Logo from './Logo'
import Menu from './Menu'
import NavLinks from './NavLinks'

const Navbar = ({ isHome }) => {
    const isLg = useMediaQuery(1024)
    const [menu, setMenu] = useState(false)

    const toggleMenu = useCallback(
        (open = !menu) => {
            let _logo = document.getElementById('logo'),
                _body = document.body

            setMenu(open)
            _body.style.overflowY = open ? 'hidden' : 'auto'
            _logo.style.pointerEvents = open ? 'none' : 'auto'
        },
        [menu]
    )

    useEffect(() => {
        if (menu && (isLg || !isHome)) toggleMenu(false)
    }, [isLg, isHome, menu, toggleMenu])

    return (
        <nav
            id="navbar"
            className={`fixed inset-x-0 top-0 z-[100] h-16 bg-white/80 after:absolute after:inset-0 after:-z-10 after:bg-tempered after:backdrop-blur-sm after:content-['']`}
        >
            <div className="full flex-center z-10 mx-auto max-w-[1440px] lg:justify-start">
                <Logo />
                <Burger
                    anim={!isHome ? 'back' : menu ? 'exit' : 'burg'}
                    onClick={() => (isHome ? toggleMenu() : pushPage('/'))}
                />
                <AnimatePresence>
                    {isHome && <NavLinks key="nav-section-links" />}
                    {menu && <Menu key="menu" toggleMenu={toggleMenu} />}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
