import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsChevronCompactDown } from 'react-icons/bs'

import { introVariants as variants } from '@motion'
import { Styled } from '@components'
import Title from './Title'

const Intro = ({ isFirstLoad }) => {
    const is1st = isFirstLoad.current

    const onTitleComplete = () => {
        if (!isFirstLoad.current) return
        isFirstLoad.current = false
    }

    return (
        <motion.div
            key="intro-section"
            className="flex-col-around h-full w-full select-text py-14 lg:py-20"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={variants.Wrap}
            custom={is1st}
        >
            <div className="flex-col-center w-full">
                <Title onTitleComplete={onTitleComplete} />
                <motion.h2 variants={variants.SubHead}>Portfolio</motion.h2>
            </div>

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

            <motion.div
                className="absolute bottom-0 cursor-pointer text-56pt text-grey duration-250 ease-tween hover:text-white"
                variants={variants.NextSectionBtn}
                onClick={() =>
                    document
                        .getElementById('about')
                        .scrollIntoView({ block: 'center', behavior: 'smooth' })
                }
            >
                <BsChevronCompactDown />
            </motion.div>
        </motion.div>
    )
}
export default Intro
