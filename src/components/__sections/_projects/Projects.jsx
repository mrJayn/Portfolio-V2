import { Featured_Slides } from '@components'
import Featured_Full from './_featured/Ftd_FullProject'
import Archive from './Archive'

const Projects = ({ isMd, idx = 3, ...data }) => {
    const featuredData = data.featuredData
    const projectsData = { isMd: isMd, ...data.projectsData }

    return (
        <div className="flex-col-center mx-auto h-auto w-full max-w-[1440px] space-y-8 py-8 md:space-y-16 md:py-16">
            <div className="flex-col-top relative h-auto w-full">
                {isMd ? (
                    Object.keys(featuredData).map((i) => (
                        <Featured_Full
                            key={`ftd-project-${i}`}
                            even={i % 2 == 0}
                            {...featuredData[i]}
                        />
                    ))
                ) : (
                    <Featured_Slides isMd={isMd} {...featuredData} />
                )}
            </div>
            <Archive {...projectsData} />
        </div>
    )
}

export default Projects
