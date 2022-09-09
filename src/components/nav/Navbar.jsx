import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Burger, Logo, Menu, NavLinks } from '@components'
import { toggleScrolling } from '@utils'
import { Variants } from '@config'

const Navbar = ({ isHome, isMd, orientation }) => {
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
        if (isMd) {
            setMenuState(false)
            toggleScrolling(true)
        }
    }, [isMd, menuState])

    return (
        <div
            id="nav"
            className="fixed left-0 right-0 z-40"
            data-orientation={orientation}
        >
            <motion.nav
                className="flex-center md:flex-btw dark:bg-lightblack max-px-16 h-12 w-full transform-none bg-grey-darker md:h-16 md:px-4 lg:px-8 xl:px-12"
                initial="hidden"
                animate="enter"
                variants={Variants.fade}
            >
                {!isMd && (
                    <Burger
                        isHome={isHome}
                        menuState={menuState}
                        handleBurger={handleBurger}
                    />
                )}

                <Logo
                    menuState={menuState}
                    toggleMenu={toggleMenu}
                    router={router}
                />

                <NavLinks isHome={isHome} router={router} />
            </motion.nav>

            <Menu isOpen={menuState} toggleMenu={toggleMenu} />
        </div>
    )
}

export default Navbar
