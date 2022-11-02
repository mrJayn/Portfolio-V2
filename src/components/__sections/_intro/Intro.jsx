import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Section, Styled_Button, Title } from '@components'
import { introVariants as variants } from '@motion'

const topText = ['Hello,', 'my', 'name', 'is', '.', '.', '.']

const Intro = ({ isFirstLoad, pRM }) => {
    const [titleControls, contentControls] = [useAnimation(), useAnimation()]
    const [titleColor, setTitleColor] = useState('#66fcf1')
    const anim = titleColor == '#66fcf1' ? 'hidden' : 'show'

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

    return (
        <>
            <div className="flex-col-center full absolute top-0 left-0 select-none landscape:pt-14">
                {/** TOP TEXT **/}
                <div className="flex space-x-2">
                    {topText.map((word, i) => {
                        return (
                            <motion.p
                                key={`intro-topTxt-word-${i}`}
                                className="relative text-lg font-semibold tracking-wider"
                                initial="hidden"
                                animate={anim}
                                variants={variants.TopText}
                                custom={isFirstLoad.current ? i : -1}
                                onAnimationComplete={() =>
                                    i == topText.length - 1 &&
                                    titleControls.start('enter')
                                }
                            >
                                {word}
                            </motion.p>
                        )
                    })}
                </div>

                {/** TITLE **/}
                <Title
                    titleControls={titleControls}
                    titleColor={titleColor}
                    contentControls={contentControls}
                    isFirstLoad={isFirstLoad}
                    pRM={pRM}
                />

                {/** SUBTITLE **/}
                <motion.h2
                    initial="hidden"
                    animate={contentControls}
                    variants={variants.Content}
                >
                    Data Analyst
                </motion.h2>

                {/** PROJECTS / CONTACT BTNS **/}
                <div className="flex-col-btw mt-20 h-32 md:mt-32 md:h-auto md:w-9/12  md:flex-row md:justify-evenly landscape:mt-10 md:landscape:mt-32">
                    <Styled_Button
                        action={(e) => {
                            e.preventDefault()
                            document
                                .querySelector('#projects')
                                .scrollIntoView({ block: 'start' })
                        }}
                        btnStyle={`md:text-md xl:text-lg py-3 px-7 md:py-4 ${
                            isFirstLoad.current
                                ? 'pointer-events-none'
                                : 'pointer-events-auto'
                        }`}
                        initial="hidden"
                        animate={contentControls}
                        variants={variants.StyledButton}
                        onAnimationComplete={() =>
                            (isFirstLoad.current = false)
                        }
                    >
                        VIEW MY PROJECTS
                    </Styled_Button>
                </div>

                {/** */}
            </div>
        </>
    )
}
export default Intro
