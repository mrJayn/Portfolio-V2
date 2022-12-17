import { motion, transform } from 'framer-motion'
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
//      Button -- color in global
//      Image
//      Icon
//      Socials
const StyledComponents = {
    Button: ({ submit = false, children }) => {
        return (
            <button
                type={submit ? 'submit' : 'button'}
                className="flex-center full group relative z-10 min-w-fit cursor-pointer select-none whitespace-nowrap rounded-md px-8 py-2 font-robotoMono text-21pt uppercase tracking-widest opacity-100  shadow-inset-outset shadow-black/5 hover:-translate-y-0.5 hover:text-white hover:shadow-black/10 lg:w-auto lg:max-w-[100%] lg:px-12 lg:text-24pt xl:px-16"
            >
                {children}
            </button>
        )
    },
    Image: ({ isPriority = false, src, alt, ...props }) => (
        <motion.div
            className="flex-center lg:full pointer-events-none absolute inset-0 -z-10 mx-auto select-none overflow-hidden lg:inset-auto lg:max-w-[50vw] lg:shadow"
            {...props}
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                className="object-cover object-top opacity-25 lg:opacity-75 landscape:object-center"
                quality={25}
                priority={isPriority}
            />
        </motion.div>
    ),
    Icon: ({ name, size = '100%', fill = 'none', className = '' }) => {
        const svgProps = {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            height: size,
            width: size,
            fill: fill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        }
        return className == '' ? (
            <div className="flex-center full group absolute inset-0 cursor-pointer">
                <svg {...svgProps}>
                    <g className="stroke-slate drop-shadow-[0px_0px_1px_#fff4] duration-150 ease-in group-hover:stroke-slate-neon">
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
    Chevron: ({ direction = 'up', skewDeg = 37.5, ...props }) => {
        const dir2deg = { up: -45, right: 45, down: 135, left: -135 }
        const rotateDeg = dir2deg[direction] + skewDeg / 2
        const scaleY = Math.cos((skewDeg * Math.PI) / 180)
        return (
            <motion.span
                className="group relative aspect-square h-full cursor-pointer text-white/40 hover:text-white"
                {...props}
            >
                <span
                    className="absolute inset-0 rounded-md rounded-tr-none border-t-[6px] border-r-[6px] duration-250 ease-tween"
                    style={{
                        transform: `rotate(${rotateDeg}deg) skewX(${skewDeg}deg) scaleY(${scaleY})`,
                    }}
                >
                    <span className="absolute top-2 right-2 -bottom-3 -left-3 rounded-md rounded-tr-none border-t-[6px] border-r-[6px]" />
                </span>
            </motion.span>
        )
    },
}

export default StyledComponents
