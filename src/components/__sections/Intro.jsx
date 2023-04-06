import { motion } from 'framer-motion'

import { introVariants } from '@motion'
import { PageLink, Title } from '@components'

const Intro = ({ ...linkProps }) => (
    <>
        <div className="flex-col-center absolute top-[25%]">
            <Title />
            <motion.h2 className="mb-[10vh]" variants={introVariants.SubTitle}>
                Portfolio
            </motion.h2>
            <PageLink
                id="intro"
                sid="projects"
                variants={introVariants.Btn}
                {...linkProps}
            >
                VIEW MY PROJECTS
            </PageLink>
        </div>
    </>
)

export default Intro
