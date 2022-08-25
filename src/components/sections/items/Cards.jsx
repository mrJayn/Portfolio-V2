import { createRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { toggleScrolling } from '@utils'
import { useOnClickOutside } from 'src/hooks/useOnClickOutside'
import { useMediaQuery } from '@hooks'
import { HiX } from 'react-icons/hi'
import { Variants } from '@config'

const imgProps = {
    quality: 100,
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'top',
}
const CardWrap = ({ children, infoLoc, isMd, ...wrapProps }) => {
    return (
        <motion.div
            className="h-[500px] w-full select-none whitespace-pre-line rounded-lg md:h-[450px] lg:h-[580px]"
            viewport={{ once: true }}
            {...wrapProps}
        >
            {children}
        </motion.div>
    )
}
const Info_Card = ({ toggleCard, infoLoc, ...data }) => {
    const wrapProps = {
        infoLoc: infoLoc,
        onClick: () => {
            toggleCard()
            toggleScrolling(false)
        },
        variants: Variants.cards.infoCard,
        initial: 'hidden',
        whileInView: 'inView',
        custom: infoLoc,
    }
    return (
        <CardWrap {...wrapProps}>
            <div className="flex-col-center full relative rounded-lg  bg-gradient-to-t md:from-eee md:to-eee/25">
                <h4 className="md:flex-bottom text-4xl font-bold uppercase tracking-wide text-darkblack md:text-3xl lg:text-4xl">
                    {data.data.section}
                </h4>
                <p
                    className="mt-4 text-center text-base font-medium text-black/75 lg:text-lg"
                    dangerouslySetInnerHTML={{ __html: data.data.brief }}
                />

                <div className="flex-center shadow-xl shadow-grey/25 md:hidden">
                    <div className="relative m-3 aspect-[9/10] h-[200px]  min-w-[320px] md:h-[190px] lg:h-[280px]">
                        <Image
                            src={data.data.src}
                            alt={data.data.alt}
                            className="full rounded-md"
                            {...imgProps}
                        />
                    </div>
                </div>
                <motion.p
                    className="styled-link mt-8 text-4xl tracking-tighter text-black/75 after:bg-black hover:text-black md:mt-16 md:text-2xl md:font-medium md:text-black/50"
                    style={{ transition: 'color 0.15s  linear' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.5 },
                    }}
                    viewport={{ once: true }}
                >
                    Read More
                </motion.p>
            </div>
        </CardWrap>
    )
}
const Img_Card = ({ infoLoc, ...data }) => {
    const InViewProps = {
        variants: Variants.cards.imgCard,
        initial: 'hidden',
        whileInView: 'inView',
        custom: infoLoc,
    }
    return (
        <CardWrap
            className="md:flex-center relative -z-10 hidden"
            {...InViewProps}
        >
            <div className="relative my-10 h-[90%]  w-[90%]">
                <Image
                    src={data.data.src}
                    alt={data.data.alt}
                    className="full -z-50 rounded-md"
                    {...imgProps}
                />
            </div>
        </CardWrap>
    )
}
const Expanded_Card = ({ toggleCard, children, ...props }) => {
    const ref = createRef()
    useOnClickOutside(ref, () => {
        toggleCard()
        toggleScrolling(true)
    })
    return (
        <AnimatePresence initial={false}>
            {props.state && (
                <>
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-[30] bg-black/50"
                        {...Variants.fade_props}
                    />
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1024px] overflow-hidden rounded-lg bg-charcoal shadow-2xl shadow-black md:top-20 md:bottom-4 md:left-12 md:right-12"
                        ref={ref}
                        {...Variants.fade_props}
                    >
                        <div className="relative m-2 h-full md:m-4">
                            <ExitButton toggleCard={toggleCard} />
                            <h4 className="flex-bottom absolute top-0 left-0 h-20 w-full rounded-t-md border-b-2 border-b-neon/75 bg-black/75 pb-5 text-lightTeal md:h-20 md:pb-3">
                                {props.title}
                            </h4>
                            <div className="absolute top-20 left-0 right-0 bottom-0 md:top-20">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
const ExitButton = ({ toggleCard }) => {
    return (
        <motion.div
            className="exitButtonAfter absolute z-10 m-2 aspect-square h-12 cursor-pointer rounded-md text-[48px] text-red/75 md:m-2   md:h-14 md:text-[56px] "
            onClick={() => {
                toggleCard()
                toggleScrolling(true)
            }}
            {...Variants.cards.exitBtn_props}
        >
            <HiX />
        </motion.div>
    )
}
const Cards = {
    Info: Info_Card,
    Img: Img_Card,
    Expanded: Expanded_Card,
    ExitButton: ExitButton,
}
export default Cards
