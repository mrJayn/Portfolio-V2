import { Section, Card, Skills } from '@components'

const About = ({ about, isMd, globalControls }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    key="about"
                    className=" relative mx-auto h-full w-[95%] md:ml-[2.5%] md:w-[80%]"
                >
                    <div
                        id="about-innerHTML"
                        className="w-full"
                        dangerouslySetInnerHTML={{
                            __html: about.content,
                        }}
                    />
                </div>
            ),
            1: <Skills key="skills" skills={about.data.skills} isMd={isMd} />,
        },
        globalControls: globalControls,
        ...about,
    }

    return (
        <Section id="about" fullScreen={false}>
            <Card {...cardGroupProps} />
        </Section>
    )
}

export default About
