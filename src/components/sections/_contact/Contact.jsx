import { motion } from 'framer-motion'

import { Section } from '@components'
import { config } from '@config'
import { styledBtn, toggleScrolling } from '@utils'

const Contact = ({ ...data }) => {
    const setFormState = data.states.setForm
    const inViewProps = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0, transition: { delay: 0.5 } },
        viewport: {
            once: true,
        },
    }
    return (
        <Section id="contact" fullScreen={false}>
            <motion.div
                className="m-5 rounded-lg bg-gradient-to-t py-10 shadow-lg md:m-10 md:from-eee md:to-eee/25"
                {...inViewProps}
            >
                <div className="flex-col-center h-full w-full">
                    <div className="flex-col-center full">
                        <p className="text-xl font-bold">Whats Next?</p>
                        <p
                            className="text-4xl font-bold tracking-wide text-transparent"
                            style={{
                                background:
                                    'linear-gradient(to bottom right, rgb(102,252, 241),rgb(69,162,158),#1f2833 )',
                                backgroundClip: 'text',
                            }}
                        >
                            Get in Touch
                        </p>

                        <p className="py-5 px-16 text-center text-2xl text-black">
                            I&apos;d love to hear from you!
                        </p>
                        <div className="flex-bottom max-w-[75%] text-center text-md md:text-lg">
                            <p>
                                Whether you&apos;d like to contact me about a
                                full time position or a project you&apos;re
                                interested in building, I&apos;d love to hear
                                from you! or&nbsp;
                                <span className="styled-link font-medium italic text-teal after:bg-teal">
                                    <a href={`mailto:${config.email}`}>
                                        email me <span>&raquo;</span>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="flex-center py-10">
                <motion.a
                    onClick={() => {
                        setFormState(true)
                        toggleScrolling(false)
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    {...styledBtn}
                >
                    Send a Message!
                </motion.a>
            </div>
        </Section>
    )
}

export default Contact
