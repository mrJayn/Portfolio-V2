import { Section, Featured_Items, SlideShow } from '@components'

const slides = [0, 1, 2]
const Featured = () => {
    return (
        <Section id="featured" fullScreen={false} marginBottom={false}>
            <div className="featured-content">
                <div className="featured-sm">
                    <SlideShow />
                </div>
                <div className="featured-md">
                    {slides.map((project) => (
                        <Featured_Items
                            key={`featured-${project}`}
                            currentSlide={project}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Featured
/**
 * 
 * <div className="featured-projects">
                    {slides.map((project) => (
                        <Featured_Items
                            key={`featured-${project}`}
                            currentSlide={project}
                        />
                    ))}
                </div>
 * 
 * 
 * 
 */
