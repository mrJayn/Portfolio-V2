import { motion } from 'framer-motion'

import { Section, Styled_Button } from '@components'
import { config } from '@config'
import Link from 'next/link'

const text = [
    "Whether you'd like to contact me about a full time position,",
    "a project you're interested in building,",
    'or just want to chat!',
    "I'd love to hear from you!",
]

const Contact = () => {
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
                className="m-2 rounded-lg bg-gradient-to-t py-10 md:m-10"
                {...inViewProps}
            >
                <div className="flex-col-center text-center sm:px-20">
                    <h2>Whats Next?</h2>
                    <h3>Get in Touch</h3>

                    <h5 className="my-4 text-grey-darker">
                        I&apos;d love to hear from you!
                    </h5>
                    <div className="text-md">
                        {text.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                </div>
            </motion.div>
            <div className="flex-col-center py-10">
                <Styled_Button useInView={true}>
                    <Link href="/contactpage" scroll={false} passHref>
                        <a className="py-3 px-10 text-lg md:text-md">
                            Send a Message!
                        </a>
                    </Link>
                </Styled_Button>
                or&nbsp;
                <span className="styled-link font-medium italic text-teal underline underline-offset-[6px] after:bg-teal md:text-md">
                    <a href={`mailto:${config.email}`}>email me &raquo;</a>
                </span>
            </div>
        </Section>
    )
}

export default Contact
