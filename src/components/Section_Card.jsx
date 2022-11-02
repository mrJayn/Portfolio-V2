import Link from 'next/link'
import { motion } from 'framer-motion'
import { Styled_Button, Styled_Image } from '@components'
import { sectionCardVariants as variants } from '@motion'

const Section_Card = ({ idx, anim, initialVariant, isMd, data }) => {
    const even = idx % 2 == 0
    const sectionImgProps = {
        src: data.src,
        alt: data.alt,
        style: isMd ? { order: even ? 2 : 1 } : {},
        initial: initialVariant,
        animate: anim,
        exit: 'hidden',
        custom: isMd ? even : 0,
    }
    const itemProps = {
        variants: variants.Item,
        custom: isMd ? even : 0,
    }
    return (
        <div className="full relative md:flex">
            {isMd ? (
                <Styled_Image variants={variants.ImgMd} {...sectionImgProps} />
            ) : null}
            <div
                className="full bg-gradient_card relative overflow-hidden  md:bg-none"
                style={{ order: even ? 1 : 2 }}
            >
                <motion.div
                    className={`flex-col-center full whitespace-pre-line ${
                        isMd ? `absoluteFull` : 'space-y-3'
                    }`}
                    initial={false}
                    animate={anim}
                    variants={variants.StaggerParent}
                    custom={isMd}
                >
                    <motion.h3 {...itemProps}>{data.section}</motion.h3>

                    <motion.p
                        className="text-center text-lg font-medium text-grey-40 dark:text-grey-60 md:text-xl"
                        dangerouslySetInnerHTML={{ __html: data.brief }}
                        {...itemProps}
                    />

                    {!isMd ? (
                        <Styled_Image
                            variants={variants.ImgSm}
                            {...sectionImgProps}
                        />
                    ) : null}

                    <Styled_Button
                        toTextAt={isMd}
                        btnStyle="py-4 w-3/4 top-[1.5vh] md:hidden"
                        textStyle="mt-20"
                        {...itemProps}
                    >
                        <Link
                            href={{
                                pathname: '/section/[slug]',
                                query: { slug: data.slug },
                            }}
                            scroll={false}
                        >
                            Read More
                        </Link>
                    </Styled_Button>
                </motion.div>
            </div>
        </div>
    )
}

export default Section_Card
