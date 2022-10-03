import { AnimatePresence, motion } from 'framer-motion'
import { menuVariants } from '@motion'
import { NavLinks, Socials } from '@components'

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                    id="menu"
                    className="fixed left-0 top-12 bottom-0 w-screen bg-grey-light dark:bg-grey-darker"
                    initial="hidden"
                    animate="enter"
                    exit="hidden"
                    variants={menuVariants.backgroundClip}
                >
                    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden px-3 py-10 landscape:pt-0">
                        <div className="flex-col-btw full grid-cols-8 grid-rows-4 bg-clip-text landscape:grid">
                            <NavLinks toggleMenu={toggleMenu} />

                            <motion.div
                                className="flex-evenly landscape:full col-start-6 col-end-[8] row-start-3 row-end-[-1] my-4 w-full select-none grid-cols-2 text-center
                        landscape:grid landscape:w-[75%]"
                                variants={menuVariants.socials}
                            >
                                <Socials
                                    invert={true}
                                    size={45}
                                    onClick={toggleMenu}
                                    variants={menuVariants.children}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 1000,
                                        velocity: -100,
                                    }}
                                />
                            </motion.div>
                        </div>
                        <div
                            id="bgEffect"
                            className="absoluteFull -z-10 origin-top bg-gradient opacity-75 duration-600 dark:opacity-30"
                        >
                            <span className="absoluteFull z-10 bg-white/40 dark:hidden" />
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default Menu
