import { useState } from 'react'
import { getMarkdown } from 'src/lib/markdown'
import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
    Form,
    Footer,
} from '@components'
import { useMediaQuery } from '@hooks'

export default function Home({ isHome, isFirst, setIsFirst, data, darkMode }) {
    /**
 *     const [
        [formState, setFormState],
        [aboutState, setAboutState],
        [expState, setExpState],
    ] = [useState(false), useState(false), useState(false)]
 */
    data = {
        states: {
            isFirst: isFirst,
            setIsFirst: setIsFirst,
        },
        isMd: useMediaQuery(),
        darkMode: darkMode,
        ...data,
    }

    const homeProps = {
        title: 'Portfolio',
        description:
            "Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!",
        isHome: isHome,
        darkMode: darkMode,
    }

    return (
        <Layout {...homeProps}>
            <Intro {...data} />
            <About {...data} />
            <Experience {...data} />
            <Featured {...data} />
            <Projects {...data} />
            <Contact {...data} />
            <Footer />
        </Layout>
    )
}
export async function getStaticProps() {
    const data = await getMarkdown()
    return {
        props: {
            data,
        },
    }
}
