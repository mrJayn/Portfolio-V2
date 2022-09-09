import { getMarkdown } from 'src/lib/markdown'
import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
    Footer,
} from '@components'

export default function Home({ data, ...pageProps }) {
    data = {
        ...pageProps,
        ...data,
    }
    const homeProps = {
        title: 'Portfolio',
        description:
            "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!",
        isHome: pageProps.isHome,
    }

    return (
        <Layout {...homeProps}>
            <Intro {...data} />
            <About {...data} />
            <Experience {...data} />
            <Featured {...data} />
            <Projects {...data} />
            <Contact {...data} />
            <Footer />
        </Layout>
    )
}
export async function getStaticProps() {
    const data = await getMarkdown()
    return {
        props: {
            data,
        },
    }
}
