import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

import { introVariants as variants } from '@motion'
import { Styled } from '@components'
import Title from './Title'
import Graphic from './Graphic'

const Intro = ({ isMd, isLg, isFirstLoad, isRouting }) => {
    const is1st = isFirstLoad.current
    const initialAnim = isFirstLoad.current ? 'hidden' : 'show'
    const ContentControls = useAnimation()

    const onTitleComplete = () => {
        if (!isFirstLoad.current) return
        ContentControls.start('show')
        isFirstLoad.current = false
    }
    return (
        <motion.div
            key="intro-section"
            className="flex-col-center full select-text py-[4vh] lg:pt-20 lg:pb-32"
            initial="hidden"
            animate={isRouting ? 'exit' : 'show'}
            exit="hidden"
            variants={variants.Wrap}
            custom={is1st}
        >
            <Title
                initialAnim={initialAnim}
                initialDelay={isFirstLoad.current ? 1.5 : 0.75}
                onTitleComplete={onTitleComplete}
            />
            <motion.h2
                className="leading-none"
                initial={initialAnim}
                animate={ContentControls}
                variants={variants.Content}
            >
                Portfolio
            </motion.h2>
            <Graphic isMd={isMd} isLg={isLg} />
            <motion.div
                initial={initialAnim}
                animate={ContentControls}
                variants={variants.StyledButton}
            >
                <Styled.Button>
                    <Link
                        href={{
                            pathname: '/section/[slug]',
                            query: { slug: 'projects' },
                        }}
                        as={'/Projects'}
                        scroll={false}
                    >
                        VIEW MY PROJECTS
                    </Link>
                </Styled.Button>
            </motion.div>
        </motion.div>
    )
}
export default Intro
