import Image from 'next/image'
import data from '@data'

const Featured_Items = ({ currentSlide }) => {
    const project = data.featured[currentSlide]

    return (
        <div className="featured-project" key={`fp${currentSlide}`}>
            <div className="fp-img">
                <Image
                    src={project.src}
                    alt="/"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                />
            </div>

            <div className="fp-content">
                <h3>{project.title}</h3>
                <div className="fp-tech">
                    {project.tech.map((item) => {
                        return <p key={item}>{item}</p>
                    })}
                </div>
                <div className="fp-desc">
                    <div>{project.description}</div>
                </div>
                <div className="fp-link">
                    <a href={project.github}>View on GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Featured_Items
