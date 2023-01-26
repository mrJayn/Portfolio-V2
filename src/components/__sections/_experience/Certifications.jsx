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
                className="flex-col-around gap-y-4 lg:w-1/2 lg:justify-center"
                variants={variants.Content}
            >
                <p className="max-lg:text-center">{Cert.description}</p>
                <div className="max-lg:flex-around lg:flex-col-center flex w-full flex-wrap gap-y-4">
                    {[
                        [Cert.href, sitename],
                        [Cert.src, 'View Certificate'],
                    ].map(([HREF, text], i) => (
                        <a
                            key={`cert-link-${i}`}
                            href={HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-4 whitespace-nowrap font-medium text-slate-neon brightness-90 contrast-75 duration-250 ease-tween after:absolute after:-ml-2  after:text-[2em] after:leading-[0.6] after:duration-250 after:ease-tween after:content-['\00a0\00BB'] hover:translate-x-1 hover:contrast-150 hover:after:-ml-1"
                        >
                            {text}
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
                <span className="absoluteFull z-10 shadow-md" />
            </motion.div>
        </div>
    )
}

const Certifications = ({ ...props }) => {
    const [active, setActive] = useState(-1)

    return (
        <>
            <div
                className="flex-col-center relative w-full duration-500 ease-tween"
                style={{ marginBottom: active == -1 ? '0%' : '25%' }}
            >
                <h3 className="z-10">Certifications</h3>
                <div className="flex-col-center z-10 w-full overflow-hidden p-2">
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
                <div className="absolute -inset-3 -bottom-6 rounded-3xl rounded-tl-none rounded-br-none bg-slate-90" />
            </div>
        </>
    )
}

export default Certifications
