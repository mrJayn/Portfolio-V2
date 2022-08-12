import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
} from '@components'
import { getAllMarkdown } from 'src/lib/markdown'

const title = "Hello, I'm Michael 👋"
const description =
    "I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ isLoading, data }) {
    return (
        <Layout
            isLoading={isLoading}
            title="Michael Jayne"
            description={`${title}-${description}`}
        >
            <Intro />
            <About {...data} />
            <Experience {...data} />
            <Featured {...data} />
            <Projects {...data} />
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
