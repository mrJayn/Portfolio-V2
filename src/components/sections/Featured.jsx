import Image from 'next/image'
import { Section } from '@components'
import data from '@data'

const Featured = () => {
    return (
        <Section id="featured">
            <h2>Most Recent Work</h2>
            <ul className="featured-content">
                {data.featured.map((fp) => (
                    <li className="fp useInView" key={fp.item}>
                        <div className="fp-img">
                            <Image
                                src={fp.src}
                                alt="/"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>

                        <div className="fp-content">
                            <h3>{fp.title}</h3>
                            <div className="fp-tech">
                                {fp.tech.map((i) => {
                                    return <p key={i}>{i}</p>
                                })}
                            </div>
                            <div className="fp-desc">
                                <div>{fp.text}</div>
                            </div>
                            <div className="fp-link">
                                <a href={fp.url}>View on GitHub</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Featured
