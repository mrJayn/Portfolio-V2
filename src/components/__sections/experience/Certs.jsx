import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Styled } from '@components'

const StyledA = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer select-none whitespace-nowrap text-root font-medium text-slate underline underline-offset-[3px] lg:hover:text-slate-neon"
    >
        {children}
    </a>
)

const Certs = ({ certifications }) => {
    const [active, setActive] = useState(0)
    const labels = certifications.map((cert) => cert.title)
    const { title, description, src, href } = certifications[active]

    return (
        <div className="relative w-full max-lg:text-center">
            <h3>Certifications</h3>
            <div className="relative flex w-full max-lg:flex-col">
                {/* Indicators */}
                <ul className="max-lg:use-scrollbar z-10 flex h-20 overflow-y-hidden max-lg:overflow-x-scroll max-lg:pt-2 md:h-24 lg:h-auto lg:min-w-max lg:flex-col lg:gap-y-1.5 lg:shadow-[-8px_0_0_#a3b3d0]">
                    {labels.map((name, i) => (
                        <Styled.Indicators
                            key={name}
                            isActive={i === active}
                            handleClick={() => setActive(i)}
                        >
                            {name
                                .replace(/And/i, '\n&')
                                .replace(/With/i, '\nw/')}
                        </Styled.Indicators>
                    ))}
                </ul>
                {/* Certification Info */}
                <div className="subsection relative h-[500px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={labels[active]}
                            className="absolute inset-x-0 top-4 lg:bottom-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="flex-col-center mx-auto max-w-[512px] gap-y-4 text-center lg:h-full lg:justify-between">
                                <div className="flex-col-center full gap-y-4">
                                    <h4>{title}</h4>
                                    <p className="w-[44ch] max-w-full text-min leading-1.25">
                                        {description}
                                    </p>
                                </div>
                                <div>
                                    <div
                                        className="relative mb-4 aspect-[4/3] select-none overflow-hidden shadow-md shadow-black max-lg:w-[300px] lg:w-[400px]"
                                        style={{
                                            background: `center / cover no-repeat url(${src})`,
                                        }}
                                    />
                                    <StyledA href={href}>
                                        More Information
                                    </StyledA>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default Certs
