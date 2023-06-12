import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Featured, Styled } from '@components'

const ArchiveLink = () => {
    const router = useRouter()

    const goToArchive = (e) => {
        e.currentTarget.classList.add('clicked')
        setTimeout(() => {
            router.push('/projects', `/projects`, { scroll: false })
        }, 1000)
    }

    return (
        <motion.div
            className="flex-col-center my-[15vh] gap-y-4"
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeIn' } }}
        >
            <Styled.Button onClick={goToArchive}>
                <span className="text-[1.66em] leading-[3]">View All Projects</span>
            </Styled.Button>
        </motion.div>
    )
}

const Projects = ({ ...data }) => {
    return (
        <div id="projects" className="flex-col-center w-full gap-12">
            <Featured {...data} />
            <ArchiveLink />
        </div>
    )
}

export default Projects
