import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { spring } from '@utils'
import data from '@data'
import MenuContent from './MenuContent'
import MenuFooter from './MenuFooter'
import icon from '../../../public/assets/favicon.png'

const parent = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 64px) 48px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
        transition: { duration: 0.6 },
    }),
    closed: {
        clipPath: 'circle(0px at calc(100% - 64px) 48px)',
        transition: {
            delay: 0.4,
            type: 'spring',
            stiffness: 400,
            damping: 40,
            transition: { duration: 0.6 },
        },
    },
}
const child = {
    open: {
        y: '-0px',
        opacity: 1,
        transition: spring,
    },
    closed: {
        y: '-50px',
        opacity: 0,
        transition: spring,
    },
}

const Menu = ({ state, handleClick }) => {
    const [height, setHeight] = useState(0)
    const menuState = state ? 'open' : 'closed'

    const menuRef = useRef()

    useEffect(() => {
        const newHeight = menuRef.current.clientHeight
        setHeight(newHeight)
    }, [])

    return (
        <motion.div
            className={`menu ${menuState}`}
            initial={false}
            animate={menuState}
            custom={height}
            ref={menuRef}
        >
            <motion.div className={`menuBox ${menuState}`} variants={parent}>
                {/** DELETE */}
                <motion.div className="menu-logo" variants={child}></motion.div>
                {/** DELETE */}

                <MenuContent
                    sections={data.menuLinks}
                    handleClick={handleClick}
                />
                <MenuFooter handleClick={handleClick} />
            </motion.div>
        </motion.div>
    )
}

export default Menu
