import Image from 'next/image'
import { themeConfig } from 'twTheme'
import { motion } from 'framer-motion'

import { slugHeroVariants as variants } from '@motion'
import { Styled } from '@components'

const Slug_Hero = ({ activeSection, isLg, ...data }) => {
    const isProjects = data.id == 'Projects'
    const even = activeSection % 2 == 0
    const bgColor = themeConfig.getSectionColor(activeSection)
    const customTitleDir =
        activeSection == 0 ? null : isLg ? (even ? -50 : 50) : 0

    return (
        <motion.div
            className="full relative z-10 shadow-md"
            style={{ backgroundColor: bgColor }}
            variants={variants.Container}
        >
            {!isProjects && (
                <div
                    className={`full pointer-events-none relative z-10 select-none overflow-hidden shadow lg:max-w-[50vw] lg:opacity-25 ${
                        even ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}
                >
                    <Image
                        src={data.src}
                        alt={data.alt}
                        layout="fill"
                        quality={25}
                        className="object-cover max-lg:object-top max-lg:opacity-10 max-lg:blur-sm lg:object-center"
                    />
                </div>
            )}

            <div className="flex-col-top absolute inset-0 z-20 overflow-hidden text-button-lg max-lg:top-1/2 max-lg:-translate-y-1/2 lg:pt-[33vh]">
                <motion.h3
                    layout
                    className="bg-gradient-wave relative h-[1.25em] leading-none"
                    variants={variants.Title}
                    custom={customTitleDir}
                >
                    {data.title}
                    <motion.span
                        className="styled-underline -inset-x-4 origin-center"
                        variants={variants.Decoration}
                    />
                </motion.h3>
                <motion.h4
                    className="min-[500px]:flex-col-center mt-8 text-center"
                    variants={variants.Text}
                >
                    {data.description.split('<br/>').map((line, i) => (
                        <span
                            key={`hero-desc-line-${i}`}
                            className="w-full lg:whitespace-nowrap"
                        >
                            {line}
                        </span>
                    ))}
                </motion.h4>
                <motion.div
                    className="flex-center absolute bottom-[-1.25vh] aspect-[2/1] h-[7.5vh] cursor-pointer text-slate-40"
                    variants={variants.Chevron}
                    onClick={() =>
                        window.scrollTo({
                            top: window.innerHeight * 0.9,
                            behavior: 'smooth',
                        })
                    }
                >
                    <Styled.Chevron direction="down" />
                </motion.div>
            </div>

            <Styled.Background even={even} zIndex={1} />
        </motion.div>
    )
}
export default Slug_Hero
