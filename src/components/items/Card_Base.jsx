import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import Styled_Button from './StyledButton'
import { cardVariants } from '@motion'

const [wrap_vars, clip_vars, img_vars, content_vars] = cardVariants
const imgProps = {
    className: 'rounded-3xl -z-10 md:rounded-none ',
    quality: 100,
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'top',
}

/** BASE - CARD **/
const Card_Base = ({ data, ltr, isMd, expanded, setExpanded }) => {
    const pRM = useReducedMotion()
    const ref = useRef()
    const inView = useInView(ref, { once: true, amount: 0.1 })
    const motionProps = {
        initial: 'hidden',
        animate: !inView ? 'hidden' : expanded ? 'expanded' : 'show',
    }
    const [x1, x2] = [ltr ? '0%' : '50%', ltr ? '50%' : '100%']

    return (
        <motion.div
            className="full h-[500px] grid-cols-2 rounded-xl shadow md:grid md:h-[475px] md:rounded-none md:shadow-none lg:h-[450px] xl:h-[550px]"
            variants={!isMd && wrap_vars}
            {...motionProps}
        >
            {/** [  IMAGE CARD  ] **/}
            {isMd && (
                <motion.div
                    className={`flex-center relative -z-20 m-auto h-[85%] w-[95%] overflow-hidden ${
                        ltr ? 'rounded-r-3xl' : 'rounded-l-3xl'
                    }`}
                    style={{ gridColumnStart: ltr ? 2 : 1, gridRowStart: 1 }}
                    variants={isMd & !pRM ? img_vars : img_vars.pRM}
                    custom={isMd & !pRM ? ltr : isMd}
                    {...motionProps}
                >
                    <div className="full relative my-10">
                        <Image src={data.src} alt={data.alt} {...imgProps} />
                    </div>
                </motion.div>
            )}

            {/** [  INFO CARD  ] **/}
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
                variants={isMd & !pRM ? clip_vars : clip_vars.pRM}
                custom={isMd & !pRM ? ltr : isMd}
                {...motionProps}
            >
                <motion.div
                    className={`flex-col-center whitespace-pre-line ${
                        isMd
                            ? `absolute top-1 bottom-1 w-[50%] rounded-none ${
                                  ltr ? 'left-1' : 'right-1'
                              }`
                            : ' space-y-4'
                    }`}
                    variants={content_vars}
                    custom={isMd}
                    {...motionProps}
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
                            <Image
                                src={data.src}
                                alt={data.alt}
                                {...imgProps}
                            />
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
        </motion.div>
    )
}

export default Card_Base
