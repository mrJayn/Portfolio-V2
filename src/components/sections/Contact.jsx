import React from 'react'
import { Form, Section } from '@components'
import { config } from '@config'

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
