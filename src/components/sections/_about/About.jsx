import { Section, Card_Group, Skills } from '@components'

const About = ({ about, globalControls }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    key="about"
                    className="relative mx-auto h-full w-[95%] md:w-[70%] md:overflow-y-scroll md:border-r-2 md:border-r-eee/50 md:pb-20 md:pr-5 lg:w-[59%]"
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
            1: <Skills key="skills" skills={about.data.skills} />,
        },
        globalControls: globalControls,
        ...about,
    }

    return (
        <Section id="about" fullScreen={false}>
            <Card_Group {...cardGroupProps} />
        </Section>
    )
}

export default About
