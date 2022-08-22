import { Section, SlideShow, Featured_Items } from '@components'

const Featured = ({ ...data }) => {
    return (
        <Section id="featured" fullScreen={false} marginBottom={false}>
            <div className="full px-5 py-10">
                {/** Sm **/}
                <div
                    id="featured-sm"
                    className="flex-col-bottom w-full px-5 py-10 md:hidden"
                >
                    <SlideShow {...data.featured} />
                </div>
                {/** Md **/}
                <div
                    id="featured-md"
                    className="md:flex-col-center hidden w-full"
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
