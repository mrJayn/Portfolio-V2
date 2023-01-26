import { menuVariants, navVariants } from '@motion'
import { motion, AnimatePresence } from 'framer-motion'

const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const Links = ({ activeSection = 0, className, action = null, ...props }) =>
    linkIds.map((item, i) => {
        const itemProps = item.includes('Resume')
            ? { href: '/assets/misc/resume2022.jpg', target: '_blank' }
            : {
                  onClick: () => {
                      document.getElementById(item).scrollIntoView({
                          behavior: 'smooth',
                      })
                      if (action !== null) action()
                  },
              }
        return (
            <motion.li
                key={`link-${i}`}
                className={`${className} ${
                    activeSection === i + 1
                        ? 'md:text-white/60'
                        : 'md:text-white/40'
                }`}
                custom={i + 1}
                {...props}
            >
                <a {...itemProps}>{item}</a>
            </motion.li>
        )
    })

const NavItems = {
    Logo: ({ ...props }) => (
        <a
            data-logo="MIKE JAYNE"
            className="flex-center relative cursor-pointer select-none overflow-hidden whitespace-nowrap text-center text-28pt font-thin tracking-2xl text-white/60 transition-colors duration-500 ease-tween hover:text-white/80 max-lg:fixed max-lg:left-1/2 max-lg:translate-x-[-50%]"
            {...props}
        >
            MIKE JAYNE
        </a>
    ),
    NavLinks: ({ isHome, activeSection }) => (
        <AnimatePresence>
            {isHome && (
                <motion.ul
                    key="navLinks"
                    className="full flex-center"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                        hidden: { transition: { staggerChildren: 0.075 } },
                        show: {
                            transition: {
                                staggerChildren: 0.075,
                                staggerDirection: -1,
                                delayChildren: 0.5,
                            },
                        },
                    }}
                >
                    <Links
                        activeSection={activeSection}
                        className="flex-center relative mx-2 h-3/4 cursor-pointer bg-clip-text px-2 text-[0.9em] font-medium leading-none transition-colors delay-100 duration-250 ease-in hover:text-white"
                        variants={{ hidden: { y: -50 }, show: { y: 0 } }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.ul>
            )}
        </AnimatePresence>
    ),
    MenuLinks: ({ toggleMenu }) => (
        <motion.ul
            className="full relative flex flex-col space-y-3 landscape:grid"
            variants={menuVariants.Links.Wrap}
        >
            <Links
                className="landscape:flex-left cursor-pointer rounded-xl py-[2vh] px-5 capitalize tracking-2xl text-grey-40 saturate-50 landscape:max-h-[4em]"
                action={toggleMenu}
                style={{
                    boxShadow:
                        'inset 1.5px -1.5px 0rem #333, inset -1.5px 1.5px 0rem #40606f',
                }}
                variants={menuVariants.Links.Items}
                whileHover={{
                    color: '#fff',
                    marginLeft: '4px',
                    filter: 'brightness(1.5) saturate(0.75)',
                }}
            />
        </motion.ul>
    ),
    BackBtn: ({ backToHome }) => (
        <motion.button
            className="fixed top-16 left-2 z-50 aspect-[1.25/1] w-24 cursor-pointer overflow-hidden rounded-xl bg-black/50  text-grey-30 backdrop-blur-sm hover:text-white max:left-[calc(8px+(25vw-360px))]"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navVariants.BackBtn.Wrapper}
            whileHover={{ x: -2.5 }}
            whileTap={{ scale: 0.9, originX: 0.5 }}
            onClick={() => backToHome()}
        >
            {[0, 45, -45].map((degrees, i) => (
                <motion.span
                    key={`back-btn-component-${i}`}
                    className={`absolute top-[45%] left-[15%] h-1.5 rounded-full bg-current transition-colors duration-250 ease-tween ${
                        degrees == 0 ? 'ml-[3px] w-[60%]' : 'w-[35%]'
                    }`}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={navVariants.BackBtn.Line}
                    custom={degrees}
                />
            ))}
        </motion.button>
    ),
}

export default NavItems
