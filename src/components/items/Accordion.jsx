import { AnimatePresence, motion } from 'framer-motion'
import { experienceMotion as variants } from '@motion'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Label = ({ Title, isActive, ...onClick }) => (
    <div
        className={`flex-btw relative z-10 cursor-pointer overflow-hidden  rounded-r-lg border-l-[3px] border-slate-neon/50 p-2 font-medium duration-250 ease-tween  ${
            isActive ? 'bg-slate-30/50' : 'bg-slate-30/20'
        }`}
        {...onClick}
    >
        <span
            className={`select-none py-1 text-start sm:py-2 ${
                isActive ? 'pl-4 text-slate-neon' : 'px-2 text-slate'
            } duration-500 ease-tween`}
        >
            {Title}
        </span>
        <div
            className={`aspect-square h-full px-1 text-slate-neon duration-250 ease-tween ${
                isActive ? 'translate-y-4 opacity-0' : 'opacity-100 delay-300'
            } md:flex-center md:h-full`}
        >
            <BsChevronDoubleDown />
        </div>
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
                        className="relative w-full overflow-hidden rounded-b-3xl border-l-2 border-l-slate-neon/50 bg-white"
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
