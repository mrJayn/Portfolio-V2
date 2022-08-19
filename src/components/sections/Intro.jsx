import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { Section, Title, Items } from '@components'
import { config } from '@config'

const Intro = () => {
    const subtitleControls = useAnimation()
    const btnControls = useAnimation()

    const finishSequence = async () => {
        await subtitleControls.start({ opacity: 1 })
        return await btnControls.start({ opacity: 1 })
    }
    const titleProps = {
        onComplete: finishSequence,
        width: '500px',
    }
    return (
        <Section id="intro">
            <motion.div
                className="flex-col-center full absolute top-0 left-0 select-none  px-4 md:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p className="relative text-md font-semibold tracking-wide">
                    Hello, my name is
                    <motion.div
                        className="absolute top-0 left-0 bottom-0 right-0 z-10 border-l-4 bg-white"
                        initial={{ scaleX: 1, originX: 1 }}
                        animate={{
                            scaleX: 0,
                            originX: 1,
                            transition: { duration: 0.5, delay: 0.5 },
                        }}
                    />
                </p>
                <Title {...titleProps} />
                {/** */}
                <motion.h2
                    className="pb-2"
                    initial={{ opacity: 0 }}
                    animate={subtitleControls}
                >
                    Data Analyst
                </motion.h2>
                {/** */}
                <div className="flex-col-btw mt-20 h-32 lg:mt-32 lg:h-auto lg:w-[75%] lg:flex-row lg:justify-evenly">
                    <Items.Styled_Button
                        text="projects"
                        href="#featured"
                        anim={btnControls}
                        delay={0}
                    />
                    <Items.Styled_Button
                        text="Contact"
                        action={() => console.log('hi')}
                        anim={btnControls}
                        delay={1}
                    />
                </div>
                {/** */}
            </motion.div>
        </Section>
    )
}

export default Intro
