import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { Section, Styled_Button, Title } from '@components'
import { introVariants } from '@motion'

const Intro = ({ firstLoad, pRM }) => {
    const [isFirst, setLoading] = firstLoad
    const [titleControls, contentControls] = [useAnimation(), useAnimation()]
    const [titleColor, setTitleColor] = useState('#66fcf1')

    // Title SVG Color
    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)')
        const setColor = (currentTheme) =>
            setTitleColor(currentTheme ? '#fff' : '#000')
        setColor(theme.matches)
        theme.addEventListener('change', (e) => setColor(e.matches))
        return () =>
            theme.removeEventListener('change', (e) => setColor(e.matches))
    }, [setTitleColor])

    // First or Default Animation Sequence
    useEffect(() => {
        async function sequence() {
            if (isFirst) {
                titleControls.set(pRM ? 'pRM_hide' : 'hide')
                await titleControls.start('enter')
                await contentControls.start('contentEnter')
                return setLoading([false, false])
            } else {
                titleControls.set('enter')
            }
        }
        sequence()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titleControls, contentControls, titleColor, setLoading])

    return (
        <Section id="intro">
            <div className="flex-col-center full absolute top-0 left-0 select-none landscape:pt-14">
                {/** TOP TEXT **/}
                <motion.p
                    className="flex-center relative whitespace-nowrap text-lg font-semibold tracking-wide"
                    initial={isFirst ? 'hidden' : 'show'}
                    animate={'show'}
                    variants={
                        pRM
                            ? introVariants.TopText.noClip
                            : introVariants.TopText
                    }
                >
                    Hello, my name is
                </motion.p>

                {/** TITLE **/}
                <Title
                    titleControls={titleControls}
                    titleColor={titleColor}
                    delay={isFirst ? 2 : 0.5}
                    stagger={isFirst & !pRM ? 0.1 : 0}
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
                        action={(e) => {
                            e.preventDefault()
                            document
                                .querySelector('#featured')
                                .scrollIntoView({ block: 'start' })
                        }}
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
