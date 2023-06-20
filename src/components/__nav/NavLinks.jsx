import { motion } from 'framer-motion'
import { sections } from '@config'
import { scroll2id } from '@utils'
import { navLinksMotion } from '@motion-nav'

const sids = sections.map(({ id }) => id).slice(1)

export default function NavLinks({ isMenu, toggleMenu }) {
    const handleClick = (id) =>
        scroll2id(id, () => {
            if (isMenu) toggleMenu()
        })

    return (
        <motion.ul
            className={
                isMenu
                    ? 'full flex-col-top px-2 portrait:gap-y-[2.5vh] landscape:gap-y-2'
                    : 'absolute right-4 top-0 flex h-full gap-x-8 max-lg:hidden'
            }
            initial="hidden"
            animate="show"
            {...(!isMenu && { exit: 'hidden' })}
            variants={navLinksMotion.Container}
        >
            {sids.map((id) => (
                <motion.li key={`${id}-link`} className="h-auto w-full" variants={navLinksMotion.Link} custom={isMenu}>
                    <button
                        className={`relative flex w-full cursor-pointer select-none items-center tracking-2xl ${
                            isMenu
                                ? 'h-[2.25em] pl-2 text-menu font-medium uppercase text-current shadow-[inset_0_-3px_2px_-1px_#fff2] hover:bg-white/25'
                                : `transition-colors group h-full justify-center text-[19px] capitalize hover:text-grey-20`
                        }`}
                        onClick={() => handleClick(id)}
                    >
                        {id}
                        {!isMenu && (
                            <span className="transition-transform absolute inset-x-0 bottom-[17px] h-[1px] origin-bottom-left scale-x-0 rounded-full bg-grey-20 delay-[100ms] duration-200 ease-tween group-hover:scale-x-100" />
                        )}
                    </button>
                </motion.li>
            ))}
        </motion.ul>
    )
}
