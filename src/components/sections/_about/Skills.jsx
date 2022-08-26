import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitText } from '@utils'

const Skills = ({ ...about }) => {
    const motionProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
    }
    return (
        <div className="md:flex-col-center flex-wrap md:w-[30%] md:border-l-2 md:border-l-eee/50 md:pl-5">
            <SplitText
                className="text-base font-medium tracking-normal text-lightTeal md:text-[18px] lg:text-[24px]"
                {...motionProps}
            >
                Tech I&apos;ve worked with recently
            </SplitText>
            <ul className="mt-3 grid grid-cols-3 gap-x-2 border-t-2 border-t-eee/50 pt-3 text-xs md:grid-cols-1 md:text-base lg:grid-cols-2 lg:text-md">
                {about.data.skills.map((item, i) => {
                    return (
                        <motion.li
                            key={`${item[0]}`}
                            className="flex-left my-2 rounded bg-grey p-2"
                            transition={{ delay: 0.75 + i * 0.08 }}
                            {...motionProps}
                        >
                            <div>
                                <Image
                                    src={item[1]}
                                    alt={`${item[0]} image`}
                                    layout="intrinsic"
                                    height={15}
                                    width={15}
                                />
                            </div>
                            <p className="pl-[5px] font-robotoMono text-xs font-normal italic text-neon md:text-sm">
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
