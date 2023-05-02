import { useRef } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import {
    AnimatePresence,
    motion,
    useAnimationControls,
    useInView,
} from 'framer-motion'
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

const Button = ({ children, ...props }) => {
    //e.currentTarget.classList.add('clicked')
    return (
        <motion.button
            data-styled-btn
            className="flex-center relative z-30 max-w-[90vw] cursor-pointer select-none tracking-xl text-black opacity-50 transition-opacity duration-250 ease-tween hover:opacity-100"
            {...props}
        >
            <span className="decoration pointer-events-none absolute inset-0 top-[15%] origin-top rounded-b-md rounded-t shadow-[inset_0_-2px,_inset_-2px_0,_inset_2px_0]" />
            <div className="content whitespace-nowrap px-6 text-heading-5 uppercase leading-1.75">
                {children}
            </div>
        </motion.button>
    )
}

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
        data-styled-indicator
        data-active={isActive}
        className={`flex-center relative -z-10 flex w-full min-w-[18ch] cursor-pointer select-none text-min duration-250 ease-tween max-lg:mt-auto max-lg:rounded-t-xl max-lg:text-center lg:max-w-none lg:rounded-r-xl
        ${
            isActive
                ? 'z-0 h-full bg-slate-30 text-white lg:w-[95%] lg:pl-[5%]'
                : '-z-10 h-[80%] bg-white text-slate-60 shadow-[inset_0_3px_3px_-3px,_inset_3px_0_3px_-3px,_inset_-3px_0_3px_-3px] hover:text-slate-neon lg:h-full lg:w-[90%] lg:shadow-[inset_0_3px_3px_-3px,_inset_0_-3px_3px_-3px,_inset_-3px_0_3px_-3px] lg:hover:bg-slate-10'
        }
        `}
        onClick={handleClick}
    >
        {children}
        <span className="x-decor inset-x-1/4 inset-y-0 lg:hidden" />
        <span className="y-decor inset-x-0 inset-y-1/4 max-lg:hidden" />
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
