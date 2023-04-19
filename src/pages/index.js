import { useEffect } from 'react'
import { scrollIntoView } from 'seamless-scroll-polyfill'
import { getAllMarkdown } from 'src/lib/markdown'
import { sectionIDs } from '@utils'
import { Layout, Section } from '@components'

export default function Home({ data, activeSection, setSection }) {
    useEffect(() => {
        let active = document.getElementById(sectionIDs[activeSection])
        scrollIntoView(active, { behavior: 'instant', block: 'center' })
        document.body.style.overflowY = 'auto'
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        isActive={activeSection === i}
                        setActive={() => setSection(i)}
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
