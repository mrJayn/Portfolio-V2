import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Burger, Logo, Menu, NavLinks } from '@components'
import { toggleScrolling } from '@utils'
import { Variants } from '@config'

const Navbar = ({ isHome, orientation }) => {
    const [menuState, setMenuState] = useState(false)
    const router = useRouter()

    // toggle Menu OR return Home
    const handleBurger = (e) => {
        if (isHome) {
            toggleMenu()
        } else {
            e.preventDefault()
            router.push('/')
        }
    }
    // open/close Menu
    const toggleMenu = () => {
        setMenuState(!menuState)
        toggleScrolling(menuState)
    }
    // Close Menu if VP isMd
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767 && menuState) {
                setMenuState(!menuState)
                toggleScrolling({ menuState })
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [menuState])

    return (
        <nav
            className="fixed left-0 right-0 z-40"
            id="nav"
            data-orientation={orientation}
        >
            <motion.div
                className="flex-center md:flex-btw dark:bg-lightblack max-px-16 h-12 w-full transform-none bg-charcoal md:h-16 md:px-4 lg:px-8 xl:px-12"
                initial="hidden"
                animate="enter"
                variants={Variants.fade}
            >
                <Burger
                    isHome={isHome}
                    menuState={menuState}
                    handleBurger={handleBurger}
                />
                <Logo
                    menuState={menuState}
                    toggleMenu={toggleMenu}
                    router={router}
                />
                <NavLinks />
            </motion.div>
            <Menu isOpen={menuState} toggleMenu={toggleMenu} />
        </nav>
    )
}

export default Navbar
