import { motion } from 'framer-motion'
import { Styled } from '@components'
import { archiveVariants } from '@motion'

const Archive_Project = ({ data, ...props }) => {
    const iconLinks = [
        { name: 'GitHub', label: 'View on Github', href: data.github },
        { name: 'External', label: 'Visit Project', href: data.external },
    ]
    return (
        <motion.div
            className="flex-col-btw h-[40vh] w-full gap-y-2 overflow-hidden bg-slate-20/50 p-4 shadow-sm transition-[filter] duration-250 ease-tween hover:brightness-110 md:h-[50vh]"
            variants={archiveVariants.Project.Wrap}
            {...props}
        >
            <div className="relative w-full">
                <h5 className="relative z-10 w-full rounded bg-white-dark py-2 text-center text-[1.4em] font-medium text-slate">
                    {data.title}
                </h5>
                <div className="flex-evenly absolute inset-x-0 bottom-[-2em] h-[2em]">
                    {data.tech.map((item, idx) => (
                        <p
                            key={`${data.title}-tech-item-${idx}`}
                            className="relative w-full whitespace-nowrap text-center font-medium -tracking-lg text-black md:tracking-normal"
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            <p className="w-full overflow-hidden text-center font-medium dark:text-white">
                {data.brief}
            </p>

            <div className="sm:flex-around  h-12 w-full max-sm:hidden">
                {iconLinks.map(({ name, label, href }) => {
                    return (
                        <a
                            key={`${data.title}-${name}-link`}
                            className="relative aspect-square h-full"
                            href={href}
                            title={label}
                        >
                            <Styled.Icon name={name} />
                        </a>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Archive_Project
