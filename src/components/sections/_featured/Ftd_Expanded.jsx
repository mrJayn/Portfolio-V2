import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { ExitButton, IconLinks } from '@components'
import { expandedVariants } from '@motion'

const Ftd_Expanded = ({
    project,
    expanded,
    setExpanded,
    even = 0,
    isSm,
    pRM,
}) => {
    const data = project.data
    const variants = expandedVariants.Featured

    const Project_Content = () => (
        <div className="flex-col-top flex-col-top relative mb-10 px-5 sm:top-14">
            <div
                dangerouslySetInnerHTML={{
                    __html: project.content,
                }}
                className="text-black-light dark:text-grey-light"
            />
        </div>
    )

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
                            className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll rounded-xl bg-grey-lightest pt-1 shadow-md dark:bg-grey-darkest"
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
                                <ExitButton
                                    toggleCard={() => setExpanded(false)}
                                />
                            </div>

                            <Project_Content />
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
                            variants={expandedVariants.Title}
                        >
                            <h4 className=" whitespace-nowrap text-2xl">
                                {data.title}
                            </h4>
                        </motion.div>
                        {/** ~ CONTENT ~ **/}
                        <motion.div
                            className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-grey-lightest dark:bg-grey-darkest"
                            variants={variants.TabsExpWrap}
                            custom={even}
                        >
                            {/** [  IMAGE  ] **/}
                            <div className="relative mx-auto h-[45vh] w-full">
                                <Image
                                    src={data.src}
                                    alt={data.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                />
                            </div>
                            {/** [  LINKS  ] **/}
                            <div className="flex-center h-16 space-x-12">
                                <IconLinks
                                    hrefs={[data.github, data.external]}
                                    size={50}
                                />
                            </div>
                            {/** [  MARKDOWN CONTENT  ] **/}
                            <Project_Content />
                        </motion.div>
                    </motion.div>
                ))}
        </AnimatePresence>
    )
}
export default Ftd_Expanded
