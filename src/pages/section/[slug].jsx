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
    isMd,
    Data,
    sectionScrollRef,
    ...pageProps
}) {
    Data = {
        isMd: isMd,
        ...pageProps,
        ...Data,
    }

    // Section name from slug for Link "as"
    const title = Data.id.charAt(0).toUpperCase() + Data.id.slice(1)

    useEffect(() => window.scrollTo(0, 0))

    return (
        <Layout
            title={title}
            description={Data.description}
            isHome={false}
            isMd={pageProps.isMd}
            scrollRef={sectionScrollRef}
        >
            <Section_Hero
                key={`${Data.id}-hero`}
                even={Data.activeSection % 2 == 0}
                isMd={isMd}
                {...Data.data}
            />
            <SlugToContent {...Data} />
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
