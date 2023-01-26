import { AnimatePresence, motion } from 'framer-motion'
import { experienceMotion as variants } from '@motion'

const Label = ({ Title, isActive, ...onClick }) => (
    <div
        className="flex-btw relative z-10 cursor-pointer overflow-hidden rounded-tr-lg bg-gradient-to-r from-slate/75 via-grey/50 to-grey/50 p-2 font-medium text-slate-neon/75 duration-500 ease-tween"
        style={{
            backgroundSize: '200%',
            backgroundPosition: isActive ? '0%' : '100%',
            boxShadow: isActive ? '0px 0 1px -4px' : '-8px 0 1px -4px',
            transitionDelay: isActive ? '0s' : '0.2s',
        }}
        {...onClick}
    >
        <span
            className={`select-none py-2 text-start font-medium leading-none ${
                isActive ? 'pl-3 text-white' : 'pl-0 text-grey-10/75'
            } duration-500 ease-tween`}
        >
            {Title}
        </span>
    </div>
)

const Accordion = ({ children, data, isActive, ...onClick }) => (
    <>
        <motion.div
            layout
            className="relative mb-2 w-full last-of-type:mb-0 md:mb-4"
        >
            <Label Title={data.title} isActive={isActive} {...onClick} />
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        key={`job-${data.title}`}
                        className="relative w-full overflow-hidden rounded-bl-xl border-l-2 border-l-slate-neon/50 bg-white-dark"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants.Accordion}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    </>
)

export default Accordion
