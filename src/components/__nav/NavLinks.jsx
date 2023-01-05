import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { scrollToID } from '@utils'
const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const NavLinks = ({ hideLinks, activeSection }) => (
    <motion.ul className="full flex-center">
        {linkIds.map((item, i) => (
            <motion.li
                key={`link-${i}`}
                className={`flex-center relative mx-2 h-3/4 cursor-pointer bg-clip-text px-2 text-[0.85em] font-medium leading-none transition-colors duration-250 ease-in hover:text-white ${
                    activeSection === i + 1 ? 'text-white' : 'text-white/40'
                }`}
                initial={false}
                animate={hideLinks ? { y: -50 } : { y: 0 }}
                transition={{
                    default: {
                        duration: hideLinks ? 0.25 : 1,
                        delay: hideLinks
                            ? i * 0.075
                            : (linkIds.length - i) * 0.075,
                    },
                }}
            >
                {item.includes('Resume') ? (
                    <a href="/assets/misc/resume2022.jpg" target="_blank">
                        {item}
                    </a>
                ) : (
                    <a onClick={() => scrollToID(item, 'smooth')}>{item}</a>
                )}
            </motion.li>
        ))}
    </motion.ul>
)

export default NavLinks
