import { motion } from 'framer-motion'

const Logo = ({ menuState, toggleMenu, router }) => {
    const variants = {
        opened: {
            translateY: 15,
            scale: 1.4,
            transition: {
                duration: 0.3,
                ease: 'linear',
            },
        },
        closed: {
            translateY: 0,
            scale: 1,
            transition: { duration: 0.3, ease: 'linear' },
        },
    }
    const layers = ['blur-[2px]', 'blur-[4px]', 'blur-[8px]']
    const TEXT = 'MIKE'
    return (
        <motion.a
            id="logo"
            className="group absolute z-[100] origin-top cursor-pointer text-3xl font-medium text-[#eee] duration-250 ease-in hover:text-white"
            initial={false}
            animate={menuState ? 'opened' : 'closed'}
            variants={variants}
            onClick={(e) => {
                e.preventDefault()
                router.push('/', scroll(0, 0))
                if (menuState) toggleMenu()
            }}
        >
            {TEXT}

            {layers.map((effects, i) => (
                <span
                    key={`layer_${i}`}
                    className={`flex-center absolute top-0 left-0 right-0 bottom-[-0.05em] bg-gradient bg-clip-text text-[1.1em] font-semibold tracking-tighter text-transparent opacity-50 brightness-125 contrast-200 filter group-hover:opacity-80 motion-reduce:animate-none md:animate-glowing md:group-hover:scale-105 md:group-hover:scale-y-125 ${effects}`}
                    style={{
                        zIndex: (i + 2) * -1,
                        transition: '0.35s ease-in',
                    }}
                >
                    {TEXT}
                </span>
            ))}
        </motion.a>
    )
}
export default Logo
