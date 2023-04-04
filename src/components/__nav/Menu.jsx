import { motion } from 'framer-motion'
import { menuVariants } from '@motion'
import { Styled } from '@components'

const Menu = ({ toggleMenu }) => (
    <motion.menu
        className="fixed inset-0 top-14 z-[99] bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={menuVariants.backgroundClip}
    >
        <div className="flex-col-btw absolute inset-0 overflow-hidden px-4 landscape:flex-row">
            <motion.ul
                className="relative flex w-full flex-col space-y-3 landscape:grid landscape:h-full"
                variants={menuVariants.Links.Wrap}
            >
                <Styled.SectionLinks
                    className="landscape:flex-left rounded-xl py-[2vh] px-5 tracking-2xl shadow-[inset_1.5px_-1.5px_0rem_#333,_inset_-1.5px_1.5px_0rem_#40606f] saturate-50 landscape:max-h-[4em]"
                    toggleMenu={toggleMenu}
                    variants={menuVariants.Links.Items}
                    whileTap={{
                        scale: 0.9,
                        filter: 'brightness(1.5) saturate(0.75)',
                    }}
                />
            </motion.ul>

            <motion.div
                className="relative grid w-full portrait:grid-cols-4 landscape:h-full landscape:w-1/2"
                variants={menuVariants.IconWrap}
            >
                <Styled.Socials
                    variants={menuVariants.Icons}
                    className="socials-icon-bg relative m-auto aspect-square h-12 max-h-full portrait:mb-4"
                />
            </motion.div>
        </div>
    </motion.menu>
)

export default Menu
