import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Burger, Logo, Menu, SectionLinks } from '@components'
import { Variants } from '@config'
import { toggleScrolling } from '@utils'

const Navbar = ({ isLoading, isHome }) => {
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
        <motion.nav className="fixed left-0 right-0 z-40" id="nav">
            <motion.div
                className="flex-center md:flex-btw h-12 w-full transform-none bg-charcoal dark:bg-lightblack md:h-16 md:px-4 lg:px-16"
                initial="hidden"
                animate="enter"
                variants={Variants.fade}
            >
                <Burger
                    isHome={isHome}
                    menuState={menuState}
                    handleBurger={handleBurger}
                />
                <Logo isHome={isHome} menuState={menuState} router={router} />
                <SectionLinks variants={Variants.fade_stagger} />
            </motion.div>
            <Menu isOpen={menuState} handleMenu={toggleMenu} />
        </motion.nav>
    )
}

export default Navbar
