import { getProjectsProps } from 'src/lib/markdown'
import { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useCycle } from 'framer-motion'
import { FadeInOut, projectsMotion } from '@motion'
import { Archive, Layout, Sidebar } from '@components'

const LayoutButton = ({ viewMode, setViewMode }) => (
    <motion.div
        className="flex-center transition-colors fixed right-2 top-2 z-[100] aspect-[1/1] h-14 cursor-pointer rounded-md bg-grey-75 text-[48px] tracking-[-0.025em] text-grey-40 hover:bg-grey-60 hover:text-white"
        onClick={() => setViewMode()}
        title={`${viewMode === 'list' ? 'Grid' : 'List'} layout`}
        {...FadeInOut()}
    >
        {viewMode === 'list' && `⋮⋮⋮`}
        {viewMode === 'grid' && `▤`}
    </motion.div>
)

export default function ProjectsPage({ data }) {
    const [active, setActive] = useState(0)
    const [viewMode, setViewMode] = useCycle('grid', 'list')
    const projects = Object.values(data)
    const categories = ['all', ...new Set(projects.map(({ category }) => category))]

    useEffect(()=>{
        document.body.style.height="auto"
    },[])

    return (
        <>
            <LayoutButton viewMode={viewMode} setViewMode={setViewMode} />
            <Sidebar Categories={categories} active={active} setActive={setActive} />
            <Layout title="projects" description="A few projects I've worked on so far.">
                <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                    <motion.div
                        key={viewMode + 'container'}
                        className="relative my-20 min-h-[calc(100vh-160px)] w-full overflow-hidden pl-sidebar"
                        {...projectsMotion.containerProps}
                    >
                        <div
                            className={`relative w-full px-2 lg:w-[calc(100%-64px)] lg:px-10 ${
                                viewMode === 'grid'
                                    ? ' grid max-w-[calc(1410px*(3/2))] grid-cols-1 gap-5 lg:grid-cols-2 max:grid-cols-3'
                                    : 'flex-col-top mr-auto max-w-[1280px]'
                            }`}
                        >
                            <LayoutGroup>
                                <AnimatePresence>
                                    {projects.map((project, i) => {
                                        return active === 0 || categories[active] === project.category ? (
                                            <Archive key={`project-${i}`} viewMode={viewMode} {...project} />
                                        ) : null
                                    })}
                                </AnimatePresence>
                            </LayoutGroup>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const data = await getProjectsProps()
    return { props: { data } }
}
