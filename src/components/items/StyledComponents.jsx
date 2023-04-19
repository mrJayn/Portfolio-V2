import { motion } from 'framer-motion'
import Paths from './Paths'

const links = [
    {
        name: 'Email',
        href: 'mailto:m63jayne@gmail.com',
    },
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

const StyledComponents = {
    Border: ({ ...svgProps }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 212 52"
            {...svgProps}
        >
            <defs>
                <linearGradient id="socials-grad">
                    <stop offset={0.1} stopColor="#6580b1aa" />
                    <stop offset={0.6} stopColor="#8360c3aa" />
                    <stop offset={1} stopColor="#cc22aa66" />
                </linearGradient>
            </defs>
            <rect
                rx={10}
                ry={10}
                stroke="url(#socials-grad)"
                transform="rotate(0)"
                className="full origin-center fill-none stroke-[3]"
            />
        </svg>
    ),
    Button: ({ children, ...props }) => {
        return (
            <motion.button
                data-styled-button
                style={{ scale: 1 }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                {...props}
            >
                {children}
            </motion.button>
        )
    },
    Chevron: ({ direction = 'up', skewDeg = 37.5, ...props }) => {
        const dir2deg = { up: -45, right: 45, down: 135, left: -135 }
        const dir2Trans = {
            up: 'hover:translate-y-[-1.5px]',
            right: 'hover:translate-x-[1.5px]',
            down: 'hover:translate-y-[1.5px]',
            left: 'hover:translate-x-[-1.5px]',
        }
        const rotateDeg = dir2deg[direction] + skewDeg / 2
        const scaleY = Math.cos((skewDeg * Math.PI) / 180)
        return (
            <motion.div
                className={`group relative aspect-square h-full cursor-pointer ${dir2Trans[direction]}`}
                style={{
                    transition: 'transform 0.2s ease-out',
                }}
                {...props}
            >
                <span
                    className="absolute inset-1 rounded rounded-tr-none border-t-[5px] border-r-[5px] duration-200 ease-tween"
                    style={{
                        transform: `rotate(${rotateDeg}deg) skewX(${skewDeg}deg) scaleY(${scaleY})`,
                    }}
                >
                    <span className="absolute top-2 right-2 -bottom-3 -left-3 rounded rounded-tr-none border-t-[5px] border-r-[5px]" />
                </span>
            </motion.div>
        )
    },
    Icon: ({ name }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute top-1/2 left-1/2 h-2/3 w-2/3 fill-none stroke-slate-neon"
            style={{
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                transform: 'translate(-50%,-50%)',
            }}
        >
            <Paths name={name} />
        </svg>
    ),
    Socials: ({ className = '', variants }) => {
        return links.map(({ name, href }, i) => (
            <motion.a
                key={`social-icon-${i}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className={`relative aspect-square max-h-full rounded-lg ${className}`}
                style={{ scale: 1, filter: `hue-rotate(${i * 20}deg)` }}
                variants={variants}
                custom={i + 1}
                whileHover={{ scale: 1.1 }}
            >
                <StyledComponents.Icon name={name} />
            </motion.a>
        ))
    },
    Tech: ({ tech, className = '', ...props }) =>
        tech.map((item, i) => (
            <motion.span
                key={`tech-item-${i}`}
                className={`relative w-full whitespace-nowrap text-center ${className}`}
                custom={!props.custom && i}
                {...props}
            >
                {item}
            </motion.span>
        )),
}

export default StyledComponents
