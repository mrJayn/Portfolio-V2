import Image from 'next/image'
import { motion } from 'framer-motion'

const Skills = ({ skills }) => {
    const skillsText = ['Tech', 'Ive', 'worked', 'with', 'recently']
    const animProps = {
        initial: { opacity: 0, y: 10, rotateX: 90 },
        animate: { opacity: 1, y: 0, rotateX: 0 },
    }
    return (
        <div className="md:flex-col-top mx-auto h-full sm:mt-16 sm:w-full md:my-0 md:w-[30%] md:pl-5 lg:w-[41%]">
            <div className="flex-center flex-wrap rounded-lg bg-grey-lightest p-4 dark:bg-grey-darkest">
                {skillsText.map((word, i) => {
                    const lastword = skillsText.at(-1)
                    return (
                        <motion.span
                            key={i}
                            className="inline-block px-[1px] text-[18px] font-semibold italic leading-6 text-grey-darker will-change-transform dark:text-teal-lightest sm:text-[20px] md:text-[20px] lg:text-[24px]"
                            transition={{ delay: 0.25 + i * 0.08 }}
                            {...animProps}
                        >
                            {word}
                            {word !== lastword ? '\u00A0' : ''}
                        </motion.span>
                    )
                })}
            </div>
            <ul
                className="m-3 mb-0 grid grid-cols-2 gap-3 pt-3  sm:mx-0 sm:w-full sm:grid-cols-3 md:grid-cols-1 md:overflow-y-scroll lg:grid-cols-2"
                style={{ borderTop: 'solid 2px #eeeeee75' }}
            >
                {skills.map(([title, src], i) => {
                    return (
                        <motion.li
                            key={`skill-${i}`}
                            className="flex-center relative rounded border-[2px] border-grey-light px-0 py-2 dark:border-none dark:bg-grey/10 sm:justify-start md:my-[1px] md:py-3"
                            transition={{ delay: 0.75 + i * 0.08 }}
                            {...animProps}
                        >
                            <div className="relative ml-[10%] aspect-square h-full">
                                <Image
                                    src={src}
                                    alt={title + ' Image'}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className=" mr-[10%] ml-[10px]  w-full text-[16px] italic tracking-tighter text-grey-dark dark:text-teal-lightest">
                                {title}
                            </p>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Skills
