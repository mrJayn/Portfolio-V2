import { Section, SlideShow, Featured_Items } from '@components'
import Image from 'next/image'
import Link from 'next/link'

const Featured = ({ ...data }) => {
    return (
        <Section id="featured" fullScreen={false} marginBottom={false}>
            <div className="featured-content">
                {/** Sm **/}
                <div className="featured-sm">
                    <SlideShow {...data.featured} />
                </div>
                {/** Md **/}
                <div
                    className="md:flex-col-center hidden w-full"
                    id="featured-md"
                >
                    {data.featured.map((obj, i) => {
                        return <Featured_Items.Md obj={obj} key={i} />
                    })}
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
