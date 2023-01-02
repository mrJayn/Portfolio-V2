import Link from 'next/link'
import { motion } from 'framer-motion'

import { contactSectionVariants as variants } from '@motion'
import { Styled } from '@components'

const Headline = () => (
    <div className="relative z-10 w-auto max-w-full px-4 text-center max-sm:min-w-[80%]">
        <motion.h3 variants={variants.Headline.h3}>Get in Touch</motion.h3>
        <motion.span
            className="styled-underline inset-x-0 mx-auto max-w-[77.5vw]"
            variants={variants.Headline.Decoration}
        />
    </div>
)

const ContactSection = ({ isLg }) => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="full flex flex-col">
            <motion.div
                key="contact-content"
                className="flex-col-top full relative overflow-hidden pt-28 lg:justify-center max-lg:portrait:gap-y-8 max-lg:landscape:pt-14"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants.Content}
            >
                <Headline />
                <div className="max-lg:flex-col-evenly lg:flex-evenly relative w-[90%] gap-y-8 rounded-3xl md:py-12 lg:flex-row-reverse max-[900px]:landscape:gap-y-2 max-[900px]:landscape:py-4">
                    {/** Right **/}
                    <motion.div variants={variants.Button}>
                        <Styled.Button>
                            <Link href="./contact" scroll={false}>
                                <span className="md:py-4 md:text-1.1x lg:text-1.3x landscape:py-0 lg:landscape:py-4">
                                    Send a Message
                                </span>
                            </Link>
                        </Styled.Button>
                    </motion.div>
                    {/** Left **/}
                    <motion.div
                        className="max-lg:flex-evenly lg:flex-col-left w-full flex-wrap overflow-hidden sm:portrait:gap-y-4 lg:h-full lg:w-min"
                        variants={variants.Socials.Container}
                    >
                        <Styled.Socials
                            useText
                            className={`sm:flex-center responsive-socials-width relative h-[3em] lg:text-1.3x `}
                            variants={variants.Socials.Item}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/** FOOT **/}
            <div className="flex-col-center w-full overflow-hidden py-2 text-12pt font-light uppercase md:py-4 xl:text-17pt">
                <p>
                    Designed & Built by :&nbsp;
                    <span className="font-robotoMono text-1.4x capitalize text-white">
                        Michael Jayne
                    </span>
                </p>
                <p>&#169; Copyright {currentYear}.</p>
            </div>
        </div>
    )
}

export default ContactSection
