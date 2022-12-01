import { AnimatePresence, motion } from 'framer-motion'
import { experienceMotion as variants } from '@motion'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Label = ({ Title, isActive, ...onClick }) => (
    <div
        className={`flex-btw relative z-10 cursor-pointer overflow-hidden whitespace-nowrap rounded-r-lg border-l-2 border-grey-70 p-2 duration-250 ease-tween  ${
            isActive
                ? 'bg-slate-30/20 text-white'
                : 'bg-slate-30/5 text-grey-60'
        }`}
        {...onClick}
    >
        <p
            className={`select-none py-1 text-start sm:py-2 ${
                isActive ? 'pl-4 text-white' : 'px-2'
            } duration-500 ease-tween`}
        >
            {Title}
        </p>
        <div
            className={`aspect-square h-full px-1 text-white duration-250 ease-tween ${
                isActive ? 'translate-y-4 opacity-0' : 'opacity-100'
            } md:flex-center md:h-full`}
        >
            <BsChevronDoubleDown />
        </div>
    </div>
)

const Accordion = ({ children, data, isActive, ...onClick }) => (
    <>
        <motion.div layout className="relative mb-4 w-full last-of-type:mb-0">
            <Label Title={data.title} isActive={isActive} {...onClick} />
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        key={`job-${data.title}`}
                        className="relative w-full overflow-hidden border-l-2 border-l-grey"
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
