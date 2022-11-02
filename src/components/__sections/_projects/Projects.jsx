import { Section, Card, Featured, All_Projects } from '@components'

const Projects = ({ ...data }) => {
    const featuredData = {
        globalControls: data.globalControls,
        ...data.featuredData,
    }

    const projectsData = { ...data.projectsData }

    const components = [
        <Featured key="featured-projects" {...featuredData} />,
        <All_Projects key="all-projects" {...projectsData} />,
    ]

    return components.map((component) => component)
}

export default Projects
