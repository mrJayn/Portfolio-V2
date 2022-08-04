import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
} from '@components'
const title = "Hello, I'm Michael 👋"
const description =
    "I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ isLoading }) {
    return (
        <Layout
            isLoading={isLoading}
            title="Michael Jayne"
            description={`${title}-${description}`}
        >
            <Intro />
            <About />
            <Experience />
            <Featured />
            <Projects />
            <Contact />
        </Layout>
    )
}
