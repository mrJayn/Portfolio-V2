import { isValidElement, useEffect } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { layoutVariants as variants } from '@motion'
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

    useEffect(
        () =>
            document
                .getElementById(index2id(pageProps.activeSection))
                .scrollIntoView({ behavior: 'auto' }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pageProps.isLg, pageProps.screenOrientation]
    )

    return (
        <Layout
            isHome
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
            variants={variants[pageProps.isLg ? 'HomePage' : 'Mobile']}
        >
            {Sections.map(({ id, data }, index) => {
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
