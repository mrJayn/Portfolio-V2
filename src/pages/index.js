import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
} from '@components'
import { getAllMarkdown, globContent } from 'src/lib/markdown'

const title = "Hello, I'm Michael 👋"
const description =
    "I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ isLoading, data }) {
    return (
        <Layout
            isLoading
            title="Michael Jayne"
            description={`${title}-${description}`}
        >
            <Intro />
            <About {...data} />
            <Experience {...data} />
            <Featured featured={data.featured} />
            <Projects projects={data.projects} />
            <Contact />
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getAllMarkdown()
    return {
        props: {
            data: {
                text: data.text,
                featured: data.featured,
                projects: data.projects,
            },
        },
    }
}
