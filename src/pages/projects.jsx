import { getProjectsProps } from 'src/lib/markdown'
import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useAnimate, useCycle } from 'framer-motion'
import { projectsMotion } from '@motion'
import { pushPage } from '@utils'
import { Archive, Layout, Styled } from '@components'

function BackButton() {
    const [scope, animate] = useAnimate()
    const handleClick = async () => {
        animate(scope.current, { scale: 0.9 }, { duration: 0.15 }).then(() => pushPage('/'))
    }
    return (
        <motion.button
            className="group absolute left-1/2 top-0 flex aspect-[1/1] h-16 -translate-x-1/2 select-none items-center rounded-full bg-grey-95 shadow-lg shadow-black/50 transition-colors duration-250 ease-in-out hover:bg-grey-80 max-lg:hidden"
            variants={projectsMotion.backBtn.wrap}
            onClick={handleClick}
            ref={scope}
        >
            {[0, 50, -50].map((deg, i) => (
                <motion.span
                    key={`line${i}`}
                    className="absolute left-1/4 h-[4px] rounded-r-full bg-grey transition-colors duration-250 ease-in-out group-hover:bg-white"
                    style={{ width: `${[55, 35, 35][i]}%`, originX: 0, originY: [1, -0.5, 1.5][i] }}
                    variants={projectsMotion.backBtn.lines}
                    custom={deg}
                />
            ))}
        </motion.button>
    )
}

const Options = ({ Categories, active, setActive }) => (
    <motion.div
        className="fixed inset-x-0 bottom-0 z-20 max-lg:h-20 lg:left-2 lg:right-auto lg:top-16 lg:w-36 lg:pt-28"
        {...projectsMotion.options.wrapProps}
    >
        <BackButton />
        <ul className="full z-30 flex lg:h-auto lg:flex-col">
            {Categories.map((catName, i) => (
                <Styled.Tabs
                    key={catName}
                    isActive={i === active}
                    className="show-overflow flipped font-medium capitalize max-lg:mt-2 max-lg:items-start max-lg:pt-4 lg:leading-[3]"
                    toVerticalAt={1024}
                    onClick={() => setActive(i)}
                >
                    {catName}
                </Styled.Tabs>
            ))}
        </ul>
        <div className="absolute -left-2 bottom-0 top-20 z-30 w-2 rounded-tr-full bg-slate max-lg:hidden" />
    </motion.div>
)

const LayoutControls = ({ viewMode, setViewMode }) => (
    <motion.div
        className="flex-center fixed right-4 top-2 z-[1000] h-12 w-12 cursor-pointer rounded-full bg-white/25 pr-[2px] text-[32px] -tracking-lg hover:bg-white/50"
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
    const categories = ['all', ...new Set(projects.map(({ category }) => category))]

    return (
        <>
            <LayoutControls viewMode={viewMode} setViewMode={setViewMode} />
            <Options Categories={categories} active={active} setActive={setActive} />
            <Layout title="projects" description="A few projects I've worked on so far.">
                <div className="relative mt-20 w-full overflow-hidden lg:mt-40 lg:pl-44 lg:pr-4">
                    {viewMode === 'grid' && (
                        <div className="relative min-h-[100vmax] w-full grid-cols-1 grid-rows-[repeat(auto-fill,240px)] items-center gap-y-1 md:grid md:grid-cols-2 md:grid-rows-[repeat(auto-fill,300px)] lg:grid-rows-[repeat(auto-fill,350px)] xl:grid-cols-3">
                            <LayoutGroup>
                                <AnimatePresence>
                                    {projects.map((pData, i) => {
                                        const { category } = pData
                                        return active === 0 || categories[active] === category ? (
                                            <Archive key={`project-${i}`} i={i} {...pData} />
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
                                        return active === 0 || categories[active] === category ? (
                                            <Archive listMode key={`project-${i}`} i={i} {...pData} />
                                        ) : null
                                    })}
                                </AnimatePresence>
                            </LayoutGroup>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const data = await getProjectsProps()
    return { props: { data } }
}
