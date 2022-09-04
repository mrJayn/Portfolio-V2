import { Section, Jobs, Certifications, Card_Group } from '@components'
const Experience = ({ experience, isMd }) => {
    const cardGroupProps = {
        tabs: {
            0: (
                <div
                    id="about-innerHTML"
                    className="py-5 px-2 text-white md:p-10 md:pt-5"
                    dangerouslySetInnerHTML={{
                        __html: experience.content,
                    }}
                />
            ),
            1: <Jobs {...experience.data} />,
            2: <Certifications {...experience.data} />,
        },
        isMd,
        ...experience,
    }
    return (
        <Section id="experience" fullScreen={false}>
            <Card_Group {...cardGroupProps} />
        </Section>
    )
}
export default Experience
