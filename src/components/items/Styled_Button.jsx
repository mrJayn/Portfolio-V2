import { motion } from 'framer-motion'
import { toggleScrolling } from '@utils'

const Styled_Button = ({
    children,
    action = null,
    toTextAt = false,
    allowScroll = true,
    even = null,
    textStyle = '',
    animateOn = null,
    variants,
    ...props
}) => {
    // onClick Func()
    const handleOnClick = (e) => {
        const btn = e.currentTarget
        btn.classList.toggle('clicked')
        if (action === null) return
        action(e)
        toggleScrolling(allowScroll)
        setTimeout(() => {
            btn.classList.toggle('clicked')
        }, 1000)
    }

    // Final Props
    props = {
        variants:
            variants == null
                ? {
                      hidden: { opacity: 0, scale: 0.75 },
                      show: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.35, type: 'spring' },
                      },
                  }
                : variants,
        ...props,
    }
    /**
     * large
     *      width: 300px
     * small
     *      width: 150px
     */
    return (
        <>
            {/** BUTTON DISLAY **/}
            {!toTextAt && (
                <>
                    <motion.div
                        className={`flex-center relative z-10 w-[75vw] min-w-[150px] max-w-[300px] cursor-pointer select-none rounded-3xl bg-gradient_title py-1 leading-10 shadow-inset contrast-150 sm:px-6 sm:py-2 md:w-min md:whitespace-nowrap md:px-10 lg:px-16`}
                        style={{
                            color: '#ccc',
                            backgroundSize: '300%',
                            backgroundPosition: '75%',
                        }}
                        whileHover={{
                            color: '#fff',
                            backgroundPosition: '25%',
                        }}
                        transition={{ type: 'spring', bounce: 0 }}
                        onClick={handleOnClick}
                        {...props}
                    >
                        <span className="bg-background bg-clip-text text-md font-semibold tracking-wide md:text-lg">
                            {children}
                        </span>
                    </motion.div>
                </>
            )}
            {/** TEXT DISPLAY **/}
            {toTextAt && (
                <p
                    className={`styled_link relative cursor-pointer px-1 text-xl font-semibold ${textStyle}`}
                    onClick={handleOnClick}
                    {...props}
                >
                    {children}
                </p>
            )}
        </>
    )
}
export default Styled_Button

/**
 *      OLD STYLE
 * <>
                    <motion.button
                        className={`styledBtn-btnStyle flex-center text-md font-semibold tracking-wide md:text-lg ${btnStyle}`}
                        onClick={handleOnClick}
                        style={{ color: '#fff4' }}
                        whileHover={{
                            y: -2.5,
                            color: '#ffff',
                        }}
                        transition={{
                            duration: 0.45,
                            type: 'spring',
                            bounce: 0,
                        }}
                        {...props}
                    >
                        {children}
                    </motion.button>
                </>
 */
