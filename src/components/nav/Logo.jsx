import { config } from '@config'
import { motion } from 'framer-motion'

const Logo = ({ menuState, isHome, router }) => {
    const logoProps = {
        initial: false,
        animate: menuState
            ? {
                  translateY: 15,
                  scale: 1.4,
                  transition: {
                      duration: 0.6,
                      ease: 'easeOut',
                  },
              }
            : {
                  translateY: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeIn' },
              },
        onClick: (e) => {
            e.preventDefault()
            router.push('/', scroll(0, 0))
        },
    }
    return (
        <motion.a
            className="absolute z-[100] cursor-pointer text-3xl font-medium text-white hover:text-lightTeal md:text-lg"
            style={{
                transition: 'color 0.25s ease-in',
                transformOrigin: 'top',
            }}
            {...logoProps}
        >
            JYN
        </motion.a>
    )
}
export default Logo
