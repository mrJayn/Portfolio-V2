import Image from 'next/image'
import { motion } from 'framer-motion'
import { Styled_Icon } from '@components'
import { ftdProjectVariants as variants } from '@motion'

const Styled_Header = ({ homeSlides = false, title, tech, ...motionProps }) => (
    <motion.div
        className={`flex-col-center py-2 text-center ${
            homeSlides
                ? 'absolute bottom-[calc(100%-10vh)] right-[-12.5%] z-10 min-h-[22.5%] overflow-hidden rounded-3xl bg-slate-90 shadow-inset-outset-md lg:min-w-[75%] lg:p-4'
                : 'w-full xs:pt-4 sm:py-4'
        }`}
        {...motionProps}
    >
        <p className="hidden text-sm italic tracking-wider text-slate-10 underline underline-offset-4 md:block">
            Featured Project
        </p>
        <h5 className="whitespace-nowrap tracking-wide text-slate-40 contrast-200 xs:text-3xl md:text-2xl lg:text-3xl">
            {title}
        </h5>
        <div className="flex w-full whitespace-nowrap text-center text-xs capitalize italic leading-tight text-slate-20 xs:text-base xs:leading-loose">
            {tech.map((item, i) => (
                <span
                    key={`tech-item-${i}`}
                    className="relative w-full border-slate-10/50 px-2 tracking-wide even:border-x-2 even:px-4 even:font-medium sm:px-4"
                >
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
)

const Featured_Slide = ({ projectData, direction = 0, isMd }) => {
    const IconLinks = [
        ['GitHub', 'View on Github', projectData.github],
        ['External', 'Visit Project', projectData.external],
    ].map(([name, title, href], i) => (
        <a key={`project-link-${i}`} href={href} title={title}>
            <Styled_Icon styled name={name} size={55} />
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
                className="-z-10 opacity-20 md:relative md:opacity-75"
            />
            <span className="absoluteFull shadow-inset" />
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
                variants={variants.isHome.Header}
                custom={direction}
            />
            <div className="full relative overflow-hidden rounded-4xl">
                <Styled_Img />
            </div>
        </>
    ) : (
        /** Slug Slide Small */
        <div className="full full relative grid grid-cols-1 grid-rows-3 items-center overflow-hidden rounded-4xl px-2 pb-4 sm:py-4">
            <Styled_Header title={projectData.title} tech={projectData.tech} />
            <p className="text-center leading-7 xs:px-10 xs:text-xl sm:px-10">
                {projectData.brief}
            </p>
            <div className=" z-10 flex justify-around">{IconLinks}</div>
            <Styled_Img />
            <span className="absoluteFull shadow-inset" />
        </div>
    )
}

export default Featured_Slide
