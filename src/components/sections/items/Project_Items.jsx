import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import data from '@data'

const Project_Items = () => {
    return data.projects.map((item) => (
        <motion.div
            className="slide-item"
            key={item.item}
            whileInView={{ opacity: 1 }}
        >
            <div className="project">
                <div className="gh-link">
                    <a href={item.github} target="_blank" rel="noreferrer">
                        <FaGithub size={25} />
                    </a>
                </div>
                <a
                    href="visit-project"
                    aria-label="Project Link"
                    target="_blank"
                    className="pr-wrap"
                >
                    <h4>{item.title}</h4>
                    <div>
                        <div className="pr-tech">
                            {item.tech.map((item) => {
                                return (
                                    <p className="tech-item" key={item}>
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="pr-desc">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>
                <Image
                    src={item.src}
                    alt={`${item.title} Project Image`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
        </motion.div>
    ))
}
export default Project_Items
