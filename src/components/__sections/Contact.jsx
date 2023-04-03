import { motion } from 'framer-motion'
import { contactVariants as variants } from '@motion'
import { PageLink, Styled } from '@components'

const ContactSection = ({ ...linkProps }) => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className="flex-col-center full relative z-10 lg:justify-center max-lg:portrait:gap-y-4">
                <header className="relative z-10 max-w-full whitespace-nowrap px-4 text-center">
                    <motion.h3 variants={variants.Headline.h3}>
                        Get in Touch
                    </motion.h3>
                    <motion.span
                        className="styled-underline inset-x-0"
                        variants={variants.Headline.Decoration}
                    />
                </header>
                <div className="max-lg:flex-col-evenly lg:flex-evenly relative w-full rounded-3xl max-lg:h-full lg:flex-row-reverse max-lg:portrait:max-h-[500px] max-lg:landscape:mt-auto">
                    <PageLink
                        id="contact"
                        href="/contact"
                        variants={variants.Button}
                        {...linkProps}
                    >
                        Send a Message
                    </PageLink>
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
            </div>

            {/** FOOT **/}
            <motion.div
                className="flex-col-center absolute bottom-0 z-0 w-full overflow-hidden py-2 text-12pt font-light uppercase md:py-4 xl:text-17pt max-md:landscape:p-[0px_0px_4px_0px]"
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
        </>
    )
}

export default ContactSection
