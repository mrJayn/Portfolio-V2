import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import Styled_Button from './StyledButton'
import { cardVariants } from '@motion'

const Styled_Image = ({ src, alt }) => (
    <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        className="-z-10 rounded-3xl md:rounded-none"
    />
)

const Card_Base = ({ data, isAbout, isMd, expanded, setExpanded }) => {
    const [cardHeight, setCardHeight] = useState(0)
    const pRM = useReducedMotion()
    const ref = useRef()
    const inView = useInView(ref, { once: true, amount: 0.1 })
    const [x1, x2] = [isAbout ? '0%' : '50%', isAbout ? '50%' : '100%']

    useEffect(() => {
        const getCardHeight = () => {
            const vh = window.innerWidth
            setCardHeight(
                vh < 600
                    ? 500
                    : vh < 768
                    ? '100%'
                    : vh < 1024
                    ? 475
                    : vh < 1280
                    ? 450
                    : 550
            )
        }
        getCardHeight()
        window.addEventListener('resize', getCardHeight)
        return () => window.removeEventListener('resize', getCardHeight)
    }, [isMd, setCardHeight])
    console.log(cardHeight)
    return (
        <motion.div
            className="full min-h-[500px] grid-cols-2 rounded-xl shadow sm:min-h-0 md:grid  md:rounded-none md:shadow-none lg:h-[450px] xl:h-[550px]"
            style={{ height: cardHeight }}
            initial="hidden"
            animate={!inView ? 'hidden' : expanded ? 'expanded' : 'show'}
            variants={!isMd ? cardVariants.Wrap : null}
        >
            {/** [  IMAGE CARD  ] **/}
            {isMd && (
                <motion.div
                    className={`flex-center relative -z-20 m-auto h-[85%] w-[95%] overflow-hidden ${
                        isAbout ? 'rounded-r-3xl' : 'rounded-l-3xl'
                    }`}
                    style={{
                        gridColumnStart: isAbout ? 2 : 1,
                        gridRowStart: 1,
                    }}
                    variants={
                        isMd & !pRM ? cardVariants.Img : cardVariants.Img.pRM
                    }
                    custom={isMd & !pRM ? isAbout : isMd}
                >
                    <div className="full relative my-10">
                        <Styled_Image src={data.src} alt={data.alt} />
                    </div>
                </motion.div>
            )}

            {/** [  INFO CARD  ] **/}
            <div
                id="ClippedCardShadow"
                className="text-dark dark:text-light"
                style={{
                    gridArea: '1/1/1/-1',
                    filter: `drop-shadow(${isAbout ? '1px' : '-1px'} 6px 1px)`,
                }}
            >
                <motion.div
                    ref={ref}
                    className={`full relative overflow-hidden ${
                        isMd
                            ? 'rounded-[3rem] bg-card_grad dark:bg-card_grad_DARK'
                            : 'rounded-3xl py-10 dark:bg-white/10'
                    }`}
                    style={
                        pRM & isMd
                            ? {
                                  gridArea: '1/1/1/-1',
                                  clipPath: `polygon(${x1} 0%,  ${x2} 0%,  ${x2} 100%,${x1} 100%)`,
                              }
                            : { gridArea: '1/1/1/-1' }
                    }
                    variants={
                        isMd & !pRM
                            ? cardVariants.BgClip
                            : cardVariants.BgClip.pRM
                    }
                    custom={isMd & !pRM ? isAbout : isMd}
                >
                    <motion.div
                        className={`flex-col-center whitespace-pre-line ${
                            isMd
                                ? `absolute top-1 bottom-1 w-[50%] rounded-none ${
                                      isAbout ? 'left-1' : 'right-1'
                                  }`
                                : ' space-y-4'
                        }`}
                        variants={cardVariants.Content}
                        custom={isMd}
                    >
                        {/** [  TITLE  ] + [  BRIEF  ] **/}
                        <h3 className="md:flex-bottom">{data.section}</h3>
                        <p
                            className="text-center text-md font-medium text-grey-80 dark:text-grey-60 md:text-lg"
                            dangerouslySetInnerHTML={{ __html: data.brief }}
                        />

                        {/** [  IMAGE  ] (mobile only)) **/}
                        {!isMd && (
                            <div className="relative aspect-[4/3] w-[75vw] min-w-[275px] max-w-[450px] overflow-hidden rounded-3xl">
                                <Styled_Image src={data.src} alt={data.alt} />
                            </div>
                        )}

                        {/** [  READ MORE BUTTON  ] **/}
                        <Styled_Button
                            action={() => setExpanded(true)}
                            toTextAt={isMd}
                            allowScroll={isMd ? true : false}
                            btnStyle="py-3 px-7 md:hidden"
                            textStyle="mt-16"
                        >
                            Read More
                        </Styled_Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card_Base
