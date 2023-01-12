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
    Logo: ({ useAnim, isHome }) => (
        <motion.a
            key={`logo-${useAnim && 'animated'}`}
            data-logo="MIKE JAYNE"
            onClick={() => {
                if (window.scrollY == 0 || typeof window == undefined) {
                    location.reload()
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }}
            className="flex-center relative cursor-pointer select-none overflow-hidden whitespace-nowrap text-center text-28pt tracking-widest text-white/50 transition-colors duration-500 ease-tween hover:text-white/80 max-md:fixed max-md:left-1/2 max-md:translate-x-[-50%]"
            {...(useAnim && {
                initial: false,
                animate: isHome
                    ? {
                          x: '0%',
                          transition: { duration: 1, ease: 'easeInOut' },
                      }
                    : {
                          x: 'calc(50vw - 60%)',
                          transition: { duration: 1, ease: 'easeInOut' },
                      },
            })}
        >
            MIKE JAYNE
        </motion.a>
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
                        className="flex-center relative mx-2 h-3/4 cursor-pointer bg-clip-text px-2 text-[0.85em] font-medium leading-none transition-colors delay-100 duration-250 ease-in hover:text-white"
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
                className="landscape:flex-left cursor-pointer rounded-xl py-[2vh] px-5 text-md capitalize tracking-widest text-grey-40 saturate-50 landscape:max-h-[4em]"
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
    BackBtn: ({ isHome, backToHome }) => (
        <AnimatePresence>
            {!isHome && (
                <motion.div
                    className="fixed top-2 left-[calc(5vw-30px)] z-50 aspect-[1.75/1] w-24 cursor-pointer overflow-hidden rounded-xl bg-nav/75 text-white/75 shadow-md backdrop-blur-sm hover:text-white lg:top-16 lg:aspect-[1.5/1]"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={navVariants.BackButton.Wrapper}
                    whileHover={{ scale: 1.05, originX: 0.5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={backToHome}
                >
                    {[0, 45, -45].map((deg, i) => (
                        <motion.span
                            key={`back-btn-line-${i}`}
                            className={`absolute top-[45%] left-1/4 h-1 rounded-full bg-current transition-colors duration-250 ease-in ${
                                deg == 0
                                    ? 'ml-[3px] w-1/2'
                                    : 'w-1/4 origin-left'
                            }`}
                            variants={
                                navVariants.BackButton[
                                    deg == 0 ? 'LineA' : 'LineB'
                                ]
                            }
                            custom={deg}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    ),
}

export default NavItems
