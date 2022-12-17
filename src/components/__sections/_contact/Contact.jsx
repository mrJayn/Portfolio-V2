import Link from 'next/link'
import { motion } from 'framer-motion'

import { contactVariants as variants } from '@motion'
import { Styled } from '@components'

const Foot = ({ currentYear }) => (
    <div className="flex-col-center relative w-screen overflow-hidden bg-gradient-to-b from-transparent to-black py-4 font-light uppercase md:py-8 lg:py-12">
        <div className="flex-col-center w-full">
            <p className="text-12pt lg:text-17pt">
                Designed & Built by :&nbsp;
                <span className="text-1.4x font-robotoMono capitalize text-white">
                    Michael Jayne
                </span>
            </p>
            <p className="text-12pt lg:text-17pt">
                &#169; Copyright {currentYear}.
            </p>
        </div>
    </div>
)

const Contact = ({ isLg }) => {
    const currentYear = new Date().getFullYear()

    const Links = () => (
        <div className="flex-col-center gap-y-1">
            <Styled.Button>
                <Link href="/contactpage" as="/Contact" scroll={false}>
                    Send a Message
                </Link>
            </Styled.Button>
            <p className="text-0.7x h-full tracking-widest">OR</p>
            <a href="mailto:m63jayne@gmail.com" className="pg-link">
                m63jayne@gmail.com
            </a>
        </div>
    )

    const Content = () => (
        <>
            {isLg ? (
                <motion.p
                    whileInView="show"
                    variants={variants.Text}
                    viewport={{ once: !isLg }}
                    className="lg:text-1.3x whitespace-pre-line text-center"
                >
                    {` If you'd like to contact me<br/>about a full time position,<br/>a new project,<br/>or just to chat...<br/>I'd love to hear from you!`.replaceAll(
                        '<br/>',
                        `\n`
                    )}
                </motion.p>
            ) : (
                <p className="text-21pt md:text-24pt">
                    {`Send me a message!<br/>I'd love to hear from you!`.replace(
                        '<br/>',
                        `\n`
                    )}
                </p>
            )}

            <Links />
        </>
    )

    return (
        <motion.div
            className="flex-col-btw full min-h-fit"
            initial="hidden"
            whileInView={isLg && 'show'}
        >
            <div className="flex-col-center full max-w-[1280px] pt-2 lg:pt-8">
                <div className="w-full bg-slate-80 text-center leading-tight md:py-2">
                    <h3>Whats Next?</h3>
                    <h4>Get in Touch!</h4>
                </div>
                <div className="flex-col-center relative flex-1 gap-y-4 p-4 text-center md:gap-y-8 lg:gap-x-[15vw]">
                    <Content />
                </div>

                <div className="flex-around z-0 mx-auto w-screen overflow-hidden">
                    <Styled.Socials className="relative aspect-square h-10 sm:h-12 lg:h-14" />
                </div>
            </div>

            <Foot currentYear={currentYear} />
        </motion.div>
    )
}

export default Contact
