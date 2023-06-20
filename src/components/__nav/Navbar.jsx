import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '@hooks'
import Burger from './Burger'
//import Logo from './Logo'
import Menu from './Menu'
import NavLinks from './NavLinks'
import BackButton from './BackButton'

const Navbar = ({ isHome }) => {
    const isLg = useMediaQuery(1024)
    const [menu, setMenu] = useState(false)

    const toggleMenu = useCallback(
        (open = !menu) => {
            setMenu(open)
            document.body.style.overflowY = open ? 'hidden' : 'auto'
        },
        [menu]
    )

    useEffect(() => {
        if (menu && (isLg || !isHome)) toggleMenu(false)
    }, [isLg, isHome, menu, toggleMenu])

    return (
        <nav id="navbar" className={`fixed inset-x-0 top-0 z-[99] h-16`}>
            <div className="full flex-center z-10 mx-auto max-w-[1440px] lg:justify-start">
                {/* <Logo /> */}
                <AnimatePresence mode="wait">
                    {!isHome || (!isHome && isLg) ? (
                        <BackButton key="back-btn" />
                    ) : (
                        <Burger anim={menu ? 'x' : 'burg'} onClick={() => toggleMenu()} />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isHome && <NavLinks key="links" />}
                    {menu && <Menu key="menu" toggleMenu={toggleMenu} />}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
