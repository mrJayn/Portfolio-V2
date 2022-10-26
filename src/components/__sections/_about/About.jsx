import { Section, Card, Skills } from '@components'

const About = ({ about, isMd, globalControls }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    key="about"
                    id="about-innerHTML"
                    className="w-full"
                    dangerouslySetInnerHTML={{
                        __html: about.content,
                    }}
                />
            ),
            1: <Skills key="skills" skills={about.data.skills} isMd={isMd} />,
        },
        globalControls: globalControls,
        ...about,
    }

    return <Section id="about" sectionCard {...about} />
}

export default About
