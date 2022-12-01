import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'
const variants = aboutVariants.Skills

const Skills = ({ isMd, ...data }) => (
    <motion.div
        key="about-skill"
        className="flex-col-top relative h-auto w-full text-center md:mt-8 md:w-auto"
        {...(isMd
            ? {
                  initial: 'hidden',
                  whileInView: 'show',
                  viewport: { once: true },
              }
            : null)}
    >
        <h5 className="flex h-16 items-center leading-6">
            Tech I&apos;ve worked with recently
        </h5>
        <motion.ul
            className="relative grid w-full grid-cols-2 gap-2 px-2 sm:grid-cols-3 md:w-max md:grid-cols-1 md:gap-4 md:py-4"
            variants={variants.Container}
        >
            {data.skills.map(({ title, src }, i) => {
                return (
                    <motion.li
                        key={`${title}-skill-item`}
                        className="flex-left group h-14 w-auto max-w-full overflow-hidden rounded-lg bg-slate-10/25 p-2 pr-[20vw] shadow-inset shadow-black/10 odd:ml-auto even:mr-auto sm:justify-center sm:overflow-visible sm:px-8 sm:odd:mx-auto sm:even:mx-auto md:w-full md:px-4"
                        variants={variants.Item}
                    >
                        <div className="relative aspect-square h-3/4 sm:h-5/6">
                            <Image
                                src={src}
                                alt={`${title} Graphic`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="ml-1.5 whitespace-nowrap italic tracking-tighter text-slate-30 xs:w-full sm:text-[0.9em]">
                            {title}
                        </p>
                    </motion.li>
                )
            })}
        </motion.ul>
    </motion.div>
)

export default Skills
