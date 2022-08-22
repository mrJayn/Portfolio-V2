import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitText } from '@utils'

const Skills = ({ readMore, ...content }) => {
    const [skills, icons] = [content.data.skills, content.data.skills_icons]
    const motionProps = {
        initial: { opacity: 0, y: 10 },
        animate: readMore && { opacity: 1, y: 0 },
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
                {skills.map((skill, i) => (
                    <motion.li
                        key={`skill-item-${i}`}
                        className="flex-left my-2 rounded bg-grey p-2"
                        transition={{ delay: 0.75 + i * 0.08 }}
                        {...motionProps}
                    >
                        <div>
                            <Image
                                src={icons[i]}
                                alt={`${skill}.png`}
                                layout="intrinsic"
                                height={15}
                                width={15}
                            />
                        </div>
                        <p className="pl-[5px] font-robotoMono text-xs font-normal italic text-neon md:text-sm">
                            {skill}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default Skills
