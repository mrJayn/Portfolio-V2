import { AnimatePresence, motion } from 'framer-motion'
import { navVariants } from '@motion'
import { sections } from '@config'

const NavLinks = ({ isHome }) => {
    return (
        <AnimatePresence mode="wait">
            {isHome ? (
                <motion.ul
                    className="full flex-center"
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={navVariants.NavLinks.Wrap}
                >
                    {sections.map(([SectionName, ScrollTarget], i) => {
                        const StyledText = () => (
                            <span className="full text-[16px] font-medium tracking-tight text-grey-60/90 duration-250 ease-in hover:text-white md:pt-2 md:pb-1 lg:text-[18px]">
                                {SectionName}
                            </span>
                        )
                        return (
                            <motion.li
                                key={i}
                                className="my-auto mx-4 cursor-pointer"
                                variants={navVariants.NavLinks.Items}
                                custom={10}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document
                                        .querySelector(`#${SectionName}`)
                                        .scrollIntoView({
                                            behavior: 'smooth',
                                            block: ScrollTarget,
                                        })
                                }}
                            >
                                {SectionName !== 'my resume' ? (
                                    <StyledText />
                                ) : (
                                    <a
                                        href="/assets/misc/resume2022.jpg"
                                        target="_blank"
                                    >
                                        <StyledText />
                                    </a>
                                )}
                            </motion.li>
                        )
                    })}
                </motion.ul>
            ) : null}
        </AnimatePresence>
    )
}

export default NavLinks
