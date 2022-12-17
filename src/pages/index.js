import { isValidElement, useEffect, useState } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { useScroll } from 'framer-motion'

const title = 'Portfolio'
const description =
    "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ data, ...pageProps }) {
    const sectionComponents = [
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

    return (
        <Layout
            isHome
            title={title}
            description={description}
            isLg={pageProps.isLg}
        >
            {sectionComponents.map(({ id, data }, index) => {
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
