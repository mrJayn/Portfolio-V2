import Image from 'next/image'
import { Section } from '@components'
import { FaGithub } from 'react-icons/fa'
import data from '@data'

const Projects = () => {
    return (
        <Section id="projects" count={false} subsection={true}>
            <h3>Other Projects by Me</h3>
            <div className="projects-content">
                {data.projects.map((ap) => (
                    <div className="project useInView" key={ap.item}>
                        <div className="gh-link">
                            <a
                                href={ap.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={25} />
                            </a>
                        </div>
                        <a
                            href="visit-project"
                            aria-label="Project Link"
                            target="_blank"
                            className="pr-wrap"
                        >
                            <h4>{ap.title}</h4>
                            <div>
                                <div className="pr-tech">
                                    {ap.technologies.map((item) => {
                                        return (
                                            <p className="tech-item" key={item}>
                                                {item}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="pr-desc">
                                    <p>{ap.message}</p>
                                </div>
                            </div>
                        </a>
                        <Image
                            src={ap.src}
                            alt={`${ap.title} Project Image`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Projects
