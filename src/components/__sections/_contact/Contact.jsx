import { motion } from 'framer-motion'

import Signature from 'src/components/__sections/_contact/Signature'
import { Social_Icons, Styled_Button } from '@components'
import { useMediaQuery } from '@hooks'
import { contactVariants as variants } from '@motion'
import Link from 'next/link'

const ptext = [
    `If you'd like to contact me about`,
    'a full time position,',
    'a new project,',
    'or even just to chat...',

    ` I'd love to hear from you!`,
]

const Contact = () => {
    const isXs = useMediaQuery(360)
    const isMd = useMediaQuery(768)

    const Ct_Header = ({ span = false }) => (
        <div
            className={`w-full bg-grey/25 text-center ${
                !span && 'md:landscape:hidden'
            }`}
        >
            {isXs ? (
                <motion.h3
                    className={` ${span && 'hidden md:landscape:block'}`}
                    variants={variants.Item}
                >
                    Whats Next?
                </motion.h3>
            ) : null}
            <motion.h4
                className={` ${span && 'hidden md:landscape:block'}`}
                variants={variants.Item}
            >
                Get in Touch!
            </motion.h4>
        </div>
    )

    const Ct_Text = () => (
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
    )

    const Ct_Links = () => {
        const btnProps = { variants: variants.Item, custom: isMd ? -1 : 0 }
        return (
            <motion.div
                className="flex-col-center w-full gap-1 md:my-10 md:gap-3 md:landscape:w-auto"
                variants={variants.Container}
            >
                <Styled_Button {...btnProps}>
                    <Link href="/contactpage" as="/Contact" scroll={false}>
                        Read More
                    </Link>
                </Styled_Button>
                <motion.p {...btnProps}>or</motion.p>
                <motion.button {...btnProps}>
                    <a
                        href="mailto:m63jayne@gmail.com"
                        className="styled_link sm:text-lg md:text-xl"
                    >
                        m63jayne@gmail.com
                    </a>
                </motion.button>
            </motion.div>
        )
    }

    return (
        <>
            <motion.div
                className="flex-col-btw full"
                initial={isMd ? 'hidden' : 'show'}
                animate="show"
            >
                {/** Text  |  Btns*/}
                <div className="full flex-col-center">
                    {isMd ? <Ct_Header span /> : null}
                    <div className="flex-col-evenly w-full gap-1 text-center sm:gap-10 md:h-1/2 md:justify-center md:landscape:flex-row md:landscape:items-start md:landscape:gap-x-20">
                        <Ct_Header />
                        <Ct_Text />
                        <Ct_Links />
                    </div>
                </div>
                {/** Socials */}
                <div className="flex w-screen max-w-[1280px] justify-around sm:justify-evenly">
                    <Social_Icons
                        size={isMd ? 40 : 35}
                        initial="hidden"
                        animate="show"
                        variants={variants.Socials}
                    />
                </div>
                {/** Author  |  CopyRight */}
                <Signature />
            </motion.div>
        </>
    )
}

export default Contact
