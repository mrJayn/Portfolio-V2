import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { toggleScrolling } from '@utils'

const ExitButton = ({ toggleCard }) => {
    return (
        <motion.div
            className="exitButtonAfter absolute z-10 m-2 aspect-square h-12 cursor-pointer rounded-md text-[48px] text-red/75 md:m-2   md:h-14 md:text-[56px] "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                toggleCard()
                toggleScrolling(true)
            }}
        >
            <HiX />
        </motion.div>
    )
}

export default ExitButton
