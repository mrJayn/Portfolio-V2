import { useAnimation, motion } from 'framer-motion'
import { toggleScrolling } from '@utils'

const Styled_button = ({
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
                    className={`flex-center relative z-10  select-none rounded-3xl bg-gradient text-center text-md font-semibold tracking-wide text-grey-darker/60 brightness-150 hover:text-black-dark dark:text-grey-light/60 dark:brightness-125 dark:contrast-125 dark:hover:text-white md:text-lg ${btnStyle}`}
                    style={{ transition: 'all 0.25s ease-in, transform 0.1s' }}
                    onHoverStart={mouseover}
                    onHoverEnd={mouseout}
                    whileTap={{ scale: 0.95, originY: 0.5 }}
                    {...props}
                >
                    <motion.span
                        className="full absolute top-0 left-0 z-[-1] rounded-3xl bg-gradient blur-md filter"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ opacity: { type: 'spring' } }}
                    />
                    {children}
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
export default Styled_button
