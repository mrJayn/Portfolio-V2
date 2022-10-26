import { Section, Card, Featured, All_Projects } from '@components'

const Projects = ({ featured, projects, globalControls, ...props }) => {
    const data = {
        data: {
            section: 'projects',
            featured: featured,
            projects: projects,
            src: '/assets/featured/choropleth_map.png',
        },
    }
    const cardGroupProps = {
        tabs: {
            0: <Featured key="featured-projects" {...props} />,
            1: <All_Projects key="all-projects" {...props} />,
        },
        globalControls: globalControls,
        ...data,
    }

    return (
        <Section id="projects">
            <Card {...cardGroupProps} />
        </Section>
    )
}

export default Projects
