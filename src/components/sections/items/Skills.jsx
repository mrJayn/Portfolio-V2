import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

import data from '@data'

const Skills = ({ isOpen, close, parent, child }) => {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    className="skills useInView"
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
                    <h3>Tech I&apos;ve worked with recently</h3>
                    <ul>
                        {data.skills.map((i) => (
                            <li key={`skill-item-${i.item}`}>
                                <div>
                                    <Image
                                        className="skill-img"
                                        src={i.url}
                                        alt={`${i.skill}-image`}
                                        layout="intrinsic"
                                        height={15}
                                        width={15}
                                    />
                                </div>
                                <p>{i.skill}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Skills
