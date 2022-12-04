import Image from 'next/image'
import { motion } from 'framer-motion'
import { Styled } from '@components'
import { ftdProjectVariants as variants } from '@motion'

const Styled_Header = ({ homeSlides = false, title, tech, ...motionProps }) => (
    <motion.div
        className={`flex-col-center py-2 text-center ${
            homeSlides
                ? 'absolute bottom-[calc(100%-10vh)] right-[-12.5%] z-10 min-h-[22.5%] overflow-hidden rounded-3xl bg-slate-90 shadow-inset-outset-md lg:min-w-[75%] lg:p-4'
                : 'w-full'
        }`}
        {...motionProps}
    >
        <p className="hidden text-sm italic tracking-wider text-slate-10 underline underline-offset-4 md:block">
            Featured Project
        </p>
        <h5 className="whitespace-nowrap text-4xl tracking-wide text-slate sm:text-5xl md:text-2xl lg:text-3xl">
            {title}
        </h5>
        <div className="flex w-full whitespace-nowrap text-center">
            {tech.map((item, i) => (
                <p
                    key={`tech-item-${i}`}
                    className="relative w-full border-slate/75 px-2 py-0.5 font-semibold capitalize italic even:border-x-[3px] even:px-4"
                >
                    {item}
                </p>
            ))}
        </div>
    </motion.div>
)

const Featured_Slide = ({ projectData, direction = 0, isMd }) => {
    const IconLinks = [
        ['GitHub', 'View on Github', projectData.github],
        ['External', 'Visit Project', projectData.external],
    ].map(([name, title, href], i) => (
        <a
            key={`project-link-${i}`}
            className="relative aspect-square h-12"
            href={href}
            title={title}
        >
            <Styled.Icon name={name} />
        </a>
    ))

    const Styled_Img = () => (
        <>
            <Image
                src={projectData.src}
                alt={projectData.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="-z-10 opacity-50 blur-sm md:opacity-75 md:blur-0"
            />
            <span className="absoluteFull bg-black/10 md:bg-transparent md:shadow-inset" />
        </>
    )
    return isMd ? (
        <>
            <Styled_Header
                homeSlides
                title={projectData.title}
                tech={projectData.tech}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants.Slide.HeaderMd}
                custom={direction}
            />
            <div className="full relative overflow-hidden rounded-4xl">
                <Styled_Img />
            </div>
        </>
    ) : (
        /** Slug Slide Small */
        <div className="full relative overflow-hidden rounded-4xl">
            <div className="full z-10 grid grid-cols-1 px-2">
                <Styled_Header
                    title={projectData.title}
                    tech={projectData.tech}
                />
                <p className="mx-auto max-w-lg rounded-xl px-4 text-center text-xl font-medium sm:text-[1.2em]">
                    {projectData.brief}
                </p>
                <div className="z-10 flex h-14 items-end justify-around">
                    {IconLinks}
                </div>
            </div>
            <Styled_Img />
        </div>
    )
}

export default Featured_Slide
