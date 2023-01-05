import { motion } from 'framer-motion'

import { themeConfig } from 'twTheme'
import { layoutVariants, contactVariants as variants } from '@motion'
import { Layout, Form, Styled } from '@components'

export default function Contact({ isLg, activeSection }) {
    const backgroundColor = themeConfig.getSectionColor(activeSection)
    return (
        <Layout
            title="Contact"
            description="Send me a message!"
            variants={layoutVariants.Contact}
        >
            <motion.div
                className="flex-col-center relative z-0 mx-auto min-h-screen w-full overflow-y-scroll px-2 py-14 text-center"
                style={{ backgroundColor: backgroundColor }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants.Wrapper}
            >
                {isLg && <Styled.Background />}

                <motion.p
                    className="my-4 text-center md:portrait:text-1.2x landscape:text-1x lg:landscape:text-1.3x"
                    variants={variants.Item}
                >
                    Use this form to send your message, <br />
                    and I&apos;ll get back to you ASAP!
                </motion.p>
                <Form isLg={isLg} />
            </motion.div>
        </Layout>
    )
}
