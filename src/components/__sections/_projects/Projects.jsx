import { Section, Card, Featured, All_Projects } from '@components'

const Projects = ({ ...data }) => {
    const featuredData = {
        globalControls: data.globalControls,
        ...data.featuredData,
    }

    const projectsData = { ...data.projectsData }

    // <Featured key="featured-projects" {...featuredData} />,
    const components = [<All_Projects key="all-projects" {...projectsData} />]

    return <All_Projects key="all-projects" {...projectsData} />
}

export default Projects
