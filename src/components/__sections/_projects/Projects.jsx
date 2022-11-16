import { motion } from 'framer-motion'
import Archive from './Archive'
import Featured from './_featured/Featured'
import { sectionContentVariants } from '@motion'

const Projects = ({ isMd, idx = 3, ...data }) => {
    const featuredData = { isMd: isMd, ...data.featuredData }
    const projectsData = { isMd: isMd, ...data.projectsData }

    return (
        <div className="flex-col-center mx-auto h-auto w-full max-w-[1440px] space-y-8 py-8 md:space-y-16 md:py-16">
            <div className="flex-col-top h-auto w-full">
                {isMd ? null : (
                    <motion.h6
                        className="relative mb-10"
                        variants={sectionContentVariants}
                    >
                        <span className="styled-underline -hue-rotate-60" />
                        Featured Projects
                    </motion.h6>
                )}
                <Featured isMd={isMd} {...featuredData} />
            </div>
            <Archive {...projectsData} />
        </div>
    )
}

export default Projects
