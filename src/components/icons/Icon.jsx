/** Credit for Icon Usage System
 *    BRITTANY CHIANG - https://brittanychiang.com/
 **/
import IconCodepen from './codepen'
import IconEmail from './email'
import IconExternal from './external'
import IconGitHub from './github'
import IconLinkedin from './linkedin'

const Cases = ({ name }) => {
    switch (name) {
        case 'Codepen':
            return <IconCodepen />
        case 'Email':
            return <IconEmail />
        case 'External':
            return <IconExternal />
        case 'GitHub':
            return <IconGitHub />
        case 'Linkedin':
            return <IconLinkedin />
        default:
            return <IconExternal />
    }
}
const Icon = ({ name, size = 24 }) => {
    const isEmail = name == 'Email'
    const boxSize = isEmail ? 1024 : 24
    const fillColor = isEmail ? '#fff' : ''

    return (
        <>
            <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${boxSize} ${boxSize}`}
                height={size}
                width={size}
                fill="none"
                stroke="#fff"
                strokeWidth="1"
            >
                <Cases name={name} />
            </svg>
            <svg
                className="absolute opacity-75 blur-0  duration-300 hover:blur-[3px] hover:brightness-150 hover:contrast-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${boxSize} ${boxSize}`}
                height={size}
                width={size}
                stroke="#ffffff50"
                strokeWidth="1"
            >
                <defs>
                    <linearGradient id="gradient" x1={0} x2={0.5} y1={1} y2={0}>
                        <stop offset="0%" stopColor="#8360c3" />
                        <stop offset="100%" stopColor="#45A29E" />
                    </linearGradient>
                </defs>
                <g
                    style={{
                        fill: 'url(#gradient)',
                    }}
                >
                    <Cases name={name} />
                </g>
            </svg>
        </>
    )
}

export default Icon
