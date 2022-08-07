import Image from 'next/image'
import data from '@data'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Featured_Items = ({ currentSlide }) => {
    const project = data.featured[currentSlide]

    const ProjectImg = (
        <div className="projectImg">
            <Image
                src={project.src}
                alt="/"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
            />
        </div>
    )
    const Tech = (
        <div className="tech">
            {project.tech.map((item) => {
                return <p key={item}>{item}</p>
            })}
        </div>
    )
    const Heading = (
        <div className="heading">
            <h3>{project.title}</h3>
            {Tech}
        </div>
    )
    const Description = (
        <div className="description">
            <div>{project.description}</div>
        </div>
    )
    const Links = (
        <div className="links">
            <Link href="/resume">Read More &raquo;</Link>
            <a href={project.github}>
                <FaGithub size={30} />
            </a>
        </div>
    )

    return (
        <div className="featured-project" key={`fp${currentSlide}`}>
            {ProjectImg}
            {Heading}
            {Tech}
            {Description}
            {Links}
        </div>
    )
}
export default Featured_Items
