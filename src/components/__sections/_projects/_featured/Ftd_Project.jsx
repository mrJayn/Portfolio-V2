import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

import { Tech, Styled_Button, Styled_Icon } from '@components'
import { useMediaQuery } from '@hooks'
import { featuredProject_Variants as variants } from '@motion'

const Ftd_Project = ({
    slug,
    project,
    even = false,
    setExpandedTabs = null,
    direction = 0,
}) => {
    const isHome = slug !== null
    const isMd = useMediaQuery(768)
    const data = project.data
    const [expandedGrid, setExpandedGrid] = useState(false)

    // Toggles Scrolling on Mobile Devices
    const handleReadMore = () => {
        if (isMd) {
            setExpandedGrid(true)
        } else {
            setExpandedTabs(true)
        }
    }
    // Variants for grid layout ONLY
    const img_vars = variants.slug.image
    const title_vars = variants.slug.title
    const desc_vars = variants.slug.description

    const gridMotion = {
        initial: 'initial',
        animate: expandedGrid ? 'expanded' : 'initial',
        transition: {
            type: 'tween',
            duration: 0.5,
            delay: expandedGrid ? 0 : 0.15,
        },
    }
    return isHome ? (
        <div className="full relative">
            <div className="full grid grid-cols-12 grid-rows-5 overflow-hidden rounded-4xl bg-black/10">
                {/** [  IMAGE  ] **/}
                <div
                    className="relative -z-10 my-auto h-[90%] w-full opacity-50 shadow"
                    style={{ gridArea: '2/1/-1/-1' }}
                >
                    <span className="absoluteFull z-10 shadow-inset" />
                    <Image
                        key={`${data.alt}-img`}
                        src={data.src}
                        alt={data.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    />
                </div>

                {/** gridLayout :  [  desc  ] + [  TITLE  ] + [  TECH  ] **/}
                <div
                    className="flex-col-center full"
                    style={{ gridArea: '1/1/2/-1' }}
                >
                    <p className="mt-auto font-robotoMono text-base italic tracking-widest text-white underline underline-offset-4">
                        Featured Project
                    </p>
                    <h4>
                        <span className="whitespace-nowrap text-[0.9em] text-slate-40 contrast-150">
                            {data.title}
                        </span>
                    </h4>
                    <div className="grid w-full grid-cols-3">
                        <Tech
                            className="text-center text-slate-20"
                            tech={data.tech}
                            state={isMd && expandedGrid}
                            staggerEffect={true}
                            even={isMd && even}
                        />
                    </div>
                </div>
            </div>

            {/** [  DESCRIPTION  ] **/}
            <motion.div
                className="flex-col-btw absolute bottom-[25%] left-[-5%] w-[85%] gap-y-10 rounded-3xl bg-grey-20 p-8 shadow-inset-outset-md"
                initial="hidden"
                animate="show"
                variants={variants.isHome.description}
                custom={direction}
            >
                <p className="text-lg leading-8">{data.brief}</p>
                <Styled_Button toTextAt={isMd}>
                    <Link
                        href={{
                            pathname: '/section/[slug]',
                            query: { slug: slug },
                        }}
                        as={'/' + slug}
                        scroll={false}
                    >
                        View project
                    </Link>
                </Styled_Button>
            </motion.div>
        </div>
    ) : (
        <div className="full relative sm:h-auto">
            <motion.div
                className={`px-2 ${
                    isMd
                        ? 'grid h-[60vh] min-h-[500px] w-full grid-cols-12 grid-rows-5 md:min-h-[525px] lg:h-[600px]'
                        : 'flex-col-top h-full overflow-hidden rounded-xl'
                }`}
                initial={false}
                animate={expandedGrid ? 'expanded' : 'initial'}
            >
                {/** [  IMAGE  ] **/}
                <motion.div
                    className={
                        isMd
                            ? 'relative -z-10 my-auto h-[90%] w-full rounded-xl'
                            : 'absolute top-0 left-0 right-0 h-[30%]'
                    }
                    style={{
                        gridArea: isHome
                            ? '2/2/5/12'
                            : even
                            ? '2/3/-1/-1'
                            : '2/1/-1/11',
                    }}
                    variants={img_vars}
                    custom={!isMd ? 0 : even ? -1 : 1}
                    {...gridMotion}
                >
                    <div className="full relative">
                        <Image
                            key={`${data.alt}-img`}
                            src={data.src}
                            alt={data.alt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className={
                                isHome
                                    ? '-z-10 rounded-4xl opacity-40'
                                    : 'rounded-2xl opacity-40 sm:opacity-100'
                            }
                        />
                    </div>
                    <div className="shadow-TI" />
                </motion.div>

                {/** gridLayout :  [  desc  ] + [  TITLE  ] + [  TECH  ] **/}
                {isMd && (
                    <motion.div
                        className={even ? 'flex-col-left' : 'flex-col-right'}
                        style={{ gridArea: '1/1/1/-1' }}
                        variants={title_vars}
                        {...gridMotion}
                    >
                        <p className="px-2 font-robotoMono text-base font-medium italic tracking-wide text-teal underline dark:text-teal-40">
                            Featured Project
                        </p>
                        <h3
                            className={
                                isHome ? 'text-3xl' : 'sm:whitespace-nowrap'
                            }
                        >
                            {data.title}
                        </h3>
                        <div className={even ? 'flex-left' : 'flex-right'}>
                            <Tech
                                className={
                                    isHome
                                        ? 'text-center text-teal-10'
                                        : 'border-l-[2px] border-dotted border-teal-10 px-1 text-teal-10 last-of-type:border-r-[2px] sm:px-6'
                                }
                                tech={data.tech}
                                state={isMd && expandedGrid}
                                staggerEffect={true}
                                even={isMd && even}
                            />
                        </div>
                    </motion.div>
                )}

                {/** mobile :  [  TITLE  ]  &  [  TECH  ] **/}
                {!isMd && (
                    <>
                        <div className="flex-center absolute top-0 left-0 z-10 h-[20%] w-full">
                            <h3 className="whitespace-nowrap text-3xl">
                                {data.title}
                            </h3>
                        </div>
                        <div className="flex-top absolute top-[20%] left-0 h-[10%] w-full space-x-6 px-1 text-center text-base font-semibold capitalize italic text-black dark:text-white">
                            <Tech tech={data.tech} className="w-auto" />
                        </div>
                    </>
                )}

                {/** [  DESCRIPTION  ] **/}
                <motion.div
                    className={`p-4
                        ${
                            isMd
                                ? 'flex-col-top mt-10 max-w-[40vw] transform-gpu space-y-10 rounded-xl bg-grey-90 py-10 shadow-md dark:bg-grey-20'
                                : 'flex-col-btw absolute top-[30%] left-0 h-[50%]'
                        }`}
                    style={{ gridArea: even ? '2/1/5/7' : '2/7/5/-1' }}
                    variants={desc_vars}
                    custom={even ? -100 : 100}
                    {...gridMotion}
                >
                    <p className="text-center sm:text-lg sm:leading-7">
                        {data.brief}
                    </p>
                    {isHome ? (
                        <Styled_Button toTextAt={isMd}>
                            <Link
                                href={{
                                    pathname: '/section/[slug]',
                                    query: { slug: slug },
                                }}
                                scroll={false}
                            >
                                View this project
                            </Link>
                        </Styled_Button>
                    ) : (
                        <Styled_Button
                            action={handleReadMore}
                            toTextAt={isMd}
                            allowScroll={isMd ? true : false}
                        >
                            {!even && <>&laquo; </>}Read More
                            {even && <> &raquo;</>}
                        </Styled_Button>
                    )}
                </motion.div>

                {/** [  LINKS  ] **/}
                {isHome ? null : (
                    <IconLinks
                        hrefsArr={[
                            {
                                name: 'GitHub',
                                msg: 'View on Github',
                                href: data.github,
                            },
                            {
                                name: 'External',
                                title: 'Visit Project',
                                href: data.external,
                            },
                        ]}
                        even={even}
                        expandedGrid={expandedGrid}
                    />
                )}
            </motion.div>
        </div>
    )
}

const IconLinks = ({ hrefsArr, even, expandedGrid }) => (
    <motion.div
        className={`flex-center absolute top-[80%] left-0 right-0 z-10 h-[20%] sm:relative sm:top-0 sm:mt-5 sm:h-full ${
            even ? 'sm:justify-start' : 'sm:justify-end'
        }`}
        style={{ gridArea: even ? '5/1/-1/5' : '5/9/-1/-1' }}
        initial={false}
        animate={expandedGrid ? 'expanded' : 'initial'}
        variants={variants.links}
        transition={{
            type: 'tween',
            duration: 0.5,
            delay: expandedGrid ? 0 : 0.15,
        }}
    >
        <div className="flex-center full space-x-3">
            {hrefsArr.map(({ href, title, name }, i) => (
                <a key={`project-link-${i}`} href={href} title={title}>
                    <Styled_Icon styled name={name} size={isMd ? 65 : 50} />
                </a>
            ))}
        </div>
    </motion.div>
)

export default Ftd_Project
