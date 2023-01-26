import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

import { toggleScrolling } from '@utils'
import { Burger, Menu, NavItems } from '@navItems'
import { useMediaQuery } from '@hooks'

const Navbar = ({ activeSection, isHome }) => {
    const isLg = useMediaQuery(1024)
    const router = useRouter()
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        toggleScrolling(menuOpen)
    }

    const backToHome = () => {
        const prevScrollY = null
        const goHome = () => router.push('/', '', { scroll: false })

        window.scrollTo({ top: 0, behavior: 'smooth' })

        const checkIfAtTop = setInterval(() => {
            var scrollY = window.scrollY
            if (scrollY == prevScrollY) {
                clearInterval(checkIfAtTop)
                goHome()
            }
            prevScrollY = scrollY
        }, 50)
    }

    const handleLogo = () => {
        if (window.scrollY == 0 || typeof window == undefined) {
            router.reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const Components = [
        {
            display: !isLg,
            component: (
                <Burger
                    ANIM={!isHome ? 'return' : menuOpen ? 'opened' : 'closed'}
                    handleBurger={() => (isHome ? toggleMenu() : backToHome())}
                />
            ),
        },
        {
            display: 'always',
            component: <NavItems.Logo key="logo" onClick={handleLogo} />,
        },
        {
            display: isLg,
            component: (
                <NavItems.NavLinks
                    key="nav-links"
                    isHome={isHome}
                    activeSection={activeSection}
                />
            ),
        },
    ]

    useEffect(() => {
        if (isLg & menuOpen || !isHome & menuOpen) setMenu(false)
    }, [isLg, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="navbar"
                className="fixed top-0 left-0 z-30 h-14 w-full bg-nav/50"
                data-menuopen={menuOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="flex-btw full md:pl-[calc(5vw-30px)] md:pr-[calc(2.5vw-20px)]">
                    {Components.map(({ display, component }, i) => {
                        return (
                            display && (
                                <li
                                    key={`nav-item-${i}`}
                                    className="flex-center relative z-10 h-full"
                                >
                                    {component}
                                </li>
                            )
                        )
                    })}
                </ul>
                <span className="tempered-bg absolute inset-0" />
            </motion.nav>
            <AnimatePresence>
                {isLg
                    ? !isHome && (
                          <NavItems.BackBtn
                              key="nav-back-btn"
                              backToHome={backToHome}
                          />
                      )
                    : menuOpen && (
                          <Menu key="nav-menu" toggleMenu={toggleMenu} />
                      )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
