import { motion } from 'framer-motion'
import { navVariants as variants } from '@motion'
const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']

const NavLinks = ({ isHome }) => (
    <motion.ul className="full flex-center">
        {linkIds.map((item, i) => (
            <motion.li
                key={`link-${i}`}
                className="my-auto mx-4 cursor-pointer text-[16px] font-medium tracking-tight text-grey-60 md:pt-2 md:pb-1 lg:text-[18px]"
                initial={false}
                animate={isHome ? 'show' : 'hidden'}
                variants={variants.NavLinks}
                custom={isHome ? linkIds.length - i : i}
                whileHover={{ color: '#fff' }}
                whileTap={{ scale: 0.95, originY: 1 }}
            >
                {item.includes('Resume') ? (
                    <a href="/assets/misc/resume2022.jpg" target="_blank">
                        {item}
                    </a>
                ) : (
                    <a href={`#${item}-area`}>{item}</a>
                )}
            </motion.li>
        ))}
    </motion.ul>
)

export default NavLinks
