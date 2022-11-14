import { motion } from 'framer-motion'
import { Social_Icons } from '@components'

const Socials = ({ ...motionProps }) => {
    return (
        <div className="flex-col-bottom h-auto w-full rounded-t-[6rem] px-5 pt-5 contrast-150">
            <div className="flex-evenly h-12 w-screen max-w-[1024px]">
                <Social_Icons size={40} />
            </div>
            <motion.div className="z-10 w-full" {...motionProps}>
                <div className="flex-col-center my-2 border-t-2 border-t-grey py-2">
                    <p className="text-[12px] uppercase text-grey-60">
                        Designed & Built by &nbsp;
                        <span className="font-robotoMono text-[15px] capitalize tracking-tighter text-white">
                            Michael Jayne
                        </span>
                    </p>
                    <p className="text-[12px] uppercase text-grey-60">
                        &#169; Copyright {new Date().getFullYear()}.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
export default Socials
