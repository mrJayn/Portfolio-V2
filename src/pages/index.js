import { getAllMarkdown } from 'src/lib/markdown'
import {
    Intro,
    About,
    Projects,
    Contact,
    Layout,
    Experience,
    Footer,
    Section,
} from '@components'

const title = 'Portfolio'
const description =
    "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ data, ...pageProps }) {
    data = { ...pageProps, ...data }

    const sections = {
        about: data.about,
        experience: data.experience,
        projects: data.projects,
    }

    return (
        <Layout
            title={title}
            description={description}
            isHome={pageProps.isHome}
            isMd={data.isMd}
        >
            <Intro {...data} />
            {Object.keys(sections).map((id, i) => {
                return <Section key={id} id={id} i={i} {...sections[id]} />
            })}

            <Contact {...data} />
            <Footer isMd={data.isMd} />
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getAllMarkdown()
    return {
        props: {
            data,
        },
    }
}
