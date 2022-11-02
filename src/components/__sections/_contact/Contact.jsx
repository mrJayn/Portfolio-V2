import { useRouter } from 'next/router'
import { motion, useInView } from 'framer-motion'

import { Social_Icons, Styled_Button } from '@components'
import { contactVariants as variants } from '@motion'
import { config } from '@config'
import { useRef } from 'react'

const Contact = ({ isMd }) => {
    const router = useRouter()
    const ref = useRef(null)
    const inView = useInView(ref, {
        amount: isMd ? 0.75 : 0.25,
        once: isMd ? false : true,
    })
    const currentYear = new Date().getFullYear()

    const goToForm = () =>
        router.push('/contactpage', 'Contact', { scroll: false })

    const sendEmail = () => (window.location.href = 'mailto:' + config.email)

    const allText = [
        <h3 key="ct-h3">{`Whats Next?`}</h3>,
        <h4 key="ct-h4">{`Get in Touch`}</h4>,
        <p
            key="ct-p"
            className="sm:text-lg sm:leading-8 sm:tracking-normal md:text-xl"
        >
            {`Whether you'd like to contact me about a full time position, a
            project you'd be interested in building, or even just to chat and
            get to know me...`}
        </p>,
        <>
            {isMd ? <h6 key="ct-h5">{`I'd love to hear from you!`}</h6> : null}
        </>,
    ]
    const buttons = [
        <Styled_Button
            key="ct-btn1"
            action={goToForm}
            btnStyle="py-3 px-10 text-lg md:text-md"
        >
            Send a Message!
        </Styled_Button>,
        <motion.p key="ct-p-2" className="sm:my-1">
            or&nbsp;
        </motion.p>,
        <Styled_Button key="ct-btn2" action={sendEmail} toTextAt="min">
            email me &raquo;
        </Styled_Button>,
    ]

    return (
        <>
            <motion.div
                className="sm:justify-bewteen flex-col-center full"
                initial={false}
                animate={inView ? 'show' : 'hidden'}
                ref={ref}
            >
                {/***/}
                <div className="flex-col-center full text-center md:flex-row">
                    <div className="md:flex-col-center md:full sm:space-y-2">
                        {allText.map((item, i) => (
                            <motion.div
                                key={`contact-el-${i}`}
                                variants={variants.Item}
                                custom={i}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                    <div className="md:flex-col-center py-1 md:w-full">
                        {buttons.map((item, i) => (
                            <motion.div
                                key={`contact-el-${i}`}
                                className="md:mt-2"
                                variants={variants.Item}
                                custom={i + 4}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/***/}
                <div className="flex-evenly w-screen max-w-[1280px]">
                    <Social_Icons
                        size={isMd ? 45 : 30}
                        initial={false}
                        animate={inView ? 'show' : 'hidden'}
                        variants={variants.Socials}
                    />
                </div>
                {/***/}
                <motion.div
                    className="z-10 w-screen bg-background"
                    initial={false}
                    animate={inView ? 'show' : 'hidden'}
                    variants={variants.Credits}
                >
                    <div className="flex-col-center my-4 border-t-2 border-t-grey py-4">
                        <p className="text-[12px] uppercase text-grey-60">
                            Designed & Built by &nbsp;
                            <span className="font-robotoMono text-[15px] capitalize tracking-tighter text-white">
                                Michael Jayne
                            </span>
                        </p>
                        <p className="text-[12px] uppercase text-grey-60">
                            &#169; Copyright {currentYear}.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Contact
