import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import Styled_Button from './StyledButton'
import { cardVariants as variants } from '@motion'

// Motion Variants
const smCardVars = variants.CardSm
const imgVars = variants.Img
const contentVars = variants.Content

// Next Image w/Props
const Styled_Image = ({ src, alt, isAbout, isMd, pRM }) => {
    const Styled_Img = () => (
        <div
            className={`relative aspect-[4/3] w-10/12 overflow-hidden rounded-xl shadow-md md:mx-auto md:mt-2 md:aspect-auto md:h-[calc(100%-16px)] md:w-[calc(100%-16px)] md:rounded-[2.5rem] md:shadow-none ${
                isAbout ? 'md:rounded-l-none' : 'md:rounded-r-none'
            }`}
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
            />
        </div>
    )
    return isMd ? (
        <motion.div
            id="imgCard"
            className="relative -z-10 h-full w-1/2 overflow-hidden motion-reduce:z-10 motion-reduce:rounded-[3rem]"
            style={{ order: isAbout ? 2 : 1 }}
            variants={imgVars}
            custom={pRM ? 0 : isAbout ? '-10%' : '10%'}
        >
            <Styled_Img />
        </motion.div>
    ) : (
        <Styled_Img />
    )
}

const Md_Bg = ({ expanded, isAbout, anim, pRM }) => {
    return (
        <motion.div
            id="cardBase-Bg"
            data-section={isAbout ? 'About' : 'Experience'}
            data-expanded={expanded || pRM}
            className={`absoluteFull bg-card_grad will-change-transform dark:bg-card_grad_DARK
            ${isAbout ? 'rounded-l-[5rem]' : 'rounded-r-[5rem]'}
            `}
            style={{ originX: isAbout ? 0 : 1 }}
            initial="hidden"
            animate={anim}
            variants={variants.Md_Bg}
            custom={pRM}
        />
    )
}

const Card_Base = ({ data, isAbout, isMd, expanded, setExpanded }) => {
    const ref = useRef()
    const inView = useInView(ref, { once: true, amount: 0.1 })
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
            id="cardBase"
            className="full relative md:flex"
            initial={false}
            animate={anim}
            variants={!isMd && smCardVars}
            ref={ref}
        >
            {/** [  Styled-Image  |  Background-Animation ] **/}
            {isMd && (
                <>
                    <Styled_Image {...styledImageProps} />
                    <Md_Bg
                        expanded={expanded}
                        isAbout={isAbout}
                        anim={anim}
                        pRM={pRM}
                    />
                </>
            )}

            {/** [  Styled-Info  ] **/}
            <motion.div
                id="infoCard"
                className={`relative overflow-hidden   ${
                    isMd
                        ? 'h-3/4 w-1/2'
                        : 'full rounded-[3rem] bg-card_grad py-10 dark:bg-card_grad_DARK'
                }`}
                style={{ order: isAbout ? 1 : 2 }}
            >
                <motion.div
                    className={`flex-col-center whitespace-pre-line ${
                        isMd ? `absoluteFull` : ' space-y-4'
                    }`}
                    variants={contentVars}
                    custom={isMd}
                >
                    {/** [  TITLE  ] + [  BRIEF  ] **/}
                    <h3 className="md:flex-bottom">{data.section}</h3>
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
                        allowScroll={isMd ? true : false}
                        btnStyle="py-4 w-3/4 md:hidden"
                        textStyle="mt-16"
                    >
                        Read More
                    </Styled_Button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Card_Base
