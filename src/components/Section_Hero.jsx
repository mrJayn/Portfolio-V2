import { motion } from 'framer-motion'
import { sectionHeroVariants as variants } from '@motion'
import { Styled } from '@components'
import Image from 'next/image'

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

const Section_Hero = ({ even, bgColor, isLg, ...data }) => (
    <motion.div
        id={`${data.id}Page-hero`}
        className="relative flex h-screen w-full shadow shadow-black"
        style={{ backgroundColor: bgColor }}
        initial="hidden"
        animate="show"
        exit="hidden"
    >
        {(data.id !== 'projects') & isLg && (
            <Styled_Image src={data.src} alt={data.alt} even={even} />
        )}

        <motion.div
            className="flex-col-center absolute inset-0 z-20 gap-y-8 text-center"
            variants={variants.Container}
        >
            <motion.h2 className="relative" variants={variants.Headings}>
                {data.title}
                <motion.span
                    className="styled-underline left-0 w-full origin-center"
                    variants={variants.Decoration}
                />
            </motion.h2>
            <motion.h4
                className="origin-center whitespace-pre-line leading-10 text-white"
                variants={variants.Headings}
            >
                {data.description.replace('<br/>', `\n`)}
            </motion.h4>
            <Styled.Background even={even} />
        </motion.div>
    </motion.div>
)

export default Section_Hero
