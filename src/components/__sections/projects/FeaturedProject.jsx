import Image from 'next/image'
import { motion } from 'framer-motion'
import { featuredVariants } from '@motion'
import { Styled } from '@components'

const Img = ({ src, alt }) => (
    <div className="relative aspect-[16/9] w-[300px] max-w-[850px] select-none">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
)

const Content = ({ content }) => (
    <div
        className="full bg-white leading-1.25 max-lg:text-center"
        dangerouslySetInnerHTML={{ __html: content }}
    />
)

const Technology = ({ tech }) => (
    <div className="flex-center overflow-hidden">
        {tech.map((item, i) => (
            <span
                key={`tech-item-${i}`}
                className="relative w-full whitespace-nowrap text-center max-md:text-[0.9em] max-md:leading-1.75 md:leading-1 lg:px-4"
            >
                {item}
            </span>
        ))}
    </div>
)

const Icon_Links = ({ github, external }) => (
    <div className="flex-center">
        {[
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
        ))}
    </div>
)

const FeaturedProject = ({ ...props }) => {
    return (
        <div className="flex-col-center group relative mt-4 flex w-full gap-4 lg:group-odd:flex-row-reverse lg:group-even:flex-row">
            <h3>{props.data.title}</h3>
            <Img {...props.data} />
            <div className="lg:group-odd:flex-col-right lg:group-even:flex-col-left relative w-full">
                <Content {...props} />
                <Technology {...props.data} />
                <Icon_Links {...props.data} />
            </div>
        </div>
    )
}

export default FeaturedProject
