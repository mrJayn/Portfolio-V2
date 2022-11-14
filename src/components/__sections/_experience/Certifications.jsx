import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { useMediaQuery } from '@hooks'
import { experienceMotion } from '@motion'
const variants = experienceMotion.Certs

const AccordionContent = ({ Links, desc, isMd }) => (
    <>
        <p className="p-4 text-sm">{desc}</p>
        {Links.map(([href, text], i) => (
            <a
                key={`cert-link-${i}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`whitespace-nowrap px-2 py-1
                                                    ${
                                                        isMd
                                                            ? 'styled_link'
                                                            : 'styled-btn'
                                                    }
                                                `}
            >
                {text}&nbsp;&raquo;
            </a>
        ))}
    </>
)

const Cert_Image = ({ title, src }) => (
    <motion.div
        className="relative mx-auto flex aspect-[22.05/17] w-[90%] overflow-hidden rounded-3xl shadow-md"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={variants.image}
    >
        <Image
            src={src}
            alt={`${title} certification image`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/assets/certifications/blurDataCertificate.png"
        />
    </motion.div>
)

const Certifications = ({ ...data }) => {
    const isMd = useMediaQuery(768)
    const [active, setActive] = useState(isMd ? 0 : 100)
    const certs = data.certifications

    return (
        <div className="flex-top full relative md:py-20">
            {isMd ? (
                <h4 className="absolute -top-14 left-1/2 translate-x-[-50%] whitespace-nowrap">
                    Education & Certifications
                </h4>
            ) : null}
            <ul className="w-full space-y-2 overflow-hidden">
                {certs.map(([title, desc, sitename, href, src], i) => {
                    const ACTIVE = active === i
                    const Links = [
                        [href, sitename],
                        [src, 'View Certificate'],
                    ]
                    return (
                        <motion.li
                            layout="size"
                            key={`certification-${i}`}
                            className="overflow-hidden rounded-2xl bg-grey-10 p-1 md:p-0"
                        >
                            {/** [  CLICKABLE LIST  ] **/}

                            <p
                                className={`list-item-bg cursor-pointer rounded-t-2xl p-2 duration-250 ease-in after:opacity-0  ${
                                    ACTIVE
                                        ? 'text-white after:opacity-50'
                                        : ' text-grey-60 hover:after:opacity-10'
                                }`}
                                onClick={() => {
                                    if (!ACTIVE) setActive(i)
                                }}
                            >
                                {title}
                            </p>

                            {/** [  EXPANDED INFO  ] **/}
                            <AnimatePresence mode="wait" initial={false}>
                                {ACTIVE && (
                                    <motion.div
                                        key={`cert-content-${i}`}
                                        className="flex-col-top"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                height: 'auto',
                                            },
                                            collapsed: {
                                                opacity: 0,
                                                height: 0,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        }}
                                    >
                                        {/** [  MOBILE LAYOUT  ] **/}
                                        <AccordionContent
                                            Links={Links}
                                            desc={desc}
                                            isMd={isMd}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.li>
                    )
                })}
            </ul>
            {/** [  MD LAYOUT  ] **/}
            {isMd ? (
                <div
                    className="flex-col-center sticky top-[-50%] mb-44 w-full translate-y-[50%] lg:top-0 lg:mb-0 lg:translate-y-0"
                    style={{ position: '-webkit-sticky' }}
                >
                    <AnimatePresence mode="wait">
                        <Cert_Image
                            key={`certimg-${active}`}
                            title={certs[active][0]}
                            src={certs[active][4]}
                        />
                    </AnimatePresence>
                </div>
            ) : null}
        </div>
    )
}

export default Certifications
