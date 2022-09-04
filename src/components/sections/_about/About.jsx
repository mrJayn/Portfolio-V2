import { Section, Card_Group, Skills } from '@components'

const About = ({ about, isMd }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    key="0"
                    id="about-innerHTML"
                    className="mt-6 text-white md:w-[70%] md:border-r-2 md:border-r-eee/50 md:pr-5 md:text-base lg:w-[59%] lg:text-base"
                    dangerouslySetInnerHTML={{
                        __html: about.content,
                    }}
                />
            ),
            1: <Skills key="1" skills={about.data.skills} />,
        },
        isMd,
        ...about,
    }

    return (
        <Section id="about" fullScreen={false}>
            <Card_Group {...cardGroupProps} />
        </Section>
    )
}

export default About
