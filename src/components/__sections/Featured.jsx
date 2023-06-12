import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, wrap } from 'framer-motion'
import { projectsMotion } from '@motion'
import { Styled } from '@components'

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

const FtdImage = ({ src, ...props }) => (
    <motion.div
        className="flex-col-btw absolute top-0 h-full cursor-pointer select-none max-md:w-[280px] max-md:will-change-transform md:inset-0"
        style={{
            background: `
                                    linear-gradient(#0000 50%, #000b 75%, #000 100%), 
                                    center / cover no-repeat url(${src})`,
        }}
        {...props}
        {...projectsMotion.ftdSlideProps}
    />
)
const FtdContent = ({ title, tech, content }) => (
    <motion.div className="flex-col-center z-20 w-full" {...projectsMotion.ftdContentProps}>
        <h4 className="absolute bottom-[100%] px-4 py-2 text-white">{title}</h4>
        <div className="flex-col-left p-2 max-md:max-w-[400px] max-md:text-center md:ml-auto md:w-[36ch] xl:w-[768px]">
            <div className="flex text-white" dangerouslySetInnerHTML={{ __html: content }} />
            <div className="flex-left py-2 text-slate max-md:mx-auto md:leading-[2]">
                {tech.map((item) => (
                    <div key={item} className="group">
                        {item}
                        <span className="group-last-of-type:hidden md:mx-1">&nbsp;/&nbsp;</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
)

const Featured = ({ ...featuredProjects }) => {
    const containerRef = useRef(null)
    const [active, setActive] = useState(0)
    const data = Object.values(featuredProjects)

    const handleDragEnd = (e, { offset, velocity }) => {
        const span = data.length - 1
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
        <div id="featured-content" className="flex-col-center w-full">
            <h3 className="max-lg:mb-[calc(1em+20px)]">Featured Works</h3>
            <div className="flex-bottom relative h-[500px] w-full md:w-[650px] xl:w-[1000px]" ref={containerRef}>
                <AnimatePresence>
                    {data.map(({ title, src }, i) => {
                        const n = wrap(-2, 2, i - active)
                        return (
                            [-1, 0, 1].includes(n) && (
                                <FtdImage key={`${title}-image`} src={src} custom={n} onClick={() => setActive(i)} />
                            )
                        )
                    })}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <FtdContent key={`${data[active].title}-content-banner`} {...data[active]} />
                </AnimatePresence>
                <div className="absolute bottom-0 max-md:translate-y-[100%] md:left-0 md:p-[1em]">
                    <Styled.Button className="text-white">
                        <a
                            href={data[active].href}
                            target="_blank"
                            rel="noopenner noreferrer"
                            className="text-[1em] leading-[3]"
                        >
                            Learn More
                        </a>
                    </Styled.Button>
                </div>
            </div>
        </div>
    )
}

export default Featured
