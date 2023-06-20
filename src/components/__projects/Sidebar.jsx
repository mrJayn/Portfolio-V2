import { motion } from 'framer-motion'
import { sidebarMotion } from '@motion'

const Tabs = ({ children, ...props }) => (
    <motion.li
        className={`group flex-center relative z-0 h-[3.5rem] w-full translate-x-[-10%] cursor-pointer select-none rounded-r-md bg-grey-75 pl-3 text-center font-normal capitalize text-grey shadow-md shadow-black/50 transition-[transform,color,background-color,z-index] duration-250 ease-in-out lg:pl-6 ${''} data-active:z-10 data-active:translate-x-[0%] data-active:bg-slate-60 data-active:text-white ${''} lg:data-inactive:hover:translate-x-[-7.5%] lg:data-inactive:hover:bg-grey-65 lg:data-inactive:hover:text-white`}
        {...props}
        {...sidebarMotion.itemProps}
    >
        {children}
        <span
            className={`pointer-events-none absolute inset-0 -z-10 duration-250 ease-in-out ${''} bafter:absolute bafter:left-0 bafter:h-1/4 bafter:w-1/4 bafter:duration-250 bafter:ease-in-out bafter:content-[''] ${''} before:-top-1/4 before:rounded-bl-full before:shadow-[-10px_10px_0px_10px] ${''} after:-bottom-1/4 after:rounded-tl-full after:shadow-[-10px_-10px_0px_10px] ${''} group-data-active:bafter:text-slate-60 group-data-inactive:bafter:text-grey-75 group-data-inactive:lg:group-hover:bafter:text-grey-65`}
        />
    </motion.li>
)

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
            className={`w-sidebar pt-[calc(128px- )] fixed -bottom-px -left-px top-20 z-[99]  pl-2`}
            {...sidebarMotion.wrapProps}
        >
            <ul className="relative z-30 flex w-full flex-col gap-y-[0.5em] py-[clamp(10px,5vh,100px)] max-lg:max-h-[calc(100%-1rem)]">
                {Categories.map((category, i) => (
                    <Tabs key={category} data-active={i === active} onClick={() => handleTab(i)}>
                        {category}
                    </Tabs>
                ))}
                <div
                    className="absolute inset-y-0 -left-2 z-30
                     w-2 rounded-r-full bg-slate-60"
                />
            </ul>
        </motion.div>
    )
}
