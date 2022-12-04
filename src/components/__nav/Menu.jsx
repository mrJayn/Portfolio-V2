import { motion, AnimatePresence } from 'framer-motion'
import { Styled } from '@components'
import { menuVariants } from '@motion'
import { scrollToID } from '@utils'

const linkIds = ['about', 'experience', 'projects', 'contact', 'my Resume']
const resumeJPEG = '/assets/misc/resume2022.jpg'

const Menu = ({ menuOpen, toggleMenu }) => {
    return (
        <AnimatePresence mode="wait">
            {menuOpen ? (
                <motion.menu
                    key="menu"
                    className="fixed left-0 top-14 bottom-0 z-30 w-screen bg-nav"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={menuVariants.backgroundClip}
                >
                    <div className="absoluteFull flex-col-btw overflow-hidden p-4 landscape:flex-row">
                        <motion.ul
                            className="full relative flex flex-col space-y-3 landscape:grid"
                            variants={menuVariants.Links.Wrap}
                        >
                            {linkIds.map((item, i) => {
                                const itemProps = item.includes('Resume')
                                    ? { href: resumeJPEG, target: '_blank' }
                                    : {
                                          onClick: () => {
                                              scrollToID(`#${item}-area`)
                                              toggleMenu()
                                          },
                                      }
                                return (
                                    <motion.li
                                        key={`link-${i}`}
                                        className="landscape:flex-left cursor-pointer rounded-xl py-[2vh] px-5 text-md capitalize tracking-widest text-grey-60/90 saturate-50 landscape:h-auto"
                                        style={{
                                            boxShadow:
                                                'inset 1.5px -1.5px 0rem #333, inset -1.5px 1.5px 0rem #40606f',
                                        }}
                                        variants={menuVariants.Links.Items}
                                        custom={i + 1}
                                        whileHover={{
                                            color: '#fff',
                                            marginLeft: '4px',
                                            filter: 'brightness(1.5) saturate(0.75)',
                                        }}
                                    >
                                        <a {...itemProps}>{item}</a>
                                    </motion.li>
                                )
                            })}
                        </motion.ul>

                        <motion.div
                            className="relative grid w-full grid-cols-3 landscape:h-full landscape:w-1/2 landscape:grid-cols-1 landscape:py-0"
                            variants={menuVariants.IconWrap}
                        >
                            <Styled.Socials
                                variants={menuVariants.Icons}
                                className="relative m-auto aspect-square h-16"
                            />
                        </motion.div>
                    </div>
                </motion.menu>
            ) : null}
        </AnimatePresence>
    )
}

export default Menu
