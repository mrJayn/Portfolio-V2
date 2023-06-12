import { useEffect, useRef } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import { scroll2id, openResumeJPG } from '@utils'
import { Styled } from '@components'

const showClip = 'inset(0% -50% 0% -50%)'
const hideClipTop = 'inset(125% -50% 0% -50%)'
const hideClipBottom = 'inset(0% -50% 100% -50%)'
const easeOutCube = [0.33, 1, 0.68, 1]
const staggerTransition = { delay: stagger(0.1), duration: 0.6, ease: easeOutCube }

const Intro = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const mount = [[`h1 span,h2 span, .reword`, { y: '100%', clipPath: hideClipBottom }, { duration: 0 }]]
        const anim = [
            [`h1 span`, { y: 0, clipPath: showClip }, { at: '+0.25', ...staggerTransition }],
            [`h2 span`, { y: 0, clipPath: showClip }, { at: '+0.1', ...staggerTransition }],
            [`.error`, { y: '-100%', clipPath: hideClipTop }, { at: '+0.25', duration: 1, ease: 'anticipate' }],
            [`.reword`, { y: '0%', clipPath: showClip }, { at: '-1', duration: 1, ease: 'anticipate' }],
        ]

        animate([...mount, ...anim])
    }, [animate, scope])

    const variableText = (isShow) => {
        animate(
            `h2 .error`,
            { y: isShow ? '0%' : '-100%', clipPath: isShow ? showClip : hideClipTop },
            { duration: 0.5, ease: 'easeInOut' }
        )
        animate(
            `h2 .reword`,
            { y: isShow ? '100%' : '0%', clipPath: isShow ? hideClipBottom : showClip },
            { duration: 0.5, ease: 'easeInOut' }
        )
    }

    return (
        <div
            id="intro-content"
            className="flex-col-around relative h-[calc(100vmax-64px)] overflow-hidden lg:h-[calc(100vh-256px)]"
        >
            <div className="relative text-center" ref={scope}>
                <h1 className="flex-center gap-x-[0.3ch] max-lg:flex-col">
                    <span>Michael</span> <span>Jayne</span>
                </h1>
                <h2 className="flex-center relative flex-wrap gap-x-[0.4ch] leading-[1.15]">
                    <div
                        className="flex-center relative"
                        onMouseEnter={() => variableText(true)}
                        onMouseLeave={() => variableText(false)}
                    >
                        <span className="error relative">Chemical</span>
                        <div className="reword absolute z-10 text-[1em] text-slate-neon after:absolute after:right-[-0.2em] after:top-[-0.15em] after:text-[2em] after:font-thin after:content-['*']">
                            Software
                        </div>
                    </div>
                    <span>engineer.</span>
                </h2>
            </div>
            <Buttons />
            <div className=" absolute inset-0 top-16 -z-10">
                <Graphic />
            </div>
        </div>
    )
}

function Graphic({}) {
    return <div></div>
}

const Buttons = ({}) => {
    const handleBtnClick = (e, action) => {
        let thisBtn = e.currentTarget
        thisBtn.classList.add('clicked')
        setTimeout(() => action(), 750)
        setTimeout(() => thisBtn.classList.remove('clicked'), 1750)
    }
    return (
        <div className="w-[8em] gap-x-[2rem] gap-y-[1rem] text-[1.25em] max-lg:flex-col-center lg:flex-evenly lg:w-full ">
            <Styled.Button className="w-full" onClick={(e) => handleBtnClick(e, () => scroll2id('projects'))}>
                Projects
            </Styled.Button>
            <Styled.Button className="w-full" onClick={(e) => handleBtnClick(e, () => scroll2id('contact'))}>
                Contact
            </Styled.Button>
            <Styled.Button className="w-full" onClick={(e) => handleBtnClick(e, openResumeJPG)}>
                Resume
            </Styled.Button>
        </div>
    )
}

export default Intro
