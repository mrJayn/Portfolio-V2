import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { resumeVars } from 'src/utils/fmVariants'
import { useDimensions } from 'src/hooks/useDimensions'
import { FaCopy, FaPrint, FaSave } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

const icons = [FaCopy, MdSend, FaPrint, FaSave]

const ControlsBtn = ({ isOpen, lineProps = null, ...props }) => {
    lineProps = {
        cx: '2',
        cy: '2',
        r: '3',
        x1: '0',
        x2: '4',
        y1: '2',
        y2: '2',
        strokeWidth: 4,
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
        initial: 'closed',
        animate: isOpen ? 'opened' : 'closed',
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 25,
        },
        ...lineProps,
    }
    const unitSize = 4

    return (
        <motion.div
            className={`toggle-btn ${isOpen && 'opened'}`}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={resumeVars.btnWrap}
        >
            <motion.svg
                viewBox={`0 0 ${unitSize} ${unitSize}`}
                overflow="visible"
                preserveAspectRatio="none"
                width={24}
                height={24}
                {...props}
            >
                <motion.circle
                    variants={resumeVars.btn.circle}
                    {...lineProps}
                    strokeWidth={3}
                />
                <motion.line variants={resumeVars.btn.top} {...lineProps} />
                <motion.line variants={resumeVars.btn.bottom} {...lineProps} />
            </motion.svg>
        </motion.div>
    )
}

const ResumeControls = ({ state }) => {
    return (
        <div className="controls-wrap">
            <AnimatePresence exitBeforeEnter>
                {state && (
                    <motion.div
                        className="controls-menu"
                        initial={{
                            opacity: 0,
                            scaleY: 0.15,
                            originY: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scaleY: 1,
                            originY: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scaleY: 0,
                            originY: 0,
                            transition: {
                                delay: 0.5,
                                duration: 0.25,
                            },
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <motion.ul
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={resumeVars.stagger}
                        >
                            {icons.map((x, i) => {
                                const Icon = icons[i]
                                return (
                                    <motion.li
                                        key={`action-${i}`}
                                        variants={resumeVars.listItem}
                                        custom={i}
                                    >
                                        <Icon size={30} />
                                    </motion.li>
                                )
                            })}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const ResumeActions = {
    ControlsBtn: ControlsBtn,
    ResumeControls: ResumeControls,
}
export default ResumeActions
