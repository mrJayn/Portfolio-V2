import { motion } from 'framer-motion'

import { menuVariants, Variants } from '@config'
import { useScreenOrientation } from '@hooks'
import { NavLinks, Socials } from '@components'

const Menu = ({ menuControls, isOpen, handleMenu }) => {
    const menuState = isOpen ? 'enter' : 'hidden'
    const orientation = useScreenOrientation()

    return (
        <motion.div
            id="menu"
            className="fixed left-0 top-0 h-screen w-screen bg-charcoal/70 md:hidden"
            data-isopen={isOpen}
            data-orientation={orientation}
            initial={false}
            animate={menuState}
        >
            <motion.div
                className="flex-center absolute top-0 left-0 h-screen w-screen bg-charcoal px-3 pb-10 pt-[12.5vh]"
                variants={menuVariants.backgroundClip}
            >
                <motion.div
                    id="menu_content"
                    className="flex-col-btw h-full w-full opacity-100"
                    initial={false}
                    animate={menuState}
                >
                    <NavLinks handleClick={handleMenu} isMenu={true} />
                    {/** FOOTER  **/}

                    {/** FOOTER LINKS **/}
                    <Socials
                        variants={Variants.fade}
                        transition={{
                            type: 'spring',
                            stiffness: 1000,
                            velocity: -100,
                        }}
                        size={30}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Menu
