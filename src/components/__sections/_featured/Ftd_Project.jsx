import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Ftd_Expanded, Tech, Styled_Button, Styled_Icon } from '@components'
import { featuredVariants } from '@motion'

const Featured_Icons = ({ hrefs, size }) =>
    hrefs.map((href, i) => {
        const [name, title] =
            i == 0
                ? ['GitHub', 'View on GitHub']
                : ['External', 'Visit Project']
        return (
            <a key={`project-link-${i}`} href={href} title={title}>
                <Styled_Icon name={name} size={size} />
            </a>
        )
    })

const Ftd_Project = ({
    project,
    even = false,
    setExpandedTabs = null,
    isSm,
    pRM,
}) => {
    const data = project.data
    const [expandedGrid, setExpandedGrid] = useState(false)

    // Toggles Scrolling on Mobile Devices
    const handleReadMore = () => {
        if (isSm) {
            setExpandedGrid(true)
        } else {
            setExpandedTabs(true)
        }
    }
    // Variants for grid layout ONLY
    const [img_vars, title_vars, desc_vars, links_vars, reduced_vars] =
        featuredVariants

    const gridMotion = {
        initial: 'initial',
        animate: expandedGrid ? 'expanded' : 'initial',
        transition: {
            type: 'tween',
            duration: 0.5,
            delay: expandedGrid ? 0 : 0.15,
        },
    }

    const gridTechProps = {
        tech: data.tech,
        state: isSm && expandedGrid,
        staggerEffect: true,
        even: isSm && even,
        className:
            'border-l-[2px] border-dotted border-teal-light px-1 text-teal-light last-of-type:border-r-[2px] dark:border-teal-lightest dark:text-teal-lightest sm:px-6',
    }

    return (
        <div className="full relative mb-60 last-of-type:mb-0 sm:h-auto">
            <div
                className={`px-2 ${
                    isSm
                        ? 'grid h-[60vh] min-h-[500px] w-full  grid-cols-12 grid-rows-5 md:min-h-[525px] lg:h-[600px]'
                        : 'flex-col-top h-full overflow-hidden rounded-xl'
                }`}
            >
                {/** [  IMAGE  ] **/}
                <motion.div
                    className={
                        isSm
                            ? 'relative -z-10 my-auto h-[90%] w-full transform-gpu rounded-xl'
                            : 'absolute top-0 left-0 right-0 h-[30%]'
                    }
                    style={{ gridArea: even ? '2/3/-1/-1' : '2/1/-1/11' }}
                    variants={pRM ? reduced_vars : img_vars}
                    custom={!isSm ? 0 : even ? -1 : 1}
                    {...gridMotion}
                >
                    <div className="full relative">
                        <Image
                            className="rounded-2xl opacity-40 sm:opacity-100"
                            src={data.src}
                            alt={data.alt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </div>
                    <span
                        className={`absoluteFull ${
                            isSm ? 'shadow-GI' : 'shadow-TI'
                        }`}
                    />
                </motion.div>

                {/** gridLayout :  [  desc  ] + [  TITLE  ] + [  TECH  ] **/}
                {isSm && (
                    <motion.div
                        className={even ? 'flex-col-left' : 'flex-col-right'}
                        style={{ gridArea: even ? '1/1/1/-1' : '1/1/1/-1' }}
                        variants={!pRM && title_vars}
                        {...gridMotion}
                    >
                        <p className="px-2 font-robotoMono text-base font-medium italic tracking-wide text-teal underline dark:text-teal-light">
                            Featured Project
                        </p>
                        <h3 className="sm:whitespace-nowrap">{data.title}</h3>
                        <div className={even ? 'flex-left' : 'flex-right'}>
                            <Tech {...gridTechProps} />
                        </div>
                    </motion.div>
                )}

                {/** mobile :  [  TITLE  ]  &  [  TECH  ] **/}
                {!isSm && (
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
                            isSm
                                ? 'flex-col-top mt-10 max-w-[40vw] transform-gpu space-y-10 rounded-xl bg-grey-90 py-10 shadow-md dark:bg-grey-20'
                                : 'flex-col-btw absolute top-[30%] left-0 h-[50%]'
                        }`}
                    style={{ gridArea: even ? '2/1/5/7' : '2/7/5/-1' }}
                    variants={pRM ? reduced_vars : desc_vars}
                    custom={even ? -100 : 100}
                    {...gridMotion}
                >
                    <p className="text-center sm:text-lg sm:leading-7">
                        {data.brief}
                    </p>
                    <Styled_Button
                        action={handleReadMore}
                        toTextAt={isSm}
                        allowScroll={isSm ? true : false}
                        btnStyle="py-2 px-7"
                        textStyle="text-lg italic"
                    >
                        {!even && <>&laquo; </>}Read More{even && <> &raquo;</>}
                    </Styled_Button>
                </motion.div>

                {/** [  LINKS  ] **/}
                <motion.div
                    className={`flex-center absolute top-[80%] left-0 right-0 z-10 h-[20%] sm:relative sm:top-0 sm:mt-5 sm:h-full ${
                        even ? 'sm:justify-start' : 'sm:justify-end'
                    }`}
                    style={{ gridArea: even ? '5/1/-1/5' : '5/9/-1/-1' }}
                    variants={!pRM && links_vars}
                    {...gridMotion}
                >
                    <div className="flex-center full space-x-3">
                        <Featured_Icons
                            hrefs={[data.github, data.external]}
                            size={isSm ? 65 : 50}
                        />
                    </div>
                </motion.div>
            </div>

            {/** [  READ-MORE  ] **/}
            {isSm && (
                <Ftd_Expanded
                    project={project}
                    expanded={expandedGrid}
                    setExpanded={setExpandedGrid}
                    even={even ? 1 : -1}
                    isSm={isSm}
                    pRM={pRM}
                />
            )}
        </div>
    )
}
export default Ftd_Project
