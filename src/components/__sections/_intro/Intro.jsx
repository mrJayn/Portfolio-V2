import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsChevronCompactDown } from 'react-icons/bs'

import { introVariants as variants } from '@motion'
import { Styled } from '@components'
import Title from './Title'
import Graphic from './Graphic'

const Intro = ({ isFirstLoad }) => {
    const is1st = isFirstLoad.current

    const onTitleComplete = () => {
        if (!isFirstLoad.current) return
        isFirstLoad.current = false
    }

    return (
        <motion.div
            key="intro-section"
            className="flex-col-center h-full w-full select-text py-[4vh] lg:py-20"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={variants.Wrap}
            custom={is1st}
        >
            <Title onTitleComplete={onTitleComplete} />
            <motion.h2 variants={variants.SubHead}>Portfolio</motion.h2>

            <span className="w-full flex-[0.25] md:flex-[0.5] lg:flex-[0.6]" />
            <motion.div className="max-lg:w-full" variants={variants.Btn}>
                <Styled.Button>
                    <Link
                        href={{
                            pathname: '/[sid]',
                            query: { sid: 'Projects' },
                        }}
                        scroll={false}
                    >
                        VIEW MY PROJECTS
                    </Link>
                </Styled.Button>
            </motion.div>
            <motion.a
                href="#about"
                className="absolute bottom-[1em] text-56pt text-grey duration-250 ease-tween hover:text-white"
                variants={variants.NextSectionBtn}
            >
                <BsChevronCompactDown />
            </motion.a>
            <div className="pointer-events-none absolute inset-0 top-[6.25%] -z-10">
                <Graphic
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={variants.Graphic}
                    custom={is1st}
                />
            </div>
        </motion.div>
    )
}
export default Intro
