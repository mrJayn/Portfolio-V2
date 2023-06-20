import { motion } from 'framer-motion'
import { sidebarMotion } from '@motion'

export default function Sidebar({ Categories, active, setActive }) {
    const handleTab = (i) => {
        var prevScrollY = null
        const body = document.body
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const interval = setInterval(() => {
            let y = body.scrollTop

            if (y == prevScrollY || y === 0) {
                clearInterval(interval)
                setActive(i)
            }
            prevScrollY = y
        }, 50)
    }

    return (
        <motion.div
            className="pt-[calc(128px- )] fixed -bottom-px -left-px top-20 z-[99] w-sidebar pl-2"
            {...sidebarMotion.wrapProps}
        >
            <ul className="flex-col-left relative w-full gap-y-3 py-[clamp(10px,5vh,40px)] max-lg:max-h-[calc(100%-1rem)]">
                {Categories.map((category, i) => (
                    <motion.li
                        key={category}
                        className="styled-tab group h-[3rem] translate-x-[-10%] justify-start rounded-r-md pl-[17.5%] pr-[5%] text-start"
                        data-active={i === active}
                        onClick={() => handleTab(i)}
                        {...sidebarMotion.itemProps}
                    >
                        {category}
                        <span className="tab-decoration" />
                    </motion.li>
                ))}
                <div
                    className="absolute inset-y-0 -left-2 z-30
                     w-2 rounded-r-full bg-slate-60"
                />
            </ul>
        </motion.div>
    )
}
