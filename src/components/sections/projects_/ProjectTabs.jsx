import { motion } from 'framer-motion'

const ProjectTabs = ({ projects, categories, tab }) => {
    const projectsByCat = projects.map((project) => project.data.category)

    const groupedTabs = []
    for (let i = 0; i < categories.length; i++) {
        let group = []
        for (let j = 0; j < projectsByCat.length; j++) {
            if (categories[i] == projectsByCat[j]) group.push(projects[j])
        }
        groupedTabs.push(group)
    }
    console.log(groupedTabs)

    return (
        <div className="grid h-auto w-full grid-cols-2 gap-[1px] py-2 px-[2px]">
            {groupedTabs[tab].map((project) => {
                return <div key={project.id}>{project.content}</div>
            })}
        </div>
    )
}
export default ProjectTabs
