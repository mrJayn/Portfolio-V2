import { motion } from 'framer-motion'
import { Layout, Form } from '@components'

const ContactPage = ({ isHome, isMd }) => {
    const contactProps = {
        title: 'Contact',
        description: 'Send me a message!',
        isHome: isHome,
    }
    // FORM STYLING in " ./styles/components.css"
    return (
        <Layout {...contactProps}>
            <motion.div className="flex-col-center mt-16 w-full max-w-[1040px] overflow-hidden p-5 px-5 text-center md:mt-16 lg:mx-auto">
                <h2>Hello!</h2>
                <p className="h-[3em] text-md sm:h-auto md:mx-10">
                    {`Message me anything at all and I'll get back to you as soon as I can!`}
                </p>

                <div className="full relative mt-5 md:mt-10">
                    <Form />
                </div>
            </motion.div>
        </Layout>
    )
}
export default ContactPage
