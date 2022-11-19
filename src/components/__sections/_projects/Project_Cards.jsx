import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiShow, BiHide } from 'react-icons/bi'

import { Tech, Styled_Icon } from '@components'
import { projectVariants } from '@motion'

const ProjectTitle = ({ title, className = '' }) => (
    <h6 className={`w-full text-center duration-350 ease-in ${className}`}>
        {title}
    </h6>
)
const Project_Icons = ({ hrefs, size = 45, ...props }) =>
    hrefs.map((href, i) => {
        const [name, title] =
            i == 0
                ? ['GitHub', 'View on GitHub']
                : ['External', 'Visit Project']
        return (
            <a key={`project-link-${i}`} href={href} title={title} {...props}>
                <Styled_Icon styled invert={true} name={name} size={size} />
            </a>
        )
    })

const MobileCard = ({ title, brief, href_github, href_site, idx }) => {
    const card_HREF = href_site !== '' ? href_site : href_github
    const showIcons = (href_github !== '') & (href_site !== '')
    return (
        <div
            className="full flex-col-top bg-projectCard"
            style={{
                filter: ` hue-rotate(${idx * 30}deg)`,
            }}
        >
            {showIcons ? (
                <Project_Icons
                    hrefs={[href_github]}
                    size={40}
                    className="absolute top-0 right-0 h-16 w-16"
                />
            ) : null}
            <a
                href={card_HREF}
                className="flex-col-top full p-[40px_16px_0_16px] sm:justify-center sm:pt-0"
            >
                <ProjectTitle title={title} className="sm:mb-2 sm:text-2xl" />
                <p className="w-full text-center text-sm sm:text-base">
                    {brief}
                </p>
            </a>
        </div>
    )
}

const IsMdCard = ({ title, brief, src, tech, href_github, href_site, idx }) => {
    const [viewMode, setViewMode] = useState(false)
    return (
        <div
            className="full bg-projectCard"
            style={{
                filter: ` hue-rotate(${idx * 30}deg)`,
            }}
        >
            {/**
             * <Image
                key={`projectImg-${title}`}
                src={src}
                alt={`${title} Project Image`}
                layout="fill"
                objectFit="cover"
                className={`-z-10 delay-200 duration-350 ease-in ${
                    viewMode ? 'opacity-100' : 'opacity-10'
                }`}
            />
             */}
            {/***/}
            <div
                className={`projectVisBtn absolute top-2 left-2 z-50 cursor-pointer hover:text-teal dark:text-white ${
                    viewMode && 'hover:text-red dark:hover:text-red'
                }`}
                onClick={() => setViewMode(!viewMode)}
            >
                {viewMode ? <BiHide size={30} /> : <BiShow size={30} />}
            </div>
            {/***/}
            <motion.div
                className="flex-col-top full px-4 py-10"
                animate={viewMode ? 'hidden' : 'show'}
                variants={projectVariants.Content}
            >
                <ProjectTitle
                    title={title}
                    className=" border-b-[1px] text-3xl font-bold"
                />
                <div className="flex-evenly mb-2 w-full space-x-3">
                    {tech.map((item, i) => (
                        <span
                            key={`tech-item-${i}`}
                            className="relative w-full whitespace-nowrap text-center text-sm capitalize italic tracking-tighter text-grey-60/90 brightness-110 sm:font-medium md:tracking-wide"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/***/}
                <p className="text-center text-md font-medium dark:text-white">
                    {brief}
                </p>
                {/***/}
                <div
                    className="flex-btw bg-mdProjectIcons absolute bottom-2  left-2 right-2 z-10 h-[67px] rounded-lg"
                    style={{
                        transition: 'all 0.5s ease-in, transform 0.5s ease-out',
                    }}
                >
                    <Project_Icons hrefs={[href_github, href_site]} />
                </div>
            </motion.div>
        </div>
    )
}

const Project_Card = ({ project, i = 0, isMd }) => {
    const DATA = project.data
    const props = {
        title: DATA.title,
        brief: DATA.brief,
        tech: DATA.tech,
        src: DATA.src,
        href_github: DATA.github,
        href_site: DATA.external,
        idx: i,
    }

    return isMd ? <IsMdCard {...props} /> : <MobileCard {...props} />
}

export default Project_Card
