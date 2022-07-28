import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Section, Project_Items } from '@components'

const Projects = () => {
    const [width, setWidth] = useState(0)
    const REF = useRef()

    useEffect(() => {
        setWidth(REF.current.scrollWidth - REF.current.offsetWidth)
    }, [width])

    return (
        <Section id="projects" count={false}>
            <div className="projects-content">
                <h3>Other Projects by Me</h3>
                <motion.div className="projects-wrap">
                    {/** SLIDER-WRAP **/}
                    <motion.div className="slider-wrap" ref={REF}>
                        {/** SLIDER **/}
                        <motion.div
                            className="slider"
                            drag="x"
                            dragConstraints={{
                                right: 0,
                                left: -width,
                            }}
                            dragTransition={{
                                bounceStiffness: 600,
                                bounceDamping: 30,
                            }}
                            whileTap={{ cursor: 'grabbing' }}
                        >
                            {/** PROJECT **/}
                            <Project_Items />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    )
}

export default Projects
