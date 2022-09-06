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
const Icon = ({ name, size = 30, defId = null }) => {
    // Two Seperate SVG Tags to achieve correct blur Effect :/

    const svgProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        hieght: size,
        width: size,
        fill: 'none',
        strokeWidth: '1',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    }

    return (
        <div className="flex-center full group">
            <svg
                className="absolute opacity-75 group-hover:opacity-100"
                stroke="#fff"
                {...svgProps}
            >
                <Cases name={name} />
            </svg>
            <svg
                className="absolute opacity-75 blur-0 duration-300 group-hover:blur-[4px] group-hover:brightness-150 group-hover:contrast-200"
                stroke={`url(#${defId})`}
                {...svgProps}
            >
                <Cases name={name} />
            </svg>
        </div>
    )
}

export default Icon
