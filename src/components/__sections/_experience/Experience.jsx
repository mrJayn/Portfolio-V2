import { Section, Jobs, Certifications, Card } from '@components'
const Experience = ({ experience, globalControls }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    id="experience-innerHTML"
                    className="px-2 text-white md:p-10 md:pt-5"
                    dangerouslySetInnerHTML={{
                        __html: experience.content,
                    }}
                />
            ),
            1: <Jobs {...experience.data} />,
            2: <Certifications {...experience.data} />,
        },
        globalControls: globalControls,
        ...experience,
    }
    return (
        <Section id="experience" fullScreen={false}>
            <Card {...cardGroupProps} />
        </Section>
    )
}
export default Experience
