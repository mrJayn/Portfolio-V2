import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutVariants } from '@motion'
const variants = aboutVariants.Skills

const Skills = ({ ...data }) => (
    <>
        <h3>Skill Set</h3>
        <motion.ul
            className="grid w-full grid-cols-1 gap-2 py-4 md:grid-cols-2 md:gap-4 md:px-20 landscape:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants.Container}
        >
            {data.skills.map(({ title, src }, i) => {
                const itemColor = {
                    Javascript: ['#ffd600', null],
                    'Next.js': ['#000', null],
                    Tailwind: ['#43a7b2', null],
                    Python: ['#356b98', '#fed040'],
                    'HTML / CSS': ['#ec6026', '#254ce2'],
                    TensorFlow: ['#fd8200', null],
                    'D3.js': ['#cb624c', '#f79c40'],
                    'Node.js': ['#90ce4c', null],
                }[title]
                return (
                    <motion.li
                        key={`${title}-skill-item`}
                        className="flex-left group relative mx-[2.5%] h-16 w-[95%] cursor-default select-text overflow-hidden rounded-l-3xl p-3 md:mx-auto md:h-16 md:w-full md:justify-start md:p-1"
                        variants={variants.Item}
                    >
                        <span
                            className="absolute inset-0 opacity-30"
                            style={{
                                background: `linear-gradient(to right, ${itemColor[0]},transparent)`,
                            }}
                        />
                        <div className="relative z-10 aspect-square h-full select-none overflow-hidden rounded-l-3xl">
                            <Image
                                src={src}
                                alt={`${title} Graphic`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <span
                            className="ml-1.5 whitespace-nowrap font-robotoMono text-[1.2em] font-medium brightness-50 max-lg:-tracking-lg md:w-auto"
                            style={{
                                color: itemColor[itemColor[1] == null ? 0 : 1],
                            }}
                        >
                            {title}
                        </span>
                    </motion.li>
                )
            })}
        </motion.ul>
    </>
)

export default Skills
