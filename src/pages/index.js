import { isValidElement } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'

const title = 'Portfolio'
const description =
    "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({
    activeSection,
    setSection,
    isRouting,
    isMd,
    screenOrientation,
    data,
    ...pageProps
}) {
    // Required States + Markdown + Global States
    data = { ...pageProps, ...data }

    // Section Components
    const sectionComponents = [
        {
            id: 'intro',
            data: <Intro {...data} />,
        },
        {
            id: 'about',
            data: data.about,
        },
        {
            id: 'experience',
            data: data.experience,
        },
        {
            id: 'projects',
            data: {
                featured: data.featured_data,
                ...data.projects,
            },
        },
        {
            id: 'contact',
            data: <Contact {...data} />,
        },
    ]

    return (
        <Layout isHome title={title} description={description} isMd={isMd}>
            {sectionComponents.map(({ id, data }, index) => {
                const isValidJSX = isValidElement(data)
                const props = {
                    id: id,
                    index: index,
                    activeSection: activeSection,
                    setSection: setSection,
                    isMd: isMd,
                    isRouting: isRouting,
                    screenOrientation: screenOrientation,
                    ...(isValidJSX ? { useChildren: true } : data),
                }
                return isValidJSX ? (
                    <Section key={id} {...props}>
                        {data}
                    </Section>
                ) : (
                    <Section key={id} {...props} />
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
