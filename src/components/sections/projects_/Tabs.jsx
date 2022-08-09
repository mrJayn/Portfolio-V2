import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useLayoutEffect,
} from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import { theme } from 'tailwind.config'

function useCallbackRef() {
    const [ref, setRef] = useState(null)
    const fn = useCallback((node) => {
        setRef(node)
    }, [])
    return [ref, fn]
}

function useMeasure() {
    const [element, attachRef] = useCallbackRef()
    const [bounds, setBounds] = useState({})
    useLayoutEffect(() => {
        function onResize([entry]) {
            setBounds({
                height: entry.contentRect.height,
                width: entry.contentRect.width,
            })
        }
        const observer = new ResizeObserver(onResize)
        if (element) {
            observer.observe(element)
        }
        return () => {
            observer.disconnect()
        }
    }, [element])
    return {
        bounds,
        ref: attachRef,
    }
}

const Content = ({ children, value }) => {
    return (
        <div className="flex h-full w-full flex-col overflow-hidden bg-eee">
            <motion.div
                className="flex min-h-0 flex-1 flex-row"
                transition={{
                    tension: 190,
                    friction: 70,
                    mass: 0.4,
                }}
                initial={false}
                animate={{ x: value * -100 + '%' }}
            >
                {React.Children.map(children, (child, i) => (
                    <div
                        className="flex-col-left h-full w-full shrink-0 self-stretch overflow-hidden outline-none"
                        key={i}
                        aria-hidden={value !== i}
                        tabIndex={value === i ? 0 : -1}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

const Project = ({ tab }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-col-center h-[250px] w-full border-2 border-teal bg-charcoal/25"
        >
            <h2>{tab}</h2>
            <div>content</div>
        </motion.div>
    )
}

const tabs = ['All', 'Python', 'Javascript', 'React-JS']

const Tabs = () => {
    const [value, setValue] = useState(1)
    const childRefs = useRef(new Map())
    const tabListRef = useRef()
    const [slider, setSlider] = useState({ left: 0, right: 0 })
    const { bounds, ref } = useMeasure()

    // measure our elements
    useEffect(() => {
        const target = childRefs.current.get(value)
        const container = tabListRef.current
        if (target) {
            const cRect = container.getBoundingClientRect()

            // when container is `display: none`, width === 0.
            // ignore this case
            if (cRect.width === 0) {
                return
            }

            const tRect = target.getBoundingClientRect()
            const left = tRect.left - cRect.left
            const right = cRect.right - tRect.right

            setSlider({
                hasValue: true,
                left: left + 8,
                right: right + 8,
            })
        }
    }, [value, bounds])
    return (
        <div>
            <motion.div className="overflow-y-hidden" ref={ref}>
                <motion.div
                    className="relative block border-b-[1px] border-b-black/50"
                    ref={tabListRef}
                >
                    <LayoutGroup>
                        <div className="flex-evenly w-full">
                            {tabs.map((tab, i) => (
                                <motion.button
                                    className=" relative select-none  text-ellipsis whitespace-nowrap py-3 px-4 text-center "
                                    key={tab}
                                    whileHover={{
                                        backgroundColor: '#eeeeee75',
                                    }}
                                    transition={{ duration: 0.25 }}
                                    whileTap={{
                                        backgroundColor: theme.colors.teal,
                                    }}
                                    ref={(el) => childRefs.current.set(i, el)}
                                    onClick={() => setValue(i)}
                                >
                                    {tab}
                                    {i === value && (
                                        <motion.div
                                            className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-neon/50"
                                            layoutId="highlight"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </LayoutGroup>
                    {slider.hasValue && (
                        <motion.div
                            positiontransition={{
                                bounceDamping: 3,
                            }}
                            initial={false}
                            style={{
                                left: slider.left,
                                right: slider.right,
                            }}
                        />
                    )}
                </motion.div>
            </motion.div>
            <Content value={value}>
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className="grid h-auto w-full grid-cols-2 gap-[1px] py-2 px-[2px]"
                    >
                        <Project tab={tab} />
                        <Project tab={tab} />
                        <Project tab={tab} />
                        <Project tab={tab} />
                        <Project tab={tab} />
                        <Project tab={tab} />
                    </div>
                ))}
            </Content>
        </div>
    )
}

export default Tabs
