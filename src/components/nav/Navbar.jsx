import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Burger, Logo, Menu, NavLinks } from '@components'
import { toggleScrolling } from '@utils'

const Navbar = ({ isHome, isMd, globalControls }) => {
    const router = useRouter()
    const [globOpen, setGlobOpen] = globalControls
    const globalOpen = globOpen !== null
    const [menuOpen, setMenuOpen] = useState(false)

    // open/close Menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        toggleScrolling(menuOpen)
    }

    // Burger conditional function
    const handleBurger = (e) => {
        if (isHome) {
            if (globOpen !== null) {
                setGlobOpen(null)
            } else {
                toggleMenu()
            }
        } else {
            e.preventDefault()
            router.back()
        }
    }

    // Close Menu if [ @media >=768px ]
    useEffect(() => {
        if (isMd & menuOpen) setMenuOpen(false)
    }, [isMd, menuOpen])

    return (
        <div id="nav" className="fixed left-0 z-40 w-screen">
            <motion.nav
                className="flex-center md:flex-btw dark:bg-lightblack h-12 w-full transform-none bg-grey-darker md:h-16 md:px-4 lg:px-8 xl:px-12 max:px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {!isMd && (
                    <Burger
                        display={
                            !isHome
                                ? 'return'
                                : menuOpen || globalOpen
                                ? 'opened'
                                : 'closed'
                        }
                        handleBurger={handleBurger}
                    />
                )}

                <Logo
                    closeMenu={menuOpen ? toggleMenu : null}
                    globOpen={globalOpen}
                    isHome={isHome}
                    router={router}
                />

                <AnimatePresence mode="wait">
                    {isMd & isHome ? <NavLinks isMd={isMd} /> : null}
                </AnimatePresence>
            </motion.nav>

            {!isMd ? <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> : null}
        </div>
    )
}

export default Navbar
