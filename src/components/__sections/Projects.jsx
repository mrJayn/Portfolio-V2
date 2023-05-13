import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Styled } from '@components'

const Projects = ({}) => {
    const router = useRouter()
    const goToArchive = (e) => {
        e.currentTarget.classList.add('clicked')
        router.push(
            { pathname: '/[sid]', query: { sid: 'projects' } },
            `/projects`,
            { scroll: false }
        )
    }
    return (
        <div id="projects-content" className="flex-center h-[75vh] w-full">
            <div className="flex-col-center absolute left-0 h-[50vh] w-screen bg-grey-80">
                <h4 className="text-[2em] text-white">
                    Check out the rest of my work.
                </h4>
                <Styled.Button style={{ color: 'white' }} onClick={goToArchive}>
                    <span className="text-[2em] tracking-2xl">
                        View Projects
                    </span>
                </Styled.Button>
            </div>
        </div>
    )
}

export default Projects
