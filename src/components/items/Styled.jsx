import { motion, useAnimate } from 'framer-motion'
import { socials } from '@config'
import Paths from './Paths'
import { pushPage } from '@utils'
import { useMediaQuery } from '@hooks'

function Styled_Button({ children, onClick = null, ...props }) {
    const [scope, animate] = useAnimate()
    const handleClick = async (e) => {
        await animate(scope.current, { scale: 0.9 }, { duration: 0.15 })
        if (onClick) onClick()
        animate(scope.current, { scale: 1 }, { delay: 0.15, duration: 0.15 })
    }

    return (
        <motion.button
            className=" flex-center relative z-30 aspect-[3/1] cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-lg bg-grey-95 p-[1.25em] text-grey shadow-lg shadow-black/50 transition-colors duration-250 ease-in-out hover:bg-grey-80 hover:text-white"
            onClick={handleClick}
            ref={scope}
            {...props}
        >
            {children}
        </motion.button>
    )
}
/*
<span className="decoration pointer-events-none absolute inset-0 top-[15%] origin-top rounded-b-md rounded-t shadow-[inset_0_-2px,_inset_-2px_0,_inset_2px_0] delay-[250ms] duration-500 ease-tween" />
*/
/* ========= */

const BackButton = () => (
    <motion.button
        data-styled
        className="group fixed left-1/2 top-0 flex aspect-[1/1] h-16 -translate-x-1/2 items-center max-lg:hidden"
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
        <span className="pointer-events-none absolute inset-0 rounded-full text-slate opacity-50 shadow-[inset_0_0_3px_3px] transition-[opacity] duration-250 ease-in group-hover:opacity-100" />

        {[0, 50, -50].map((deg, i) => (
            <motion.span
                key={`line${i}`}
                className="absolute left-1/4 h-[4px] rounded-r-full bg-grey-40 will-change-transform"
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
                            scaleX: deg === 0 ? { duration: 0.5 } : { delay: 0.25 },
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

const Icon = ({
    name,
    className = 'absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 fill-none stroke-slate-neon',
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <Paths name={name} />
    </svg>
)

const DecorationX = ({ isActive, showOverflow }) => (
    <span
        className={`x-decor pointer-events-none absolute inset-y-0 -z-10 duration-250 ease-tween ${''} bafter:absolute bafter:h-1/2 bafter:w-1/4 bafter:duration-250 bafter:ease-tween bafter:content-['']  ${''} before:absolute before:left-[-25%] before:rounded-br-full before:shadow-[10px_10px_0px_10px] bafter:bottom-0 ${''} after:right-[-25%] after:rounded-bl-full after:shadow-[-10px_10px_0px_10px] ${
            isActive ? 'inset-x-[1px] bafter:text-slate' : 'inset-x-1/4 bafter:text-grey-40 group-hover:bafter:text-grey-30'
        }  ${showOverflow ? '' : 'group-first-of-type:before:hidden group-last-of-type:after:hidden'}`}
    />
)
const DecorationY = ({ isActive, showOverflow }) => (
    <span
        className={`y-decor pointer-events-none absolute inset-x-0 -z-10 duration-250 ease-tween ${''} bafter:absolute bafter:left-0 bafter:h-1/3 bafter:w-1/4 bafter:duration-250 bafter:ease-tween bafter:content-[''] ${''} before:top-[-33%] before:rounded-bl-full before:shadow-[-10px_10px_0px_10px] ${''} after:bottom-[-33%] after:rounded-tl-full after:shadow-[-10px_-10px_0px_10px] ${
            isActive ? 'inset-y-[1px] bafter:text-slate' : 'inset-y-1/4 bafter:text-grey-40 group-hover:bafter:text-grey-30'
        } ${showOverflow ? '' : 'group-first-of-type:before:hidden group-last-of-type:after:hidden'}`}
    />
)
const Tabs = ({ isActive, className = '', toVerticalAt, children, ...onclick }) => {
    const isVertical = useMediaQuery(toVerticalAt)
    const showOverflow = /show-overflow/i.test(className)

    return (
        <li
            data-active={isActive}
            className={`group full flex-center relative -z-10 cursor-pointer select-none transition-[transform,color,background-color,z-index] duration-250 ease-tween data-active:z-10 data-active:bg-slate data-active:text-white data-inactive:z-0 data-inactive:bg-grey-40 data-inactive:text-black  data-inactive:hover:bg-grey-30 data-inactive:hover:text-black ${
                isVertical
                    ? 'justify-start rounded-r-xl pl-[20%] data-active:translate-x-[0%] data-inactive:translate-x-[-15%] lg:data-inactive:hover:translate-x-[-7.5%]'
                    : `rounded-t-xl text-center data-active:translate-y-[0%] data-inactive:translate-y-[20%]`
            } ${className}`}
            {...onclick}
        >
            {children}
            {isVertical ? (
                <DecorationY isActive={isActive} showOverflow={showOverflow} />
            ) : (
                <DecorationX isActive={isActive} showOverflow={showOverflow} />
            )}
        </li>
    )
}

const Socials = ({ className = '', variants }) =>
    socials.map(({ name, href }, i) => (
        <motion.a
            key={`social-icon-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className={`flex-center relative aspect-[1/1] h-[2.35em] max-h-full rounded-lg stroke-black p-2 ${className}`}
            variants={variants}
            custom={i + 1}
        >
            <Icon name={name} className="h-full fill-none" />
        </motion.a>
    ))

const StyledComponents = {
    BackButton: BackButton,
    Button: Styled_Button,
    Icon: Icon,
    Socials: Socials,
    Tabs: Tabs,
}
export default StyledComponents
