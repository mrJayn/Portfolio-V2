import Link from 'next/link'
import { motion } from 'framer-motion'

import { contactSectionVariants as variants } from '@motion'
import { Styled } from '@components'

const Headline = () => (
    <div className="relative z-10 max-w-full whitespace-nowrap px-4 text-center">
        <motion.h3 variants={variants.Headline.h3}>Get in Touch</motion.h3>
        <motion.span
            className="styled-underline inset-x-0"
            variants={variants.Headline.Decoration}
        />
    </div>
)

const ContactSection = ({}) => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.div
            className="full flex flex-col pt-14"
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <motion.div
                key="contact-content"
                className="flex-col-center full relative z-10 overflow-hidden lg:justify-center max-lg:portrait:gap-y-4"
                variants={variants.Content}
            >
                <Headline />
                <div className="max-lg:flex-col-evenly lg:flex-evenly relative w-full rounded-3xl max-lg:h-full lg:flex-row-reverse max-lg:portrait:max-h-[500px] max-lg:landscape:mt-auto">
                    {/** Right **/}
                    <motion.div variants={variants.Button}>
                        <Styled.Button>
                            <Link href="./contact" scroll={false}>
                                Send Message
                            </Link>
                        </Styled.Button>
                    </motion.div>
                    {/** Left **/}
                    <motion.div
                        className="max-lg:landscape:flex-evenly max-lg:portrait:flex-col-center lg:flex-col-left w-full sm:portrait:gap-y-4 lg:h-full lg:w-min max-lg:landscape:flex-wrap"
                        variants={variants.Socials.Container}
                    >
                        <Styled.Socials
                            useText
                            className="sm:flex-center relative h-[3em] lg:text-[1.3em] portrait:w-full landscape:w-min max-lg:landscape:h-min max-md:landscape:py-1 md:landscape:w-1/2 lg:landscape:w-full"
                            variants={variants.Socials.Item}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/** FOOT **/}
            <motion.div
                className="flex-col-center z-0 w-full overflow-hidden py-2 text-12pt font-light uppercase md:py-4 xl:text-17pt max-md:landscape:p-[0px_0px_4px_0px]"
                variants={variants.Footer}
            >
                <p>
                    Designed & Built by :&nbsp;
                    <span className="font-robotoMono text-[1.4em] capitalize text-white">
                        Michael Jayne
                    </span>
                </p>
                <p>&#169; Copyright {currentYear}.</p>
            </motion.div>
        </motion.div>
    )
}

export default ContactSection
