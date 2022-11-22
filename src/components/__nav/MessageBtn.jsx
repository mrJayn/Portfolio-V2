import { motion } from 'framer-motion'
import { Styled_Icon } from '@components'

const MessageBtn = ({ isHome, router }) => (
    <motion.button
        key="send-message-btn"
        className="group"
        initial={false}
        animate={isHome ? 'show' : 'hidden'}
        variants={{ show: { x: '0%' }, hidden: { x: '110%' } }}
        transition={{
            delay: isHome ? 1.75 : 0,
            ease: isHome ? 'backOut' : 'backIn',
        }}
        onClick={() =>
            router.push('/contactpage', 'Contact', { scroll: false })
        }
    >
        <Styled_Icon
            name="Message"
            size={38}
            className="stroke-grey-60 group-hover:stroke-white"
        />
    </motion.button>
)
export default MessageBtn
