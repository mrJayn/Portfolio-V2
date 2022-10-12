import { useAnimation, motion } from 'framer-motion'
import { toggleScrolling } from '@utils'

const Styled_Button = ({
    children,
    action = null,
    toTextAt = false,
    allowScroll = true,
    btnStyle = '',
    textStyle = '',
    animateOn = null,
    ...props
}) => {
    const controls = useAnimation()

    // onClick Func()
    const handleOnClick = (e) => {
        if (action === null) return
        action(e)
        toggleScrolling(allowScroll)
    }

    // whileHover ANIM Variants
    const mouseover = () => {
        controls.start({
            opacity: 1,
            transition: { duration: 0.45, ease: 'easeOut' },
        })
    }
    const mouseout = () => {
        controls.start({
            opacity: 0,
            transition: { duration: 0.45, ease: 'easeIn' },
        })
    }

    // whileInView ANIM PROPS
    const motionProps =
        animateOn == 'inView'
            ? {
                  initial: 'hidden',
                  whileInView: 'show',
                  viewport: { once: true },
              }
            : animateOn !== null
            ? {
                  initial: false,
                  animate: animateOn ? 'show' : 'hidden',
              }
            : null

    // Final Props
    props = {
        onClick: (e) => handleOnClick(e),
        variants: {
            hidden: { opacity: 0, scale: 0.75 },
            show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, delay: 0.25, ease: 'easeOut' },
            },
        },
        ...motionProps,
        ...props,
    }
    return (
        <>
            {/** BUTTON DISLAY **/}
            {!toTextAt && (
                <motion.button
                    className={`flex-center group relative z-10  select-none rounded-3xl bg-gradient brightness-150 dark:brightness-125 dark:contrast-125 md:text-lg ${btnStyle}`}
                    onHoverStart={mouseover}
                    onHoverEnd={mouseout}
                    whileTap={{ scale: 0.95, originY: 0.5 }}
                    {...props}
                >
                    <motion.span
                        className="absoluteFull z-[-1] rounded-3xl bg-gradient blur-md filter"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ opacity: { type: 'spring' } }}
                    />
                    <span className="text-md font-semibold tracking-wide text-grey-70 duration-250 ease-in group-hover:text-white">
                        {children}
                    </span>
                </motion.button>
            )}
            {/** TEXT DISPLAY **/}
            {toTextAt && (
                <motion.p
                    className={`styled-link ${textStyle}`}
                    whileHover={{ y: -2, transition: { delay: 0.15 } }}
                    {...props}
                >
                    {children}
                </motion.p>
            )}
        </>
    )
}
export default Styled_Button
