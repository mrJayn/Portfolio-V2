import { isValidElement, useEffect, useRef, useState } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import { Contact, Intro, Layout, Section } from '@components'
import { index2id } from '@config'

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
        const delayResetProps = () => {
            let timeout = setTimeout(() => {
                setAllowUpdates(true)
                setInitialVariant('hidden')
            }, 1500)
            return () => clearTimeout(timeout)
        }

        if (activeSection !== 0) {
            setSection(activeSection)
            setInitialVariant(isRouting ? 'exit' : 'hidden')
            // Align active-section  &  active-area
            document
                .getElementById(index2id(activeSection) + '-area')
                .scrollIntoView({
                    behavior: 'auto',
                    block: isMd ? 'center' : 'end',
                })
            delayResetProps()
        } else {
            delayResetProps()
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
    const sectionComponents = [
        ['intro', <Intro key="intro" {...data} />],
        ['about', data.about],
        ['experience', data.experience],
        ['projects', data.projects],
        ['contact', <Contact key="contact" {...data} />],
    ]

    return (
        <Layout
            scrollRef={scrollRef}
            title={title}
            description={description}
            isHome={data.isHome}
            isMd={isMd}
        >
            {sectionComponents.map(([id, data], i) => {
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
