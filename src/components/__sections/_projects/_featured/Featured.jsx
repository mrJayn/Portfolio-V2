import Featured_Full from './Ftd_FullProject'
import Ftd_Slides from './Ftd_Slides'

// All Projects on screen
const All_Featured = ({ ...projects }) =>
    Object.keys(projects).map((i) => (
        <Featured_Full
            key={`ftd-project-${i}`}
            even={i % 2 == 0}
            {...projects[i]}
        />
    ))

// SectionCard is able to call <Slides/> because it does not pass 'isMd' as a prop
const Featured = ({ isMd, slug = null, ...projects }) =>
    isMd ? (
        <All_Featured {...projects} />
    ) : (
        <Ftd_Slides isMd={isMd} slug={slug} {...projects} />
    )

export default Featured
