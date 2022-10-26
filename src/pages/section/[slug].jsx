import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import { useRouter } from 'next/router'
import {
    Intro,
    About,
    Projects,
    Contact,
    Layout,
    Experience,
    Footer,
    Section,
} from '@components'

export default function SectionPage({ sectionData, ...pageProps }) {
    return (
        <Layout title="" description="" isHome={false} isMd={pageProps.isMd}>
            <div className="flex-center h-auto w-full border-2 border-white p-10 text-white">
                <div
                    id={sectionData.id}
                    className="full"
                    dangerouslySetInnerHTML={{ __html: sectionData.content }}
                />
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
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const sectionData = await getSectionMarkdown(params.slug)
    return {
        props: {
            sectionData,
        },
    }
}
