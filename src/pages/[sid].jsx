import { useEffect, useRef } from 'react'
import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import {
    About,
    Projects,
    Layout,
    Experience,
    Slug_Hero as HERO,
} from '@components'

const SlugToContent = ({ ...data }) => {
    switch (data.id) {
        case 'about':
            return <About {...data} />
        case 'experience':
            return <Experience {...data} />
        case 'projects':
            return <Projects {...data} />
        default:
            return null
    }
}

export default function SectionPage({ ...pageProps }) {
    const { data, ...props } = pageProps
    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) return
        window.scrollTo({ top: 0, behavior: 'auto' })
        isMounted.current = true
    })

    return (
        <Layout
            title={data.id}
            description={data.description}
            activeSection={props.activeSection}
        >
            <div id={`${data.id}-page-hero`} className="screen relative z-20">
                <HERO
                    activeSection={props.activeSection}
                    isLg={props.isLg}
                    {...(data.id == 'projects'
                        ? data.projects.data
                        : data.data)}
                />
            </div>
            <div
                id={`${data.id}-section-content`}
                data-reading-section
                className={`flex-col-top relative z-10 mx-auto h-auto min-h-screen w-screen gap-y-24 bg-white-dark py-14 px-[] ${
                    data.id == 'projects'
                        ? 'px-4'
                        : 'px-[clamp(8px,calc(8px+120*((100vw-320px)/704)),128px)]'
                }`}
            >
                <SlugToContent {...data} />
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data = await getAllMarkdown()
    const paths = [data.about, data.experience, data.projects].map((obj) => {
        const sid = obj.data.id
        return { params: { sid } }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const data = await getSectionMarkdown(params.sid)
    return {
        props: { data },
    }
}
