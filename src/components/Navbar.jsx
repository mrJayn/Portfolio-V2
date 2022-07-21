import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, AnimatePresence, motion } from 'framer-motion'

import data from '@data'
import { spring, toggleScrolling } from '@utils'

import { Menu, Burger } from '@components'
import { FaFileSignature } from 'react-icons/fa'

const sections = data.navLinks

const parent = {
    init: {
        opacity: 0,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1,
        },
    },
}
const child = {
    init: {
        y: '-100px',
        opacity: 0,
        transition: spring,
    },
    show: {
        y: '0px',
        opacity: 1,
        transition: spring,
    },
}

const Navbar = ({ isLoading, basePath }) => {
    const [anim, setAnim] = useState('init')
    const [menuState, setMenuState] = useState(false)
    const [banner, setBanner] = useState(false)
    const [resumebtn, setResumrbtn] = useState(false)
    const handleMenuClick = () => {
        setMenuState(!menuState)
        toggleScrolling({ menuState })
    }

    useEffect(() => {
        const handleBanner = () => {
            setBanner(window.scrollY < 10)
        }
        window.addEventListener('scroll', handleBanner)

        return () => window.removeEventListener('scroll', handleBanner)
    }, [setBanner, basePath])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && menuState) {
                setMenuState(!menuState)
                toggleScrolling({ menuState })
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [menuState])

    useEffect(() => {
        if (!isLoading) {
            setAnim('show')
            setTimeout(() => {
                setBanner(true)
                setResumrbtn(true)
            }, 2000)
        }
    }, [isLoading, basePath])

    return (
        <div className="nav" id="nav">
            <motion.div
                className="nav-content"
                initial={false}
                animate={`${anim}`}
                variants={parent}
            >
                {/** Hamburger **/}
                <Burger isOpen={menuState} onClick={handleMenuClick} />

                {/** nav-Logo **/}
                <motion.div className="nav-logo" variants={child}>
                    <Link href="/#intro">
                        <h1>MikeJayne</h1>
                    </Link>
                </motion.div>

                {/** Nav-Links **/}
                <motion.div className="nav-links" variants={parent}>
                    <ul>
                        {sections.map((link) => (
                            <motion.li
                                key={`nav-link-${link.item}`}
                                variants={child}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/** Resume-Inline-Btn **/}
                {resumebtn && <ResumeBtn banner={banner} basePath={basePath} />}
                {ResumeBtn_small}
            </motion.div>

            <ResumeBanner banner={banner} basePath={basePath} />

            {/** Menu **/}
            <Menu state={menuState} handleClick={handleMenuClick} />
        </div>
    )
}

const ResumeBtn = ({ banner, basePath }) => {
    const variants = {
        show: {
            top: '0px',
            opacity: 1,
            transition: {
                opacity: {
                    duration: 0.25,
                    delay: 0.25,
                },
                top: {
                    duration: 0.5,
                },
            },
        },
        hide: {
            top: '48px',
            opacity: 0,
            transition: {
                opacity: {
                    duration: 0.25,
                },
                top: {
                    duration: 0.5,
                },
            },
        },
    }
    return (
        <AnimatePresence>
            {basePath && !banner && (
                <motion.div
                    className="resume-btn"
                    initial={'hide'}
                    animate={'show'}
                    exit={'hide'}
                    variants={variants}
                    data-title="Resume"
                >
                    <Link className href="/resume">
                        <h1>Resume</h1>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
const ResumeBtn_small = (
    <div className="resume-symbol">
        <Link href="/resume">
            <FaFileSignature className="symbol" size={20} />
        </Link>
    </div>
)
const ResumeBanner = ({ banner, basePath }) => {
    return (
        <AnimatePresence>
            {basePath && banner && (
                <motion.div
                    className="resume-banner"
                    initial={{ top: '-12px' }}
                    animate={{
                        top: '48px',
                    }}
                    exit={{ top: '-12px' }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <Link href="/resume">
                        <span>Check out my Resume!</span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Navbar
