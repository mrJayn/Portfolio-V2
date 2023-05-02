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
                        className={`flex-col-center relative my-12 w-full select-none gap-y-4 px-2 lg:my-24 lg:max-w-[1200px] lg:gap-y-12 lg:px-[5vw] xl:my-40 ${''} first-of-type:mt-14 lg:first-of-type:max-w-none ${''} last-of-type:mb-0 last-of-type:justify-end`}
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
