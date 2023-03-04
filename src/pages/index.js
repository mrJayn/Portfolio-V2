import { isValidElement, useEffect } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { index2id } from '@utils'

export default function Home({ data, ...pageProps }) {
    const Sections = {
        intro: <Intro {...pageProps} />,
        about: data.about,
        experience: data.experience,
        projects: { featured: data.featured_data, ...data.projects },
        contact: <Contact {...pageProps} />,
    }

    useEffect(() => {
        const sectionId = index2id(pageProps.activeSection)
        const section = document.getElementById(sectionId)
        const prevScrollY = null

        section.scrollIntoView({ behavior: 'auto' })

        const checkScroll = setInterval(() => {
            var scrollTop = section.scrollTop
            if (scrollTop == prevScrollY) {
                clearInterval(checkScroll)
            }
            prevScrollY = scrollTop
        }, 50)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout
            isHome
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            {Object.entries(Sections).map(([id, data], index) => {
                const isValidJSX = isValidElement(data)
                const props = {
                    id: id,
                    index: index,
                    ...(isValidJSX ? { useChildren: true } : data),
                    ...pageProps,
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
