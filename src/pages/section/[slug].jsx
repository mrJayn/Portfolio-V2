import { useEffect } from 'react'
import { themeConfig } from 'twTheme'
import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import {
    About,
    Projects,
    Layout,
    Experience,
    Form,
    Slug_Hero as Hero,
    Styled,
} from '@components'
import { BsArrowDown, BsChevronCompactDown } from 'react-icons/bs'

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
    isLg,
    isMd,
    Data,
    ...pageProps
}) {
    Data = {
        isMd: isMd,
        isLg: isLg,
        ...pageProps,
        ...Data,
    }
    const heroData = Data.id == 'projects' ? Data.projects.data : Data.data
    const title = Data.id.charAt(0).toUpperCase() + Data.id.slice(1)

    useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }))

    return (
        <Layout
            title={title}
            description={Data.description}
            useTransition={!isLg}
            activeSection={activeSection}
        >
            {isLg && (
                <Hero
                    key={`${Data.id}-hero`}
                    even={activeSection % 2 == 0}
                    isLg={isLg}
                    {...heroData}
                />
            )}
            <div
                id={`${Data.id}-section-content`}
                data-reading-section
                className="flex-col-center relative mx-auto h-auto min-h-screen w-full max-w-screen-xxl gap-y-24 bg-white-dark px-2 py-14 lg:px-32 lg:py-[10vh] xxl:rounded-lg xxl:shadow"
            >
                <SlugToContent {...Data} />
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data = await getAllMarkdown()
    const paths = [data.about, data.experience, data.projects].map((obj) => {
        const slug = obj.data.id
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
