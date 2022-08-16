import React from 'react'
import { motion } from 'framer-motion'
import { Form, Section } from '@components'
import { config } from '@config'

const parent = {
    dd_open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    dd_closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
}
const child = {
    dd_open: {
        x: '0px',
        opacity: 1,
        zIndex: 1,
        transition: { duration: 0.25 },
    },
    dd_closed: {
        x: '-10px',
        opacity: 0,
        zIndex: 0,
        transition: { duration: 0.25 },
    },
}

const Contact = () => {
    return (
        <Section id="contact">
            <div className="flex-col-center h-full w-full">
                <div className="flex-col-center">
                    <h2>
                        <span>Whats Next?</span>
                    </h2>
                    <h3>Get in Touch</h3>
                </div>
                <div className="flex-col-top px-2">
                    <h4 className="mb-3 w-full border-b-2 border-teal pt-5 text-center text-black">
                        I&apos;d love to hear from you!
                    </h4>
                    <div className="flex-center text-center text-lg md:text-lg">
                        <p>
                            Whether you&apos;d like to contact me about a full
                            time position or a project you&apos;re interested in
                            building, I&apos;d love to hear from you! or&nbsp;
                            <span className="styled-link text-blue after:bg-blue">
                                <a href={`mailto:${config.email}`}>
                                    email me <span>&raquo;</span>
                                </a>
                            </span>
                        </p>
                    </div>
                    <Form />
                </div>
            </div>
        </Section>
    )
}

export default Contact
