import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { introVariants } from '@motion'
import { PageLink } from '@components'

// Software Engineer. A self-taught developer with an interest in Computer Science.
const Intro = ({ ...linkProps }) => {
    return (
        <div className="flex-col-evenly absolute inset-x-0 inset-y-[15%] max-lg:text-center">
            <div className="flex-col-left">
                <motion.h2 variants={introVariants.Text2}>
                    Software Engineer.
                </motion.h2>
                <motion.div role="subtitle" variants={introVariants.Text2}>
                    A self-taught developer.
                </motion.div>
            </div>
            <PageLink
                id="intro"
                sid="projects"
                variants={introVariants.Btn}
                {...linkProps}
            >
                VIEW MY PROJECTS
            </PageLink>
        </div>
    )
}

export default Intro
