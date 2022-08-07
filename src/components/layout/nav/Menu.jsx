import { motion } from 'framer-motion'
import { menu_vars } from '@variants'
import MenuContent from './MenuContent'

const Menu = ({ state, handleClick }) => {
    const menuState = state ? 'show' : 'hide'
    const [menu_clip, parent, child] = [
        menu_vars.menu_clip,
        menu_vars.parent,
        menu_vars.child,
    ]
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
