import { motion } from 'framer-motion'
import { menuVariants, navVariants } from '@motion'

const sections = [
    ['about', 'center'],
    ['experience', 'center'],
    ['featured', 'start'],
    ['projects', 'start'],
    ['contact', 'start'],
    ['RESUME', '_'],
]
const NavLinks = ({ toggleMenu = null, isMd = false }) => {
    const handleNavLink = (goTo, target) => {
        document.querySelector(goTo).scrollIntoView({
            behavior: 'smooth',
            block: target,
        })
    }
    const text_style = `full text-grey-light/90 hover:text-white duration-250 ease-in md:pt-2 md:pb-1 ${
        isMd
            ? 'font-medium tracking-tight text-[16px] lg:text-[18px]'
            : 'font-semibold tracking-wide text-2xl capitalize landscape:text-xl sm:text-3xl'
    }`

    return (
        <motion.ul
            className={
                isMd
                    ? 'full flex-center'
                    : 'flex-col-center landscape:full col-start-1 col-end-[-1] row-start-1 row-end-[-1] h-[70%] grid-flow-col grid-cols-2 grid-rows-4 landscape:grid'
            }
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={isMd ? navVariants.LinksWrap : menuVariants.LinksWrap}
        >
            {sections.map(([name, scrollTarget], i) => (
                <motion.li
                    key={i}
                    className="landscape:flex-center my-auto cursor-pointer md:mx-4"
                    variants={isMd ? navVariants.Links : menuVariants.children}
                    custom={isMd ? 10 : i * 5}
                    whileTap={{ scale: isMd ? 0.95 : 1 }}
                    onClick={() => {
                        if (toggleMenu !== null) toggleMenu()
                    }}
                >
                    {name !== 'RESUME' ? (
                        <span
                            className={text_style}
                            onClick={() =>
                                handleNavLink(`#${name}`, scrollTarget)
                            }
                        >
                            {name}
                        </span>
                    ) : (
                        <a
                            href="/assets/misc/resume2022.jpg"
                            target="_blank"
                            className={text_style}
                        >
                            my Resume
                        </a>
                    )}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default NavLinks
