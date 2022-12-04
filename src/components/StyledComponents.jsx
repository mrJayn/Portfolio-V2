import { motion } from 'framer-motion'
import Image from 'next/image'
import Paths from './items/Paths'

const links = [
    {
        name: 'GitHub',
        href: 'https://github.com/mrJayn',
    },
    {
        name: 'Codepen',
        href: 'https://codepen.io/mrjayn',
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/',
    },
]

// Table of Contents
//      Button
//      Image
//      Icon
//      Socials
const StyledComponents = {
    Button: ({ submit = false, children }) => (
        <button
            type={submit ? 'submit' : 'button'}
            className="flex-center styled-btn ease-[cubic-bezier(0.5,1,0.5,1) relative z-10 w-[75vw] min-w-[150px] max-w-[325px] cursor-pointer select-none whitespace-nowrap rounded-4xl bg-slate py-4 text-lg font-semibold tracking-wide text-slate-20/75 contrast-125 duration-500 hover:translate-y-[-2.5px] hover:text-white md:w-auto md:max-w-[100%] md:px-10 lg:px-14 lg:text-xl"
            onClick={(e) => {
                const btn = e.currentTarget
                btn.classList.toggle('clicked')
                setTimeout(() => {
                    btn.classList.toggle('clicked')
                }, 1000)
            }}
        >
            {children}
        </button>
    ),
    Image: ({ isPriority = false, src, alt, ...props }) => (
        <motion.div
            className="flex-center pointer-events-none absolute inset-4 z-0 select-none overflow-hidden rounded-4xl shadow md:relative  md:inset-0 md:w-full md:max-w-[50vw]"
            {...props}
        >
            <div className="full relative">
                <span className="absoluteFull z-10 shadow-inset" />
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectPosition="top"
                    objectFit="cover"
                    className="opacity-25 md:opacity-90"
                    priority={isPriority}
                />
            </div>
        </motion.div>
    ),
    Icon: ({ name, fill = 'none', className = '' }) => {
        const svgProps = {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            height: '100%',
            width: '100%',
            fill: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        }
        return className == '' ? (
            <div className="flex-center full group absolute inset-0 cursor-pointer">
                <svg {...svgProps}>
                    <g className="stroke-slate-30/75 drop-shadow-[0px_0px_1px_#fff4] duration-150 ease-in group-hover:stroke-slate-neon">
                        <Paths name={name} />
                    </g>
                </svg>
            </div>
        ) : (
            <svg className={className} {...svgProps}>
                <Paths name={name} />
            </svg>
        )
    },
    Socials: ({ ...props }) => {
        return links.map(({ name, href }, i) => (
            <motion.div key={`social-icon-${i}`} custom={i + 1} {...props}>
                <a
                    title={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledComponents.Icon name={name} />
                </a>
            </motion.div>
        ))
    },
}

export default StyledComponents
