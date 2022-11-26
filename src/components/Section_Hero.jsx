import { motion } from 'framer-motion'
import { Styled } from '@components'
import { sectionHeroVariants as variants } from '@motion'

const ScrollDownText = ({ even }) => (
    <motion.p
        className={`flex-center absolute bottom-[20%] z-10 w-[200px] text-lg tracking-tight ${
            even == null
                ? 'left-1/2 ml-[-100px]'
                : even
                ? 'left-1/4 ml-[-100px]'
                : 'right-1/4 mr-[-100px]'
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

const Section_Hero = ({ even, backgroundColor, isMd, isRouting, ...data }) => {
    const isProjectsSection = data.sectionName == 'Projects'
    const itemProps = {
        variants: isMd ? variants.Items_X : variants.Items_Y,
        custom: isMd ? (even ? -1 : 1) : 0,
    }
    return (
        <>
            <div
                id={`${data.sectionName}Page-hero`}
                className="relative h-auto w-full py-3 md:flex md:h-screen md:py-0"
            >
                {isMd & !isProjectsSection ? (
                    <Styled.Image
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
                    whileInView={isRouting ? 'back' : 'show'}
                    variants={variants.Container}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="relative z-10 animate-none md:text-4xl lg:text-5xl"
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
                {isMd ? (
                    <ScrollDownText even={isProjectsSection ? null : even} />
                ) : null}
            </div>
        </>
    )
}
export default Section_Hero
