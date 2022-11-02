import { motion } from 'framer-motion'
import Styled_Img from './items/Styled_Img'

const Section_Hero = ({ idx, isMd, ...data }) => {
    const even = idx % 2 == 0
    const sectionImgProps = {
        src: data.src,
        alt: data.alt,
        style: { order: even ? 2 : 1 },
    }
    return (
        <div className="relative h-auto w-full py-3 md:mb-10 md:flex md:h-[calc(100vh-48px)] md:py-0">
            {isMd ? <Styled_Img {...sectionImgProps} /> : null}
            <div
                className="flex-col-center full space-y-4 px-4 text-center md:max-w-[50%]"
                style={{ order: even ? 1 : 2 }}
            >
                <h2 className="text-4xl sm:text-5xl"> {data.title}</h2>
                <p className="text-2xl leading-7">{data.description}</p>
                <hr className="w-full text-grey" />
            </div>
        </div>
    )
}
export default Section_Hero
