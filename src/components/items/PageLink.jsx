import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const PageLink = ({ children }) => {
    const router = useRouter()

    const handleClick = (e) => {
        e.currentTarget.classList.add('clicked')
        router.push(
            { pathname: '/[sid]', query: { sid: 'projects' } },
            `/projects`,
            { scroll: false }
        )
    }

    return (
        <motion.button
            data-page-link
            className="flex-center group relative z-30 max-w-[90vw] scale-100 cursor-pointer select-none tracking-xl text-black opacity-50 transition-opacity duration-250 ease-tween hover:opacity-100"
            onClick={handleClick}
        >
            <motion.span
                className="pointer-events-none absolute inset-0 top-[15%] origin-top rounded-b-md rounded-t shadow-[inset_0_-2px,_inset_-2px_0,_inset_2px_0]"
                /*
                after:pointer-events-none after:absolute after:inset-x-4 after:top-[-1px] after:h-1 after:bg-white after:content-['']
                */
                variants={{
                    hidden: { scaleY: 0, transition: { duration: 0.5 } },
                    show: { scaleY: 1, transition: { duration: 1 } },
                }}
            />
            <motion.span
                className="whitespace-nowrap px-6 text-heading-5 uppercase leading-1.75"
                variants={{
                    hidden: {
                        clipPath: 'inset(15% 0 100% 0)',
                        transition: { duration: 0.5 },
                    },
                    show: {
                        clipPath: 'inset(15% 0 0% 0)',
                        transition: { duration: 1 },
                    },
                }}
            >
                {children}
            </motion.span>
        </motion.button>
    )
}
export default PageLink
