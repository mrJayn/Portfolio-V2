import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { BackBtn, Burger, Menu, MsgBtn, NavLinks } from '@navItems'
import { awaitScrollToTop, toggleScrolling } from '@utils'

const Logo = () => (
    <motion.a
        href="/"
        className="flex-center full relative  z-50  cursor-pointer select-none text-center text-3xl font-semibold leading-10 tracking-wide text-slate transition-none md:text-4xl"
        style={{ textShadow: '2px 2px 1px #8ad, 2px 2px 3px #fff8' }}
    >
        JYN
    </motion.a>
)

const Navbar = ({ isHome, isMd }) => {
    const router = useRouter()
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        toggleScrolling(menuOpen)
    }

    const backToHome = () =>
        awaitScrollToTop('main > div', () =>
            router.push('/', '', { scroll: false })
        )

    // Components via screen size
    const ActiveComponents = isMd ? [1, 3] : [0, 1, 2]
    const Components = {
        0: (
            <Burger
                ANIM={!isHome ? 'return' : menuOpen ? 'opened' : 'closed'}
                handleBurger={() => (isHome ? toggleMenu() : backToHome())}
            />
        ),
        1: <Logo />,
        2: <MsgBtn isHome={isHome} router={router} />,
        3: <NavLinks isHome={isHome} />,
    }

    // Close Menu if isRouting || @media > 768px
    useEffect(() => {
        if (isMd & menuOpen || !isHome & menuOpen) setMenu(false)
    }, [isMd, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="navbar"
                className="tempered-bg fixed top-0 left-0 z-30 h-14 w-full"
                data-menuopen={menuOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="flex-btw full md:pl-[calc(5vw-30px)] md:pr-[calc(2.5vw-20px)]">
                    <>
                        {ActiveComponents.map((key) => {
                            return (
                                <li
                                    key={`nav-item-${key}`}
                                    className="flex-center relative z-10 h-14 min-w-[48px]"
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
            {isMd ? <BackBtn isHome={isHome} backToHome={backToHome} /> : null}
            {/** Menu **/}
            {isMd ? null : <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Navbar
