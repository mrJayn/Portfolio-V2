import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { useMediaQuery } from '@hooks'
import { experienceMotion } from '@motion'
const variants = experienceMotion.Certs

const CertLinks = ({ src, href, sitename, ...props }) =>
    [href, src].map((href, i) => (
        <motion.a key={`cert-link-${i}`} href={href} {...props}>
            {href == src ? 'View Certificate' : sitename}
        </motion.a>
    ))

const Certifications = ({ ...data }) => {
    const isMd = useMediaQuery(768)
    const [active, setActive] = useState(isMd ? 0 : 100)
    const certs = data.certifications

    return (
        <div className="flex-top full relative pb-10">
            <ul className="w-full space-y-2 overflow-hidden">
                {certs.map(([title, desc, sitename, href, src], i) => {
                    const ACTIVE = active === i
                    return (
                        <motion.li
                            layout="size"
                            key={`certification-${i}`}
                            className={`overflow-hidden rounded-2xl bg-grey-10 p-1 md:p-0 ${
                                !ACTIVE && 'duration-150 hover:brightness-95'
                            }`}
                        >
                            {/** [  CLICKABLE LIST  ] **/}

                            <p
                                className={`cursor-pointer rounded-t-2xl p-2 duration-250 ease-in  ${
                                    ACTIVE && 'bg-teal/25 text-white'
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
                                        className="flex-col-top origin-top"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={variants.accordion}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        }}
                                    >
                                        {/** [  MOBILE LAYOUT  ] **/}
                                        <p className="p-4 text-sm">{desc}</p>
                                        {isMd ? (
                                            <a
                                                href={href}
                                                className="styled_link mb-4 whitespace-nowrap font-medium"
                                            >
                                                {sitename}
                                            </a>
                                        ) : (
                                            <>
                                                <div className="flex-col-center w-full">
                                                    <CertLinks
                                                        href={href}
                                                        src={src}
                                                        sitename={sitename}
                                                        className="w-3/4 whitespace-nowrap rounded-xl bg-white/50 p-1.5 text-sm tracking-tight shadow-inset first-of-type:mb-2"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.li>
                    )
                })}
            </ul>

            {/** [  MD LAYOUT  ] **/}
            {isMd ? (
                <CertImageWithInfo certData={certs[active]} idx={active} />
            ) : null}
        </div>
    )
}

const CertImageWithInfo = ({ certData, idx }) => {
    const [title, _a, _b, _c, src] = certData
    return (
        <div
            className="flex-col-center sticky top-5 -mb-[100vh] w-full overflow-hidden rounded-3xl py-2"
            style={{ position: '-webkit-sticky' }}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={`certInfo-${idx}`}
                    className="relative mx-auto flex aspect-[22.05/17] w-[60%] overflow-hidden rounded-3xl shadow-md"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={variants.image}
                >
                    <Image
                        key={`certImg-${idx}`}
                        src={src}
                        alt={`${title} certification image`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/assets/certifications/blurDataCertificate.png"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Certifications
