import { motion } from 'framer-motion'
import { getAllMarkdown } from 'src/lib/markdown'
import { sectionNames } from '@config'
import {
    Layout,
    Intro,
    About,
    Experience,
    Projects,
    Contact,
    Featured,
} from '@components'

export default function Home({ data }) {
    const { about, experience, projects } = data

    return (
        <Layout
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            {Object.entries(sectionNames).map(([id, title]) => {
                return (
                    <motion.section
                        key={`${id}-section`}
                        id={id}
                        className="mb-40 w-full max-w-[1200px] first-of-type:max-w-none last-of-type:mb-0"
                    >
                        {title && (
                            <h2 className="text-center" id="`${title}-heading`">
                                {title}
                            </h2>
                        )}

                        {{
                            intro: <Intro />,
                            about: <About {...about} />,
                            experience: <Experience {...experience} />,
                            featured: <Featured {...projects} />,
                            projects: <Projects />,
                            contact: <Contact />,
                        }[id] ?? null}
                    </motion.section>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getAllMarkdown()
    return { props: { data } }
}
