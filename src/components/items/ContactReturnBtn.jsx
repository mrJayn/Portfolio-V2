import { useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Styled_button from './StyledButton'

const ContactReturnBtn = () => {
    const controls = useAnimation()
    const router = useRouter()

    async function sequence() {
        await controls.start({
            scale: 0.5,
            transition: { duration: 0.25, ease: 'circOut' },
        })
        await controls.start({
            x: -150,
            transition: { duration: 0.5, ease: 'backIn' },
        })
        await router.push('/')
    }

    useEffect(() => {
        async function revSequence() {
            await controls.start({
                opacity: [0, 1],
                x: [-150, 0],
                scale: [0.5, 0.5],
                transition: { duration: 0.5, delay: 0.5, ease: 'backOut' },
            })
            await controls.start({
                scale: 0.75,
                transition: { duration: 0.25, ease: 'circOut' },
            })
        }
        revSequence()
    }, [controls])

    return (
        <Styled_button
            classNames="md:flex-center absolute top-16 left-4 hidden rounded-xl p-5 md:top-20"
            initial={{ opacity: 0, x: -50, scale: 0.75 }}
            animate={controls}
            whileTap={{ scale: 0.75 }}
            onClick={(e) => {
                e.preventDefault()
                sequence()
            }}
        >
            <p>
                <span className="mb-1 text-[1.5em] leading-none">&laquo;</span>
                BACK
            </p>
        </Styled_button>
    )
}
export default ContactReturnBtn
