import { useState } from 'react'
import { motion } from 'framer-motion'
import { pushPage, reload } from '@utils'
import { LogoPaths } from '@config'
import { NavVariants } from '@motion'

const MICHAEL_JAYNE = ({ anim, setAnim }) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-25 -35 700 150"
        className="z-10 h-12 cursor-pointer select-none overflow-visible linecap-round linejoin-round md:h-12"
        initial="hidden"
        animate={anim}
        whileHover="hover"
    >
        {LogoPaths.map((path, i) => (
            <motion.path
                key={`letter-${i}`}
                d={path}
                variants={NavVariants.Logo}
                custom={i}
                {...(i === LogoPaths.length - 1 && {
                    onAnimationComplete: () => {
                        if (anim !== 'show_1') return
                        let _logo = document.getElementById('logo')
                        _logo.style.pointerEvents = 'auto'
                        setAnim('show_2')
                    },
                })}
            />
        ))}
    </motion.svg>
)

const Logo = ({ isHome, menuOpen }) => {
    const [anim, setAnim] = useState('show_1')

    const handleLogo = () => {
        if (!isHome) {
            pushPage('/')
        } else if (window.scrollY == 0 || typeof window == undefined) {
            reload()
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    return (
        <motion.div
            id="logo"
            className={`pointer-events-none absolute z-10 transition-opacity duration-[350ms] ease-in lg:left-4 ${
                menuOpen
                    ? 'max-lg:opacity-0'
                    : 'opacity-100 max-lg:delay-[350ms]'
            }`}
            onClick={handleLogo}
        >
            <MICHAEL_JAYNE anim={anim} setAnim={setAnim} />
        </motion.div>
    )
}
export default Logo
