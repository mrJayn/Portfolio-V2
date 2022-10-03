import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { useMediaQuery } from '@hooks'
import { experienceMotion } from '@motion'

const Certifications = ({ ...exp_data }) => {
    const isSm = useMediaQuery(600)
    const pRM = useReducedMotion()
    const [active, setActive] = useState(isSm ? 0 : 100)
    const certs = exp_data.certifications
    const variants = experienceMotion.Certs

    const motionProps = {
        initial: 'hidden',
        animate: 'show',
        exit: 'exit',
        custom: pRM,
    }

    const Styled_A = ({ text, href, className, ...props }) => (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer nopenner"
            className={`flex-center whitespace-nowrap rounded-lg bg-grey/50 p-2 text-center font-robotoMono duration-150 hover:-translate-y-[2.5px] sm:w-min sm:scale-y-90 sm:rounded-none sm:bg-transparent sm:text-teal sm:underline-offset-4 sm:hover:underline sm:dark:text-teal-neon ${className}`}
            {...props}
        >
            {text}
        </motion.a>
    )
    const Styled_Image = () => (
        <motion.a
            href={certs[active][0]}
            target="_blank"
            rel="noreferrer noopener"
            className="relative mx-auto flex aspect-[22.05/17] w-[75%] overflow-hidden rounded-md shadow-md"
            variants={variants.image}
            {...motionProps}
        >
            <Image
                src={certs[active][4]}
                alt={`certification image for cert-${active}`}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/assets/certifications/blurDataCertificate.png"
                className="opacity-75 duration-250 ease-in hover:opacity-100"
            />
        </motion.a>
    )

    return (
        <>
            <ul className="w-full overflow-hidden sm:pr-5">
                {certs.map(
                    ([title, description, sitename, sitelink, pdf], i) => {
                        const ACTIVE = active === i
                        return (
                            <motion.li
                                layout
                                key={`certification-${i}`}
                                className={`mb-2 overflow-hidden rounded-lg bg-grey-lightest dark:bg-grey-darkest ${
                                    !ACTIVE &&
                                    'duration-150 hover:brightness-95'
                                }`}
                                variants={variants.items}
                                transition={{
                                    delay: pRM ? 0 : 0.25 + i * 0.1,
                                }}
                                {...motionProps}
                            >
                                {/** [  CLICKABLE LIST  ] **/}

                                <p
                                    className={`cursor-pointer rounded-t-lg p-2 duration-250 ease-in sm:py-1 sm:text-base ${
                                        ACTIVE &&
                                        'bg-teal/75 pl-4 text-white dark:bg-teal'
                                    }`}
                                    onClick={() => {
                                        if (!ACTIVE) setActive(i)
                                    }}
                                >
                                    {title}
                                </p>

                                {/** [  EXPANDED INFO  ] **/}
                                <AnimatePresence mode="wait">
                                    {ACTIVE ? (
                                        <motion.div
                                            key={`cert-content-${i}`}
                                            className="flex-col-top"
                                            variants={variants.active}
                                            {...motionProps}
                                        >
                                            <p className="mt-1 px-4 text-xs sm:py-4 sm:text-sm">
                                                {description}
                                            </p>

                                            {/** [  MOBILE LAYOUT  ] **/}

                                            {!isSm && (
                                                <div className="flex-evenly my-2 h-10 w-full">
                                                    {[sitelink, pdf].map(
                                                        (href, i) => (
                                                            <Styled_A
                                                                key={`cert-link-${i}`}
                                                                href={href}
                                                                text={
                                                                    href == pdf
                                                                        ? 'View Certificate'
                                                                        : sitename
                                                                }
                                                                className="text-xs"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </motion.li>
                        )
                    }
                )}
            </ul>

            {/** [  MD LAYOUT  ] **/}
            {isSm & (active !== 100) ? (
                <div
                    className="flex-col-center sticky top-5 -mb-[100vh] w-full overflow-hidden rounded-3xl py-2"
                    style={{ position: '-webkit-sticky' }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <div
                            key={`certInfo-${active}`}
                            className="full flex-col-center"
                        >
                            <Styled_Image />
                            <Styled_A
                                href={certs[active][3]}
                                text={certs[active][2]}
                                className="mt-5 rounded-lg bg-grey-lightest p-2 dark:bg-grey-darkest"
                                variants={variants.mdLink}
                                {...motionProps}
                            />
                        </div>
                    </AnimatePresence>
                </div>
            ) : null}
        </>
    )
}
export default Certifications
