import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Section, Styled_Button, Title } from '@components'

const Intro = ({ useFirst, darkMode }) => {
    const [isFirst, setIsFirst] = useFirst
    const [titleControls, subTitleControls, btnControls] = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ]
    // Animation Sequence
    useEffect(() => {
        const sequence = async () => {
            titleControls.mount
            titleControls.set('hidden')
            await titleControls.start('enter')
            await subTitleControls.start({ opacity: 1 })
            await btnControls.start({ opacity: 1 })
            setIsFirst(false)
        }
        sequence()
    }, [titleControls, subTitleControls, btnControls, darkMode, setIsFirst])

    return (
        <Section id="intro">
            <motion.div
                className="flex-col-center full absolute top-0 left-0 select-none px-4 md:px-0 landscape:top-14 md:landscape:top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/** TOP TEXT **/}
                <motion.p
                    className="flex-center relative top-0 right-0 left-0 bottom-0 mx-auto h-[1.5em] w-[10em] text-md font-semibold tracking-wide md:text-[20px] xl:text-[20px] max:text-[24px]"
                    initial={{
                        clipPath: `polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)`,
                    }}
                    animate={{
                        clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Hello, my name is
                </motion.p>

                {/** TITLE **/}
                <Title darkMode={darkMode} titleControls={titleControls} />

                {/** SUBTITLE **/}
                <motion.h2
                    className="pb-2"
                    initial={{ opacity: 0 }}
                    animate={subTitleControls}
                >
                    Data Analyst
                </motion.h2>

                {/** PROJECTS / CONTACT BTNS **/}
                <div className="flex-col-btw mt-20 h-32 md:mt-32 md:h-auto md:w-9/12  md:flex-row md:justify-evenly landscape:mt-10 md:landscape:mt-32">
                    <Styled_Button
                        href="#featured"
                        btnStyle="md:text-md xl:text-lg py-3 px-7 md:py-4"
                        initial={{ opacity: isFirst ? 0 : 1 }}
                        animate={btnControls}
                    >
                        VIEW MY PROJECTS
                    </Styled_Button>
                </div>
                {/** */}
            </motion.div>
        </Section>
    )
}
export default Intro
