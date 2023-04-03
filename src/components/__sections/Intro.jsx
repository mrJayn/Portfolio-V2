import { motion } from 'framer-motion'

import { introVariants } from '@motion'
import { PageLink, Title } from '@components'

const Intro = ({ ...linkProps }) => (
    <>
        <div className="flex-col-center w-full">
            <Title />
            <motion.h2 variants={introVariants.SubTitle}>Portfolio</motion.h2>
        </div>
        <PageLink
            id="intro"
            sid="projects"
            variants={introVariants.Btn}
            {...linkProps}
        >
            VIEW MY PROJECTS
        </PageLink>
    </>
)

export default Intro
