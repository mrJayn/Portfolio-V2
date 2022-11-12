import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import Styled_Button from '../items/Styled_Button'
import { cardVariants as variants } from '@motion'

// Next Image w/Props
const Styled_Image = ({ src, alt }) => (
    <div className="relative aspect-[4/3] w-10/12 overflow-hidden rounded-lg shadow-sm md:aspect-auto md:h-4/5 md:w-4/5">
        <Image
            key={alt}
            src={src}
            alt={alt}
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            quality={100}
        />
    </div>
)

// Background clipPath @Media >= 768px
const Md_Bg = ({ anim }) => {
    return (
        <>
            <motion.span
                data-cardbase-bg
                className="absoluteFull rounded-4xl  bg-card will-change-transform"
                initial={false}
                animate={anim}
                variants={variants.MdBg}
            />
            <span
                data-shadow-hide={anim == 'expanded' ? true : false}
                className="absolute top-0 h-full bg-card"
            />
        </>
    )
}

const Card_Base = ({ data, isAbout, isMd, expanded, setExpanded }) => {
    const ref = useRef(null)
    const inView = useInView(ref, {
        amount: 0.75,
        once: isMd ? false : true,
    })
    const pRM = useReducedMotion()

    // Animation Trigger
    const anim = !inView ? 'hidden' : expanded ? 'expanded' : 'show'

    // Props
    const styledImageProps = {
        src: data.src,
        alt: data.alt,
        isAbout: isAbout,
        isMd: isMd,
        pRM: pRM,
    }

    return (
        <motion.div
            data-cardbase
            data-expanded={expanded}
            className="full relative md:flex"
            initial={false}
            animate={anim}
            variants={!isMd && variants.CardSm}
            ref={ref}
        >
            {/** [  Styled-Image  |  Background-Animation ] **/}
            {isMd && (
                <div data-imgcard className="flex-center full">
                    <Styled_Image {...styledImageProps} />
                </div>
            )}

            {/** [  Styled-Info  ] **/}
            <div
                data-infocard
                className="full bg-gradient_card relative overflow-hidden rounded-4xl py-10 md:rounded-none md:bg-none md:py-0"
            >
                <motion.div
                    className={`flex-col-center whitespace-pre-line ${
                        isMd ? `absoluteFull` : ' space-y-4'
                    }`}
                    variants={variants.Content}
                    custom={isMd}
                >
                    {/** [  TITLE  ] + [  BRIEF  ] **/}
                    <h3>{data.section}</h3>
                    <p
                        className="text-center text-xl font-medium text-grey-40 dark:text-grey-60 md:text-lg"
                        dangerouslySetInnerHTML={{ __html: data.brief }}
                    />

                    {/** [  IMAGE  ] (mobile only)) **/}
                    {!isMd && <Styled_Image {...styledImageProps} />}

                    {/** [  READ MORE BUTTON  ] **/}
                    <Styled_Button
                        action={() => setExpanded(true)}
                        toTextAt={isMd}
                        allowScroll={false}
                        btnStyle="py-4 w-3/4 md:hidden"
                        textStyle="mt-20"
                    >
                        Read More
                    </Styled_Button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card_Base
