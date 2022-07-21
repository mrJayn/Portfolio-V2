import { useNProgress } from '@tanem/react-nprogress'

const Container = ({ children, isFinished }) => {
    return (
        <div
            id="progressBar"
            className={` pointer-events-none z-[100] origin-left ${
                isFinished ? 'opacity-0' : 'opacity-100'
            } duration-600 ease-in-out`}
        >
            {children}
        </div>
    )
}

const Bar = ({ progress }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-4 w-full origin-left bg-neon  translate-x-[${
                100 * progress
            }]`}
        ></div>
    )
}

export const Progress = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating,
    })
    return (
        <Container
            animationDuration={animationDuration}
            isFinished={isFinished}
        >
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
}

export default Progress
