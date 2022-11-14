import Socials from './Socials'
import Skills from './Skills'

const About = ({ ...data }) => {
    return (
        <div className="flex-col-center h-auto w-full space-y-8 md:space-y-16">
            <div
                key="about"
                id="about-innerHTML"
                className="w-full border-b-2 pb-8 md:pb-16"
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
            <Skills key="skills" skills={data.data.skills} isMd={data.isMd} />
            <Socials key="socials" />
        </div>
    )
}
export default About
