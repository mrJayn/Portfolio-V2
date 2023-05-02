import { motion } from 'framer-motion'
import { sidVariants } from '@motion'
import { Layout } from '@components'
import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import Archive from 'src/components/__sections/projects/Archive'

export default function SectionPage({ data }) {
    return (
        <Layout title={data.id} description={data.description}>
            <motion.h2
                className="mt-[20vh]"
                variants={sidVariants.Title}
                custom={0}
            >
                {data.data.title}
            </motion.h2>
            <Archive {...data} />
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
