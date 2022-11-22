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

const TemperedDiv = () => (
    <div className="absolute -top-40 left-0 h-40 w-screen bg-gradient_tempered" />
)

export default function SectionPage({ isMd, Data, ...pageProps }) {
    Data = {
        isMd: isMd,
        ...pageProps,
        ...Data,
    }
    const heroData = Data.id == 'projects' ? Data.projects.data : Data.data
    // Section name from slug for Link "as"
    const title = Data.id.charAt(0).toUpperCase() + Data.id.slice(1)
    //

    return (
        <Layout
            title={title}
            description={Data.description}
            isMd={pageProps.isMd}
        >
            <Section_Hero
                key={`${Data.id}-hero`}
                even={Data.activeSection % 2 == 0}
                isMd={isMd}
                {...heroData}
            />
            <div className="relative bg-background px-2 sm:px-6 md:mt-20 md:px-10">
                {isMd ? <TemperedDiv /> : null}
                <SlugToContent {...Data} />
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
