import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Section, Styled_Button } from '@components'
import { contactMotion } from '@motion'
import { config } from '@config'

const text = [
    "Whether you'd like to contact me about a full time position,",
    "a project you're interested in building,",
    'or just want to chat!',
    "I'd love to hear from you!",
]

const Contact = () => {
    const router = useRouter()

    const goToForm = () =>
        router.push('/contactpage', 'message_me', { scroll: false })
    const sendEmail = () => (window.location.href = 'mailto:' + config.email)

    const items = [
        <h3 key="cth3">Whats Next?</h3>,
        <h4 key="cth4">Get in Touch</h4>,
        <h5 key="cth5">I&apos;d love to hear from you!</h5>,
        <>
            {text.map((line, j) => (
                <p key={j} className="text-lg tracking-normal" style={{}}>
                    {line}
                </p>
            ))}
        </>,
    ]

    return (
        <Section id="contact" fullScreen={true} scrollOffset={100}>
            <motion.div className="mb-10" {...contactMotion.Text}>
                <div className="flex-col-center text-center">
                    {items.map((item, i) => (
                        <div
                            key={`contact-element-${i}`}
                            style={{ marginBottom: `${i}rem` }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="flex-col-center">
                <Styled_Button
                    action={goToForm}
                    btnStyle="py-3 px-10 text-lg md:text-md"
                    custom={0.5}
                    {...contactMotion.Button}
                >
                    Send a Message!
                </Styled_Button>
                <motion.p className="my-4" custom={1} {...contactMotion.Button}>
                    or&nbsp;
                </motion.p>
                <Styled_Button
                    action={sendEmail}
                    toTextAt="min"
                    custom={1.5}
                    {...contactMotion.Button}
                >
                    email me &raquo;
                </Styled_Button>
            </div>
        </Section>
    )
}

export default Contact
