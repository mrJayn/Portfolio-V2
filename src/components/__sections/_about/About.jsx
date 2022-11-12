import Socials from './Socials'
import Skills from './Skills'

const About = ({ ...data }) => {
    const components = [
        <div
            key="about"
            id="about-innerHTML"
            className="w-full"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />,
        <Skills key="skills" skills={data.data.skills} isMd={data.isMd} />,
        <Socials key="socials" />,
    ]
    return (
        <div className="flex-col-center mt-24 h-auto w-full space-y-24">
            {components.map((component, i) => component)}
        </div>
    )
}
export default About
