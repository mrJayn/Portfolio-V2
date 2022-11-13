import { motion, AnimatePresence } from 'framer-motion'
import { Styled_Icon } from '@components'
import { navVariants } from '@motion'

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
                    className="stroke-grey-60 group-hover:stroke-white"
                />
            </motion.button>
        ) : null}
    </AnimatePresence>
)
export default MessageBtn
