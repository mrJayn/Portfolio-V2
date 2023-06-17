import { useEffect, useRef } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import { scroll2id, openResumeJPG } from '@utils'
import { Styled } from '@components'

const transitions = {
    stagger: { delay: stagger(0.1), duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    anticipate: { duration: 1, ease: 'anticipate' },
}

const Intro = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const mount = [
            [`h1 span`, { y: '100%', clipPath: 'inset(0 0 100% 0)' }, { duration: 0 }],
            [`h2 span`, { y: '100%' }, { duration: 0 }],
            [`.reword`, { y: '115%' }, { duration: 0 }],
        ]
        const anim = [
            [`h1 span`, { y: 0, clipPath: 'inset(0 0 0% 0)' }, { at: '+0.25', ...transitions.stagger }],
            [`h2 span`, { y: 0 }, { at: '+0.1', ...transitions.stagger }],
            [`.error`, { y: '-115%' }, { at: '+0.25', ...transitions.anticipate }],
            [`.reword`, { y: 0 }, { at: '<', ...transitions.anticipate }],
        ]
        animate([...mount, ...anim])
    }, [animate, scope])

    return (
        <div
            id="intro-content"
            className="flex-col-around relative h-[calc(100vmax-56px)] overflow-hidden lg:h-[calc(100vh-112px)]"
        >
            <div className="relative text-center" ref={scope}>
                <h1 className="flex-center max-lg:flex-col">
                    <span>Michael</span>
                    <span className="max-lg:hidden">&nbsp;</span>
                    <span>Jayne</span>
                </h1>
                <h2 className="relative mx-auto flex w-fit overflow-hidden">
                    <span className="error">Chemical</span>
                    <div className="reword absolute left-[0.1em] text-slate-neon after:absolute after:right-[-0.22em] after:top-[-0.15em] after:text-[2em] after:font-thin after:content-['*']">
                        Software
                    </div>
                    &nbsp;
                    <span>engineer.</span>
                </h2>
            </div>
            {/* <Buttons /> */}
            <div>{`[ placeholder ]`}</div>
            {/***/}
            <div className=" absolute inset-0 top-16 -z-10">
                <Graphic />
            </div>
        </div>
    )
}
const btnFns = {
    Projects: () => scroll2id('projects'),
    Contact: () => scroll2id('contact'),
    Resume: () => openResumeJPG,
}

const Buttons = () => (
    <div className="w-full gap-[1rem] text-[1.25rem] max-lg:flex-col-center lg:flex-evenly">
        {Object.entries(btnFns).map(([text, fn], i) => (
            <Styled.Button key={`intro-btn-${i}`} onClick={fn}>
                {text}
            </Styled.Button>
        ))}
    </div>
)

function Graphic({}) {
    return <div></div>
}

export default Intro
