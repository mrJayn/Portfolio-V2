import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { toggleScrolling } from '@utils'
import { Links, ReadMore } from '@components'

const Tech = ({ project }) => {
    return project.tech.map((item) => {
        return (
            <p
                key={item}
                className="relative w-full whitespace-nowrap border-l-[2px] border-dotted border-teal px-3 capitalize italic text-teal last-of-type:border-r-[2px] sm:px-6 md:tracking-wide"
            >
                {item}
            </p>
        )
    })
}

const Featured_Project = ({
    project,
    i = 0,
    setMobileRM = null,
    isMd = false,
}) => {
    const data = project.data
    const [readMore, setReadMore] = useState(false)
    const even = i % 2 == 0 || i == 0

    const handleReadMore = () => {
        if (isMd) {
            setReadMore(true)
        } else {
            setMobileRM(true)
            toggleScrolling(false)
        }
    }

    const readMoreProps = {
        project: project,
        isOpen: readMore,
        setReadMore: setReadMore,
        isMd: isMd,
        even: even,
    }

    return (
        <div className="fp full flex-center relative mb-48 rounded-lg last-of-type:mb-0">
            <div
                className={`ct ${
                    isMd
                        ? 'grid h-[500px] w-full grid-cols-12  grid-rows-5 md:h-[450px] lg:h-[500px]'
                        : 'flex-col-top h-full overflow-hidden rounded-md'
                } px-2`}
            >
                {/** IMAGE **/}
                <motion.div
                    className={
                        isMd
                            ? 'full relative -z-10 m-1'
                            : 'absolute top-0 left-0 right-0 bottom-0 h-[30%]  bg-grey-darker/50'
                    }
                    style={{ gridArea: '1/5/-1/-1' }}
                    initial={false}
                    animate={{
                        x: readMore && isMd ? (even ? '-65%' : '65%') : 0,
                    }}
                    transition={{ duration: 0.75 }}
                >
                    <Image
                        className="opacity-25 sm:z-[-1] sm:rounded-md sm:opacity-100"
                        src={data.src}
                        alt={data.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    />
                </motion.div>
                {/** TITLE + TECH(md) **/}
                <div
                    className={
                        isMd
                            ? 'flex-col-left'
                            : 'flex-center absolute top-0 left-0 z-[1] h-[30%]  w-full'
                    }
                    style={{ gridArea: '1/1/1/-1' }}
                >
                    <p className="hidden px-2 text-base font-semibold italic text-teal underline sm:block">
                        Featured Project
                    </p>
                    <h3
                        className={
                            isMd
                                ? 'whitespace-nowrap'
                                : 'flex-center text-lightTeal w-full text-center font-bold'
                        }
                    >
                        {data.title}
                    </h3>
                    <div className="sm:flex-left hidden">
                        <Tech project={data} />
                    </div>
                </div>
                {/** TECH(sm) **/}
                <div className="flex-center absolute top-[30%] left-0 h-[10%] w-full text-center text-base capitalize italic sm:hidden">
                    <Tech project={data} />
                </div>
                {/** DESCRIPTION **/}
                <motion.div
                    className={`w-full
                        ${
                            isMd
                                ? 'flex-col-evenly my-5 rounded-md bg-eee/75 p-2'
                                : 'flex-col-btw text-darkblack absolute top-[40%] left-0 h-[35%] select-none p-3 text-center indent-6 text-md tracking-normal'
                        }`}
                    style={{ gridArea: '2/1/5/7' }}
                    initial={false}
                    animate={{
                        opacity: readMore ? 0 : 1,
                        x: readMore ? (even ? -100 : 100) : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: readMore ? 0 : 0.25,
                    }}
                >
                    <p
                        className={
                            isMd
                                ? 'text-darkblack indent-6 text-lg tracking-normal'
                                : ''
                        }
                    >
                        {data.brief}
                    </p>
                    <motion.button
                        className={
                            isMd
                                ? 'styled-link text-lg italic text-grey/75'
                                : 'styled-button'
                        }
                        onClick={handleReadMore}
                        style={{
                            width: 'auto',
                            padding: isMd ? '0px' : '10px 15vw',
                        }}
                        whileHover={{
                            color: 'black',
                            translateY: isMd ? 0 : -2.5,
                            boxShadow: isMd
                                ? 'none'
                                : `0px 10px 15px -10px rgb(27, 28, 32)`,
                        }}
                        whileTap={{
                            scale: isMd ? 1 : 0.95,
                        }}
                    >
                        Read More &raquo;
                    </motion.button>
                </motion.div>
                {/** LINKS **/}
                <div
                    className={`z-10 ${
                        isMd
                            ? 'flex-evenly full'
                            : 'flex-center absolute top-[75%] left-0 h-[25%] w-full pb-2'
                    }`}
                >
                    <div className="flex-center w-full">
                        <Links project={project} isMd={isMd} />
                    </div>
                </div>
            </div>
            {/** READ-MORE **/}
            {isMd && <ReadMore {...readMoreProps} />}
        </div>
    )
}
export default Featured_Project
