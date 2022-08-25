import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Cards, Links } from '@components'
import { Variants } from '@config'
const ReadMore = ({ project, readMore, setReadMore, isMd, even }) => {
    const data = project.data

    return (
        <AnimatePresence exitBeforeEnter>
            {readMore && (
                <motion.div
                    className={
                        isMd
                            ? `absolute top-14 w-[60%] rounded-md bg-charcoal/95 p-5 md:h-[475px] lg:h-[525px] lg:rounded-lg ${
                                  even ? 'right-0' : 'left-0'
                              }`
                            : 'fixed top-0 bottom-0 left-0 right-0 z-50 bg-charcoal p-5'
                    }
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={
                        isMd ? Variants.featured_items.more : Variants.fade
                    }
                    custom={even}
                >
                    <Cards.ExitButton toggleCard={() => setReadMore(false)} />
                    <div className=" flex-col-center absolute top-7 right-7 md:hidden">
                        <Links project={project} />
                    </div>
                    <div className="relative mb-4 h-20 w-full rounded-lg bg-teal/50 sm:h-[20vh] md:hidden">
                        <h3 className="flex-center absolute top-0 h-20 w-full bg-black/20 px-14 text-center text-white sm:h-[20vh] sm:px-0">
                            {data.title}
                        </h3>
                        <Image
                            src={data.src}
                            alt={data.alt}
                            layout="fill"
                            objectFit="cover"
                            className="-z-10 rounded-lg"
                        />
                    </div>
                    <div className="flex-col-top absolute left-4 top-32 right-6 bottom-0 overflow-y-scroll sm:top-[25vh] sm:px-5 md:top-24 md:px-4">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: project.content,
                            }}
                            className="full text-md text-eee"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default ReadMore
