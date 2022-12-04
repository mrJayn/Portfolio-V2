import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { toggleScrolling } from '@utils'
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
        className="flex-center full font-medum  relative  z-50 cursor-pointer select-none text-center text-3xl leading-10 tracking-widest text-white/75 duration-250 ease-tween hover:text-white"
        style={{ textShadow: '4px 4px 1px #8af8' }}
    >
        MIKE JAYNE
    </motion.a>
)

const MessageBtn = ({ isHome, router }) => (
    <motion.div
        key="send-message-btn"
        className="group relative aspect-square h-full cursor-pointer p-0.5"
        initial={false}
        animate={isHome ? 'show' : 'hidden'}
        variants={{ show: { x: '0%' }, hidden: { x: '110%' } }}
        transition={{
            delay: isHome ? 1.75 : 0,
            ease: isHome ? 'backOut' : 'backIn',
        }}
        onClick={() =>
            router.push('/contactpage', 'Contact', { scroll: false })
        }
    >
        <Styled.Icon
            name="Message"
            className="stroke-grey-60 group-hover:stroke-white"
        />
    </motion.div>
)

const Navbar = ({ isHome, isMd, isRouting }) => {
    const router = useRouter()
    const [menuOpen, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menuOpen)
        toggleScrolling(menuOpen)
    }

    const backToHome = () => {
        const scrollDiv = document.querySelector('main > div')
        if (scrollDiv == null) return router.push('/')
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
        2: <MessageBtn isHome={isHome} router={router} />,
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
