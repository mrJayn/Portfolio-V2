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
            className="grid w-full grid-cols-1 gap-2 py-4 md:grid-cols-2 md:gap-4 md:px-20 landscape:grid-cols-2"
            variants={variants.Container}
        >
            {data.skills.map(({ title, src }, i) => {
                const rotate = (isMd ? -15 : -15) * i
                return (
                    <motion.li
                        key={`${title}-skill-item`}
                        className="flex-left group relative mx-[2.5%] h-16 w-[95%] overflow-hidden rounded-3xl p-3 md:mx-auto md:h-16 md:w-full md:justify-start md:p-0"
                        variants={variants.Item}
                    >
                        <span
                            className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-20/30 to-transparent"
                            style={{
                                filter: `hue-rotate(${rotate}deg)`,
                            }}
                        />
                        <div className="relative aspect-square h-full">
                            <Image
                                src={src}
                                alt={`${title} Graphic`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <span
                            className="ml-1.5 whitespace-nowrap font-robotoMono text-[1.25em] tracking-tighter text-slate md:w-auto md:text-[1.25em]"
                            style={{ filter: `hue-rotate(${rotate}deg)` }}
                        >
                            {title}
                        </span>
                    </motion.li>
                )
            })}
        </motion.ul>
    </motion.div>
)

export default Skills
