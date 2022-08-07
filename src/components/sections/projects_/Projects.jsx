import { Section, Projects_Sm, Projects_Md } from '@components'
import { useMediaQuery } from '@hooks'

const Heading = () => {
    return (
        <div className="projects-heading">
            <h3>Other Projects</h3>
        </div>
    )
}

const Projects = () => {
    const isMd = useMediaQuery()
    return (
        <Section id="projects" fullScreen={isMd ? false : true}>
            <Heading />
            <div className="projects-content">
                <Projects_Sm />
                <Projects_Md />
            </div>
        </Section>
    )
}

export default Projects
