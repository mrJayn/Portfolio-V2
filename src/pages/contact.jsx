import { motion } from 'framer-motion'

import { themeConfig } from 'twTheme'
import { Layout, Form, Styled } from '@components'
import { useEffect } from 'react'

export default function Contact({ activeSection }) {
    const backgroundColor = themeConfig.getSectionColor(activeSection)

    useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }))

    return (
        <Layout
            title="Contact"
            description="Send me a message!"
            activeSection={activeSection}
        >
            <motion.div
                className="flex-col-center relative z-10 mx-auto min-h-screen w-full overflow-y-scroll px-2 py-14 text-center"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
            >
                <Styled.Background />

                <p className="my-4 text-center md:portrait:text-[1.2em] lg:mb-2 lg:landscape:text-[1.3em]">
                    Use this form to send your message, <br />
                    and I&apos;ll get back to you ASAP!
                </p>
                <Form />
            </motion.div>
        </Layout>
    )
}
