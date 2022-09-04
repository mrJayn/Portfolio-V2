import { useAnimation, motion } from 'framer-motion'
import { toggleScrolling } from '@utils'

const Styled_button = ({
    children,
    href = null,
    action = null,
    allowScroll = true,
    useInView = false,
    classNames,
    ...props
}) => {
    const controls = useAnimation()
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

    const handleOnClick = (e) => {
        if (href !== null) {
            e.preventDefault()
            setTimeout(() => {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }, 250)
        } else if (action !== null) {
            action()
            toggleScrolling(allowScroll)
        } else {
            return
        }
    }

    classNames = `flex-center relative z-10  select-none rounded-3xl text-center text-md font-semibold tracking-wide md:text-lg ${classNames}`

    props = {
        onClick: (e) => handleOnClick(e),
        ...animProps,
        ...props,
    }

    return (
        <motion.button
            className={`bg-gradient text-charcoal brightness-150 hover:text-black-dark dark:text-lightgrey dark:brightness-125 dark:contrast-125 dark:hover:text-white ${classNames}`}
            style={{ transition: 'all 0.25s ease-in, transform 0.1s' }}
            onHoverStart={() => controls.start({ opacity: 1 })}
            onHoverEnd={() => controls.start({ opacity: 0 })}
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
    )
}
export default Styled_button
