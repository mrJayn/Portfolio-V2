import { getProjectsProps } from 'src/lib/markdown'
import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useCycle } from 'framer-motion'
import { projectsMotion } from '@motion'
import { Archive, Layout, Sidebar } from '@components'

function LayoutButton({ viewMode, setViewMode }) {
    return (
        <motion.div
            key={viewMode === 'list' ? '⋮' : '▤'}
            className="flex-center fixed right-2 top-1 z-[100] aspect-[1/1] h-14 cursor-pointer rounded-md text-[48px] tracking-[-0.025em] text-grey-40 transition-colors duration-250 ease-in-out hover:text-white max-lg:bg-grey-95"
            onClick={() => setViewMode()}
            title={`${viewMode === 'list' ? 'Grid' : 'List'} layout`}
            {...projectsMotion.layoutBtn.wrapProps}
        >
            {viewMode === 'list' && `⋮⋮⋮`}
            {viewMode === 'grid' && `▤`}
        </motion.div>
    )
}

export default function ProjectsPage({ data }) {
    const [active, setActive] = useState(0)
    const [viewMode, setViewMode] = useCycle('grid', 'list')
    const projects = Object.values(data)
    const categories = ['all', ...new Set(projects.map(({ category }) => category))]

    return (
        <>
            <LayoutButton viewMode={viewMode} setViewMode={setViewMode} />
            <Sidebar Categories={categories} active={active} setActive={setActive} />
            <Layout title="projects" description="A few projects I've worked on so far.">
                <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                    <motion.div
                        key={viewMode + 'container'}
                        className="pl-sidebar relative my-20 min-h-[calc(100vh-160px)] w-full overflow-hidden"
                        {...projectsMotion.containerProps}
                    >
                        <div
                            className={` relative w-full max-w-[calc(1410px*(3/2))] px-2 lg:w-[calc(100%-64px)] lg:px-10 ${
                                viewMode === 'grid'
                                    ? ' grid grid-cols-1 gap-5 lg:grid-cols-2 max:grid-cols-3'
                                    : 'flex-col-top mx-auto'
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
