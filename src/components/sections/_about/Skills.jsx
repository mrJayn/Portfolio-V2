import Image from 'next/image'
import { motion } from 'framer-motion'

const Skills = ({ skills }) => {
    const skillsText = ['Tech', 'Ive', 'worked', 'with', 'recently']

    return (
        <div className="md:flex-col-top mx-auto h-full sm:mt-16 sm:w-full md:my-0 md:w-[30%] md:pl-5 lg:w-[41%]">
            <div className="flex-center flex-wrap">
                {skillsText.map((word, i) => {
                    const lastword = skillsText.at(-1)
                    return (
                        <motion.span
                            key={i}
                            className="inline-block px-[1px] text-[18px] font-medium leading-6 text-grey-dark will-change-transform dark:text-teal-10 sm:text-[20px] md:text-[20px] lg:text-[24px]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + i * 0.08 }}
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
                {skills.map((item, i) => {
                    return (
                        <motion.li
                            key={item[0]}
                            className="flex-center relative rounded bg-white/50 px-0 py-2 dark:bg-grey/50 sm:justify-start md:my-[1px] md:py-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75 + i * 0.08 }}
                        >
                            <div className="relative ml-[10%] aspect-square h-full">
                                <Image
                                    src={item[1]}
                                    alt={item[0] + ' Image'}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className=" mr-[10%] ml-[10px]  w-full text-[16px] italic tracking-tighter text-grey-dark dark:text-teal-10">
                                {item[0]}
                            </p>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Skills
