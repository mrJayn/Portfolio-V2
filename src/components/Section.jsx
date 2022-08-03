import { useEffect } from 'react'
import srConfig from '@utils'

const Section = ({ children, id, count = true, ...props }) => {
    useEffect(() => {
        async function animate() {
            const sr = (await import('scrollreveal')).default
            sr().reveal('.useInView', srConfig)
        }
        animate()
    }, [])
    return (
        <section
            className={`useInView relative mb-24 h-screen w-full max-w-[1440px] md:mb-0 lg:mx-auto  ${
                count && 'count-section'
            }`}
            id={id}
        >
            <div className="h-full w-full snap-start">{children}</div>
        </section>
    )
}

export default Section
