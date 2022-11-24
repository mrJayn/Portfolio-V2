import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import {
    About,
    Projects,
    Layout,
    Experience,
    Form,
    Section_Hero,
} from '@components'
import { useEffect } from 'react'
import { themeConfig } from 'twThemeFS'

const SlugToContent = ({ ...data }) => {
    switch (data.id) {
        case 'about':
            return <About {...data} />
        case 'experience':
            return <Experience {...data} />
        case 'projects':
            return <Projects {...data} />
        case 'contact':
            return <Form {...data} />
        default:
            return null
    }
}

export default function SectionPage({
    activeSection,
    isMd,
    isRouting,
    Data,
    ...pageProps
}) {
    Data = {
        isMd: isMd,
        ...pageProps,
        ...Data,
    }
    const heroData = Data.id == 'projects' ? Data.projects.data : Data.data
    const title = Data.id.charAt(0).toUpperCase() + Data.id.slice(1)
    const gradient = themeConfig.getGradient(activeSection, 5)

    useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }))
    return (
        <Layout title={title} description={Data.description} isMd={isMd}>
            <div style={{ background: gradient }}>
                <Section_Hero
                    key={`${Data.id}-hero`}
                    even={activeSection % 2 == 0}
                    isMd={isMd}
                    isRouting={isRouting}
                    {...heroData}
                />
                <div className="relative px-2 sm:px-6 md:mt-20 md:px-10">
                    <SlugToContent {...Data} />
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data = await getAllMarkdown()
    const paths = [data.about, data.experience, data.projects].map((obj) => {
        const slug = obj.data.slug
        return { params: { slug } }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const Data = await getSectionMarkdown(params.slug)
    return {
        props: { Data },
    }
}
