import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'
const variants = aboutVariants.Skills

const Skills = ({ isMd, ...data }) => (
    <motion.div
        key="about-skill"
        className="flex-col-top h-auto w-full text-center md:items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
    >
        <h3>Skill Set</h3>
        <motion.ul
            className="grid w-full grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-2 md:gap-4 md:px-20"
            variants={variants.Container}
        >
            {data.skills.map(({ title, src }, i) => {
                return (
                    <motion.li
                        key={`${title}-skill-item`}
                        className="flex-left group mx-[12.5%] h-14 w-3/4 overflow-hidden rounded-lg  bg-gradient-to-r from-slate-10/10 to-transparent p-2 shadow-black/5 md:mx-auto md:h-16 md:w-full md:justify-start md:p-4"
                        variants={variants.Item}
                    >
                        <div className="relative aspect-square h-full">
                            <Image
                                src={src}
                                alt={`${title} Graphic`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="ml-1.5 whitespace-nowrap text-[0.9em] italic tracking-tighter text-slate-20 md:w-auto md:text-[1.25em]">
                            {title}
                        </p>
                    </motion.li>
                )
            })}
        </motion.ul>
    </motion.div>
)

export default Skills
