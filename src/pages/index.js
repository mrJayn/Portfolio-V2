import { isValidElement, useEffect, useState } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { index2id } from '@utils'

export default function Home({ data, ...pageProps }) {
    const Sections = [
        {
            id: 'intro',
            data: <Intro {...pageProps} />,
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
            data: <Contact {...pageProps} />,
        },
    ]

    // scroll restDelta value - [ default=0.0005 , fast=10 ]
    const defaultRestDelta = 0.001
    const [scrollSpeed, setScrollSpeed] = useState(defaultRestDelta)

    useEffect(() => {
        const sectionId = index2id(pageProps.activeSection)
        const section = document.getElementById(sectionId)
        const prevScrollY = null

        setScrollSpeed(10)
        section.scrollIntoView({ behavior: 'auto' })

        const checkScroll = setInterval(() => {
            var scrollY = section.scrollTop
            if (scrollY == prevScrollY) {
                clearInterval(checkScroll)
                setScrollSpeed(defaultRestDelta)
            }
            prevScrollY = scrollY
        }, 50)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageProps.isLg, pageProps.screenOrientation])

    return (
        <Layout
            isHome
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            {Sections.map(({ id, data }, index) => {
                const isValidJSX = isValidElement(data)
                const props = {
                    id: id,
                    index: index,
                    scrollSpeed: scrollSpeed,
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
