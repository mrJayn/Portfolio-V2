import Link from 'next/link'
import { motion } from 'framer-motion'

import { Styled_Button, Styled_Image } from '@components'
import { sectionContentVariants as variants } from '@motion'

const Section_Card = ({ idx, INITIAL, ANIM, EXIT, yDir, isMd, data }) => {
    const even = idx % 2 == 0
    const ID = data.id

    // Title Decoration
    const Title_Decoration = (
        <motion.span
            className="section-title-underline"
            style={{
                originX: isMd ? (even ? 0.85 : 0.15) : 0.5,
                right: isMd & even ? 0 : 'auto',
                left: isMd & even ? 'auto' : 0,
            }}
            variants={variants.Decoration}
        />
    )
    // Props
    const motionProps = { initial: INITIAL, animate: ANIM, exit: EXIT }
    const itemProps = {
        variants: isMd ? variants.Items_X : variants.Items_Y,
        custom: isMd ? (even ? -1 : 1) : yDir,
    }
    const sectionImgProps = {
        src: data.src,
        alt: data.alt,
        id: `image-${ID}`,
        ...motionProps,
    }

    return (
        <div id={`card-${ID}`} className="full relative md:flex">
            {isMd ? (
                <Styled_Image
                    style={{ order: even ? 2 : 1, userSelect: 'none' }}
                    variants={variants.ImgMd}
                    custom={even ? 1 : -1}
                    {...sectionImgProps}
                />
            ) : null}

            <motion.div
                id={`content-${ID}`}
                data-animation={ANIM}
                className={`full flex-col-evenly relative whitespace-pre-line text-center md:justify-center  ${
                    even
                        ? 'order-1 md:items-end md:text-end'
                        : 'order-2 md:items-start md:text-start'
                }`}
                variants={variants.Container}
                {...motionProps}
            >
                <motion.h3 className="relative sm:w-[75%] md:w-full md:px-4">
                    {data.sectionName}
                    {Title_Decoration}
                </motion.h3>

                <motion.p
                    className="mt-2 px-8 text-lg font-medium leading-7 xs:text-xl sm:text-2xl md:mb-20 md:mt-10 md:whitespace-pre  md:rounded-4xl md:px-0 md:text-xl lg:text-2xl lg:leading-8"
                    {...itemProps}
                >
                    {data.subtitle.replace('<br/>', `\n`)}
                </motion.p>

                {!isMd ? <Styled_Image {...sectionImgProps} /> : null}

                <motion.div
                    className="relative md:mx-10"
                    variants={variants.Btn}
                >
                    <Styled_Button even={even}>
                        <Link
                            href={{
                                pathname: '/section/[slug]',
                                query: { slug: data.slug },
                            }}
                            as={process.env.BACKEND_URL + '/' + data.slug}
                            scroll={false}
                        >
                            Read More
                        </Link>
                    </Styled_Button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Section_Card
