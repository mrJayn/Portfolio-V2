import { motion } from 'framer-motion'
import { myVariants } from '@utils'
import MenuContent from './MenuContent'

const [menu_clip, parent, child] = [
    myVariants.menu.menu_clip,
    myVariants.menu.parent,
    myVariants.menu.child,
]

const Menu = ({ state, handleClick }) => {
    const menuState = state ? 'show' : 'hide'
    return (
        <motion.div
            className="menu"
            data-state={menuState}
            initial={false}
            animate={menuState}
        >
            <motion.div className="menu-container" variants={menu_clip}>
                <MenuContent
                    menuState={menuState}
                    handleClick={handleClick}
                    parent={parent}
                    child={child}
                />
            </motion.div>
        </motion.div>
    )
}

export default Menu
