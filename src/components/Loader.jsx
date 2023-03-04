import { useEffect, useCallback, useState } from 'react'
import anime from 'animejs'

const Loader = ({ loaderComplete }) => {
    const gridSize = 20
    const [elSize, setElSize] = useState(5)

    const animate = useCallback(() => {
        const spring = 'spring(1, 20, 10, 10)'
        const staggerProps = {
            grid: [gridSize, gridSize],
            from: 'center',
        }
        const animation = anime.timeline({
            complete: () => loaderComplete(),
        })
        animation
            .add(
                {
                    targets: '#loader-wrap',
                    opacity: 1,
                    duration: 1000,
                    easing: 'easeInQuad',
                },
                0
            )
            .add(
                {
                    targets: '#loader-bg',
                    opacity: [0, 0.35],
                    scale: [
                        {
                            value: [0, 4],
                            duration: 3000,
                            easing: 'easeInOutBack',
                        },
                        { value: [4, 0], easing: 'easeInBack' },
                    ],
                },
                750
            )
            .add(
                {
                    targets: '#loader',
                    opacity: [0, 1],
                    scale: [{ value: [0, 1], easing: spring, duration: 2000 }],
                    rotateZ: [
                        {
                            value: [0, 180],
                            duration: 1500,
                            easing: 'easeOutQuad',
                        },
                    ],
                },
                750
            )
            .add(
                {
                    targets: '.square',
                    opacity: [0, 1],
                    scale: [
                        { value: 0 },
                        {
                            value: 0.5,
                            duration: 200,
                        },
                        {
                            value: 0,
                            duration: 300,
                        },
                        {
                            value: 0.5,
                            duration: 200,
                        },
                    ],
                    translateX: anime.stagger(-5, {
                        ...staggerProps,
                        axis: 'x',
                    }),
                    translateY: anime.stagger(-5, {
                        ...staggerProps,
                        axis: 'y',
                    }),
                    delay: anime.stagger(50, { ...staggerProps }),
                    duration: 600,
                    easing: 'easeOutBack',
                },
                750
            )
            .add(
                {
                    targets: '.square',
                    keyframes: [
                        {
                            scale: 0.5,
                            translateX: anime.stagger(5, {
                                ...staggerProps,
                                axis: 'x',
                            }),
                            translateY: anime.stagger(5, {
                                ...staggerProps,
                                axis: 'y',
                            }),
                            delay: anime.stagger(100, {
                                ...staggerProps,
                            }),
                            easing: 'easeOutBack',
                        },
                        {
                            scale: 0,
                            translateX: anime.stagger(-25, {
                                ...staggerProps,
                                axis: 'x',
                            }),
                            translateY: anime.stagger(-25, {
                                ...staggerProps,
                                axis: 'y',
                            }),
                            delay: anime.stagger(25, {
                                ...staggerProps,
                                direction: 'reverse',
                            }),
                            easing: 'easeInBack',
                        },
                    ],
                },
                2250
            )
            .add(
                {
                    targets: '#loader-wrap',
                    opacity: 0,
                    duration: 500,
                    easing: 'easeInQuad',
                },
                4200
            )
    }, [gridSize, loaderComplete])

    useEffect(() => {
        const loaderDiv = document.querySelector('#loader')
        const vmin = Math.round(
            (Math.min(loaderDiv.clientHeight, loaderDiv.clientWidth) /
                Math.min(window.innerHeight, window.innerWidth)) *
                100
        )
        setElSize(vmin / gridSize)

        const timeout = setTimeout(() => animate(), 500)
        return () => clearTimeout(timeout)
    }, [animate])

    return (
        <div
            id="loader-wrap"
            className="flex-center relative z-[99] h-screen w-screen overflow-hidden  opacity-0"
        >
            <span
                className="absolute z-10 aspect-square h-[150vmin] rounded-full text-background/90 md:h-[100vmin]"
                style={{
                    background: `radial-gradient(transparent 25%, currentColor 30%)`,
                }}
            />
            <div
                id="loader"
                className="clip-loader relative flex aspect-square h-[75vmin] flex-wrap md:h-[50vmin]"
            >
                {[...Array(gridSize ** 2).keys()].map((i) => (
                    <div
                        key={`loader-item-${i}`}
                        className="square rounded-full bg-teal-40 odd:bg-teal"
                        style={{
                            height: `${elSize}vmin`,
                            width: `${elSize}vmin`,
                        }}
                    />
                ))}
                <div
                    id="loader-bg"
                    className="bg-loader-gradient absolute inset-0 z-10 opacity-0"
                />
            </div>
        </div>
    )
}

export default Loader
