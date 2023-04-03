import Featured from './_projects/Featured'
import Archive from './_projects/Archive'

const Projects = ({ ...data }) => [
    <Featured key="featured" {...data} />,
    <Archive key="archive" {...data} />,
]

export default Projects
