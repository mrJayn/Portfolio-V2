import { motion, transform } from 'framer-motion'
import Image from 'next/image'
import Paths from './items/Paths'
import { styledComponentsVariants as variants } from '@motion'

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
    Button: ({ submit = false, active = false, children, ...props }) => {
        return (
            <button
                type={submit ? 'submit' : 'button'}
                data-active-state={active}
                {...props}
            >
                {children}
            </button>
        )
    },
    Image: ({ isPriority = false, src, alt, ...props }) => (
        <motion.div
            className="flex-center lg:full pointer-events-none absolute inset-0 -z-10 mx-auto select-none overflow-hidden lg:relative lg:inset-auto lg:max-w-[50vw] lg:shadow"
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
                    <g className="stroke-slate transition-[stroke] duration-250 ease-tween group-hover:stroke-slate-neon">
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
    Socials: ({ useText = false, ...props }) => {
        return links.map(({ name, href }, i) => (
            <motion.a
                key={`social-icon-${i}`}
                title={useText ? '' : name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ filter: `hue-rotate(${i * 20}deg)` }}
                custom={i + 1}
                {...props}
            >
                {useText ? (
                    <div className="flex-center socials-text-style group w-full gap-x-2 text-white/40  transition-colors duration-250 ease-tween will-change-transform hover:text-white">
                        <div className="relative h-[2em] w-[2em]">
                            <StyledComponents.Icon name={name} />
                        </div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 1.5 + i * 0.1 },
                            }}
                        >
                            {name}
                        </motion.span>
                    </div>
                ) : (
                    <StyledComponents.Icon name={name} />
                )}
            </motion.a>
        ))
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
                className={`group relative aspect-square h-full cursor-pointer text-white/40 hover:text-white ${dir2Trans[direction]}`}
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
    ExitButton: ({ size = 12, x = 0, y = 0, ...props }) => {
        const variants = {
            hidden: { rotate: 0, scaleX: 0 },
            show: (i = 1) => ({
                rotate: i * 45,
                scaleX: 1,
                transition: {
                    scaleX: { delay: 1, ease: 'backOut' },
                    default: { delay: 1.25, type: 'spring' },
                },
            }),
        }
        return (
            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: '1/1',
                    cursor: 'pointer',
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                {...props}
            >
                {[1, -1].map((i) => (
                    <motion.span
                        key={`exit-btn-span-${i}`}
                        className="absolute h-[4px] w-full rounded-full bg-current"
                        style={{ width: '105%' }}
                        variants={variants}
                        custom={i}
                    />
                ))}
            </motion.div>
        )
    },
    Background: ({ even = true }) =>
        [true, false].map((bool, i) => (
            <motion.div
                key={`decoration-${i}`}
                className={`flex-center absolute -z-10 h-3/4 w-full ${
                    bool ? 'top-0 bg-slate-40/25 ' : 'bottom-0 bg-slate-90/50'
                } ${
                    even
                        ? bool
                            ? 'left-0 origin-left rounded-br-full'
                            : ' right-0 origin-right rounded-tl-full'
                        : bool
                        ? 'right-0 origin-right rounded-bl-full'
                        : 'left-0 origin-left rounded-tr-full'
                }`}
                variants={variants.Background}
                custom={bool ? !even : even}
            />
        )),
}

export default StyledComponents
