import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
    motion,
    useScroll,
    useInView,
    useTransform,
    useSpring,
} from 'framer-motion'

import { sectionSpring, sectionVariants } from '@motion'
import { Styled } from '@components'
import Ftd_Slides from './__sections/_projects/Featured_Slides'

const SectionLink = ({ sid, text }) => {
    const router = useRouter()
    return (
        <motion.div className="max-lg:w-full" variants={sectionVariants.Item_B}>
            <Styled.Button>
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        document
                            .querySelector(`#${sid.toLowerCase()}`)
                            .scrollIntoView({
                                block: 'center',
                                behavior: 'smooth',
                            })
                        router.push(
                            { pathname: '/[sid]', query: { sid: sid } },
                            `/${sid}`,
                            { scroll: false }
                        )
                    }}
                >
                    {text}
                </a>
            </Styled.Button>
        </motion.div>
    )
}

const Graphic = ({ data, featured }) => (
    <motion.div
        className={`full preserve-3d relative select-none max-lg:hidden ${
            featured === undefined && 'flex-center pointer-events-none'
        }`}
        variants={sectionVariants.Item_A}
    >
        {featured === undefined ? (
            <div className="relative h-[50%] w-[75%] overflow-hidden rounded-[3rem]">
                <Image
                    src={data.src}
                    alt={data.alt}
                    layout="fill"
                    objectFit="cover"
                    quality={25}
                />
            </div>
        ) : (
            <Ftd_Slides {...featured} />
        )}
    </motion.div>
)

const Section = ({
    id,
    index,
    activeSection,
    setSection,
    useChildren = false,
    children,
    ...data
}) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.51 })

    useEffect(() => {
        if ((activeSection !== index) & inView) setSection(index)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <motion.section
            id={id}
            className="max-lg:safe-area-padding flex-center group relative z-10 h-screen w-full odd:flex-row-reverse max-lg:snap-center"
            style={{
                perspective: '1000px',
                perspectiveOrigin: '50% 50%',
            }}
            initial={activeSection === index ? 'hidden' : 'show'}
            animate="show"
            exit={activeSection === index ? 'hidden' : 'show'}
            ref={ref}
        >
            {useChildren ? (
                children
            ) : (
                <>
                    <Graphic {...data} />
                    <motion.div className="flex-col-top lg:full absolute text-center max-lg:inset-0 max-lg:top-1/2 max-lg:-translate-y-1/2 lg:relative lg:gap-y-[2vh] lg:pt-[33vh] lg:will-change-transform lg:group-odd:items-end lg:group-even:items-start">
                        <h3 className="leading-none">{data.data.title}</h3>

                        <motion.h4
                            className=" whitespace-pre max-lg:h-full lg:whitespace-nowrap"
                            variants={sectionVariants.Item_A}
                        >
                            {data.data.subtitle.replaceAll('<br/>', `\n`)}
                        </motion.h4>

                        <SectionLink
                            sid={data.data.id}
                            text={data.featured ? 'View All' : 'Read More'}
                        />
                    </motion.div>
                </>
            )}
        </motion.section>
    )
}
export default Section
