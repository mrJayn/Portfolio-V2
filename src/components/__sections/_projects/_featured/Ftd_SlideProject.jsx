import Image from 'next/image'
import { motion } from 'framer-motion'
import { Styled } from '@components'
import { ftdProjectVariants as variants } from '@motion'

const Styled_Header = ({ isLg = false, title, tech, ...motionProps }) => {
    const Technologies = (
        <div className="flex w-full whitespace-nowrap text-center lg:w-auto">
            {tech.map((item, i) => (
                <p
                    key={`tech-item-${i}`}
                    className="relative w-full border-slate-80/50 px-2 capitalize italic text-black even:border-x-2 even:px-4 sm:mb-2 sm:py-0.5 sm:px-4 sm:tracking-widest lg:text-[0.7em] lg:text-slate-30 xl:text-[0.9em]"
                >
                    {item}
                </p>
            ))}
        </div>
    )
    return isLg ? (
        <>
            <motion.div
                className="absolute bottom-[2.5em] right-[-7.5%] z-10 bg-slate-80 px-8 py-2 text-center"
                {...motionProps}
            >
                <h5 className="whitespace-nowrap text-[1.1em] tracking-widest text-slate-10 xl:text-[1.25em]">
                    {title}
                </h5>
            </motion.div>

            <motion.div
                className="absolute bottom-2 right-[-7.5%] z-10 bg-slate-80 text-center"
                {...motionProps}
            >
                {Technologies}
            </motion.div>
        </>
    ) : (
        <div className="flex-col-center">
            <h5 className="text-4xl leading-none tracking-wide text-slate-80 sm:text-5xl sm:leading-normal">
                {title}
            </h5>
            {Technologies}
        </div>
    )
}

const Featured_Slide = ({ projectData, direction = 0, isLg }) => {
    const IconLinks = () =>
        [
            ['GitHub', 'View on Github', projectData.github],
            ['External', 'Visit Project', projectData.external],
        ].map(([name, title, href], i) => (
            <motion.a
                key={`link-${i}`}
                href={href}
                title={title}
                className="relative h-12 w-3/4 hover:bg-white/50 sm:h-14"
                whileTap={{ scale: 0.9 }}
            >
                <Styled.Icon name={name} size="85%" />
            </motion.a>
        ))

    const Styled_Image = () => (
        <Image
            src={projectData.src}
            alt={projectData.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="-z-10 select-none opacity-100 lg:rounded-4xl lg:opacity-75"
        />
    )

    return isLg ? (
        <>
            <Styled_Header
                isLg
                title={projectData.title}
                tech={projectData.tech}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants.Slide.HeaderLg}
                custom={direction}
            />
            <div className="full relative rounded-4xl">
                <Styled_Image />
            </div>
        </>
    ) : (
        /** Slug Slide Small */
        <div className="flex-col-around relative mx-auto aspect-square w-full max-w-lg rounded-3xl bg-slate-20 p-1.5 pt-4 shadow-md shadow-grey sm:gap-y-2 sm:p-4">
            <Styled_Header title={projectData.title} tech={projectData.tech} />
            <p className="max-w-lg bg-white-dark/40 px-2 py-4 text-center text-[1.1em] leading-tight sm:text-[1.2em]">
                {projectData.brief}
            </p>
            <div className="pointer-events-none relative z-10 aspect-[5/2] w-full flex-1">
                <Styled_Image />
            </div>

            <div className="flex-around z-10 w-full overflow-hidden rounded-b-2xl bg-white/40">
                <IconLinks />
            </div>
        </div>
    )
}

export default Featured_Slide
