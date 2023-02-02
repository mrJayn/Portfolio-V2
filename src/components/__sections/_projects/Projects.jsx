import Archive from './Archive'
import Featured from './Featured'

const Projects = ({ ...data }) => {
    return (
        <>
            <Featured {...data} />
            <Archive key="projects-archive" {...data} />
        </>
    )
}

export default Projects
