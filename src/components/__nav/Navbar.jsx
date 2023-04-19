import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '@hooks'
import { pushPage } from '@utils'
import { BackBtnVariants } from '@motion'
import Burger from './Burger'
import Logo from './Logo'
import Menu from './Menu'
import NavLinks from './NavLinks'

const BackButton = () => (
    <motion.button
        className="group absolute top-20 left-4 flex aspect-[1/1] h-full items-center"
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        onClick={(e) => {
            e.currentTarget.style.pointerEvents = 'none'
            e.currentTarget.querySelector('div').style.color = '#6199ff'
            pushPage('/')
        }}
    >
        <div className=" pointer-events-none absolute -inset-1 rounded-full text-red opacity-0 shadow-[inset_0_0_3px_2px] transition-opacity duration-250 ease-in group-hover:opacity-100" />
        {[0, 50, -50].map((deg, i) => (
            <motion.span
                key={`line${i}`}
                className="absolute left-1/4 h-[4px] rounded-r-full bg-black"
                style={{
                    width: `${[55, 35, 35][i]}%`,
                    originX: 0,
                    originY: [1, -0.5, 1.5][i],
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={BackBtnVariants}
                custom={deg}
            />
        ))}
    </motion.button>
)

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
            <motion.nav
                id="navbar"
                className={`tempered-bg fixed top-0 left-0 z-[99] h-16 w-screen transition-colors ease-in ${
                    menuOpen
                        ? 'bg-nav duration-[350ms]'
                        : 'bg-nav/60 delay-[350ms] duration-[350ms]'
                }`}
            >
                <div className="flex-center absolute inset-0 z-10 mx-auto max-w-7xl lg:justify-start">
                    <Logo isHome={isHome} isLg={isLg} menuOpen={menuOpen} />

                    <AnimatePresence>
                        {isHome && (
                            <NavLinks
                                key="nav-section-links"
                                loc="nav-links"
                                wrapClassName="flex-center absolute right-4 top-0 z-10 h-full max-lg:hidden"
                                className="flex-center relative mx-4 h-3/4 cursor-pointer select-none whitespace-nowrap font-medium capitalize leading-1 text-grey-35"
                                custom={-75}
                            />
                        )}
                        {!isLg && (
                            <Burger
                                key="nav-burger"
                                ANIM={
                                    !isHome
                                        ? 'return'
                                        : menuOpen
                                        ? 'exit'
                                        : 'default'
                                }
                                handleBurger={() =>
                                    isHome ? toggleMenu() : pushPage('/')
                                }
                            />
                        )}
                        {!isHome && isLg && <BackButton key="back-btn" />}
                    </AnimatePresence>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && <Menu key="nav-menu" toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </>
    )
}

export default Navbar
