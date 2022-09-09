import { motion, useAnimation } from 'framer-motion'

const TEXT = 'JYN'

const Logo = ({ menuState, toggleMenu, router }) => {
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

    return (
        <motion.a
            id="logo"
            className="group absolute z-20 origin-top cursor-pointer select-none text-3xl font-medium text-grey-light md:duration-250 md:ease-in md:hover:text-white"
            animate={controls}
            onClick={(e) => {
                e.preventDefault()
                onClickEffects()
                router.push('/', scroll(0, 0))
                if (menuState) toggleMenu()
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
