import { motion, AnimatePresence } from 'framer-motion'
import { Styled_Icon } from '@components'
import { navVariants } from '@motion'
import { config } from '@config'

const MessageBtn = ({ isHome, router }) => (
    <AnimatePresence mode="wait">
        {isHome ? (
            <motion.button
                key="send-message-btn"
                className="group"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={navVariants.MessageBtn}
                onClick={() =>
                    router.push('/contactpage', 'Contact', { scroll: false })
                }
            >
                <Styled_Icon
                    name={'Message'}
                    size={38}
                    styled={false}
                    className="stroke-grey-60 group-hover:stroke-white"
                />
            </motion.button>
        ) : (
            <motion.button
                key="send-email-btn"
                className="group"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={navVariants.MessageBtn}
                onClick={() =>
                    (window.location.href = 'mailto:' + config.email)
                }
            >
                <Styled_Icon
                    name={'Email'}
                    size={38}
                    styled={false}
                    className="stroke-grey-60 group-hover:stroke-white"
                />
            </motion.button>
        )}
    </AnimatePresence>
)
export default MessageBtn
