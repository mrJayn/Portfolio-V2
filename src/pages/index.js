import { useState } from 'react'
import { getAllMarkdown } from 'src/lib/markdown'
import {
    Intro,
    About,
    Featured,
    Projects,
    Contact,
    Layout,
    Experience,
    Form,
} from '@components'

const title = "Hello, I'm Michael 👋"
const description =
    "I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"

export default function Home({ isLoading, data }) {
    const [formState, setFormState] = useState(false)
    const [aboutState, setAboutState] = useState(false)
    const [expState, setExpState] = useState(false)
    data = {
        states: {
            about: aboutState,
            setAbout: setAboutState,
            expState: expState,
            setExp: setExpState,
            form: formState,
            setForm: setFormState,
        },
        ...data,
    }

    return (
        <Layout
            isLoading={isLoading}
            title="Michael Jayne"
            description={`${title}-${description}`}
        >
            <Intro {...data} />
            <About {...data} />
            <Experience {...data} />
            <Featured {...data} />
            <Projects {...data} />
            <Contact {...data} />
            <Form {...data} />
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await getAllMarkdown()
    return {
        props: {
            data: {
                text: data.text,
                featured: data.featured,
                projects: data.projects,
            },
        },
    }
}
