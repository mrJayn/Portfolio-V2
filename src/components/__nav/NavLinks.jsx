import { AnimatePresence, motion } from 'framer-motion'
import { scrollToID } from '@utils'

const SectionIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const NavLinks = ({ state, variants }) => {
    // Handle Section Clicked
    const handleClick = (section) => {
        if (section == 'my Resume') {
            window.open('/assets/misc/resume2022.jpg', '_blank')
        } else {
            scrollToID(`#${section}-area`, 'auto')
        }
    }
    return (
        <AnimatePresence mode="wait">
            {state ? (
                <motion.ul
                    className="full flex-center"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={variants.Wrap}
                >
                    {SectionIds.map((section, i) => {
                        return (
                            <motion.li
                                key={i}
                                className="my-auto mx-4 cursor-pointer"
                                variants={variants.Items}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleClick(section)}
                            >
                                <span className="full text-[16px] font-medium tracking-tight text-grey-60/90 duration-250 ease-in hover:text-white md:pt-2 md:pb-1 lg:text-[18px]">
                                    {section}
                                </span>
                            </motion.li>
                        )
                    })}
                </motion.ul>
            ) : null}
        </AnimatePresence>
    )
}

export default NavLinks
