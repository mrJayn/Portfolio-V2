import {
    AnimatePresence,
    LayoutGroup,
    motion,
    useCycle,
    useForceUpdate,
} from 'framer-motion'
import { Layout, Styled } from '@components'
import { getProjectsProps } from 'src/lib/markdown'
import Archive from 'src/components/__sections/projects/Archive'
import { useState } from 'react'

const Options = ({ Categories, active, setActive }) => (
    <motion.div
        className="fixed bottom-0 z-20 bg-gradient-to-b from-nav/60 via-nav/80 to-black max-lg:inset-x-0 max-lg:h-18 lg:top-16 lg:left-0 lg:w-24 lg:pt-20"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
            hidden: {
                x: '-100%',
                transition: {
                    when: 'afterChildren',
                    duration: 0.5,
                },
            },
            show: {
                x: 0,
                transition: {
                    when: 'beforeChildren',
                    duration: 0.5,
                    ease: 'circOut',
                },
            },
        }}
    >
        <Styled.BackButton />
        <motion.ul className="full z-30 flex gap-1 lg:h-[40vh] lg:flex-col lg:py-[2vh] lg:pl-2 lg:pr-1">
            {Categories.map((catName, i) => (
                <Styled.Tabs
                    key={catName}
                    isActive={i === active}
                    className="show-overflow flipped font-semibold capitalize max-lg:mt-2 max-lg:items-start max-lg:pt-4"
                    toVerticalAt={1024}
                    onClick={() => setActive(i)}
                >
                    {catName}
                </Styled.Tabs>
            ))}
        </motion.ul>
        <div className="absolute bottom-0 top-14 left-0 z-30 w-2 rounded-tr-full bg-slate max-lg:hidden" />
    </motion.div>
)

const LayoutControls = ({ viewMode, setViewMode }) => (
    <motion.div
        className="flex-center fixed top-2 right-4 z-[1000] h-12 w-12 cursor-pointer rounded-full bg-white/25 pr-[2px] text-[32px] -tracking-lg hover:bg-white/50"
        onClick={() => setViewMode()}
        title={`${viewMode === 'list' ? 'Grid' : 'List'} layout`}
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5, ease: 'easeIn' },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
        {viewMode === 'list' && `⋮⋮⋮`}
        {viewMode === 'grid' && `▤`}
    </motion.div>
)

export default function ProjectsPage({ data }) {
    const [active, setActive] = useState(0)
    const [viewMode, setViewMode] = useCycle('grid', 'list') // grid, list

    const projects = Object.values(data)
    const categories = [
        'all',
        ...new Set(projects.map(({ category }) => category)),
    ]

    return (
        <>
            <LayoutControls viewMode={viewMode} setViewMode={setViewMode} />
            <Layout
                title="projects"
                description="A few projects I've worked on so far."
            >
                <Options
                    Categories={categories}
                    active={active}
                    setActive={setActive}
                />

                <motion.div
                    className="flex-col-top relative mt-20 w-full gap-y-4 overflow-hidden lg:pl-28 lg:pr-4"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                        show: { opacity: 1 },
                        hidden: {
                            opacity: 0,
                        },
                    }}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                >
                    <h2>Projects</h2>
                    {viewMode === 'grid' && (
                        <div className="relative min-h-[100vmax] w-full grid-cols-1 grid-rows-[repeat(auto-fill,240px)] items-center gap-y-1 md:grid md:grid-cols-2 md:grid-rows-[repeat(auto-fill,300px)] lg:grid-rows-[repeat(auto-fill,350px)] xl:grid-cols-3">
                            <LayoutGroup>
                                <AnimatePresence>
                                    {projects.map((pData, i) => {
                                        const { category } = pData
                                        return active === 0 ||
                                            categories[active] === category ? (
                                            <Archive
                                                key={`project-${i}`}
                                                i={i}
                                                {...pData}
                                            />
                                        ) : null
                                    })}
                                </AnimatePresence>
                            </LayoutGroup>
                        </div>
                    )}
                    {viewMode === 'list' && (
                        <div className="relative grid min-h-[100vmax] w-full max-w-[600px] grid-cols-1 grid-rows-[repeat(auto-fill,3em)] gap-y-1 lg:max-w-[1000px]">
                            <LayoutGroup>
                                <AnimatePresence>
                                    {projects.map((pData, i) => {
                                        const { category } = pData
                                        return active === 0 ||
                                            categories[active] === category ? (
                                            <Archive
                                                listMode
                                                key={`project-${i}`}
                                                i={i}
                                                {...pData}
                                            />
                                        ) : null
                                    })}
                                </AnimatePresence>
                            </LayoutGroup>
                        </div>
                    )}
                </motion.div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const data = await getProjectsProps()
    return { props: { data } }
}
