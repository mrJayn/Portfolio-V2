import Image from 'next/image'
import { motion } from 'framer-motion'

const Skills = ({ skills }) => {
    const skillsText = ['Tech', 'Ive', 'worked', 'with', 'recently']

    return (
        <div className="md:flex-col-top mx-auto h-full sm:mt-10 sm:w-full md:mt-0 md:w-[30%] md:pl-5 lg:w-[41%]">
            <div className="flex-center flex-wrap font-medium text-lightTeal">
                {skillsText.map((word, i) => {
                    const lastword = skillsText.at(-1)
                    return (
                        <motion.span
                            key={i}
                            className=" inline-block px-[1px] text-[16px] will-change-transform sm:text-[18px] lg:text-[24px]"
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
                className="m-3 mb-0 grid grid-cols-2 gap-3 pt-3  sm:mx-0 sm:w-full sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2"
                style={{ borderTop: 'solid 2px #eeeeee75' }}
            >
                {skills.map((item, i) => {
                    return (
                        <motion.li
                            key={item[0]}
                            className="flex-center relative rounded bg-grey p-1 sm:justify-start"
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
                            <p className=" mr-[10%] ml-[10px] w-full  font-robotoMono italic tracking-tighter text-neon">
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
