import Image from 'next/image'
import { motion } from 'framer-motion'

import { slugHeroVariants as variants } from '@motion'
import { Styled } from '@components'
import { BsChevronCompactDown } from 'react-icons/bs'

const Styled_Image = ({ src, alt, even }) => (
    <div
        className={`full pointer-events-none relative z-10 max-w-[50vw] select-none overflow-hidden opacity-25 shadow ${
            even ? 'ml-auto' : 'mr-auto'
        }`}
    >
        <Image
            src={src}
            alt={alt}
            layout="fill"
            quality={25}
            className="object-cover object-center"
        />
    </div>
)

const Slug_Hero = ({ even, isLg, ...data }) => {
    return (
        <motion.div
            id={`${data.id}Page-hero`}
            className="relative z-10 flex h-screen w-full shadow shadow-black"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Wrapper}
        >
            {(data.id !== 'projects') & isLg && (
                <Styled_Image src={data.src} alt={data.alt} even={even} />
            )}

            <motion.div
                className="flex-col-center absolute inset-0 z-20 gap-y-8 overflow-hidden text-center"
                variants={variants.StaggerParent}
            >
                <motion.h2 className="relative" variants={variants.Text}>
                    {data.title}
                    <motion.span
                        className="styled-underline -inset-x-4 origin-center"
                        variants={variants.Decoration}
                    />
                </motion.h2>
                <motion.h4
                    className="origin-center whitespace-pre-line leading-10 text-white"
                    variants={variants.Text}
                >
                    {data.description.replace('<br/>', `\n`)}
                </motion.h4>
                <motion.div
                    className=" flex-center absolute bottom-[-1.25vh] aspect-[2/1] h-[7.5vh] cursor-pointer text-slate-40"
                    variants={variants.Chevron}
                    onClick={() =>
                        window.scrollTo({
                            top: window.innerHeight * 0.9,
                            behavior: 'smooth',
                        })
                    }
                >
                    <div className="absolute -bottom-1/3">
                        <BsChevronCompactDown size="12.5vh" />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="absolute inset-0 z-10"
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <Styled.Background even={even} />
            </motion.div>
        </motion.div>
    )
}

export default Slug_Hero
