import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { scrollToID } from '@utils'
const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const NavLinks = ({ isHome, isMd, activeSection }) =>
    isMd && (
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
                    {linkIds.map((item, i) => (
                        <motion.li
                            key={`link-${i}`}
                            className={`flex-center relative mx-2 h-3/4 cursor-pointer bg-clip-text px-2 text-[0.85em] font-medium leading-none transition-colors duration-250 ease-in hover:text-white ${
                                activeSection === i + 1
                                    ? 'text-white'
                                    : 'text-white/40'
                            }`}
                            variants={{ hidden: { y: -50 }, show: { y: 0 } }}
                            transition={{ duration: 0.5 }}
                        >
                            {item.includes('Resume') ? (
                                <a
                                    href="/assets/misc/resume2022.jpg"
                                    target="_blank"
                                >
                                    {item}
                                </a>
                            ) : (
                                <a onClick={() => scrollToID(item, 'smooth')}>
                                    {item}
                                </a>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )

export default NavLinks
/**
 *   isMd && (
        <AnimatePresence>
            {isHome &&
                linkIds.map((item, i) => (
                    <motion.li
                        key={`link-${i}`}
                        className={`flex-center relative z-10 mx-2 h-3/4 cursor-pointer bg-clip-text px-2 text-[0.85em] font-medium leading-none transition-colors duration-250 ease-in hover:text-white ${
                            activeSection === i + 1
                                ? 'text-white'
                                : 'text-white/40'
                        }`}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={{ hidden: { y: -50 }, show: { y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        {item.includes('Resume') ? (
                            <a
                                href="/assets/misc/resume2022.jpg"
                                target="_blank"
                            >
                                {item}
                            </a>
                        ) : (
                            <a onClick={() => scrollToID(item, 'smooth')}>
                                {item}
                            </a>
                        )}
                    </motion.li>
                ))}
        </AnimatePresence>
    )
 */
