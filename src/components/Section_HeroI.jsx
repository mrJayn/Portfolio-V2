import { motion } from 'framer-motion'
import Styled_Img from './items/Styled_Img'
import { sectionContentVariants as variants } from '@motion'

const Section_Hero = ({ even, isMd, ...data }) => {
    const sectionImgProps = {
        src: data.src,
        alt: data.alt,
        style: { order: even ? 2 : 1, zIndex: 1 },
    }
    const itemProps = {
        variants: variants.Items,
        custom: isMd ? (even ? -1 : 1) : 0,
    }
    return (
        <>
            {isMd ? <span className="relative h-screen w-full" /> : null}
            <div
                id={`${data.sectionName}Page-hero`}
                className="relative mb-6 h-auto w-full py-3 md:mb-24 md:flex md:h-[calc(100vh-48px)] md:py-0"
            >
                {isMd ? <Styled_Img {...sectionImgProps} /> : null}

                <motion.div
                    className="flex-col-center full px-4 text-center md:max-w-[50%] md:px-10"
                    style={{ order: even ? 1 : 2 }}
                    initial="hidden"
                    animate="show"
                    exit="back"
                    variants={variants.Container}
                >
                    <motion.h2
                        className="mb-10 text-4xl sm:text-5xl"
                        {...itemProps}
                    >
                        {data.title}
                        <motion.span
                            className={`section-title-underline slugHero origin-center ${
                                even ? 'left-0' : 'right-0'
                            }`}
                            variants={variants.Decoration}
                        />
                    </motion.h2>

                    <motion.p className="text-2xl leading-7" {...itemProps}>
                        {data.description}
                    </motion.p>

                    <motion.hr
                        className="my-10 w-full text-grey"
                        variants={variants.Decoration}
                        custom={even}
                    />
                </motion.div>
            </div>
        </>
    )
}
export default Section_Hero
