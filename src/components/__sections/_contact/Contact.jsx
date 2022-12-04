import Link from 'next/link'
import { motion } from 'framer-motion'

import { useMediaQuery } from '@hooks'
import { contactVariants as variants } from '@motion'
import { Styled, Social_Icons } from '@components'

const Text = [
    `If you'd like to contact me about `,
    'a full time position, ',
    'a new project, ',
    'or even just to chat...',
    `I'd love to hear from you!`,
]

const Socials = () => (
    <div className="z-0 flex h-12 w-screen max-w-[1280px] justify-around md:h-14">
        <Styled.Socials
            className="relative aspect-square h-full"
            initial="hidden"
            animate="show"
            variants={variants.Socials}
        />
    </div>
)

const Contact = () => {
    const isMd = useMediaQuery(768)
    const currentYear = new Date().getFullYear()

    const LinkComponents = [
        <Styled.Button key="ct-link-0">
            <Link href="/contactpage" as="/Contact" scroll={false}>
                Send a Message
            </Link>
        </Styled.Button>,
        <p key="ct-link-1" className="text-[0.9em]">
            OR
        </p>,
        <a
            key="ct-link-2"
            href="mailto:m63jayne@gmail.com"
            className="text-grey-70 duration-150 ease-in hover:text-white"
        >
            m63jayne@gmail.com
        </a>,
    ]

    return (
        <motion.div
            className="flex-col-btw full gap-y-4 md:mt-14 md:h-[calc(100%-56px)]"
            initial={isMd ? 'hidden' : 'show'}
            animate="show"
            exit="exit"
            variants={variants.Wrap}
        >
            <div className="full flex-col-center text-center md:landscape:justify-end">
                <div className="w-full bg-slate-80">
                    <h3>Whats Next?</h3>
                    <h4>Get in Touch!</h4>
                </div>
                <div className="flex-col-evenly full gap-y-4 py-4 md:h-auto md:landscape:h-2/3 md:landscape:flex-row md:landscape:justify-center md:landscape:gap-x-20">
                    <motion.div
                        className="flex-col-center"
                        variants={variants.TextContainer}
                    >
                        {Text.map((item, i) => (
                            <motion.p
                                key={`line-${i}`}
                                variants={variants.pClip}
                            >
                                {item}
                            </motion.p>
                        ))}
                    </motion.div>
                    <div className="flex-col-center  gap-1 md:gap-3">
                        {LinkComponents.map((Component, i) => (
                            <motion.div
                                key={`link-component-${i}`}
                                variants={variants.Links}
                                custom={i}
                            >
                                {Component}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Socials />
            <div className="relative z-20 w-screen overflow-hidden py-2">
                <motion.div
                    className="flex-col-bottom full text-[12px] uppercase md:justify-start md:text-[14px]"
                    initial="hidden"
                    animate="show"
                    variants={variants.Signature}
                    transition={{ duration: 1, delay: 0.5, ease: 'backOut' }}
                >
                    <p className="text-grey-60">
                        Designed & Built by :&nbsp;
                        <span className="font-robotoMono text-sm capitalize text-white md:text-[18.6px]">
                            Michael Jayne
                        </span>
                    </p>
                    <p className="text-grey-60">
                        &#169; Copyright {currentYear}.
                    </p>
                </motion.div>
                <motion.span
                    initial="hidden"
                    animate="show"
                    className="absoluteFull -z-10 bg-gradient-to-b from-transparent via-black/20 to-black/50"
                    variants={variants.Signature}
                    transition={{ duration: 1.5, ease: 'circOut' }}
                />
            </div>
        </motion.div>
    )
}

export default Contact
