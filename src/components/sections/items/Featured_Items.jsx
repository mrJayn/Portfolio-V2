import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Featured_Sm = ({ currentSlide, project }) => {
    const Tech = ({ project }) => {
        return (
            <div className="flex-center absolute top-[30%] left-0 h-[10%] w-full text-center text-sm  italic">
                {project.tech.map((item) => {
                    return (
                        <p
                            key={item}
                            className="relative w-full whitespace-nowrap border-l-[2px] border-dotted border-teal px-3 text-teal last-of-type:border-r-[2px]"
                        >
                            {item}
                        </p>
                    )
                })}
            </div>
        )
    }

    return (
        <div
            className="flex-col-top h-full overflow-hidden rounded bg-white/75  px-2"
            key={`fp${currentSlide}`}
        >
            {/** Image */}
            <div className="absolute top-0 left-0 right-0 bottom-0 h-[30%] bg-charcoal/50">
                <Image
                    className="rounded opacity-25"
                    src={project.src}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
            {/** Title */}
            <div className="flex-center absolute top-0 left-0 z-[1] h-[30%]  w-full">
                <h3 className=" flex-center w-full text-center font-bold">
                    {project.title}
                </h3>
            </div>
            {/** Tech */}
            {Tech}

            {/** Desc */}
            <div className="pointer-events-none absolute top-[40%] left-0  h-[25%]  w-full rounded  p-3 text-center indent-6 text-sm tracking-normal text-darkblack">
                <div>{project.brief}</div>
            </div>
            {/** Links */}
            <div className="flex-col-btw absolute top-[65%] left-0 z-10  h-[35%] w-full pb-2">
                <Link href="/resume">
                    <span className="mx-auto mb-10  px-2 text-lg font-medium text-teal">
                        Read More &raquo;
                    </span>
                </Link>
                {project.github !== '' && (
                    <a href={project.github} className="styled-github p-3">
                        <FaGithub size={30} />
                    </a>
                )}
            </div>
        </div>
    )
}
const Featured_Md = ({ obj }) => {
    const project = obj.data
    return (
        <div
            className="my-[5vh] grid h-[400px] w-full grid-cols-12  grid-rows-5 overflow-hidden px-2 md:h-[350px] lg:h-[480px]"
            style={{
                background:
                    'linear-gradient(to bottom, #fff 0%, #fff 25%, #ffffff25 55%, transparent 100%',
            }}
        >
            {/** Image */}
            <div className="relative" style={{ gridArea: '1/5/-1/-1' }}>
                <Image
                    className="z-[-1] rounded-md opacity-100"
                    src={project.src}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
            {/** Heading */}
            <div
                className="flex-col-left full px-10"
                style={{ gridArea: '1/1/1/-1' }}
            >
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-black">
                    {project.title}
                </h3>
                <div className="flex-left z-10">
                    {project.tech.map((item) => {
                        return (
                            <p
                                key={item}
                                className="w-full whitespace-nowrap border-l-[3px] border-dotted border-teal px-6 text-center text-base italic text-teal last-of-type:border-r-[3px]"
                            >
                                {item}
                            </p>
                        )
                    })}
                </div>
            </div>
            {/** Desc */}
            <div
                className="flex-left w-full rounded  p-3 indent-6 text-sm tracking-normal text-darkblack md:text-base"
                style={{ gridArea: '2/1/4/7' }}
            >
                {project.brief}
            </div>
            {/** Links */}
            <div
                className="flex-col-evenly z-10"
                style={{ gridArea: '4/1/-1/5' }}
            >
                <Link href="/resume">
                    <span className="styled-link text-lg font-medium italic text-charcoal after:bg-charcoal">
                        Read More &raquo;
                    </span>
                </Link>
                {project.github !== '' && (
                    <a href={project.github} className="styled-github p-3">
                        <FaGithub size={30} />
                    </a>
                )}
            </div>
        </div>
    )
}

const Featured_Project = {
    Sm: Featured_Sm,
    Md: Featured_Md,
}
export default Featured_Project
