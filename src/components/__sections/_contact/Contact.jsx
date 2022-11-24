import Link from 'next/link'
import { motion } from 'framer-motion'

import { Social_Icons, Styled_Button } from '@components'
import { useMediaQuery } from '@hooks'
import { contactVariants as variants } from '@motion'

const ptext = [
    `If you'd like to contact me about`,
    'a full time position,',
    'a new project,',
    'or even just to chat...',
    ` I'd love to hear from you!`,
]

const Ct_Header = ({ isXs, span = false }) => (
    <div
        className={`w-full bg-grey/25 text-center ${
            !span && 'md:landscape:hidden'
        }`}
    >
        {isXs ? (
            <h3 className={` ${span && 'hidden md:landscape:block'}`}>
                Whats Next?
            </h3>
        ) : null}
        <h4 className={` ${span && 'hidden md:landscape:block'}`}>
            Get in Touch!
        </h4>
    </div>
)

const Ct_Links = () => (
    <div className="flex-col-center w-full gap-1 md:my-10 md:gap-3 md:landscape:w-auto">
        <motion.div variants={variants.Links} custom={0}>
            <Styled_Button>
                <Link href="/contactpage" as="/Contact" scroll={false}>
                    Read More
                </Link>
            </Styled_Button>
        </motion.div>
        <motion.p variants={variants.Links} custom={1}>
            or
        </motion.p>
        <motion.div variants={variants.Links} custom={2}>
            <a
                href="mailto:m63jayne@gmail.com"
                className="styled_link sm:text-lg md:text-xl"
            >
                m63jayne@gmail.com
            </a>
        </motion.div>
    </div>
)

const Credits = () => (
    <motion.div
        className="z-10 w-screen border-t-2 border-t-grey bg-background"
        initial="hidden"
        animate="show"
        variants={variants.Signature}
    >
        <div className="flex-col-center mt-2 py-1 xs:my-2 xs:py-2">
            <p className="text-[12px] uppercase text-grey-60">
                Designed & Built by &nbsp;
                <span className="font-robotoMono text-[15px] capitalize tracking-tighter text-white">
                    Michael Jayne
                </span>
            </p>
            <p className="text-[12px] uppercase text-grey-60">
                &#169; Copyright {new Date().getFullYear()}.
            </p>
        </div>
    </motion.div>
)

const Contact = () => {
    const isXs = useMediaQuery(360)
    const isMd = useMediaQuery(768)

    return (
        <motion.div
            className="flex-col-btw full"
            initial={isMd ? 'hidden' : 'show'}
            animate="show"
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <div className="full flex-col-center">
                {isMd ? <Ct_Header isXs={isXs} span /> : null}
                <div className="flex-col-evenly w-full gap-1 text-center sm:gap-10 md:h-1/2 md:justify-center md:landscape:flex-row md:landscape:items-start md:landscape:gap-x-20">
                    <Ct_Header isXs={isXs} />
                    <motion.div
                        className="flex-col-center mt-4 w-full md:mt-10 md:landscape:w-auto"
                        variants={variants.Container}
                    >
                        {ptext.map((item, i) => (
                            <motion.p
                                key={`pText-${i}`}
                                className="text-xs xs:text-base xs:leading-7 sm:text-lg sm:tracking-normal md:text-2xl"
                                variants={variants.Item}
                                custom={isMd ? 1 : 0}
                            >
                                {item}
                            </motion.p>
                        ))}
                    </motion.div>
                    <Ct_Links />
                </div>
            </div>
            <div className="flex w-screen max-w-[1280px] justify-around sm:justify-evenly md:mb-4">
                <Social_Icons
                    size={isMd ? 50 : 35}
                    initial="hidden"
                    animate="show"
                    variants={variants.Socials}
                />
            </div>
            <Credits />
        </motion.div>
    )
}

export default Contact
