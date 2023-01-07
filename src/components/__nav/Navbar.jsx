import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { index2id, toggleScrolling } from '@utils'
import { Styled } from '@components'
import BackButton from './BackBtn'
import Burger from './Burger'
import Menu from './Menu'
import NavLinks from './NavLinks'

const Logo = () => (
    <motion.a
        onClick={() => {
            if (window.scrollY == 0 || typeof window == undefined) {
                location.reload()
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }}
        className="flex-center full z-50 cursor-pointer select-none"
    >
        <span
            className="text-3xl font-medium leading-10 tracking-widest text-white/75 duration-250 ease-tween hover:text-white"
            style={{ textShadow: '4px 4px 1px #8af8' }}
        >
            MIKE JAYNE
        </span>
    </motion.a>
)

const Navbar = ({ activeSection, isHome, isMd }) => {
    const router = useRouter()
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        toggleScrolling(menuOpen)
    }

    const backToHome = () => {
        const prevScrollY = null

        window.scrollTo({ top: 0, behavior: 'smooth' })

        const checkIfAtTop = setInterval(() => {
            var scrollY = window.scrollY
            if (scrollY == prevScrollY) {
                clearInterval(checkIfAtTop)
                router.push('/', '', { scroll: false })
            }
            prevScrollY = scrollY
        }, 50)
    }
    // Components via screen size
    const ActiveComponents = isMd ? [1, 2] : [0, 1, 3]
    const Components = {
        0: (
            <Burger
                ANIM={!isHome ? 'return' : menuOpen ? 'opened' : 'closed'}
                handleBurger={() => (isHome ? toggleMenu() : backToHome())}
            />
        ),
        1: <Logo />,
        2: <NavLinks hideLinks={!isHome} activeSection={activeSection} />,
        3: <span />,
    }
    // Close Menu || @media > 768px
    useEffect(() => {
        if (isMd & menuOpen || !isHome & menuOpen) setMenu(false)
    }, [isMd, isHome, menuOpen])

    return (
        <>
            <motion.nav
                id="navbar"
                className="fixed top-0 left-0 z-30 h-14 w-full bg-nav/50"
                data-menuopen={menuOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="full flex-btw md:pl-[calc(5vw-30px)] md:pr-[calc(2.5vw-20px)]">
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
                <span className="tempered-bg absolute inset-0" />
            </motion.nav>
            {/** Menu **/}
            {isMd ? (
                <BackButton isHome={isHome} backToHome={backToHome} />
            ) : null}
            {/** Menu **/}
            {isMd ? null : <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Navbar
