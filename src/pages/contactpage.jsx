import { motion } from 'framer-motion'
import { Layout, Form } from '@components'
import { formVariants } from '@motion'
import { themeConfig } from 'twTheme'

const title = 'Contact'
const description = 'Send me a message!'

export default function ContactPage({ isMd, activeSection }) {
    const backgroundColor = themeConfig.getSectionColor(activeSection)
    return (
        <Layout title={title} description={description} isMd={isMd}>
            <div
                className="min-h-[100vh] w-full"
                style={{ backgroundColor: backgroundColor }}
            >
                <motion.div
                    className="flex-col-center mx-auto w-full max-w-[856px] px-2 py-14 text-center"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={formVariants.Wrap}
                >
                    <h3>Hello!</h3>
                    <p>
                        Message me anything at all and I&apos;ll get back to you
                        as soon as I can!
                    </p>
                    <div className="relative mt-4 md:mt-8">
                        <Form />
                    </div>
                </motion.div>
            </div>
        </Layout>
    )
}
