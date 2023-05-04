import { motion } from 'framer-motion'
import { socials } from '@config'
import Paths from './Paths'
import { pushPage } from '@utils'

const BackButton = () => (
    <motion.button
        data-styled
        className="group absolute top-20 left-4 flex aspect-[1/1] h-full items-center"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
            hidden: {
                opacity: 0,
                transition: {
                    when: 'afterChildren',
                    duration: 0.5,
                    ease: 'easeIn',
                },
            },
            show: { opacity: 1 },
        }}
        onClick={(e) => {
            e.currentTarget.classList.add('clicked')
            pushPage('/')
        }}
    >
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-50 shadow-[inset_0_0_10px_-2px] transition-[opacity] duration-250 ease-in group-hover:opacity-100" />

        {[0, 50, -50].map((deg, i) => (
            <motion.span
                key={`line${i}`}
                className="absolute left-1/4 h-[4px] rounded-r-full bg-nav will-change-transform"
                style={{
                    width: `${[55, 35, 35][i]}%`,
                    originX: 0,
                    originY: [1, -0.5, 1.5][i],
                }}
                variants={{
                    hidden: (deg) => ({
                        scaleX: 0,
                        rotate: 0,
                        transition: {
                            scaleX:
                                deg === 0 ? { duration: 0.5 } : { delay: 0.25 },
                            rotate: { duration: 0.25 },
                        },
                    }),
                    show: (deg) => ({
                        scaleX: 1,
                        rotate: deg,
                        transition: {
                            scaleX: { duration: 0.5 },
                            rotate: { delay: 0.25, duration: 0.5 },
                        },
                    }),
                }}
                custom={deg}
            />
        ))}
    </motion.button>
)

const Button = ({ children, ...props }) => (
    <motion.button
        data-styled-btn
        className="flex-center relative z-30 max-w-[90vw] cursor-pointer select-none tracking-xl text-black opacity-50 transition-opacity duration-250 ease-tween hover:opacity-100"
        {...props}
    >
        <span className="decoration pointer-events-none absolute inset-0 top-[15%] origin-top rounded-b-md rounded-t shadow-[inset_0_-2px,_inset_-2px_0,_inset_2px_0] delay-[250ms] duration-500 ease-tween" />
        <div className="content whitespace-nowrap px-6 text-heading-5 uppercase leading-1.75 delay-[250ms] duration-500 ease-tween">
            {children}
        </div>
    </motion.button>
)

const Icon = ({ name }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 fill-none stroke-slate-neon linecap-round linejoin-round"
    >
        <Paths name={name} />
    </svg>
)

const Indicators = ({ isActive, handleClick, children }) => (
    <li
        className={`flex-center group relative -z-10 flex cursor-pointer select-none text-min duration-250 ease-tween max-lg:mt-auto max-lg:min-w-[18ch] max-lg:rounded-t-xl max-lg:p-2 max-lg:text-center lg:justify-start lg:rounded-r-xl ${
            isActive
                ? 'z-0 h-full bg-slate-30 text-white lg:w-[115%] lg:pl-[15%] lg:pr-[10%]'
                : '-z-10 h-[80%] bg-slate-5 text-slate-60 lg:h-full lg:w-[95%] lg:pl-[5%] lg:hover:bg-slate-10 lg:hover:text-slate-neon'
        }`}
        onClick={handleClick}
    >
        {children}
        <span
            className={`x-decor pointer-events-none absolute inset-y-0 -z-10 duration-250 ease-tween lg:hidden ${''} before:absolute before:bottom-0 before:left-[-25%] before:h-1/2 before:w-1/4 before:rounded-br-full before:shadow-[20px_10px_0px_10px] before:duration-250 before:ease-tween before:content-[''] group-first-of-type:before:hidden ${''} after:absolute after:bottom-0 after:right-[-25%] after:h-1/2 after:w-1/4 after:rounded-bl-full after:shadow-[-20px_10px_0px_10px] after:duration-250 after:ease-tween after:content-[''] group-last-of-type:after:hidden ${
                isActive
                    ? 'inset-x-0.5 before:text-slate-30 after:text-slate-30'
                    : 'inset-x-1/4 before:text-slate-5 after:text-slate-5'
            }`}
        />
        <span
            className={`y-decor pointer-events-none absolute inset-x-0 -z-10 duration-250 ease-tween max-lg:hidden ${''} before:absolute before:left-0 before:top-[-33%] before:h-1/3 before:w-1/4 before:rounded-bl-full before:shadow-[-10px_10px_0px_10px] before:duration-250 before:ease-tween before:content-[''] group-first-of-type:before:hidden ${''} after:absolute after:left-0 after:bottom-[-33%] after:h-1/3 after:w-1/4 after:rounded-tl-full after:shadow-[-10px_-10px_0px_10px] after:duration-250 after:ease-tween after:content-[''] group-last-of-type:after:hidden ${
                isActive
                    ? 'inset-y-0.5 before:text-slate-30 after:text-slate-30'
                    : 'inset-y-1/4 before:text-slate-5 after:text-slate-5 group-hover:before:text-slate-10 group-hover:after:text-slate-10'
            }`}
        />
    </li>
)

const Socials = ({ className = '', variants }) =>
    socials.map(({ name, href }, i) => (
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
            <Icon name={name} />
        </motion.a>
    ))

const StyledComponents = {
    BackButton: BackButton,
    Button: Button,
    Icon: Icon,
    Indicators: Indicators,
    Socials: Socials,
}
export default StyledComponents
