import { useState } from 'react'
import Image from 'next/image'
import { motion, useCycle, AnimateSharedLayout } from 'framer-motion'

import data from '@data'

import { Section } from '@components'
import { Featured_Project } from '@components'

const pages = [0, 1, 2]

const Featured = () => {
    const [featuredProject, setFeaturedProject] = useCycle(
        'project1',
        'project2',
        'project3'
    )

    const [[currentSlide, direction], setCurrentPage] = useState([0, 0])

    function setPage(newPage, newDirection) {
        if (!newDirection) newDirection = newPage - currentSlide
        setCurrentPage([newPage, newDirection])
    }

    return (
        <Section id="featured">
            <Featured_Project
                currentPage={currentSlide}
                direction={direction}
                setPage={setPage}
            />
            <SlideSelectors currentSlide={currentSlide} setPage={setPage} />
        </Section>
    )
}

const SlideSelectors = ({ currentSlide, setPage }) => {
    return (
        <AnimateSharedLayout>
            <div className="Indicators">
                {pages.map((page) => (
                    <Indicator
                        key={page}
                        onClick={() => setPage(page)}
                        isSelected={page === currentSlide}
                    />
                ))}
            </div>
        </AnimateSharedLayout>
    )
}

const Indicator = ({ isSelected, onClick }) => {
    return (
        <div className="Indicator-container" onClick={onClick}>
            <div className="Indicator">
                {isSelected && (
                    <motion.div
                        className="Indicator-highlight"
                        layoutId="highlight"
                    />
                )}
            </div>
        </div>
    )
}

export default Featured

/**
 * <ul className="featured-content">
                <AnimatePresence>
                    {data.featured.map((fp) => (
                        <li className="fp useInView" key={fp.item}>
                            <div className="fp-img">
                                <Image
                                    src={fp.src}
                                    alt="/"
                                    layout="fill"
                                    objectFit="contain"
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
                </AnimatePresence>
            </ul>
 */
