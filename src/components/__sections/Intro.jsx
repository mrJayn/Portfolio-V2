import { motion } from 'framer-motion'
import { introVariants } from '@motion'
import { theme } from 'tailwind.config'

const Intro = () => {
    return (
        <div
            id="intro-content"
            className="flex-col-top h-[125vh] w-screen pt-[max(80px,18vh)]"
            style={{ perspective: '500px', perspectiveOrigin: '50% 50%' }}
        >
            <h1>Mike Jayne</h1>
            <p>
                Software Engineer. A self-taught developer with an interest in
                Computer Science.
            </p>
            <motion.div className="my-4 flex" variants={introVariants.Text}>
                <span className="text-[2em]"> &darr;</span>
                <span>{`Chemical Engineer \nSelf-taught developer`}</span>
            </motion.div>
        </div>
    )
}

export default Intro
