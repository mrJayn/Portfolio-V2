import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const TEXT = 'JYN'

const Logo = ({ closeMenu, globOpen, isHome, router }) => {
    const [controls, bgControls] = [useAnimation(), useAnimation()]

    const layers = ['blur-[2px]', 'blur-[4px]', 'blur-[8px]']

    function onClickEffects() {
        controls.set({ color: '#fff' })
        controls.start({
            color: '#d5d5d5',
            transition: { duration: 0.25, delay: 0.1 },
        })
        bgControls.set({ opacity: 1, scale: 1.25 })
        bgControls.start({
            opacity: 0.5,
            scale: 1,
            transition: { duration: 0.5, delay: 0.1 },
        })
    }
    function handleClick() {
        if (isHome) {
            if (closeMenu == null) {
                window.scrollTo(0, 0)
            } else {
                setTimeout(() => {
                    window.scrollTo(0, 0)
                }, 500)
            }
        } else {
            router.push('/')
        }
    }

    useEffect(() => {
        if (globOpen) {
            controls.start({
                y: -50,
                transition: { duration: 0.25, ease: 'circIn' },
            })
        } else {
            controls.start({
                y: 0,
                transition: { duration: 0.5, delay: 0.5, ease: 'circOut' },
            })
        }
    }, [globOpen, controls])
    return (
        <motion.a
            id="logo"
            className="group absolute z-20 origin-top cursor-pointer select-none text-3xl font-medium text-grey-light md:duration-250 md:ease-in md:hover:text-white"
            animate={controls}
            onClick={(e) => {
                e.preventDefault()
                onClickEffects()
                if (closeMenu !== null) closeMenu()
                handleClick()
            }}
        >
            {TEXT}

            {layers.map((effects, i) => (
                <motion.span
                    key={`layer_${i}`}
                    className={`flex-center bgEffects ${effects}`}
                    style={{
                        zIndex: (i + 2) * -1,
                        transition: '0.35s ease-in',
                    }}
                    initial={false}
                    animate={effects}
                >
                    {TEXT}
                </motion.span>
            ))}
        </motion.a>
    )
}
export default Logo
