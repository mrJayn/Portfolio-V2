import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import { cardVariants, Variants } from '@config'
import { Styled_Button } from '@components'

/** CARD WRAP **/
const Card_Wrap = ({ children, ...props }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.5 })

    const wrapProps = {
        ref: ref,
        initial: 'hidden',
        animate: inView && 'enter',
        ...props,
    }
    return (
        <motion.div
            className="h-[500px] w-full whitespace-pre-line rounded-lg bg-white dark:bg-black-light md:h-[475px] lg:h-[450px] xl:h-[550px]"
            {...wrapProps}
        >
            {children}
        </motion.div>
    )
}

/** IMG CARD **/
const Img_Card = ({ ...props }) => {
    return (
        <Card_Wrap className="md:flex-center relative -z-20 hidden" {...props}>
            <div className="relative my-10 h-[90%]  w-[90%]">
                <Image
                    src={props.src}
                    alt={props.alt}
                    className="full rounded-md"
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
        </Card_Wrap>
    )
}

/** BASE - CARD **/
const Card_Base = ({ toggleCard, isMd, data }) => {
    const isLtr = data.layout == 'ltr'

    const [infoCardProps, imgCardProps] = [
        {
            variants: isMd ? cardVariants.infoCard : Variants.fade,
            custom: isLtr,
        },
        {
            src: data.src,
            alt: data.alt,
            variants: cardVariants.imgCard,
            custom: isLtr,
        },
    ]
    return (
        <motion.div className="full grid-cols-2 md:grid">
            {!isLtr && <Img_Card {...imgCardProps} />}
            <Card_Wrap {...infoCardProps}>
                <div className="flex-col-center full relative rounded-lg  bg-gradient-to-t md:from-grey-light md:to-grey-light/25 dark:md:from-grey-darker dark:md:to-grey-darker/25">
                    <h3 className="md:flex-bottom">{data.section}</h3>
                    <p
                        className="mb-4 mt-2 text-center text-md font-medium text-grey-darker dark:text-grey-light md:text-lg"
                        dangerouslySetInnerHTML={{ __html: data.brief }}
                    />

                    <div className="flex-center relative mb-8 rounded-md shadow-xl shadow-grey/25 md:hidden">
                        <div className="relative aspect-[4/3] w-[75vw] min-w-[300px] max-w-[450px] md:aspect-[10/9] md:h-[190px] lg:h-[280px]">
                            <Image
                                src={data.src}
                                alt={data.alt}
                                className="full rounded-md"
                                quality={100}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>
                    </div>
                    <Styled_Button
                        btnStyle="py-3 px-7 md:hidden"
                        textStyle="mt-16"
                        action={toggleCard}
                        scroll={false}
                        toTextMd={true}
                    >
                        Read More
                    </Styled_Button>
                </div>
            </Card_Wrap>
            {isLtr && <Img_Card {...imgCardProps} />}
        </motion.div>
    )
}

export default Card_Base
