import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import Styled_Button from './StyledButton'
import { cardVariants } from '@motion'

// Motion Variants
const smCardVars = cardVariants.CardSm
const infoVars = cardVariants.Info
const imgVars = cardVariants.Img
const contentVars = cardVariants.Content

const Card_Base = ({ data, isAbout, isMd, expanded, setExpanded }) => {
    const ref = useRef()
    const inView = useInView(ref, { once: true, amount: 0.1 })
    const pRM = useReducedMotion()
    // Animation Trigger
    const cardAnim = !inView ? 'hidden' : expanded ? 'expanded' : 'show'

    // Next Image w/Props
    const Styled_Image = ({ src, alt }) => (
        <div
            className={`relative overflow-hidden ${
                isMd
                    ? `mx-auto mt-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[2.5rem] ${
                          isAbout ? 'rounded-l-none' : 'rounded-r-none'
                      }`
                    : 'aspect-[4/3] w-[90vw] min-w-[270px] max-w-[400px] rounded-xl shadow-md'
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

    return (
        <motion.div
            id="cardBase"
            className="full relative md:flex"
            data-ismd={isMd}
            data-section={isAbout ? 'About' : 'Experience'}
            data-expanded={expanded}
            initial={false}
            animate={cardAnim}
            variants={!isMd && smCardVars}
            ref={ref}
        >
            {/** [  Styled-Image  |  Background-Animation ] **/}
            {isMd && (
                <>
                    <motion.div
                        id="imgCard"
                        className={`relative h-1/2 w-1/2 ${
                            isAbout ? 'order-2' : 'order-1'
                        }`}
                        style={{
                            zIndex: pRM ? 1 : -1,
                            borderRadius: pRM && '3rem',
                        }}
                        variants={imgVars}
                        custom={pRM ? 0 : isAbout ? '-10%' : '10%'}
                    >
                        <Styled_Image src={data.src} alt={data.alt} />
                    </motion.div>
                    {/***/}
                    <motion.div
                        id="infoCard_BG"
                        className={`absoluteFull bg-card_grad shadow-[0px_10px_25px_-10px] will-change-transform dark:bg-card_grad_DARK dark:shadow-teal-lighter`}
                        style={{ originX: isAbout ? 0 : 1, originY: 0 }}
                        initial="hidden"
                        animate={cardAnim}
                        variants={pRM ? infoVars.BG_fade : infoVars.BG_grow}
                        custom={!pRM && isAbout}
                    />
                </>
            )}

            {/** [  Styled-Info  ] **/}
            <motion.div
                id="infoCard"
                className={`relative overflow-hidden   ${
                    isMd
                        ? 'h-1/2 w-1/2'
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
                    {!isMd && <Styled_Image src={data.src} alt={data.alt} />}

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
