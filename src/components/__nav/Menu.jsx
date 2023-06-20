import { motion } from 'framer-motion'
import { FadeInOut } from '@motion'
import { socials } from '@config'
import NavLinks from './NavLinks'
import Paths from '../Paths'

const BackDrop = () => (
    <motion.div
        className="white fixed -inset-0.5 z-10 bg-black/25 backdrop-blur-lg"
        {...FadeInOut({ duration: 0.5, delayExit: 0.3 })}
    />
)

const Socials = () =>
    socials.map(({ name, href }, i) => (
        <motion.a
            key={`social-icon-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="flex-center relative aspect-[1/1] h-[2.35em] max-h-full rounded-lg bg-grey-75 stroke-current p-2 hover:bg-grey-60 hover:stroke-white"
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } },
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-none">
                <Paths name={name} />
            </svg>
        </motion.a>
    ))

export default function Menu({ toggleMenu }) {
    return (
        <>
            <BackDrop />
            <motion.menu
                id="menu"
                className="fixed -inset-0.5 z-20 overflow-hidden bg-grey-95"
                {...FadeInOut({ delayShow: 0.3, duration: 0.5 })}
            >
                <div className="absolute inset-4 top-16 portrait:flex-col-btw landscape:flex-top">
                    <NavLinks isMenu toggleMenu={toggleMenu} />

                    <motion.div
                        className="flex-evenly w-full text-menu portrait:h-16 landscape:w-1/2 landscape:flex-col landscape:gap-y-2"
                        initial="hidden"
                        animate="show"
                        variants={{ show: { transition: { delayChildren: 0.5, staggerChildren: 0.1 } } }}
                    >
                        <Socials />
                    </motion.div>
                </div>
            </motion.menu>
        </>
    )
}
