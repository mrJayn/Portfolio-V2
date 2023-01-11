import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { toggleScrolling } from '@utils'
import BackButton from './BackBtn'
import Burger from './Burger'
import Menu from './Menu'
import NavLinks from './NavLinks'

const Logo = ({ handleLogo }) => (
    <motion.a
        data-logo-text="MIKE JAYNE"
        onClick={() => handleLogo()}
        className="flex-center relative cursor-pointer select-none overflow-hidden whitespace-nowrap text-center  text-28pt tracking-widest text-white/50 duration-500 ease-tween hover:text-white max-md:fixed max-md:left-1/2 max-md:translate-x-[-50%] md:text-28pt lg:text-32pt"
    >
        MIKE JAYNE
    </motion.a>
)

const Navbar = ({ activeSection, isHome, isMd, isLg }) => {
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
    function handleLogo() {
        if (window.scrollY == 0 || typeof window == undefined) {
            location.reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const Components = [
        [
            !isMd,
            <Burger
                key="Burger"
                ANIM={!isHome ? 'return' : menuOpen ? 'opened' : 'closed'}
                handleBurger={() => (isHome ? toggleMenu() : backToHome())}
            />,
        ],
        [true, <Logo key="logo" handleLogo={handleLogo} />],
        [
            isMd,
            <NavLinks
                key="nav-links"
                isHome={isHome}
                isMd={isMd}
                activeSection={activeSection}
            />,
        ],
    ]

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
                <ul className="flex-btw full md:pl-[calc(5vw-30px)] md:pr-[calc(2.5vw-20px)]">
                    {Components.map(([state, component], i) => {
                        return (
                            state && (
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
            {isMd && <BackButton isHome={isHome} backToHome={backToHome} />}
            {!isMd && <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default Navbar
