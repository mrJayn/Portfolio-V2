import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { experienceMotion as variants } from '@motion'
import { Accordion } from '@components'

const Content = ({ Cert }) => {
    const sitename = Cert.href.match(/(\w{0,}\.(org|com|net|edu))/gm)
    return (
        <div className="relative w-full p-4 lg:flex">
            <motion.div
                className="flex-col-around gap-y-4 lg:w-1/2"
                variants={variants.Content}
            >
                <p className="md:p-4">{Cert.description}</p>
                <div className="flex w-full flex-col sm:flex-row sm:justify-around lg:w-full lg:flex-col">
                    {[
                        [Cert.href, sitename],
                        [Cert.src, 'View Certificate'],
                    ].map(([HREF, text], i) => (
                        <a
                            key={`cert-link-${i}`}
                            href={HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 mx-auto w-fit whitespace-nowrap border-b-[1px] border-b-transparent leading-6 text-slate-neon duration-200 ease-tween hover:border-b-slate-neon"
                        >
                            {text}&nbsp;&raquo;
                        </a>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className="invisible relative mx-auto hidden aspect-[22.05/17] w-1/2 max-w-[600px] lg:visible lg:block"
                variants={variants.Image}
            >
                <div className="full relative">
                    <Image
                        src={Cert.src}
                        alt={`${Cert.title} certification image`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/assets/certifications/blurDataCertificate.png"
                    />
                </div>
                <span className="absoluteFull z-10 shadow" />
            </motion.div>
        </div>
    )
}

const Certifications = ({ ...props }) => {
    const [active, setActive] = useState(-1)

    return (
        <>
            <div
                className="flex-col-center relative w-full duration-500 ease-tween md:rounded-4xl md:rounded-tl-none md:rounded-br-none md:bg-slate-90 md:p-6"
                style={{ marginBottom: active == -1 ? '0%' : '25%' }}
            >
                <h3>Certifications</h3>
                <div className="flex-col-center w-full overflow-hidden px-2 sm:px-4 lg:py-4">
                    {props.certifications.map((Cert, index) => {
                        const isActive = active === index
                        return (
                            <Accordion
                                key={`cert-${index}`}
                                data={Cert}
                                isActive={isActive}
                                onClick={() => {
                                    setActive(isActive ? -1 : index)
                                }}
                            >
                                <Content Cert={Cert} />
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Certifications
