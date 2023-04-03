import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Layout, Form } from '@components'

export default function Contact({ activeSection }) {
    useEffect(() =>
        window.scrollTo({ top: window.innerHeight * 5, behavior: 'auto' })
    )

    return (
        <Layout
            title="Contact"
            description="Send me a message!"
            activeSection={activeSection}
        >
            <motion.div
                className="flex-col-center absolute top-0 left-0 z-10 mx-auto min-h-screen w-full overflow-y-scroll px-2 py-14 text-center"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
            >
                <p className="my-2 rounded-xl bg-black/75 p-4 text-center text-white md:portrait:text-[1.2em] lg:mb-2 lg:landscape:text-[1.3em]">
                    Use this form to send your message, and I&apos;ll get back
                    to you ASAP!
                </p>
                <Form />
            </motion.div>
        </Layout>
    )
}
