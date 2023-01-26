import Archive from './Archive'
import Featured_Project from './Featured_Project'
import { createRef, useMemo } from 'react'

const Projects = ({ featuredData, ...data }) => {
    const refs = useMemo(
        () => Array.from({ length: 3 }).map(() => createRef()),
        []
    )

    return (
        <>
            {[...Object.keys(featuredData)].map((i) => {
                return (
                    <section
                        key={`featured-project-${i}`}
                        className={`flex-col-center relative flex w-full lg:min-h-[550px] lg:w-[calc(50%-32px)] lg:justify-start lg:gap-y-8 ${
                            i % 2 == 0
                                ? 'mr-auto lg:items-start'
                                : 'ml-auto lg:items-end'
                        }`}
                        ref={refs[i]}
                    >
                        <Featured_Project
                            inViewRef={refs[i]}
                            featuredData={featuredData[i]}
                            i={i}
                        />
                    </section>
                )
            })}
            <>
                <Archive key="projects-archive" {...data} />
            </>
        </>
    )
}

export default Projects
