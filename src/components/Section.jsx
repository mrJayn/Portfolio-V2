import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

import { Styled_Button } from '@components'
import { sectionVariants as variants } from '@motion'
import { useMediaQuery } from '@hooks'
import Link from 'next/link'

const Section = ({ children, id, i = 0, sectionCard = true, ...data }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.75 })

    const { scrollYProgress } = useScroll({ target: ref })
    const yRelative = useTransform(scrollYProgress, [0, 1], [-1, 1]).get()
    const yPos = Math.sign(yRelative) + '25%'

    const variants = {
        hidden: { y: yPos, opacity: 0 },
        show: { y: [yPos, '0%'], opacity: [0, 1] },
    }

    const cardProps = {
        id: id,
        i: i,
        anim: inView ? 'show' : 'hidden',
        ...data,
    }

    return (
        <section
            id={id}
            className="relative h-[calc(100vh-48px)] min-h-[calc(100vh-48px)] w-full snap-center scroll-mt-12 md:scroll-mt-0"
            ref={ref}
        >
            <motion.div
                className="absoluteFull overflow-hidden sm:px-3 md:fixed md:top-12 md:px-6 lg:px-24"
                initial={false}
                animate={inView ? 'show' : 'hidden'}
                variants={variants}
                transition={{
                    duration: 1,
                    ease: [0.5, 0.35, 0.35, 1],
                }}
            >
                {sectionCard ? <Card {...cardProps} /> : children}
            </motion.div>
        </section>
    )
}

const Card = ({ id, i, anim, data }) => {
    const isMd = useMediaQuery(768)
    const even = i % 2 == 0
    const offset = isMd ? (even ? 1 : -1) : 0

    const Styled_Image = () => (
        <div className="relative aspect-[4/3] w-10/12 overflow-hidden rounded-lg shadow-sm md:aspect-auto md:h-4/5 md:w-4/5 md:shadow-none">
            <Image
                src={data.src}
                alt={data.alt}
                layout="fill"
                objectPosition="top"
                objectFit="cover"
            />
        </div>
    )
    return (
        <motion.div
            data-cardbase
            className="full relative md:flex"
            initial={false}
            animate={anim}
            variants={!isMd && variants.Mobile}
        >
            {isMd && (
                <motion.div
                    data-imgcard
                    className="flex-center full relative"
                    style={{ order: even ? 2 : 1 }}
                    variants={variants.ImgWrap}
                    custom={offset}
                >
                    <Styled_Image />
                </motion.div>
            )}

            {/** [  Styled-Info  ] **/}
            <div
                data-infocard
                className="full bg-gradient_card relative overflow-hidden rounded-[3rem] py-10 md:rounded-none md:bg-none md:py-0"
                style={{ order: even ? 1 : 2 }}
            >
                <motion.div
                    className={`flex-col-center whitespace-pre-line ${
                        isMd ? `absoluteFull` : ' space-y-4'
                    }`}
                    variants={variants.InfoCard}
                    custom={isMd}
                >
                    <motion.h3 variants={variants.Info_Item} custom={offset}>
                        {data.section}
                    </motion.h3>
                    <motion.p
                        className="text-center text-xl font-medium text-grey-40 dark:text-grey-60 md:text-lg"
                        dangerouslySetInnerHTML={{ __html: data.brief }}
                        variants={variants.Info_Item}
                        custom={offset}
                    />
                    {!isMd && <Styled_Image />}
                    <Styled_Button
                        action={null}
                        toTextAt={isMd}
                        allowScroll={false}
                        btnStyle="py-4 w-3/4 md:hidden"
                        textStyle="mt-20"
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
        </motion.div>
    )
}
export default Section
