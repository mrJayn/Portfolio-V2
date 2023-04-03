import { useEffect } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { sectionIDs } from '@utils'
import { Layout, Section } from '@components'

export default function Home({ data, isFirstLoad, ...pageProps }) {
    useEffect(
        () =>
            window.scrollTo({
                top: pageProps.activeSection * window.innerHeight,
                behavior: 'auto',
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
        <Layout
            isHome
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            {sectionIDs.map((id, i) => {
                return (
                    <Section
                        key={`${id}-section`}
                        i={i}
                        featured={data.featured}
                        {...pageProps}
                        {...data[id]}
                    />
                )
            })}
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
