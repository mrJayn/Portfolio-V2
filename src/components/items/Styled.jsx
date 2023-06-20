import { motion, useAnimate } from 'framer-motion'
import { useMediaQuery } from '@hooks'

/* ===== Button ===== */
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

/* ===== Tabs ===== */
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

const StyledComponents = {
    Button: Styled_Button,
    Tabs: Tabs,
}

export default StyledComponents
