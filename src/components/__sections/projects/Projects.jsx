import FeaturedProject from './FeaturedProject'
import { Styled } from '@components'
import { useRouter } from 'next/router'

const Projects = ({ featuredData }) => {
    const router = useRouter()
    const handleLinkBtn = (e) => {
        e.currentTarget.classList.add('clicked')

        router.push(
            { pathname: '/[sid]', query: { sid: 'projects' } },
            `/projects`,
            { scroll: false }
        )
    }

    return (
        <>
            <h2>Projects</h2>
            <>
                {Object.entries(featuredData).map(([key, projProps]) => (
                    <FeaturedProject key={key} {...projProps} />
                ))}
            </>
            <div className="flex-col-center max-w-[95vw] rounded-xl bg-white px-8 py-4">
                <h4>Wanna see more?</h4>
                <h3>Check out all of my projects!</h3>
                <Styled.Button onClick={handleLinkBtn}>
                    View Projects
                </Styled.Button>
            </div>
        </>
    )
}

export default Projects
