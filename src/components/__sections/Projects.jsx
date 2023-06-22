import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, wrap } from 'framer-motion'
import { useMediaQuery } from '@hooks'
import { featuredMotion } from '@motion'
import { StyledBtn } from '@components'

function ProjectFrame({ n, handleSwipe, children }) {
    const ref = useRef(null)
    const setEvents = (allow) => (ref.current.style.pointerEvents = allow ? 'auto' : 'none')
    const options =
        n === 0
            ? {
                  drag: 'x',
                  dragConstraints: { left: 0, right: 0 },
                  dragElastic: 0.2,
                  dragSnapToOrigin: true,
                  onDragEnd: handleSwipe,
              }
            : {}
    return (
        <motion.div
            ref={ref}
            className={`flex-col-top absolute inset-0 top-14 preserve-3d ${
                n === 0 ? 'cursor-grab active:cursor-grabbing' : 'group'
            }`}
            custom={n}
            onAnimationStart={() => setEvents(false)}
            onAnimationComplete={() => setEvents(true)}
            {...options}
            {...featuredMotion.imgProps}
        >
            {children}
        </motion.div>
    )
}
const FtdContent = ({ tech, content, href }) => (
    <motion.div
        className="flex-col-center absolute bottom-[1rem] z-20 max-w-[calc(100%-2rem)] gap-x-[1.5rem] gap-y-[0.5rem] lg:flex-row-reverse"
        {...featuredMotion.contentProps}
    >
        <div className="flex-col-center pointer-events-none max-w-[36ch] gap-[0.5rem] lg:items-start">
            <div className="flex max-lg:text-center" dangerouslySetInnerHTML={{ __html: content }} />
            <div>
                {tech.map((item) => (
                    <span key={item} className="text-slate-30 after:mx-2.5 after:content-['|'] last-of-type:after:hidden">
                        {item}
                    </span>
                ))}
            </div>
        </div>
        <StyledBtn onClick={() => window.open(href, '_blank', 'noopenner noreferrer')}>Learn More</StyledBtn>
    </motion.div>
)

const Featured = ({ ...featuredProjects }) => {
    const containerRef = useRef(null)
    const [active, activate] = useState(0)

    const data = Object.values(featuredProjects)
    const span = data.length - 1

    const setActive = (i) => {
        if (i === active) return
        console.log('Activated')
        activate(i)
    }
    const handleSwipe = (e, { offset, velocity }) => {
        if (Math.abs(velocity.y) > Math.abs(velocity.x)) return
        const threshhold = (containerRef.current?.clientWidth || 0) / 4
        if (offset.x > threshhold || offset.x < -threshhold) {
            const selected = active - Math.sign(offset.x)
            setActive(selected > span ? 0 : selected < 0 ? span : selected)
        }
    }

    return (
        <div id="featured-content" className="flex-col-center w-full">
            <h3>Featured Works</h3>
            <div
                className="flex-center relative h-[650px] w-full max-w-[1750px] rounded-3xl border-2 border-grey-75 "
                style={{ perspective: '1000px', perspectiveOrigin: '50% 33%' }}
            >
                <div
                    className="absolute top-0 flex h-3/5 w-[250px] select-none preserve-3d sm:w-[400px] md:aspect-[3/2] md:w-auto lg:h-[70%]"
                    ref={containerRef}
                >
                    <AnimatePresence>
                        {data.map(({ title, src }, i) => {
                            const n = wrap(-2, 2, i - active)

                            return (
                                [-1, 0, 1].includes(n) && (
                                    <ProjectFrame key={`${title}-frame`} n={n} handleSwipe={handleSwipe}>
                                        <h4
                                            className={`transition-opacity absolute bottom-[100%] my-2 text-white opacity-0 duration-500 ${
                                                n === 0 ? 'opacity-100 delay-300' : ''
                                            }`}
                                        >
                                            {title}
                                        </h4>
                                        <div
                                            className={`full transition-[filter] preserve-3d ${
                                                n === 0
                                                    ? 'brightness-[1]'
                                                    : 'cursor-pointer brightness-[0.75] lg:brightness-[0.35] lg:group-hover:brightness-[0.75]'
                                            }`}
                                            onClick={() => setActive(i)}
                                        >
                                            <div
                                                className="pointer-events-none absolute inset-0 select-none bg-cover bg-top bg-no-repeat md:bg-contain"
                                                style={{ backgroundImage: `url(${src})` }}
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 origin-bottom bg-cover bg-top bg-no-repeat preserve-3d mask-reflection -rotate-x-180 md:bg-contain"
                                                style={{ backgroundImage: `url(${src})` }}
                                            />
                                        </div>
                                    </ProjectFrame>
                                )
                            )
                        })}
                    </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                    <FtdContent key={data[active].title} {...data[active]} />
                </AnimatePresence>
            </div>
        </div>
    )
}

function ArchiveLink() {
    const router = useRouter()
    return (
        <motion.div
            className="flex-col-center gap-y-4 text-[1.5em]"
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeIn' } }}
        >
            <StyledBtn onClick={() => router.push('/projects', `/projects`, { scroll: false })}>View All Projects</StyledBtn>
        </motion.div>
    )
}

const Projects = ({ ...data }) => (
    <div id="projects" className="flex-col-center w-full gap-14">
        <Featured {...data} />
        <ArchiveLink />
    </div>
)

export default Projects
