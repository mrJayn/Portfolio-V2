import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Styled } from '@components'

const FeaturedProject = ({ data, content }) => {
    const { title, src, alt, tech, github, external } = data
    const Technology = tech.map((item) => (
        <span key={item} className="w-full whitespace-nowrap text-center">
            {item}
        </span>
    ))
    const Icon_Links = [
        [github, 'GitHub', 'View on GitHub'],
        [external, 'External', 'Visit Project'],
    ].map(([href, name, title], i) => (
        <a
            key={`icon-link-${i}`}
            href={href}
            target="_blank"
            rel="noreferrer noopenner"
            className="relative aspect-[1/1] h-[3.5em]"
            title={title}
        >
            <Styled.Icon name={name} />
        </a>
    ))

    return (
        <div className="flex-col-center subsection group relative mt-4 flex w-full gap-4 max-lg:max-w-[512px] lg:h-[400px]">
            <h3 className="font-medium text-grey-60">{title}</h3>
            <div className="absolute -z-10 max-w-[850px] select-none max-lg:opacity-30 max-md:inset-0 md:relative md:aspect-[16/9] md:w-[300px]">
                <Image src={src} alt={alt} layout="fill" objectFit="contain" />
            </div>
            <div className="lg:group-odd:flex-col-right lg:group-even:flex-col-left relative w-full">
                <div
                    className="full max-w-[512px] bg-white leading-1.25 max-lg:text-center"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="flex-center mx-auto w-full max-w-[512px]">
                    {Technology}
                </div>
                <div className="mx-auto flex w-min">{Icon_Links}</div>
            </div>
        </div>
    )
}

const Projects = ({ featuredData }) => {
    const router = useRouter()
    const handleLinkBtn = (e) => {
        e.currentTarget.classList.add('clicked')
        router.push(
            { pathname: '/[sid]', query: { sid: 'projects' } },
            `/projects`,
            { scroll: false }
        )
    }

    return (
        <>
            <h2>Featured</h2>

            {Object.entries(featuredData).map(([key, projProps]) => (
                <FeaturedProject key={key} {...projProps} />
            ))}

            <h2>Projects</h2>
            <div
                role="subsection"
                className="flex-col-center max-w-[95vw] rounded-xl bg-white px-8 py-4"
            >
                <h4>Wanna see more?</h4>
                <h3>Check out all of my projects!</h3>
                <Styled.Button onClick={handleLinkBtn}>
                    View Projects
                </Styled.Button>
            </div>
        </>
    )
}

export default Projects
