import React from 'react'
import data from '@data'
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
            <div className="contact-header">
                <h2>
                    <span>Whats Next?</span>
                </h2>
                <h3>Get in Touch</h3>
            </div>
            <div className="contact-content">
                <div className="">
                    <h4>I&apos;d love to hear from you!</h4>
                    <motion.div className="ct-content">
                        <p>
                            Whether you&apos;d like to contact me about a full
                            time position or a project you&apos;re interested in
                            building, I&aposl;d love to hear from you!
                            <br />
                        </p>
                        <p>
                            or &nbsp;
                            <span>
                                <a href={`mailto:${config.email}`}>
                                    email me <span>&raquo;</span>
                                </a>
                            </span>
                        </p>
                    </motion.div>
                    <Form />
                </div>
            </div>
        </Section>
    )
}

export default Contact
