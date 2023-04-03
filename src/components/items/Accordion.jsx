import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { experienceMotion as variants } from '@motion'

const Accordion_Items = ({ name, data }) => {
    switch (name) {
        case 'jobs':
            return (
                <ul className="full p-4">
                    <li className="flex-col-top mb-1 border-b-[1px]">
                        <h6 className="min-h-[2em] text-center font-semibold tracking-md text-black">
                            {data.position}
                        </h6>
                    </li>
                    {data.description.map((data, i) => (
                        <li
                            key={`job-desc-${i}`}
                            className="listed-item mb-3 text-black"
                        >
                            {data}
                        </li>
                    ))}
                </ul>
            )
        case 'certifications':
            return (
                <div className="relative flex w-full gap-4 p-4 max-lg:flex-col-reverse">
                    <div className="flex-col-center gap-y-4 lg:my-auto lg:h-full lg:w-1/2">
                        <p className="max-lg:text-center">{data.description}</p>
                        <a
                            href={data.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="styled-a-link"
                        >
                            {data.href.match(/(\w{0,}\.(org|com|net|edu))/gm)}
                        </a>
                    </div>
                    <div
                        className="relative mx-auto aspect-[22.05/17] w-1/2 max-w-[600px] cursor-pointer select-none"
                        onClick={() => window.open(src, '_blank')}
                    >
                        <Image
                            src={data.src}
                            alt={`${data.title} certification image`}
                            layout="fill"
                            objectFit="contain"
                            placeholder="blur"
                            blurDataURL="/assets/certifications/blurDataCertificate.png"
                        />
                    </div>
                </div>
            )
        default:
            return null
    }
}

const Accordion = ({ name, ...props }) => {
    const [active, setActive] = useState(-1)

    return (
        <div className="relative z-0 mx-auto flex w-[96.125%] flex-col md:w-full md:p-[0px_16px_16px_16px]">
            <h3>{props.headers[name]}</h3>
            {props[name].map((data, i) => {
                const isActive = i == active
                return (
                    <motion.div
                        key={`${name}-${i}`}
                        layout
                        className="relative mb-2 w-full last-of-type:mb-0 md:mb-4"
                    >
                        <header
                            className="flex-btw relative z-10 cursor-pointer select-none overflow-hidden rounded-tr-lg bg-gradient-to-r from-slate/75 via-grey/50 to-grey/50 bg-200% p-2 py-4 text-start  font-medium leading-none text-white-darker duration-500 ease-tween"
                            style={{
                                backgroundPosition: isActive ? '0%' : '100%',
                                boxShadow: isActive
                                    ? '0px 0 1px -4px #6199ffbf'
                                    : '-8px 0 1px -4px #6199ffbf ',
                                paddingLeft: `${isActive ? 20 : 8}px`,
                                transitionDelay: isActive ? '0s' : '0.2s',
                            }}
                            onClick={() => {
                                setActive(isActive ? -1 : i)
                            }}
                        >
                            {data.title}
                        </header>

                        <AnimatePresence mode="wait">
                            {isActive && (
                                <motion.div
                                    key={`job-${data.title}`}
                                    className="relative w-full overflow-hidden rounded-bl-xl border-l-2 border-l-slate-neon/50 bg-white-dark"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={variants.Accordion}
                                >
                                    <Accordion_Items name={name} data={data} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            })}
            <span
                className="absolute -inset-3 -z-10 rounded-2xl bg-slate-90 md:rounded-[2rem]"
                style={{
                    borderTopLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                }}
            />
        </div>
    )
}
export default Accordion
