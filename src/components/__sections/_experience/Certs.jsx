import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const Labels = ({ labels, active, setActive }) => (
    <div className="max-lg:use-scrollbar flex overflow-y-hidden max-lg:h-24 max-lg:overflow-x-scroll lg:flex-col lg:gap-y-4">
        {labels.map((name, i) => (
            <button
                key={name}
                className={`relative h-[4em] select-none px-4 leading-none transition-colors duration-150 ease-in hover:bg-slate-30 hover:text-white max-lg:aspect-[5/2] lg:w-5/6 lg:text-left ${
                    active === i
                        ? 'bg-slate-40 text-white'
                        : 'bg-grey-30 text-grey-60'
                }`}
                onClick={() => setActive(i)}
            >
                {name}
                {active === i && (
                    <motion.span
                        layoutId="marker"
                        className="absolute inset-0 -bottom-2 z-10 border-b-[5px] border-slate-60 lg:bottom-0"
                    />
                )}
            </button>
        ))}
    </div>
)

const Cert_Info = ({ title, description, href, src }) => (
    <motion.div
        className="flex-col-top relative min-h-[75vh] w-full gap-y-4 max-lg:text-center lg:h-[75vh] lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <h6 className="mt-6 font-semibold leading-none text-black">{title}</h6>
        <p>{description}</p>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="styled-a-link"
        >
            {href.match(/(\w{0,}\.(org|com|net|edu))/gm)}
        </a>
        <div
            className="relative aspect-[22.05/17] w-[90%] max-w-[600px] cursor-pointer select-none max-lg:mx-auto"
            onClick={() => window.open(src, '_blank')}
        >
            <Image
                src={src}
                alt={`${title} certification image`}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/assets/certifications/blurDataCertificate.png"
            />
        </div>
    </motion.div>
)

const Certs = ({ certifications }) => {
    const [active, setActive] = useState(0)
    const labels = certifications.map((cert) => cert.title)
    return (
        <>
            <h4>Certifications</h4>
            <div className="relative flex w-full max-lg:flex-col">
                <Labels labels={labels} active={active} setActive={setActive} />
                <AnimatePresence mode="wait">
                    <Cert_Info
                        key={labels[active]}
                        {...certifications[active]}
                    />
                </AnimatePresence>
            </div>
        </>
    )
}
export default Certs
