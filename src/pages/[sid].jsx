import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { sidVariants } from '@motion'
import { About, Projects, Layout, Experience, Styled } from '@components'
import { getAllMarkdown, getSectionMarkdown } from 'src/lib/markdown'

const GetComponents = ({ ...data }) => {
    switch (data.id) {
        case 'about':
            return About({ ...data })
        case 'experience':
            return Experience({ ...data })
        case 'projects':
            return Projects({ ...data })
        default:
            return null
    }
}
const Hero = ({ activeSection, title }) => (
    <header className="relative z-10 flex h-screen w-full justify-center">
        <motion.h3
            className="bg-gradient-wave absolute z-10 portrait:top-1/3 landscape:top-[37.5%]"
            variants={sidVariants.Title}
            custom={activeSection === 0 ? 0 : 1}
        >
            {title}
            <motion.span
                className="styled-underline inset-x-0 origin-center"
                variants={sidVariants.Underline}
            />
        </motion.h3>
        <motion.div
            className="flex-col-center fixed bottom-[45vh] aspect-[3/2] text-grey"
            variants={sidVariants.Chevron}
        >
            <p className="translate-y-[0.5em] font-robotoMono uppercase">
                scroll
            </p>
            <div className="pointer-events-none absolute inset-x-[10%] top-[80%] aspect-square">
                <Styled.Chevron direction="down" />
            </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-white/90 to-white" />
    </header>
)
export default function SectionPage({ ...pageProps }) {
    const { data, activeSection } = pageProps

    useEffect(
        () =>
            document
                .getElementById(`${data.id}-Layout`)
                .scrollTo({ top: 0, behavior: 'auto' }),
        [data.id]
    )

    return (
        <Layout title={data.id} description={data.description}>
            <div
                data-sid-scroll-container
                className="absolute top-0 left-0 h-auto w-full"
            >
                <Hero activeSection={activeSection} {...data.data} />

                <motion.div
                    id={`${data.id}-section-content`}
                    data-reading-section
                    className={`flex-col-top relative z-20 mx-auto min-h-screen w-full max-w-7xl gap-y-28 bg-white pb-14 ${''} px-2 sm:max-lg:px-[clamp(8px,calc(4px+24*((100vw-414px)/610)),32px)] lg:px-8`}
                    variants={sidVariants.Content}
                >
                    {GetComponents({ ...data }).map((component) => (
                        <section
                            key={`${data.data.title}Page-${component.key}`}
                            className="full relative"
                        >
                            {component}
                        </section>
                    ))}
                </motion.div>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data = await getAllMarkdown()
    const paths = [data.about, data.experience, data.projects].map((obj) => {
        const sid = obj.data.id
        return { params: { sid } }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const data = await getSectionMarkdown(params.sid)
    return {
        props: { data },
    }
}
