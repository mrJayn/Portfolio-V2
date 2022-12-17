import { motion } from 'framer-motion'
import { Styled } from '@components'

const Project_Icons = ({ hrefs, size = 45, ...props }) =>
    hrefs.map((href, i) => {
        const [name, title] =
            i == 0
                ? ['GitHub', 'View on GitHub']
                : ['External', 'Visit Project']
        return (
            <a
                key={`project-link-${i}`}
                className="relative aspect-square h-full"
                href={href}
                title={title}
                {...props}
            >
                <Styled.Icon name={name} size={size} />
            </a>
        )
    })

const MobileCard = ({ title, brief, href_github, href_site, idx }) => {
    const card_HREF = href_site !== '' ? href_site : href_github
    return (
        <div
            className="full flex-col-top gap-y-2 bg-slate-70/50 p-4 shadow-inset shadow-black/10"
            style={{
                filter: ` hue-rotate(${idx * 30}deg)`,
            }}
        >
            <h5 className="leading-none text-slate-80">{title}</h5>
            <a
                href={card_HREF}
                className="flex-col-top full rounded-xl bg-gradient-to-t from-white/40 via-white/20 to-white/5 p-2"
            >
                <p>{brief}</p>
            </a>
        </div>
    )
}

const Project_Card = ({ data, i = 0, isMd }) => {
    const LinkData = [
        { name: 'GitHub', label: 'View on Github', href: data.github },
        { name: 'External', label: 'Visit Project', href: data.external },
    ]

    return (
        <motion.div
            className="flex-col-top full bg-slate-20/50 px-4 py-10"
            style={{ filter: `hue-rotate(${i * 30}deg)` }}
            initial="hidden"
            animate="show"
        >
            <h5 className="w-full border-b-[1px] text-center text-black duration-350 ease-in">
                {data.title}
            </h5>
            <div className="flex-evenly mb-2 w-full space-x-3">
                {data.tech.map((item, idx) => (
                    <span
                        key={`${data.title}-tech-item-${idx}`}
                        className="relative w-full whitespace-nowrap text-center text-sm capitalize italic tracking-tighter text-grey-60/90 brightness-110 sm:font-medium md:tracking-wide"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/***/}
            <div className="w-full overflow-hidden">
                <motion.p
                    className="text-center text-md font-medium dark:text-white"
                    variants={{
                        hidden: { opacity: 0, y: '-50%' },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.3 + 0.1 * i },
                        },
                    }}
                >
                    {data.brief}
                </motion.p>
            </div>
            {/***/}
            <div
                className="flex-btw bg-mdProjectIcons absolute bottom-2  left-2 right-2 z-10 h-[67px] rounded-lg"
                style={{
                    transition: 'all 0.5s ease-in, transform 0.5s ease-out',
                }}
            >
                {LinkData.map(({ name, label, href }) => {
                    return (
                        <a
                            key={`${data.title}-${name}-link`}
                            className="relative hidden aspect-square h-full sm:block"
                            href={href}
                            title={label}
                        >
                            <Styled.Icon name={name} size={45} />
                        </a>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Project_Card
