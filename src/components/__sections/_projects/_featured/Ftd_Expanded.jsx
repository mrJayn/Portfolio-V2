import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { Styled_ExitButton, Styled_Icon } from '@components'
import { expanded_Variants } from '@motion'

const Ftd_Expanded = ({
    project,
    expanded,
    setExpanded,
    even = 0,
    isSm,
    pRM,
}) => {
    const data = project.data
    const variants = expanded_Variants.Featured

    const Featured_Content = () => (
        <div className="flex-col-top flex-col-top relative mb-10 px-5 sm:top-14">
            <div
                dangerouslySetInnerHTML={{
                    __html: project.content,
                }}
                className="text-grey-90 dark:text-grey-60"
            />
        </div>
    )
    const Featured_Icons = ({ hrefs, size }) =>
        hrefs.map((href, i) => {
            const [name, title] =
                i == 0
                    ? ['GitHub', 'View on GitHub']
                    : ['External', 'Visit Project']
            return (
                <a key={`project-link-${i}`} href={href} title={title}>
                    <Styled_Icon name={name} size={size} />
                </a>
            )
        })
    return (
        <AnimatePresence mode="wait">
            {expanded &&
                (isSm ? (
                    <div
                        className={`absolute bottom-0 z-0 ${
                            even === 1 ? 'right-0' : 'left-0'
                        } ${pRM ? 'top-24  w-[85%]' : 'top-24  w-[85%]'}`}
                    >
                        <motion.div
                            className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll rounded-xl bg-grey-90 pt-1 shadow-md dark:bg-grey-90"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={pRM ? variants.pRM : variants.GridWrap}
                            custom={even}
                        >
                            <div
                                className={`flex-center absolute top-0 z-10 m-2 aspect-square w-12 invert hover:invert-0 dark:invert-0 md:w-14 ${
                                    even === 1 ? 'right-0' : 'left-0'
                                }`}
                            >
                                <Styled_ExitButton
                                    action={() => setExpanded(false)}
                                />
                            </div>

                            <Featured_Content />
                        </motion.div>
                    </div>
                ) : (
                    <motion.div
                        className="fixed top-12 bottom-0 left-0 right-0 z-50"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {/** ~ NAV BAR TITLE ~ **/}
                        <motion.div
                            className="flex-center fixed top-0 left-1/2 h-12"
                            variants={expanded_Variants.NavTitle}
                        >
                            <h4 className=" whitespace-nowrap text-2xl">
                                {data.title}
                            </h4>
                        </motion.div>
                        {/** ~ CONTENT ~ **/}
                        <motion.div
                            className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-grey-90 dark:bg-grey-90"
                            variants={variants.TabsExpWrap}
                            custom={even}
                        >
                            {/** [  IMAGE  ] **/}
                            <div className="relative mx-auto h-[45vh] w-full">
                                <Image
                                    key={`${data.alt}-img`}
                                    src={data.src}
                                    alt={data.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                />
                            </div>
                            {/** [  LINKS  ] **/}
                            <div className="flex-center h-16 space-x-12">
                                <Featured_Icons
                                    hrefs={[data.github, data.external]}
                                    size={50}
                                />
                            </div>
                            {/** [  MARKDOWN CONTENT  ] **/}
                            <Featured_Content />
                        </motion.div>
                    </motion.div>
                ))}
        </AnimatePresence>
    )
}
export default Ftd_Expanded
