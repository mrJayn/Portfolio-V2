import { motion } from 'framer-motion'
import { sectionHeroVariants as variants } from '@motion'
import { Styled } from '@components'

const Section_Hero = ({ even, bgColor, isRouting, isLg, ...data }) => (
    <div
        id={`${data.id}Page-hero`}
        className="relative h-auto w-full py-3 md:flex md:h-screen md:overflow-hidden md:py-0"
        style={{ backgroundColor: bgColor }}
    >
        {(data.id !== 'projects') & isLg && (
            <Styled.Image
                src={data.src}
                alt={data.alt}
                style={{
                    marginLeft: even ? 'auto' : 0,
                    marginRight: even ? 0 : 'auto',
                    zIndex: 1,
                    borderRadius: 0,
                    opacity: 0.25,
                }}
            />
        )}

        <motion.div
            className="flex-col-center absolute inset-0 z-20 gap-y-8 text-center"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.Container}
        >
            <motion.h2
                className="relative animate-none"
                variants={variants.Items}
            >
                {data.title}
                <motion.span
                    className="styled-underline left-0 w-full origin-center"
                    variants={variants.Decoration}
                />
            </motion.h2>

            <motion.h4
                className="origin-center whitespace-pre-line leading-10 text-white"
                variants={variants.Items}
            >
                {data.description.replace('<br/>', `\n`)}
            </motion.h4>
            <Styled.Background even={even} />
        </motion.div>
    </div>
)

export default Section_Hero
