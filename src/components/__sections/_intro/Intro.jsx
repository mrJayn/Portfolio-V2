import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Section, Styled_Button, Title } from '@components'
import { introVariants as variants } from '@motion'
import { scrollToID } from '@utils'

const topText = ['Hello,', 'my', 'name', 'is', '.', '.', '.']

const Intro = ({ isFirstLoad }) => {
    const [titleControls, contentControls] = [useAnimation(), useAnimation()]
    const [titleColor, setTitleColor] = useState('#66fcf1')
    const anim = titleColor == '#66fcf1' ? 'hidden' : 'show'

    const checkIfFirst = () => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false
        } else {
            contentControls.start('show')
        }
        titleControls.start('show')
    }

    return (
        <div className="flex-col-center full top-0 left-0 select-none md:absolute">
            {/** TOP TEXT **/}
            <div className="flex space-x-2">
                {topText.map((word, i) => {
                    const isLastWord = i == topText.length - 1
                    return (
                        <motion.p
                            key={`intro-topTxt-word-${i}`}
                            className="relative text-lg font-semibold tracking-wider"
                            initial="hidden"
                            animate="show"
                            variants={variants.TopText}
                            custom={isFirstLoad.current ? i : -1}
                            onAnimationComplete={isLastWord && checkIfFirst}
                        >
                            {word}
                        </motion.p>
                    )
                })}
            </div>

            {/** TITLE **/}
            <Title
                titleControls={titleControls}
                contentControls={contentControls}
                isFirstLoad={isFirstLoad}
            />

            {/** SUBTITLE **/}
            <motion.h2
                data-text="Portfolio"
                initial="hidden"
                animate={contentControls}
                variants={variants.Content}
            >
                Portfolio
            </motion.h2>

            {/** PROJECTS / CONTACT BTNS **/}
            <motion.div
                className="flex-col-btw mt-20 h-32 md:mt-32 md:h-auto md:w-9/12  md:flex-row md:justify-evenly landscape:mt-10 md:landscape:mt-32"
                initial="hidden"
                animate={contentControls}
                variants={variants.StyledButton}
            >
                <Styled_Button action={() => scrollToID('#projects-area')}>
                    VIEW MY PROJECTS
                </Styled_Button>
            </motion.div>

            {/** */}
        </div>
    )
}
export default Intro
