import { motion } from 'framer-motion'

import { Section, StyledButton } from '@components'
import { config } from '@config'

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
                className="m-2 rounded-lg bg-gradient-to-t py-10 md:m-10 md:from-eee md:to-eee/25 md:shadow-lg"
                {...inViewProps}
            >
                <div className="flex-col-center text-center">
                    <h2 className="text-black">Whats Next?</h2>
                    <h3
                        className="font-bold text-transparent"
                        style={{
                            background:
                                'linear-gradient(to bottom right, rgb(102,252, 241),rgb(69,162,158),#1f2833 )',
                            backgroundClip: 'text',
                        }}
                    >
                        Get in Touch
                    </h3>

                    <h5 className="my-4 text-charcoal">
                        I&apos;d love to hear from you!
                    </h5>
                    <p className="text-md">
                        Whether you&apos;d like to contact me about a full time
                        position or a project you&apos;re interested in
                        building, I&apos;d love to hear from you! or&nbsp;
                        <span className="styled-link font-medium italic text-teal after:bg-teal">
                            <a href={`mailto:${config.email}`}>
                                email me <span>&raquo;</span>
                            </a>
                        </span>
                    </p>
                </div>
            </motion.div>
            <div className="flex-center py-10">
                <StyledButton
                    action={() => setFormState(true)}
                    allowScroll={false}
                >
                    <span className="py-3 px-10 text-lg md:text-md">
                        Send a Message!
                    </span>
                </StyledButton>
            </div>
        </Section>
    )
}

export default Contact
