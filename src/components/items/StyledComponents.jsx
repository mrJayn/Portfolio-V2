import { motion } from 'framer-motion'
import Paths from './Paths'
import { styledComponentsVariants as variants } from '@motion'
import Image from 'next/image'
import { theme } from 'tailwind.config'

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
const Icon = ({ name, size = '100%', fill = 'none', className = '' }) => {
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
}

const StyledComponents = {
    BackButton: ({ backToHome }) => (
        <motion.button
            className="fixed top-2 left-2 z-50 aspect-[1/1] w-24 cursor-pointer overflow-hidden rounded-xl bg-black/50  text-grey-30 backdrop-blur-sm hover:text-white max:left-[calc(8px+(25vw-360px))]"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.BackBtn.Wrapper}
            whileHover={{ x: -2.5 }}
            whileTap={{ scale: 0.9, originX: 0.5 }}
            onClick={() => backToHome()}
        >
            {[0, 45, -45].map((degrees, i) => (
                <motion.span
                    key={`back-btn-component-${i}`}
                    className={`absolute top-[45%] left-[15%] h-1.5 rounded-full bg-current transition-colors duration-250 ease-tween ${
                        degrees == 0 ? 'ml-[3px] w-[60%]' : 'w-[35%]'
                    }`}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={variants.BackBtn.Line}
                    custom={degrees}
                />
            ))}
        </motion.button>
    ),
    Background: ({ even = true, zIndex = -1 }) =>
        [true, false].map((bool, i) => (
            <motion.div
                key={`decoration-${i}`}
                className={`flex-center absolute h-3/4 w-full ${
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
                style={{ zIndex: zIndex }}
                variants={variants.Background}
                custom={bool ? !even : even}
            />
        )),
    Button: ({ children, ...props }) => {
        return (
            <motion.button
                data-styled-btn
                className="flex-center z-30 min-w-min max-w-full cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-md px-6 py-3 font-robotoMono text-button-sm uppercase tracking-2xl text-white opacity-75 shadow-sm transition-opacity duration-150 ease-in hover:opacity-100 max-lg:mx-auto max-lg:w-[50vw] lg:px-24 lg:text-button-lg"
                style={{
                    backgroundColor: theme.colors.grey[60],
                }}
                whileTap={{ scale: 0.9 }}
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
    Featured_Image: ({
        LG = false,
        src,
        alt,
        isHome = false,
        ...motionProps
    }) => (
        <motion.div
            key={`featured-image-${alt}`}
            className={
                isHome
                    ? 'full relative -z-10 overflow-hidden rounded-4xl'
                    : `relative aspect-[16/9] w-full select-none lg:mt-8 lg:max-w-[888px] ${
                          LG ? 'hidden lg:block' : 'lg:hidden'
                      }`
            }
            {...motionProps}
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                className="object-cover object-top"
            />
        </motion.div>
    ),
    Icon: Icon,
    Icon_Links: ({ iconData, ...props }) =>
        iconData.map(([name, href], i) => {
            const title = {
                GitHub: 'View on GitHub',
                External: 'Visit Project',
            }[name]

            return (
                <motion.div
                    key={`icon-link-${i}`}
                    className="relative flex aspect-square h-full"
                    custom={!props.custom && i}
                    {...props}
                >
                    <motion.a
                        key={i}
                        href={href}
                        title={title}
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="relative h-full w-full"
                        whileHover={{ y: -2.5 }}
                        whileTap={{ y: -3.5 }}
                    >
                        <Icon name={name} />
                    </motion.a>
                </motion.div>
            )
        }),
    SectionLinks: ({ activeSection = 0, className, action = null, ...props }) =>
        ['about', 'experience', 'projects', 'contact', 'my Resume'].map(
            (item, i) => {
                const itemProps = item.includes('Resume')
                    ? { href: '/assets/misc/resume2022.jpg', target: '_blank' }
                    : {
                          onClick: () => {
                              document.getElementById(item).scrollIntoView({
                                  behavior: 'smooth',
                              })
                              if (action !== null) action()
                          },
                      }
                return (
                    <motion.li
                        key={`link-${i}`}
                        className={`${className} cursor-pointer whitespace-nowrap font-medium capitalize ${
                            activeSection === i + 1
                                ? 'md:text-white/80'
                                : 'md:text-white/40'
                        }`}
                        custom={i + 1}
                        {...props}
                    >
                        <a {...itemProps}>{item}</a>
                    </motion.li>
                )
            }
        ),
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
    Technolgy: ({ techs, className = '', ...props }) =>
        techs.map((item, i) => (
            <motion.span
                key={`tech-item-${i}`}
                className={
                    className == ''
                        ? 'relative w-full whitespace-nowrap text-center font-medium even:border-x-2 max-md:text-[0.9em] max-md:leading-[1.666rem] lg:px-4'
                        : className
                }
                custom={!props.custom && i}
                {...props}
            >
                {item}
            </motion.span>
        )),
}

export default StyledComponents
