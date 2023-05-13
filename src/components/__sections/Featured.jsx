import Image from 'next/image'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, wrap } from 'framer-motion'
import { Styled } from '@components'
import { useEffect, useRef, useState } from 'react'

const slideMotion = {
    initial: (i) => ({
        opacity: 0,
        x: i * 200 + '%',
    }),
    animate: (i) => ({
        opacity: Math.min(1, 1.5 - Math.abs(i)),
        x: i * 100 + '%',
        transition: { duration: 0.75 },
    }),
    exit: (i) => ({
        opacity: 0,
        x: i * 166 + '%',
        transition: { duration: 0.5 },
    }),
}

function useCanDrag() {
    const [draggable, setDraggable] = useState(false)

    useEffect(() => {
        const isTouchDevice =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0 ||
            window.innerWidth < 1024

        const updateDraggability = () => setDraggable(isTouchDevice)

        updateDraggability()

        window.addEventListener('resize', updateDraggability)
        return () => window.removeEventListener('resize', updateDraggability)
    }, [])

    return draggable
}
const Content = ({ data, content }) => {
    const { tech, href } = data
    return (
        <motion.div
            className="flex-col-center fixed z-20 w-[280px] gap-x-6 md:w-[650px] md:flex-row-reverse md:justify-around xl:w-[1000px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div className="flex-col-left max-w-[400px]">
                <div
                    className="flex text-white"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="flex-left py-2 text-min text-grey-30 md:px-2">
                    {tech.map((item) => (
                        <div key={item} className="group">
                            {item}
                            <span className="group-last-of-type:hidden">
                                &nbsp;/&nbsp;
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Styled.Button style={{ color: 'white' }}>
                <a
                    href={href}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="text-[1em] leading-[3]"
                >
                    Learn More
                </a>
            </Styled.Button>
        </motion.div>
    )
}
const Featured = ({ featuredData }) => {
    const containerRef = useRef(null)
    const [active, setActive] = useState(0)
    const span = 2 // num projects -1

    const handleDragEnd = (e, { offset, velocity }) => {
        const clientWidth = containerRef.current?.clientWidth || 0
        const threshold = clientWidth / 4

        if (Math.abs(velocity.y) > Math.abs(velocity.x)) return

        if (offset.x > threshold || offset.x < -threshold) {
            const selected = active + Math.sign(offset.x)
            const wrapped = selected > span ? 0 : selected < 0 ? span : selected
            setActive(wrapped)
        }
    }

    return (
        <div
            id="featured-content"
            className="flex-col-top h-[400px] w-full xl:h-[500px]"
        >
            <div
                className="flex-bottom relative h-full w-[280px] md:w-[650px] xl:w-[1000px]"
                ref={containerRef}
            >
                <AnimatePresence>
                    {Object.values(featuredData).map(({ data, content }, i) => {
                        const n = wrap(-2, 2, i - active)
                        const { title, src, tech, href } = data

                        return (
                            [-1, 0, 1].includes(n) && (
                                <motion.div
                                    key={title}
                                    className="flex-col-btw absolute inset-0 cursor-pointer select-none p-4 will-change-transform"
                                    style={{
                                        background: `
                                    linear-gradient(0deg, #000, transparent 50%), 
                                    center / cover no-repeat url(${src})`,
                                    }}
                                    custom={n}
                                    onClick={() => setActive(i)}
                                    {...slideMotion}
                                >
                                    <h4 className="rounded bg-black p-4 text-white">
                                        {title}
                                    </h4>
                                </motion.div>
                            )
                        )
                    })}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {Object.values(featuredData).map(
                        (data, i) =>
                            i === active && (
                                <Content key={data.data.title} {...data} />
                            )
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Featured
