import { Section, SlideShow, Featured_Project, ReadMore } from '@components'
import { useMediaQuery } from '@hooks'

const Featured = ({ ...data }) => {
    const isMd = useMediaQuery()

    return (
        <Section id="featured" fullScreen={false} marginBottom={false}>
            <div id="featured-md" className="full py-10">
                {/** Md **/}
                <div className="md:flex-col-center hidden w-full">
                    {data.featured.map((project, i) => {
                        return (
                            <Featured_Project
                                key={i}
                                project={project}
                                i={i}
                                isMd={isMd}
                            />
                        )
                    })}
                </div>
            </div>
            {/** Sm - Mobile **/}
            <div
                id="featured-sm"
                className="flex-col-btw w-full py-10 md:hidden"
            >
                <SlideShow isMd={isMd} {...data.featured} />
            </div>
        </Section>
    )
}

export default Featured
