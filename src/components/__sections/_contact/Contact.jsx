import { useRouter } from 'next/router'
import { motion, useInView } from 'framer-motion'

import { Section, Styled_Button } from '@components'
import { contactVariants as variants } from '@motion'
import { config } from '@config'
import { useRef } from 'react'

const text = [
    "Whether you'd like to contact me about a full time position,",
    "a project you're interested in building,",
    'or just want to chat!',
    "I'd love to hear from you!",
]

const Contact = ({ isMd }) => {
    const router = useRouter()
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.75 })

    const goToForm = () =>
        router.push('/contactpage', 'Contact', { scroll: false })

    const sendEmail = () => (window.location.href = 'mailto:' + config.email)

    const setA = [
        <h3 key="ct-h3">Whats Next?</h3>,
        <h4 key="ct-h4">Get in Touch</h4>,
        <h5 key="ct-h5">I&apos;d love to hear from you!</h5>,
        <>
            {text.map((line, j) => (
                <p key={j} className="text-lg tracking-normal" style={{}}>
                    {line}
                </p>
            ))}
        </>,
    ]
    const setB = [
        <Styled_Button
            key="ct-btn1"
            action={goToForm}
            btnStyle="py-3 px-10 text-lg md:text-md"
        >
            Send a Message!
        </Styled_Button>,
        <motion.p key="ct-or" className="my-1">
            or&nbsp;
        </motion.p>,
        <Styled_Button key="ct-btn2" action={sendEmail} toTextAt="min">
            email me &raquo;
        </Styled_Button>,
    ]

    return (
        <Section id="contact" sectionCard={false}>
            <motion.div
                className="flex-col-center full text-center md:flex-row"
                initial={false}
                animate={inView ? 'show' : 'hidden'}
                viewport={{ once: false }}
                ref={ref}
            >
                <div className="md:flex-col-center md:full">
                    {setA.map((item, i) => (
                        <motion.div
                            key={`contact-element-${i}`}
                            style={{ marginBottom: `${isMd ? i : 0.25}rem` }}
                            variants={variants.Item}
                            custom={i}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
                <div className="md:flex-col-center md:w-full">
                    {setB.map((item, i) => (
                        <motion.div
                            key={`contact-element-${i}`}
                            style={{
                                marginTop: isMd
                                    ? '0.75rem'
                                    : i == 0
                                    ? '5vh'
                                    : '0.25rem',
                            }}
                            variants={variants.Item}
                            custom={i + 4}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    )
}

export default Contact
