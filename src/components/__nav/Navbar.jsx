import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { BackBtn, Burger, Menu, MsgBtn, NavLinks } from '@navItems'
import { toggleScrolling } from '@utils'

const Navbar = ({ isHome, isMd, isRouting }) => {
    const router = useRouter()
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        toggleScrolling(menuOpen)
    }

    const backToHome = () => {
        const scrollDiv = document.querySelector('main > div')
        const prevScrollY = null

        scrollDiv.scrollTo({ top: 0, behavior: 'smooth' })

        const checkIfAtTop = setInterval(() => {
            var scrollY = scrollDiv.scrollTop
            if (scrollY == prevScrollY) {
                clearInterval(checkIfAtTop)
                router.push('/', '', { scroll: false })
            }
            prevScrollY = scrollY
        }, 50)
    }

    const Logo = () => (
        <motion.a
            onClick={() => {
                location.reload()
            }}
            className="flex-center full relative  z-50  cursor-pointer select-none text-center text-3xl font-semibold leading-10 tracking-wide text-slate transition-none md:text-4xl"
            style={{ textShadow: '2px 2px 1px #8ad, 2px 2px 3px #fff8' }}
        >
            JYN
        </motion.a>
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
        3: <NavLinks hideLinks={!isHome || isRouting} />,
    }

    // Close Menu if isRouting || @media > 768px
    useEffect(() => {
        if (isMd & menuOpen || !isHome & menuOpen) setMenu(false)
    }, [isMd, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="navbar"
                className="fixed top-0 left-0 z-30 h-14 w-full"
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
                <motion.span
                    className="tempered-bg absolute inset-0"
                    initial={false}
                    animate={
                        isMd & (!isHome || isRouting)
                            ? { scaleX: 1 }
                            : { scaleX: 1 }
                    }
                    transition={{
                        duration: !isHome || isRouting ? 0.25 : 1,
                        delay: !isHome || isRouting ? 0 : 0.25,
                    }}
                />
            </motion.nav>
            {/** Menu **/}
            {isMd ? <BackBtn isHome={isHome} backToHome={backToHome} /> : null}
            {/** Menu **/}
            {isMd ? null : <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Navbar
