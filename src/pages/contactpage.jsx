import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layout, ContactReturnBtn, Form } from '@components'
import { useRef } from 'react'

const ContactPage = ({ isHome }) => {
    const scrollRef = useRef()
    const contactProps = {
        title: 'Contact',
        description: 'Send me a message!',
        isHome: isHome,
    }

    // FORM STYLING in " ./styles/components.css"
    return (
        <Layout {...contactProps}>
            <div>
                <ContactReturnBtn />

                <motion.div className="flex-col-center mt-12 w-full max-w-[1040px] overflow-hidden bg-white p-3 text-center dark:bg-charcoal md:mt-16 lg:mx-auto">
                    <h3 className="font-semibold text-teal-30">Hello!</h3>
                    <p className="px-5 text-md md:px-10">
                        {`Message me anything at all and I'll get back to you as soon as I can!`}
                    </p>

                    <div className="full relative overflow-hidden pt-5 md:px-5 md:pt-10">
                        <Form />
                    </div>
                </motion.div>
            </div>
        </Layout>
    )
}
export default ContactPage
