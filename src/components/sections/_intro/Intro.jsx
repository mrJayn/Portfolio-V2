import { useEffect, useState } from 'react'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'

import { Section, Styled_Button, Title } from '@components'
import { introVariants } from '@motion'

const Intro = ({ firstLoad }) => {
    const pRM = useReducedMotion()
    const [isFirst, setLoading] = firstLoad
    const [titleControls, contentControls] = [useAnimation(), useAnimation()]

    // Handle "View Projects" Button Click
    const handleViewProjectsBtn = (e) => {
        e.preventDefault()
        setTimeout(() => {
            document
                .querySelector('#featured')
                .scrollIntoView({ block: 'start' })
        }, 50)
    }

    // DarkMode Change Listener
    const [color, setColor] = useState()
    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)')
        setColor(theme.matches ? '#fff' : '#000')
        theme.addEventListener('change', (e) =>
            setColor(e.matches ? '#fff' : '#000')
        )
        return () =>
            theme.removeEventListener('change', (e) =>
                setColor(e.matches ? '#fff' : '#000')
            )
    }, [color])

    // Animation Sequence
    useEffect(() => {
        async function sequence() {
            titleControls.mount
            titleControls.set('hidden')
            await titleControls.start('enter')
            await contentControls.start('contentEnter')
            setLoading([false, false])
        }
        if (isFirst) {
            sequence()
        } else {
            titleControls.set('hidden')
            titleControls.start('enter')
            contentControls.start('contentEnter')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titleControls, contentControls, color, setLoading])

    return (
        <Section id="intro">
            <div className="flex-col-center absolute top-0 left-0 h-screen w-full select-none landscape:top-14 md:landscape:top-0">
                {/** TOP TEXT **/}
                <motion.p
                    className="flex-center relative mx-auto h-[1.5em] w-[10em] text-md font-semibold tracking-wide md:text-[20px] xl:text-[20px] max:text-[24px]"
                    initial="hidden"
                    animate="show"
                    variants={
                        pRM
                            ? introVariants.TopTextReduced
                            : introVariants.TopText
                    }
                    custom={isFirst}
                >
                    Hello, my name is
                </motion.p>

                {/** TITLE **/}
                <Title
                    titleControls={titleControls}
                    color={color}
                    isFirst={isFirst}
                    pRM={pRM}
                />

                {/** SUBTITLE **/}
                <motion.h2
                    initial={isFirst ? 'hidden' : 'show'}
                    animate={contentControls}
                    variants={introVariants.Content}
                >
                    Data Analyst
                </motion.h2>

                {/** PROJECTS / CONTACT BTNS **/}
                <div className="flex-col-btw mt-20 h-32 md:mt-32 md:h-auto md:w-9/12  md:flex-row md:justify-evenly landscape:mt-10 md:landscape:mt-32">
                    <Styled_Button
                        action={handleViewProjectsBtn}
                        btnStyle={`md:text-md xl:text-lg py-3 px-7 md:py-4 ${
                            isFirst && 'pointer-events-none'
                        }`}
                        animateOn={!isFirst}
                    >
                        VIEW MY PROJECTS
                    </Styled_Button>
                </div>

                {/** */}
            </div>
        </Section>
    )
}
export default Intro
