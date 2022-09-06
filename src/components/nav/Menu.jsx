import { motion } from 'framer-motion'
import { menuVariants } from '@config'
import { NavLinks, Socials } from '@components'

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <motion.div
            id="menu"
            className={`fixed left-0 top-0 h-screen w-screen duration-600 ${
                isOpen ? 'bg-white dark:bg-charcoal' : 'bg-transparent'
            }`}
            style={{
                visibility: isOpen ? 'visible' : 'hidden',
                transitionDelay: isOpen ? '0s' : '0.3s',
            }}
            initial={false}
            animate={isOpen ? 'enter' : 'hidden'}
        >
            <motion.div
                className="flex-center absolute top-0 left-0 h-screen w-screen px-3 pb-10 pt-[12.5vh]"
                variants={menuVariants.backgroundClip}
            >
                <div className="flex-col-btw h-full w-full opacity-100 landscape:pt-8">
                    <NavLinks toggleMenu={toggleMenu} forMenu={true} />

                    <motion.div
                        className="flex-evenly landscape:full my-4 w-full select-none overflow-scroll text-center"
                        variants={menuVariants.socials}
                        custom={true}
                    >
                        <Socials
                            size={35}
                            defId="menuDefs"
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
                <motion.div
                    id="bgEffect"
                    className="absolute top-0 right-0 left-0 bottom-0 -z-10 origin-top bg-gradient opacity-25"
                    variants={menuVariants.backgroundClip}
                />
            </motion.div>
        </motion.div>
    )
}

export default Menu
