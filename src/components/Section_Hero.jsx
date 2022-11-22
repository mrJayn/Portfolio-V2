import { motion } from 'framer-motion'
import { SectionImage } from '@components'
import { sectionContentVariants as variants } from '@motion'

const ScrollDownText = ({ even = false }) => (
    <motion.p
        className={`fixed bottom-[20%] -z-10 text-lg tracking-tight ${
            even == false ? 'left-1/2' : even ? 'left-1/4' : 'right-1/4'
        }`}
        initial="hidden"
        whileInView="show"
        variants={variants.scrollDownText}
    >
        Scroll Down
        <span className="scroll-down-arrow absolute -bottom-8 left-0 flex h-auto w-full">
            <motion.span
                className="w-full border-y-[3px]"
                variants={variants.scrollDownArrow}
            />
            <motion.span
                className="w-full border-y-[3px]"
                variants={variants.scrollDownArrow}
            />
        </span>
    </motion.p>
)

const Section_Hero = ({ even, isMd, ...data }) => {
    const isProjectsSection = data.sectionName == 'Projects'
    const itemProps = {
        variants: isMd ? variants.Items_X : variants.Items_Y,
        custom: isMd ? (even ? -1 : 1) : 0,
    }
    return (
        <>
            {isMd ? (
                <>
                    <span className="relative h-screen w-full" />
                    <ScrollDownText even={!isProjectsSection && even} />
                </>
            ) : null}

            <div
                id={`${data.sectionName}Page-hero`}
                className="relative h-auto w-full py-3 md:flex md:h-[calc(100vh-48px)] md:py-0"
            >
                {isMd & !isProjectsSection ? (
                    <SectionImage
                        src={data.src}
                        alt={data.alt}
                        style={{ order: even ? 2 : 1, zIndex: 1 }}
                    />
                ) : null}

                <motion.div
                    className="flex-col-center full gap-y-5 px-4 text-center md:px-10"
                    style={{
                        order: even ? 1 : 2,
                        maxWidth: isMd & !isProjectsSection ? '50vw' : 'none',
                    }}
                    initial="hidden"
                    whileInView="show"
                    exit="back"
                    viewport={{ once: true }}
                    variants={variants.Container}
                >
                    <motion.h2
                        className="relative animate-none text-4xl sm:text-5xl"
                        {...itemProps}
                    >
                        {data.title}
                        <motion.span
                            className={`styled-underline origin-center md:w-full ${
                                even ? 'left-0' : 'right-0'
                            }`}
                            variants={variants.Decoration}
                        />
                    </motion.h2>

                    <motion.p className="text-2xl leading-7" {...itemProps}>
                        {data.description}
                    </motion.p>

                    <motion.hr
                        className="w-full text-grey"
                        variants={variants.Decoration}
                        custom={even}
                    />
                </motion.div>
            </div>
        </>
    )
}
export default Section_Hero
