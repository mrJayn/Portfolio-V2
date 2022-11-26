import Link from 'next/link'
import { motion } from 'framer-motion'

import { Featured_Slides, Styled } from '@components'
import { sectionContentVariants as variants } from '@motion'

const Section_Card = ({
    id,
    idx,
    initialAnim,
    anim,
    isMd,
    isRouting,
    data,
    featured,
}) => {
    const even = idx % 2 == 0

    // Section name from slug for Link "as"
    const pathAs = data.slug.charAt(0).toUpperCase() + data.slug.slice(1)

    // Props
    const motionProps = { initial: initialAnim, animate: anim, exit: 'hidden' }
    const itemProps = {
        variants: variants.Items_X,
        custom: isMd && (even ? -1 : 1),
    }
    const sectionImgProps = {
        src: data.src,
        alt: data.alt,
        id: `image-${id}`,
        ...motionProps,
    }

    // Title Decoration
    const Title_Decoration = (
        <motion.span
            className="styled-underline"
            style={{
                originX: isMd ? (even ? 0.85 : 0.15) : 0.5,
                right: isMd & even ? 0 : 'auto',
                left: isMd & even ? 'auto' : 0,
            }}
            variants={variants.Decoration}
        />
    )

    return (
        <div id={`${id}-content`} className="full relative md:flex">
            {isMd ? (
                featured ? (
                    <Featured_Slides isRouting={isRouting} {...featured} />
                ) : (
                    <Styled.Image
                        style={{ order: even ? 2 : 1, userSelect: 'none' }}
                        variants={variants.ImgMd}
                        custom={even ? 1 : -1}
                        {...sectionImgProps}
                    />
                )
            ) : null}

            <motion.div
                id={id + '-content'}
                data-animation={anim}
                className={`full flex-col-btw relative select-none whitespace-pre-line p-8 text-center sm:gap-y-4 sm:px-24 sm:py-32 md:select-text md:justify-center md:gap-y-10 md:p-0 landscape:justify-center landscape:py-0 ${
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

                <motion.div
                    className="z-10 my-8 w-full rounded-xl bg-white/10 px-4 py-[5vh] shadow-black/10 backdrop-blur-sm xs:py-[10vh] md:w-[92.5%] md:bg-transparent md:py-10 md:shadow-none landscape:my-2 landscape:py-2"
                    {...itemProps}
                >
                    <p className="text-xl font-medium leading-7 sm:text-2xl md:text-md">
                        {data.subtitle.replace('<br/>', `\n`)}
                    </p>
                </motion.div>

                {!isMd ? <Styled.Image {...sectionImgProps} /> : null}

                <motion.div
                    className="relative md:mx-10"
                    variants={variants.Btn}
                >
                    <Styled.Button>
                        <Link
                            href={{
                                pathname: '/section/[slug]',
                                query: { slug: data.slug },
                            }}
                            as={'/' + pathAs}
                            scroll={false}
                        >
                            {featured ? 'View All' : 'Read More'}
                        </Link>
                    </Styled.Button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Section_Card
