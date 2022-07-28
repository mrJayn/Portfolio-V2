import { useEffect } from 'react'
import { srConfig } from 'src/utils/sr'

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
            className={`section useInView ${count && 'count-section'}`}
            id={id}
        >
            <div>{children}</div>
        </section>
    )
}

export default Section
