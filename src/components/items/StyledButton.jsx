import { useAnimation, motion } from 'framer-motion'
import { toggleScrolling } from '@utils'

const Styled_button = ({
    children,
    href = null,
    action = null,
    btnStyle = '',
    textStyle = '',
    toTextSm = false,
    toTextMd = false,
    scroll = true,
    useInView = false,
    ...props
}) => {
    const controls = useAnimation()

    // toText CSS Media
    const [hideBtnMedia, showTextMedia] = [
        toTextMd ? 'md:hidden' : toTextSm ? 'sm:hidden' : '',
        toTextMd ? 'md:block' : toTextSm ? 'sm:block' : '',
    ]

    // DEFAULT Classname ( CSS )
    // color-related styles are inline
    btnStyle = `flex-center relative z-10  select-none rounded-3xl text-center text-md font-semibold tracking-wide md:text-lg ${btnStyle}`
    // onClick Func()
    const handleOnClick = (e) => {
        if (href !== null) {
            e.preventDefault()
            setTimeout(() => {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }, 50)
        } else if (action !== null) {
            action()
            toggleScrolling(scroll)
        }
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
    const animProps = useInView
        ? {
              initial: { opacity: 0, scale: 0.65 },
              whileInView: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' },
              },
              viewport: { once: true },
          }
        : null

    props = {
        onClick: (e) => handleOnClick(e),
        ...animProps,
        ...props,
    }
    return (
        <>
            <motion.button
                className={`bg-gradient text-grey-darker/60 brightness-150 hover:text-black-dark dark:text-grey-light/60 dark:brightness-125 dark:contrast-125 dark:hover:text-white ${btnStyle} ${hideBtnMedia}`}
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
            {/** toText Media **/}
            <motion.p
                className={`styled-link hidden ${textStyle} ${showTextMedia} `}
                whileHover={{ y: -2, transition: { delay: 0.15 } }}
                {...props}
            >
                {children}
            </motion.p>
        </>
    )
}
export default Styled_button
