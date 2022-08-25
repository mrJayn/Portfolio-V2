import { motion, useAnimation } from 'framer-motion'

import { Section, Title } from '@components'
import { styledBtn, toggleScrolling } from '@utils'
import { theme } from 'tailwind.config'

const Intro = ({ ...data }) => {
    const setForm = data.states.setForm
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

    const introButtons = [
        {
            text: 'PROJECTS',
            href: '#featured',
            action: null,
            transition: { opacity: { delay: 0.5 } },
        },
        {
            text: 'CONTACT',
            href: null,
            action: () => {
                setForm(true)
                toggleScrolling(false)
            },
            transition: { opacity: { delay: 0.5 } },
        },
    ]

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
                        className="absolute top-0 left-0 bottom-0 right-0 border-l-4 bg-white"
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
                <div className="flex-col-btw mt-20 h-40 lg:mt-32 lg:h-auto lg:w-[75%] lg:flex-row lg:justify-evenly">
                    {introButtons.map((btn, i) => (
                        <motion.a
                            key={`introBtn-${i}`}
                            href={btn.href}
                            onClick={btn.action}
                            initial={{ opacity: 0 }}
                            animate={btnControls}
                            transition={{ opacity: { delay: i * 0.5 } }}
                            {...styledBtn}
                        >
                            {btn.text}
                        </motion.a>
                    ))}
                </div>
                {/** */}
            </motion.div>
        </Section>
    )
}
export default Intro
