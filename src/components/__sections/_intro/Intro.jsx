import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsChevronCompactDown } from 'react-icons/bs'

import { introVariants as variants } from '@motion'
import { Styled } from '@components'
import Title from './Title'
import Graphic from './Graphic'

const Intro = ({ isFirstLoad, isRouting }) => {
    const initialAnim = isFirstLoad.current ? 'hidden' : 'show'
    const anim = isRouting ? 'hidden' : 'show'
    const graphicAnim = isFirstLoad.current ? 'showFirst' : 'show'

    const onTitleComplete = () => {
        if (!isFirstLoad.current) return
        isFirstLoad.current = false
    }

    const is1st = isFirstLoad.current

    return (
        <motion.div
            key="intro-section"
            className="flex-col-center full select-text py-[4vh] lg:py-20"
            initial="hidden"
            animate={anim}
            exit="hidden"
            variants={variants.Wrap}
            custom={is1st}
        >
            <Title
                initialAnim={initialAnim}
                titleAnim={isRouting ? 'hidden' : 'show'}
                initialDelay={isFirstLoad.current ? 1.5 : 0.75}
                onTitleComplete={onTitleComplete}
            />
            <motion.h2 className="leading-none" variants={variants.SubHead}>
                Portfolio
            </motion.h2>
            <span className="w-full flex-[0.5] lg:flex-[0.25]" />
            <motion.div variants={variants.Btn}>
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
            <motion.a
                href="#about"
                className="absolute bottom-[2em] text-56pt text-grey duration-250 ease-tween hover:text-white"
                variants={variants.DownArrow}
            >
                <BsChevronCompactDown />
            </motion.a>

            <div className="pointer-events-none absolute top-[12.5%] bottom-0 left-0 -z-10 w-full overflow-hidden rounded-lg opacity-50 lg:left-1/2 lg:top-0 lg:bottom-[45%] lg:z-10 lg:w-1/2 lg:translate-x-[-5vw] lg:opacity-100">
                <Graphic
                    initial="hidden"
                    animate={isRouting ? 'hidden' : 'show'}
                    variants={variants.Graphic}
                    custom={is1st}
                />
            </div>
        </motion.div>
    )
}
export default Intro
