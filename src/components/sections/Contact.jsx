import React, { useState } from 'react'
import Link from 'next/link'
import data from '@data'
import { motion } from 'framer-motion'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { Form, Section } from '@components'

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
            <div className="contact-content">
                <h3>
                    <span>Whats Next?</span>
                </h3>
                <h2>Get in Touch</h2>
                <div className="ct useInView">
                    <h4>I&apos;d love to hear from you!</h4>
                    <motion.div className="ct-content">
                        <div>
                            Whether you&apos;d like to contact me about a full
                            time position or project you might be interested in
                            building, You can leave me a message below, or at
                            my&nbsp;
                            <span>
                                <Link href={`mailto:${data.personal.email}`}>
                                    <div className="mailto">
                                        <span>email me</span>
                                        <HiChevronDoubleRight />
                                    </div>
                                </Link>
                            </span>
                        </div>
                    </motion.div>
                    <Form />
                </div>
            </div>
        </Section>
    )
}

export default Contact
