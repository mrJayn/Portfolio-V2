import { Cases } from './Cases'

/** Credit for Icon Usage System
 *    BRITTANY CHIANG - https://brittanychiang.com/
 **/
const Icon = ({
    name,
    size = 30,
    fill = 'none',
    stroke = '#fff',
    invert = true,
}) => {
    // Two Seperate SVG Tags to achieve correct blur Effect :/
    const svgProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        hieght: size,
        width: size,
        fill: fill,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    }
    return (
        <div className="flex-center full group">
            <svg {...svgProps}>
                <g
                    className={`absolute opacity-75  group-hover:opacity-100 ${
                        invert && 'invert group-hover:opacity-50 dark:invert-0'
                    }`}
                    stroke={stroke}
                >
                    <Cases name={name} />
                </g>
                <g
                    className={`absolute opacity-75 blur-0 duration-300 group-hover:blur-[4px] group-hover:brightness-150 group-hover:contrast-200 ${
                        invert && 'origin-center group-hover:blur-[0px]'
                    }`}
                    stroke="url(#svgDefsGradient)"
                >
                    <Cases name={name} />
                </g>
            </svg>
        </div>
    )
}

export default Icon
