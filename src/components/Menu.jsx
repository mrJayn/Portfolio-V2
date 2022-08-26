import { motion } from 'framer-motion'

import { Variants } from '@config'
import { useScreenOrientation } from '@hooks'
import { SectionLinks, Socials } from '@components'

const MenuContent = ({ menuState, handleClick }) => {
    return (
        <motion.div
            id="menu_content"
            className="flex-col-btw h-full w-full opacity-100"
            initial={false}
            animate={menuState}
        >
            <SectionLinks handleClick={handleClick} isMenu={true} />
            {/** FOOTER  **/}
            <motion.div
                className="flex-btw w-full text-center"
                variants={Variants.menu.parent}
                custom={false}
            >
                {/** FOOTER LINKS **/}
                <Socials
                    className="mx-auto my-4 p-3 text-lightgrey"
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
    )
}

const Menu = ({ isOpen, handleMenu }) => {
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
                variants={Variants.menu.backgroundClip}
            >
                <MenuContent menuState={menuState} handleClick={handleMenu} />
            </motion.div>
        </motion.div>
    )
}

export default Menu
