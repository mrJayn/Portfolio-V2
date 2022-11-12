import { motion } from 'framer-motion'
import { contactVariants as variants } from '@motion'

const Signature = () => {
    const currentYear = new Date().getFullYear()
    return (
        <motion.div
            className="z-10 w-screen bg-background"
            initial="hidden"
            animate="show"
            variants={variants.Signature}
        >
            <div className="flex-col-center mt-2 border-t-2 border-t-grey py-1 xs:my-2 xs:py-2">
                <p className="text-[12px] uppercase text-grey-60">
                    Designed & Built by &nbsp;
                    <span className="font-robotoMono text-[15px] capitalize tracking-tighter text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-[12px] uppercase text-grey-60">
                    &#169; Copyright {currentYear}.
                </p>
            </div>
        </motion.div>
    )
}
export default Signature
