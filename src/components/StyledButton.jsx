import { motion, useAnimate } from 'framer-motion'

export default function Styled_Button({ children, onClick = null, ...props }) {
    const [scope, animate] = useAnimate()
    const handleClick = async (e) => {
        await animate(scope.current, { scale: 0.9 }, { duration: 0.15 })
        if (onClick) onClick()
        animate(scope.current, { scale: 1 }, { delay: 0.15, duration: 0.15 })
    }

    return (
        <motion.button className="styled-button" onClick={handleClick} ref={scope} {...props}>
            {children}
        </motion.button>
    )
}
