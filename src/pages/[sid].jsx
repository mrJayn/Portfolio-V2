import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { sidVariants } from '@motion'
import { Layout, Styled } from '@components'
import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'
import Archive from 'src/components/__sections/projects/Archive'
import { useState } from 'react'

export default function SectionPage({ data }) {
    const { projectsData } = data
    const [curr, setCurr] = useState(0)
    const projects = Object.values(projectsData)
    const tabs = ['all', ...new Set(projects.map(({ data }) => data.category))]

    return (
        <Layout title={data.id} description={data.description}>
            <motion.h2 className="mt-[20vh]">{data.data.title}</motion.h2>
            <div className="relative flex w-full flex-col lg:shadow-[0_-8px_#a3b3d0]">
                <ul className="max-lg:use-scrollbar z-10 flex h-24 overflow-hidden">
                    {tabs.map((tabName, i) => (
                        <Styled.Indicators
                            key={tabName}
                            isActive={i == curr}
                            handleClick={() => setCurr(i)}
                        >
                            {tabName}
                        </Styled.Indicators>
                    ))}
                </ul>
                <div className="relative mt-1 flex min-h-[100vmax] w-full flex-wrap items-center gap-y-1">
                    <LayoutGroup>
                        <AnimatePresence>
                            {projects.map((project, i) => {
                                return curr === 0 ||
                                    tabs[curr] === project.data.category ? (
                                    <Archive
                                        key={`project-${i}`}
                                        i={i}
                                        {...project}
                                    />
                                ) : null
                            })}
                        </AnimatePresence>
                    </LayoutGroup>
                </div>
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
