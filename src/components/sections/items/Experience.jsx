import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

const Experience = ({ experience, setExperience, parent, child }) => {
    return (
        <AnimatePresence>
            {experience && (
                <motion.div
                    className="experience"
                    id="exp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="exitBtn"
                        onClick={close}
                        whileHover={{ scale: 1.1 }}
                        variants={child}
                    >
                        <HiX size={32} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default Experience
