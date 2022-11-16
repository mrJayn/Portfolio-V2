import { motion } from 'framer-motion'
import { SectionImage } from '@components'
import { sectionContentVariants as variants } from '@motion'
import { useMediaQuery } from '@hooks'

const ScrollDownText = ({ even = false }) => (
    <motion.h7
        className={`fixed bottom-[20%] -z-10 ${
            even == false ? 'left-1/2' : even ? 'left-1/4' : 'right-1/4'
        }`}
        initial="hidden"
        whileInView="show"
        exit="exit"
        variants={variants.scrollDownText}
    >
        Scroll Down
        <span className="scroll-down-arrow">
            <motion.span variants={variants.scrollDownArrow} />
            <motion.span variants={variants.scrollDownArrow} />
        </span>
    </motion.h7>
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
                    className="flex-col-center full px-4 text-center md:px-10"
                    style={{
                        order: even ? 1 : 2,
                        maxWidth: isMd & !isProjectsSection ? '50%' : 'none',
                    }}
                    initial="hidden"
                    whileInView="show"
                    exit="back"
                    viewport={{ once: true }}
                    variants={variants.Container}
                >
                    <motion.h2
                        className="relative mb-5 animate-none text-4xl sm:text-5xl md:mb-10"
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
                        className="my-5 w-full text-grey md:my-10"
                        variants={variants.Decoration}
                        custom={even}
                    />
                </motion.div>
            </div>
        </>
    )
}
export default Section_Hero
