import { isValidElement, useEffect, useRef, useState } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { index2id } from '@utils'

const title = 'Portfolio'
const description =
    "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({
    activeSection,
    setSection,
    isRouting,
    isMd,
    data,
    ...pageProps
}) {
    const scrollRef = useRef(null)
    const [initialVariant, setInitialVariant] = useState('')
    const [allowUpdates, setAllowUpdates] = useState(false)

    // Restrict initial page interactability  &  Set FramerMotion "initial" value
    useEffect(() => {
        const activeIndex = activeSection

        const resetProps = () => {
            let timeout = setTimeout(() => {
                setAllowUpdates(true)
                setInitialVariant('hidden')
            }, 1500)
            return () => clearTimeout(timeout)
        }

        if (activeIndex !== 0) {
            setSection(activeIndex)
            setInitialVariant(isRouting ? 'exit' : 'hidden')
            // Align active-section  &  active-area
            console.log(
                document.getElementById(index2id(activeIndex) + '-area')
            )
            // Scroll To section on viewport change
            document
                .getElementById(index2id(activeIndex) + '-area')
                .scrollIntoView({
                    behavior: 'auto',
                    block: isMd ? 'center' : 'start',
                })
            resetProps()
        } else {
            resetProps()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMd])

    // Required States + Markdown + Global States
    data = {
        activeSection: activeSection,
        setSection: setSection,
        allowUpdates: allowUpdates,
        initialVariant: initialVariant,
        ...pageProps,
        ...data,
    }

    // Section Components
    const projectsSectionData = {
        featured: data.featured_data,
        ...data.projects,
    }
    const sectionComponents = [
        {
            id: 'intro',
            data: <Intro {...data} />,
        },
        {
            id: 'about',
            data: data.about,
        },
        {
            id: 'experience',
            data: data.experience,
        },
        {
            id: 'projects',
            data: projectsSectionData,
        },
        {
            id: 'contact',
            data: <Contact {...data} />,
        },
    ]

    return (
        <Layout
            scrollRef={scrollRef}
            title={title}
            description={description}
            isHome={data.isHome}
            isMd={isMd}
        >
            {sectionComponents.map(({ id, data }, i) => {
                const isValidJSX = isValidElement(data)
                const props = {
                    id: id,
                    index: i,
                    activeSection: activeSection,
                    setSection: setSection,
                    allowUpdates: allowUpdates,
                    INITIAL: initialVariant,
                    scrollRef: scrollRef,
                    ...(isValidJSX ? { useChildren: true } : data),
                }
                return isValidJSX ? (
                    <Section key={id} {...props}>
                        {data}
                    </Section>
                ) : (
                    <Section key={id} {...props} />
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getAllMarkdown()
    return {
        props: {
            data,
        },
    }
}
