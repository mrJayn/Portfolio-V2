import { motion } from 'framer-motion'
import { getAllMarkdown } from 'src/lib/markdown'
import { sectionIDs } from '@config'
import {
    Layout,
    Intro,
    About,
    Experience,
    Projects,
    Contact,
} from '@components'

export default function Home({ data }) {
    const { about, experience, projects } = data

    return (
        <Layout
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            {sectionIDs.map((id) => {
                return (
                    <motion.section
                        key={`${id}-section`}
                        id={id}
                        className={`flex-col-center relative my-14 w-full max-w-[1000px]  ${''} first-of-type:max-w-none first-of-type:py-0 ${''} last-of-type:mb-0 last-of-type:justify-end`}
                    >
                        {{
                            intro: <Intro />,
                            about: <About {...about} />,
                            experience: <Experience {...experience} />,
                            projects: <Projects {...projects} />,
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
