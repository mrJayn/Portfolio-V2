import { motion } from 'framer-motion'
import { scrollToID } from '@utils'
const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const NavLinks = ({ hideLinks }) => (
    <motion.ul className="full flex-center">
        {linkIds.map((item, i) => (
            <motion.li
                key={`link-${i}`}
                className="my-auto mx-4 cursor-pointer text-[16px] font-medium tracking-tight text-grey-60 md:pt-2 md:pb-1 lg:text-[18px]"
                initial={false}
                animate={hideLinks ? { y: -50 } : { y: 0 }}
                transition={{
                    default: {
                        duration: hideLinks ? 0.25 : 1,
                        delay: hideLinks
                            ? i * 0.075
                            : (linkIds.length - i) * 0.075,
                    },
                    color: { duration: 0.25, ease: 'easeIn' },
                }}
                whileHover={{ color: '#fff' }}
                whileTap={{ scale: 0.95, originY: 1 }}
            >
                {item.includes('Resume') ? (
                    <a href="/assets/misc/resume2022.jpg" target="_blank">
                        {item}
                    </a>
                ) : (
                    <a onClick={() => scrollToID(`#${item}-area`, 'smooth')}>
                        {item}
                    </a>
                )}
            </motion.li>
        ))}
    </motion.ul>
)

export default NavLinks
